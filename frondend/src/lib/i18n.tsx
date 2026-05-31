import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useServerFn } from "@tanstack/react-start";
import { useRouterState } from "@tanstack/react-router";
import { translateTexts } from "./translate.functions";

export type Lang = "EN" | "RU" | "GE";

interface Ctx {
  lang: Lang;
  setLang: (l: Lang) => void;
  isTranslating: boolean;
}

const LangContext = createContext<Ctx>({
  lang: "RU",
  setLang: () => {},
  isTranslating: false,
});

export const useLanguage = () => useContext(LangContext);

const STORAGE_KEY = "ap_lang";
const SKIP_TAGS = new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "INPUT",
  "SVG",
]);

const originals = new WeakMap<Text, string>();
// Tracks text nodes we just wrote, so the MutationObserver can ignore
// our own writes and only react to React reverting our translations.
const ourWrites = new WeakSet<Text>();

function shouldTranslate(text: string) {
  if (!/\S/.test(text)) return false;
  // skip strings without any letters (pure numbers, punctuation, currency)
  if (!/[A-Za-zА-Яа-яЁё\u10A0-\u10FF]/.test(text)) return false;
  return true;
}

function needsTranslationForTarget(text: string, target: Lang) {
  const hasLatin = /[A-Za-z]/.test(text);
  const hasCyrillic = /[А-Яа-яЁё]/.test(text);
  const hasGeorgian = /[\u10A0-\u10FF]/.test(text);
  if (target === "RU") return hasLatin || hasGeorgian;
  if (target === "EN") return hasCyrillic || hasGeorgian;
  return hasLatin || hasCyrillic;
}

function collectTextNodes(root: Node): Text[] {
  const nodes: Text[] = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n) {
      const parent = (n as Text).parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      const text = n.nodeValue ?? "";
      return shouldTranslate(text)
        ? NodeFilter.FILTER_ACCEPT
        : NodeFilter.FILTER_REJECT;
    },
  });
  let n: Node | null;
  while ((n = walker.nextNode())) nodes.push(n as Text);
  return nodes;
}

function getCache(lang: Lang): Record<string, string> {
  try {
    return JSON.parse(localStorage.getItem(`ap_t_${lang}`) ?? "{}");
  } catch {
    return {};
  }
}
function setCache(lang: Lang, cache: Record<string, string>) {
  try {
    localStorage.setItem(`ap_t_${lang}`, JSON.stringify(cache));
  } catch {
    /* ignore */
  }
}

function applyToNode(node: Text, orig: string, translated: string) {
  const lead = orig.match(/^\s*/)?.[0] ?? "";
  const trail = orig.match(/\s*$/)?.[0] ?? "";
  const next = lead + translated + trail;
  if (node.nodeValue !== next) {
    ourWrites.add(node);
    node.nodeValue = next;
  }
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("RU");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isTranslatingRef = useRef(false);
  const [isTranslating, setIsTranslating] = useState(false);
  const translate = useServerFn(translateTexts);
  const langRef = useRef<Lang>("RU");
  langRef.current = lang;
  const debounceRef = useRef<number | null>(null);
  const runningRef = useRef(false);
  const pendingRef = useRef(false);

  // Load persisted language
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "RU" || stored === "EN" || stored === "GE") setLangState(stored);
  }, []);

  // Reflect current language on <html lang> so CSS can target it (e.g. Georgian font).
  useEffect(() => {
    if (typeof document === "undefined") return;
    const map: Record<Lang, string> = { RU: "ru", EN: "en", GE: "ka" };
    document.documentElement.lang = map[lang];
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
    if (typeof window !== "undefined") {
      window.location.reload();
      return;
    }
    setLangState(l);
  }, []);

  const run = useCallback(async () => {
    if (runningRef.current) {
      pendingRef.current = true;
      return;
    }
    runningRef.current = true;
    try {
      const target = langRef.current;
      const nodes = collectTextNodes(document.body);

      const cache = getCache(target);
      const missing = new Set<string>();

      for (const node of nodes) {
        if (!originals.has(node)) originals.set(node, node.nodeValue ?? "");
        const orig = originals.get(node) ?? "";
        const key = orig.trim();
        if (!key) continue;
        if (!needsTranslationForTarget(key, target)) {
          applyToNode(node, orig, key);
          continue;
        }
        const cached = cache[key];
        if (cached) {
          applyToNode(node, orig, cached);
        } else {
          missing.add(key);
        }
      }

      if (missing.size > 0) {
        if (!isTranslatingRef.current) {
          isTranslatingRef.current = true;
          setIsTranslating(true);
        }
        const items = Array.from(missing);
        const CHUNK = 40;
        for (let i = 0; i < items.length; i += CHUNK) {
          const chunk = items.slice(i, i + CHUNK);
          try {
            const { translations } = await translate({
              data: { texts: chunk, target },
            });
            chunk.forEach((src, idx) => {
              const t = translations[idx];
              if (typeof t === "string" && t.length > 0) cache[src] = t;
            });
          } catch (e) {
            console.error("[i18n] translate batch failed", e);
          }
        }
        setCache(target, cache);

        // Re-apply now that cache is filled
        for (const node of nodes) {
          const orig = originals.get(node) ?? "";
          const key = orig.trim();
          const t = cache[key];
          if (t) applyToNode(node, orig, t);
        }
      }
    } finally {
      runningRef.current = false;
      if (isTranslatingRef.current) {
        isTranslatingRef.current = false;
        setIsTranslating(false);
      }
      if (pendingRef.current) {
        pendingRef.current = false;
        // Schedule another pass for late mutations
        schedule();
      }
    }
  }, [translate]);

  const schedule = useCallback(() => {
    if (typeof window === "undefined") return;
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      run();
    }, 250);
  }, [run]);

  // React to lang changes and DOM mutations
  useEffect(() => {
    if (typeof window === "undefined") return;
    // Default language is RU and the source content is already RU.
    // Skip the entire translation/observer pipeline to avoid scanning the
    // DOM on every mutation when no translation is actually needed.
    if (lang === "RU") return;
    schedule();
    // Watch structural changes (route swaps, lazy content) AND characterData
    // so we re-translate when React reconciliation reverts our text writes
    // (e.g. on parent re-renders). We tag our own writes via `ourWrites` so
    // they don't trigger an infinite loop.
    const obs = new MutationObserver((mutations) => {
      let relevant = false;
      for (const m of mutations) {
        if (m.type === "characterData") {
          const t = m.target as Text;
          if (ourWrites.has(t)) {
            ourWrites.delete(t);
            continue;
          }
          relevant = true;
        } else if (m.type === "childList") {
          relevant = true;
        }
      }
      if (relevant) schedule();
    });
    obs.observe(document.body, {
      childList: true,
      subtree: true,
      characterData: true,
    });
    return () => {
      obs.disconnect();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [lang, schedule, pathname]);

  return (
    <LangContext.Provider value={{ lang, setLang, isTranslating }}>
      {children}
    </LangContext.Provider>
  );
}
