import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { b as createRouter, g as useRouter, a as createRootRoute, c as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, d as useLocation, O as Outlet, L as Link, h as useRouterState } from "../_libs/tanstack__react-router.mjs";
import { E as notFound, y as isRedirect } from "../_libs/tanstack__router-core.mjs";
import { T as Toaster$1 } from "../_libs/sonner.mjs";
import { c as createServerFn, T as TSS_SERVER_FUNCTION, g as getServerFnById } from "./index.mjs";
import { z as zodValidator, f as fallback } from "../_libs/tanstack__zod-adapter.mjs";
import { C as CATALOG_IMAGE_FILES } from "./catalog-images.generated-g7c8bOKs.mjs";
import { b as ArrowUp, H as House, z as Store, T as Tent, v as ShoppingBag } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, n as numberType, e as enumType, a as arrayType } from "../_libs/zod.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function useServerFn(serverFn) {
  const router2 = useRouter();
  return reactExports.useCallback(async (...args) => {
    try {
      const res = await serverFn(...args);
      if (isRedirect(res)) throw res;
      return res;
    } catch (err) {
      if (isRedirect(err)) {
        err.options._fromLocation = router2.stores.location.get();
        return router2.navigate(router2.resolveRedirect(err).options);
      }
      throw err;
    }
  }, [router2, serverFn]);
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      duration: 5e3,
      closeButton: true,
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg group-[.toaster]:pr-10",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
          closeButton: "!left-auto !right-2 !top-1/2 !-translate-y-1/2 !translate-x-0 !bg-transparent !border-0 !text-foreground hover:!bg-muted"
        }
      },
      ...props
    }
  );
};
function ScrollToTop() {
  const [visible, setVisible] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      type: "button",
      onClick: scrollUp,
      "aria-label": "Scroll to top",
      className: `fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full bg-ember text-ember-foreground shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl ${visible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUp, { className: "h-5 w-5" })
    }
  );
}
const STORAGE_KEY$1 = "ap_cart_v2";
const LEGACY_COUNT = "ap_cart_count";
const LEGACY_ITEMS = "ap_cart_items";
const EVENT = "ap-cart-change";
function migrate() {
  if (typeof window === "undefined") return null;
  const old = window.localStorage.getItem(LEGACY_ITEMS);
  if (!old) return null;
  try {
    const arr = JSON.parse(old);
    if (!Array.isArray(arr)) return null;
    const lines = arr.filter((s) => typeof s === "string").map((s) => ({ slug: s, qty: 1 }));
    window.localStorage.removeItem(LEGACY_ITEMS);
    window.localStorage.removeItem(LEGACY_COUNT);
    window.localStorage.setItem(STORAGE_KEY$1, JSON.stringify(lines));
    return lines;
  } catch {
    return null;
  }
}
function readLines() {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY$1);
  if (!raw) {
    const migrated = migrate();
    return migrated ?? [];
  }
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr.filter((x) => x && typeof x.slug === "string").map((x) => ({
      slug: x.slug,
      qty: Math.max(1, Number(x.qty) || 1),
      title: typeof x.title === "string" ? x.title : void 0,
      image: typeof x.image === "string" ? x.image : null,
      price: typeof x.price === "number" ? x.price : void 0,
      kind: x.kind === "rental" || x.kind === "shop" ? x.kind : void 0,
      unit: x.unit === "/сутки" ? "/сутки" : x.unit === "" ? "" : void 0
    }));
  } catch {
    return [];
  }
}
function writeLines(lines) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY$1, JSON.stringify(lines));
  window.dispatchEvent(new Event(EVENT));
}
function addToCart(qty = 1, slug, meta) {
  if (!slug) return;
  const lines = readLines();
  const idx = lines.findIndex((l) => l.slug === slug);
  if (idx >= 0) lines[idx] = { ...lines[idx], ...meta, qty: lines[idx].qty + qty };
  else lines.push({ slug, qty, ...meta });
  writeLines(lines);
}
function setCartQty(slug, qty) {
  const lines = readLines();
  const idx = lines.findIndex((l) => l.slug === slug);
  if (idx < 0) return;
  if (qty <= 0) {
    writeLines(lines.filter((_, i) => i !== idx));
  } else {
    lines[idx] = { ...lines[idx], qty };
    writeLines(lines);
  }
}
function removeFromCart(slug) {
  writeLines(readLines().filter((l) => l.slug !== slug));
}
function subscribe(cb) {
  if (typeof window === "undefined") return () => {
  };
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}
let cachedLines = [];
let cachedKey = "__init__";
function getLinesSnapshot() {
  if (typeof window === "undefined") return cachedLines;
  const raw = window.localStorage.getItem(STORAGE_KEY$1) ?? "";
  if (raw !== cachedKey) {
    cachedKey = raw;
    cachedLines = readLines();
  }
  return cachedLines;
}
const emptyLines = [];
function useCartLines() {
  return reactExports.useSyncExternalStore(subscribe, getLinesSnapshot, () => emptyLines);
}
function useCartCount() {
  return reactExports.useSyncExternalStore(
    subscribe,
    () => getLinesSnapshot().reduce((s, l) => s + l.qty, 0),
    () => 0
  );
}
function useIsInCart(slug) {
  return reactExports.useSyncExternalStore(
    subscribe,
    () => slug ? getLinesSnapshot().some((l) => l.slug === slug) : false,
    () => false
  );
}
var createSsrRpc = (functionId) => {
  const url = "/_serverFn/" + functionId;
  const serverFnMeta = { id: functionId };
  const fn = async (...args) => {
    return (await getServerFnById(functionId))(...args);
  };
  return Object.assign(fn, {
    url,
    serverFnMeta,
    [TSS_SERVER_FUNCTION]: true
  });
};
const inputSchema = objectType({
  texts: arrayType(stringType().min(1).max(2e3)).min(1).max(80),
  target: enumType(["EN", "RU", "GE"])
});
const translateTexts = createServerFn({
  method: "POST"
}).inputValidator((d) => inputSchema.parse(d)).handler(createSsrRpc("0cb960d6346718d16b4d10f0b1bf2d013e6f3d2a266d4cf073e82291b5c65b38"));
const LangContext = reactExports.createContext({
  lang: "RU",
  setLang: () => {
  },
  isTranslating: false
});
const useLanguage = () => reactExports.useContext(LangContext);
const STORAGE_KEY = "ap_lang";
const SKIP_TAGS = /* @__PURE__ */ new Set([
  "SCRIPT",
  "STYLE",
  "NOSCRIPT",
  "CODE",
  "PRE",
  "TEXTAREA",
  "INPUT",
  "SVG"
]);
const originals = /* @__PURE__ */ new WeakMap();
const ourWrites = /* @__PURE__ */ new WeakSet();
function shouldTranslate(text) {
  if (!/\S/.test(text)) return false;
  if (!/[A-Za-zА-Яа-яЁё\u10A0-\u10FF]/.test(text)) return false;
  return true;
}
function needsTranslationForTarget(text, target) {
  const hasLatin = /[A-Za-z]/.test(text);
  const hasCyrillic = /[А-Яа-яЁё]/.test(text);
  const hasGeorgian = /[\u10A0-\u10FF]/.test(text);
  if (target === "RU") return hasLatin || hasGeorgian;
  if (target === "EN") return hasCyrillic || hasGeorgian;
  return hasLatin || hasCyrillic;
}
function collectTextNodes(root) {
  const nodes = [];
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(n2) {
      const parent = n2.parentElement;
      if (!parent) return NodeFilter.FILTER_REJECT;
      if (SKIP_TAGS.has(parent.tagName)) return NodeFilter.FILTER_REJECT;
      if (parent.closest("[data-no-translate]")) return NodeFilter.FILTER_REJECT;
      const text = n2.nodeValue ?? "";
      return shouldTranslate(text) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let n;
  while (n = walker.nextNode()) nodes.push(n);
  return nodes;
}
function getCache(lang) {
  try {
    return JSON.parse(localStorage.getItem(`ap_t_${lang}`) ?? "{}");
  } catch {
    return {};
  }
}
function setCache(lang, cache) {
  try {
    localStorage.setItem(`ap_t_${lang}`, JSON.stringify(cache));
  } catch {
  }
}
function applyToNode(node, orig, translated) {
  const lead = orig.match(/^\s*/)?.[0] ?? "";
  const trail2 = orig.match(/\s*$/)?.[0] ?? "";
  const next = lead + translated + trail2;
  if (node.nodeValue !== next) {
    ourWrites.add(node);
    node.nodeValue = next;
  }
}
function LanguageProvider({ children }) {
  const [lang, setLangState] = reactExports.useState("RU");
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isTranslatingRef = reactExports.useRef(false);
  const [isTranslating, setIsTranslating] = reactExports.useState(false);
  const translate = useServerFn(translateTexts);
  const langRef = reactExports.useRef("RU");
  langRef.current = lang;
  const debounceRef = reactExports.useRef(null);
  const runningRef = reactExports.useRef(false);
  const pendingRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "RU" || stored === "EN" || stored === "GE") setLangState(stored);
  }, []);
  reactExports.useEffect(() => {
    if (typeof document === "undefined") return;
    const map = { RU: "ru", EN: "en", GE: "ka" };
    document.documentElement.lang = map[lang];
  }, [lang]);
  const setLang = reactExports.useCallback((l) => {
    try {
      localStorage.setItem(STORAGE_KEY, l);
    } catch {
    }
    if (typeof window !== "undefined") {
      window.location.reload();
      return;
    }
    setLangState(l);
  }, []);
  const run = reactExports.useCallback(async () => {
    if (runningRef.current) {
      pendingRef.current = true;
      return;
    }
    runningRef.current = true;
    try {
      const target = langRef.current;
      const nodes = collectTextNodes(document.body);
      const cache = getCache(target);
      const missing = /* @__PURE__ */ new Set();
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
        const items2 = Array.from(missing);
        const CHUNK = 40;
        for (let i = 0; i < items2.length; i += CHUNK) {
          const chunk = items2.slice(i, i + CHUNK);
          try {
            const { translations } = await translate({
              data: { texts: chunk, target }
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
        schedule();
      }
    }
  }, [translate]);
  const schedule = reactExports.useCallback(() => {
    if (typeof window === "undefined") return;
    if (debounceRef.current) window.clearTimeout(debounceRef.current);
    debounceRef.current = window.setTimeout(() => {
      run();
    }, 250);
  }, [run]);
  reactExports.useEffect(() => {
    if (typeof window === "undefined") return;
    if (lang === "RU") return;
    schedule();
    const obs = new MutationObserver((mutations) => {
      let relevant = false;
      for (const m of mutations) {
        if (m.type === "characterData") {
          const t = m.target;
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
      characterData: true
    });
    return () => {
      obs.disconnect();
      if (debounceRef.current) window.clearTimeout(debounceRef.current);
    };
  }, [lang, schedule, pathname]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(LangContext.Provider, { value: { lang, setLang, isTranslating }, children });
}
const SITE_TEXT = {
  RU: {
    common: {
      addToCart: "Добавить в корзину",
      inCart: "В корзине",
      openCart: "Открыть корзину",
      outOfStock: "Нет в наличии",
      occupied: "Занято",
      perDay: "/сутки",
      perTraining: "за тренировку",
      item: "/шт.",
      addedToCart: (title) => `Добавлено в корзину: ${title}`
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle: "Как создать снаряжение, которое служит годами? Делать его с мыслью о горах. Премиальная экипировка для Кавказа.",
            cta: "Купить снаряжение"
          },
          {
            title: "Скалы\nКвариати",
            subtitle: "Тренировки на естественном рельефе с инструкторами Сашей и Егором. Снаряжение и страховка — на нас.",
            cta: "Записаться"
          },
          {
            title: "Кемпинг\nв горах",
            subtitle: "Палатки, спальники и горелки — всё для автономного выезда в Аджарские горы.",
            cta: "Арендовать снаряжение"
          },
          {
            title: "Прокат\nснаряжения",
            subtitle: "Палатки, лыжи, велосипеды и не только — берите снаряжение в аренду на день или на неделю.",
            cta: "Смотреть прокат"
          },
          {
            title: "Расписание\nпоходов",
            subtitle: "Маршруты по Кавказу с гидами Adjara Peak. Выберите дату и присоединяйтесь к группе.",
            cta: "Смотреть походы"
          }
        ],
        goToSlide: (n) => `Перейти к слайду ${n}`
      },
      featuredProducts: "Рекомендуемые товары",
      popularCategories: "Популярные категории",
      rentalEquipment: "Прокат снаряжения",
      newArrivals: "Новинки",
      climbingPromo: {
        title: "Скалолазание в Гонио-Квариати",
        subtitle: "Тренировки на естественном рельефе для новичков и опытных. Снаряжение, инструктаж и страховка — на нас. С вами работают Саша и Егор.",
        location: "Гонио-Квариати",
        schedule: "Сб–Вс · 10:00 / 15:00",
        priceNote: "за тренировку",
        book: "Записаться на тренировку",
        learnMore: "Узнать больше",
        imageAlt: "Скалолазание в Гонио-Квариати"
      },
      giftCard: {
        title: "Подарите\nприключение",
        lines: [
          "Идеальный подарок для каждого исследователя.",
          "Действует 6 месяцев с момента покупки.",
          "Можно использовать для снаряжения, одежды и проката.",
          "Доступна на любую сумму — выберите формат под путешествие."
        ],
        chooseAmount: "Выберите номинал",
        customAmount: "Своя сумма",
        enterAmount: "Введите сумму (₾)",
        amountPlaceholder: (min, max) => `от ${min} до ${max}`,
        addToCart: "В корзину",
        addToCartAmount: (amount) => `В корзину — ₾${amount}`,
        invalidAmount: (min, max) => `Введите сумму от ₾${min} до ₾${max}`,
        cartTitle: (amount) => `Подарочная карта на ₾${amount}`,
        added: (amount) => `Подарочная карта на ₾${amount} добавлена в корзину`,
        imageAlt: "Подарочная карта Adjara Peak"
      }
    },
    footer: {
      description: "Ваш outdoor-магазин в Аджарии, Грузия. Снаряжение, туры и прокат для горных приключений.",
      navigation: "Навигация",
      contacts: "Контакты",
      language: "Язык",
      rights: "© 2022-2026 Adjara Peak. Все права защищены.",
      address: "Батуми, ул. Генерала Аслана Абашидзе, 19",
      nav: {
        shop: "Магазин",
        rental: "Прокат",
        climbing: "Скалолазание",
        service: "Сервисный центр",
        contacts: "Контакты"
      }
    },
    contact: {
      title: "Контакты",
      addressTitle: "Наш адрес",
      address: "Батуми, ул. Генерала Аслана Абашидзе, 19",
      hoursTitle: "Время работы",
      hours: "Ежедневно с 11:00 до 20:00",
      phonesTitle: "Телефоны",
      reviewsTitle: "Отзывы",
      googleReview: "Оставь отзыв в Google",
      yandexReview: "Оставь отзыв в Яндекс",
      mapTitle: "Магазин Adjara Peak — Батуми, улица Генерала Аслана Абашидзе, 19",
      mapLang: "ru"
    },
    service: {
      heroTitle: "Готовим лыжи и сноуборды к лучшему сезону",
      heroText: "Заточка кантов, парафин, ремонт скользящей поверхности и установка креплений — в нашей мастерской в Батуми. Возвращаем доскам и лыжам заводское ощущение.",
      priceList: "Прайс-лист",
      book: "Записаться",
      sectionTitle: "Сервисное обслуживание",
      sectionText: "Цены актуальны для лыж и сноубордов. Нестандартные работы — по согласованию с мастером.",
      serviceColumn: "Услуга",
      priceColumn: "Цена",
      galleryTitle: "До и после в одном кадре",
      galleryAlt: (n) => `Сервис лыж и сноубордов ${n}`,
      ctaTitle: "Привезите снаряжение — заберёте как новое",
      ctaText: "Принимаем лыжи и сноуборды каждый день. Стандартная комплексная подготовка — за один рабочий день.",
      addressLabel: "Адрес",
      address: "Батуми, ул. Чавчавадзе 81",
      hoursLabel: "Часы работы",
      hours: "Пн–Сб 10:00 — 20:00 · Вс 11:00 — 18:00",
      phoneLabel: "Телефон",
      services: [
        {
          title: "Комплексное обслуживание",
          desc: "Заточка кантов, чистка скользящей поверхности, снятие старого парафина и нанесение нового (парафины от +3 до −20, шаг 6°).",
          price: "≈ 80 ₾",
          highlight: true
        },
        {
          title: "Заточка кантов",
          desc: "Восстановление угла кромки для уверенного контроля на льду и жёстком склоне.",
          price: "≈ 40 ₾"
        },
        {
          title: "Консервация",
          desc: "Подготовка снаряжения к межсезонному хранению: чистка, толстый слой защитного парафина.",
          price: "от 20 ₾"
        },
        {
          title: "Ремонт скользящей поверхности",
          desc: "Заливка царапин Ptex, выравнивание базы, восстановление структуры.",
          price: "от 20 ₾"
        },
        {
          title: "Нанесение температурного парафина",
          desc: "Подбор парафина под температуру и тип снега, горячая прокатка утюгом.",
          price: "40 ₾"
        },
        {
          title: "Установка и настройка креплений",
          desc: "Монтаж креплений, регулировка по росту, весу и уровню катания.",
          price: "от 30 ₾"
        }
      ],
      features: [
        {
          title: "Профессиональный станок",
          desc: "Точная геометрия кромки и ровная база после каждой прокатки."
        },
        {
          title: "Парафины под склон",
          desc: "Подбираем состав под температуру и снег от +3 до −20."
        },
        {
          title: "Ремонт Ptex",
          desc: "Заливаем царапины и сколы скользящей поверхности."
        },
        {
          title: "Гарантия на работы",
          desc: "Если что-то пойдёт не так — переделаем без вопросов."
        }
      ]
    },
    climbing: {
      heroTitle: "Скалолазание в Гонио-Квариати",
      heroText: "Тренировки на естественном рельефе для новичков и опытных. Полный комплект снаряжения, верхняя страховка и опытные инструкторы — Саша и Егор.",
      book: "Записаться",
      directions: "Как добраться",
      locationTitle: "Локация: район Гонио-Квариати",
      locationText: "Добраться можно на своём авто, такси, маршрутном такси или 16 автобусе.",
      reviewLink: "Оставить отзыв о тренировке",
      safetyTitle: "Снаряжение и безопасность",
      gearPoint: "Пункт 1 · Снаряжение",
      gearIntro: "Мы используем только качественное снаряжение от всемирно известных и надёжных брендов, регулярно проверяем и обновляем его, и полностью обеспечиваем им каждого участника.",
      accessibilityPoint: "Пункт 2 · Доступность",
      accessibilityText: "Перед каждой тренировкой проводим инструктаж — для новичков подробно объясняем, чего делать не стоит. Лазаем с верхней страховкой: где не хватает навыков, инструктор поможет подтянуть на сложном участке. На рельефе Гонио-Квариати трассы 5 и 6 категории — доступны многим начинающим, особенно тем, кто уже бывал на скалодроме.",
      experiencePoint: "Пункт 3 · Опыт",
      experienceText: "Наша команда — Саша и Егор — имеет большой опыт работы на этом рельефе и заботится о вас на протяжении всей тренировки.",
      scheduleTitle: "График и расписание",
      trainingPrice: "Стоимость тренировки:",
      back: "Назад",
      forward: "Вперёд",
      photoAlt: (n) => `Скалолазание ${n}`,
      gear: [
        { title: "Верёвка динамическая", desc: "Удержание на разрыв 22 кН (2200 кг)." },
        { title: "Каска", desc: "Выдерживает прямой вертикальный удар силой 50 Дж." },
        { title: "Страховочная система", desc: "Фиксируется на человеке сразу в трёх местах, до 150 кг." },
        { title: "Страховочная станция", desc: "2 точки фиксации, усилена двумя разнонаправленными карабинами." },
        { title: "Магнезия", desc: "Поглощает влагу и усиливает сцепление со скалой." },
        { title: "Скальные туфли", desc: "Для лучшего удержания на скале." }
      ],
      team: [
        { name: "Саша", role: "Инструктор" },
        { name: "Егор", role: "Инструктор" }
      ],
      schedule: [
        { day: "Воскресенье", price: "49 ₾", slots: ["1 группа — 10:00 / 13:00", "2 группа — 15:00 / 18:00"] }
      ]
    },
    mobileNav: {
      aria: "Нижняя навигация",
      home: "Главная",
      shop: "Магазин",
      rental: "Прокат",
      cart: "Корзина"
    }
  },
  EN: {
    common: {
      addToCart: "Add to cart",
      inCart: "In cart",
      openCart: "Open cart",
      outOfStock: "Out of stock",
      occupied: "Booked",
      perDay: "/day",
      perTraining: "per session",
      item: "/item",
      addedToCart: (title) => `Added to cart: ${title}`
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle: "How do you make gear that lasts for years? Build it with the mountains in mind. Premium equipment for the Caucasus.",
            cta: "Shop gear"
          },
          {
            title: "Kvariati\nRocks",
            subtitle: "Outdoor climbing sessions with instructors Sasha and Egor. Gear and belay are on us.",
            cta: "Book a session"
          },
          {
            title: "Mountain\nCamping",
            subtitle: "Tents, sleeping bags and stoves — everything for a self-supported trip into the Adjara mountains.",
            cta: "Rent gear"
          },
          {
            title: "Gear\nRental",
            subtitle: "Tents, skis, bicycles and more — rent equipment for a day or for a week.",
            cta: "View rental"
          },
          {
            title: "Hiking\nSchedule",
            subtitle: "Guided Caucasus routes by Adjara Peak. Pick a date and join the group.",
            cta: "View trips"
          }
        ],
        goToSlide: (n) => `Go to slide ${n}`
      },
      featuredProducts: "Recommended Products",
      popularCategories: "Popular Categories",
      rentalEquipment: "Gear Rental",
      newArrivals: "New Arrivals",
      climbingPromo: {
        title: "Climbing in Gonio-Kvariati",
        subtitle: "Outdoor climbing sessions for beginners and experienced climbers. Gear, briefing and belay are on us. Sasha and Egor guide the session.",
        location: "Gonio-Kvariati",
        schedule: "Sat-Sun · 10:00 / 15:00",
        priceNote: "per session",
        book: "Book a climbing session",
        learnMore: "Learn more",
        imageAlt: "Climbing in Gonio-Kvariati"
      },
      giftCard: {
        title: "Give an\nadventure",
        lines: [
          "A perfect gift for every explorer.",
          "Valid for 6 months from purchase.",
          "Can be used for gear, clothing and rental.",
          "Available for any amount — choose the format for the trip."
        ],
        chooseAmount: "Choose amount",
        customAmount: "Custom amount",
        enterAmount: "Enter amount (₾)",
        amountPlaceholder: (min, max) => `${min} to ${max}`,
        addToCart: "Add to cart",
        addToCartAmount: (amount) => `Add to cart — ₾${amount}`,
        invalidAmount: (min, max) => `Enter an amount from ₾${min} to ₾${max}`,
        cartTitle: (amount) => `Gift card for ₾${amount}`,
        added: (amount) => `Gift card for ₾${amount} added to cart`,
        imageAlt: "Adjara Peak gift card"
      }
    },
    footer: {
      description: "Your outdoor store in Adjara, Georgia. Gear, tours and rentals for mountain adventures.",
      navigation: "Navigation",
      contacts: "Contacts",
      language: "Language",
      rights: "© 2022-2026 Adjara Peak. All rights reserved.",
      address: "19 General Aslan Abashidze St, Batumi",
      nav: {
        shop: "Shop",
        rental: "Rental",
        climbing: "Rock Climbing",
        service: "Service Center",
        contacts: "Contacts"
      }
    },
    contact: {
      title: "Contacts",
      addressTitle: "Our address",
      address: "19 General Aslan Abashidze St, Batumi",
      hoursTitle: "Opening hours",
      hours: "Daily from 11:00 to 20:00",
      phonesTitle: "Phones",
      reviewsTitle: "Reviews",
      googleReview: "Leave a Google review",
      yandexReview: "Leave a Yandex review",
      mapTitle: "Adjara Peak store — 19 General Aslan Abashidze St, Batumi",
      mapLang: "en"
    },
    service: {
      heroTitle: "We tune skis and snowboards for your best season",
      heroText: "Edge sharpening, waxing, base repair and binding setup in our Batumi workshop. We bring boards and skis back to a factory-fresh feel.",
      priceList: "Price list",
      book: "Book service",
      sectionTitle: "Service Center",
      sectionText: "Prices apply to skis and snowboards. Custom jobs are agreed with the technician.",
      serviceColumn: "Service",
      priceColumn: "Price",
      galleryTitle: "Before and after in one frame",
      galleryAlt: (n) => `Ski and snowboard service ${n}`,
      ctaTitle: "Bring your gear in — pick it up like new",
      ctaText: "We accept skis and snowboards every day. Standard full preparation takes one business day.",
      addressLabel: "Address",
      address: "81 Chavchavadze St, Batumi",
      hoursLabel: "Opening hours",
      hours: "Mon-Sat 10:00 — 20:00 · Sun 11:00 — 18:00",
      phoneLabel: "Phone",
      services: [
        {
          title: "Full service",
          desc: "Edge sharpening, base cleaning, old wax removal and fresh wax application (waxes from +3 to −20, 6° steps).",
          price: "≈ 80 ₾",
          highlight: true
        },
        {
          title: "Edge sharpening",
          desc: "Restores edge angle for confident control on ice and hardpack.",
          price: "≈ 40 ₾"
        },
        {
          title: "Storage wax",
          desc: "Off-season preparation: cleaning and a thick protective wax layer.",
          price: "from 20 ₾"
        },
        {
          title: "Base repair",
          desc: "Ptex scratch filling, base leveling and structure restoration.",
          price: "from 20 ₾"
        },
        {
          title: "Temperature wax",
          desc: "Wax selected for snow and temperature, hot-applied with an iron.",
          price: "40 ₾"
        },
        {
          title: "Binding setup",
          desc: "Binding installation and adjustment for height, weight and riding level.",
          price: "from 30 ₾"
        }
      ],
      features: [
        {
          title: "Professional machine",
          desc: "Precise edge geometry and an even base after every pass."
        },
        {
          title: "Slope-specific waxes",
          desc: "We choose wax for temperature and snow from +3 to −20."
        },
        {
          title: "Ptex repair",
          desc: "We fill scratches and chips in the sliding surface."
        },
        {
          title: "Work guarantee",
          desc: "If something is not right, we redo it without questions."
        }
      ]
    },
    climbing: {
      heroTitle: "Rock Climbing in Gonio-Kvariati",
      heroText: "Outdoor climbing sessions for beginners and experienced climbers. Full gear, top-rope belay and experienced instructors — Sasha and Egor.",
      book: "Book a session",
      directions: "How to get there",
      locationTitle: "Location: Gonio-Kvariati area",
      locationText: "You can get there by car, taxi, minibus or bus 16.",
      reviewLink: "Leave a training review",
      safetyTitle: "Gear and Safety",
      gearPoint: "Point 1 · Gear",
      gearIntro: "We use quality equipment from reliable world-known brands, check and refresh it regularly, and fully equip every participant.",
      accessibilityPoint: "Point 2 · Accessibility",
      accessibilityText: "Before each session we run a briefing and explain what beginners should avoid. We climb with top-rope belay: when skills are not enough, the instructor can help you through the hard section. Gonio-Kvariati routes of grades 5 and 6 are accessible to many beginners, especially those who have already tried a climbing gym.",
      experiencePoint: "Point 3 · Experience",
      experienceText: "Our team — Sasha and Egor — has extensive experience on this rock and takes care of you throughout the session.",
      scheduleTitle: "Schedule",
      trainingPrice: "Session price:",
      back: "Back",
      forward: "Forward",
      photoAlt: (n) => `Rock climbing ${n}`,
      gear: [
        { title: "Dynamic rope", desc: "Breaking strength 22 kN (2200 kg)." },
        { title: "Helmet", desc: "Withstands a direct vertical impact of 50 J." },
        { title: "Harness", desc: "Secures the climber at three points, up to 150 kg." },
        { title: "Belay station", desc: "2 anchor points, reinforced with two opposed carabiners." },
        { title: "Chalk", desc: "Absorbs moisture and improves grip on the rock." },
        { title: "Climbing shoes", desc: "For better foothold on the rock." }
      ],
      team: [
        { name: "Sasha", role: "Instructor" },
        { name: "Egor", role: "Instructor" }
      ],
      schedule: [
        { day: "Sunday", price: "49 ₾", slots: ["Group 1 — 10:00 / 13:00", "Group 2 — 15:00 / 18:00"] }
      ]
    },
    mobileNav: {
      aria: "Bottom navigation",
      home: "Home",
      shop: "Shop",
      rental: "Rental",
      cart: "Cart"
    }
  },
  GE: {
    common: {
      addToCart: "კალათაში დამატება",
      inCart: "კალათაშია",
      openCart: "კალათის გახსნა",
      outOfStock: "არ არის მარაგში",
      occupied: "დაკავებულია",
      perDay: "/დღე",
      perTraining: "ვარჯიშზე",
      item: "/ცალი",
      addedToCart: (title) => `კალათაში დაემატა: ${title}`
    },
    home: {
      hero: {
        slides: [
          {
            title: "Adjara\nPeak",
            subtitle: "როგორ იქმნება აღჭურვილობა, რომელიც წლები გემსახურება? მთებზე ფიქრით. პრემიუმ ეკიპირება კავკასიისთვის.",
            cta: "აღჭურვილობის ყიდვა"
          },
          {
            title: "კვარიათის\nკლდეები",
            subtitle: "ვარჯიშები ბუნებრივ რელიეფზე ინსტრუქტორებთან, საშასთან და ეგორთან. აღჭურვილობა და დაზღვევა ჩვენზეა.",
            cta: "ჩაწერა"
          },
          {
            title: "კემპინგი\nმთებში",
            subtitle: "კარვები, საძილე ტომრები და გაზქურები — ყველაფერი აჭარის მთებში დამოუკიდებელი გასვლისთვის.",
            cta: "აღჭურვილობის ქირაობა"
          },
          {
            title: "აღჭურვილობის\nქირაობა",
            subtitle: "კარვები, თხილამურები, ველოსიპედები და სხვა — იქირავეთ აღჭურვილობა დღით ან კვირით.",
            cta: "ქირაობის ნახვა"
          },
          {
            title: "ლაშქრობების\nგანრიგი",
            subtitle: "Adjara Peak-ის გიდებთან კავკასიის მარშრუტები. აირჩიეთ თარიღი და შეუერთდით ჯგუფს.",
            cta: "ლაშქრობების ნახვა"
          }
        ],
        goToSlide: (n) => `${n} სლაიდზე გადასვლა`
      },
      featuredProducts: "რეკომენდებული პროდუქტები",
      popularCategories: "პოპულარული კატეგორიები",
      rentalEquipment: "აღჭურვილობის ქირაობა",
      newArrivals: "სიახლეები",
      climbingPromo: {
        title: "კლდეზე ცოცვა გონიო-კვარიათში",
        subtitle: "ვარჯიშები ბუნებრივ რელიეფზე დამწყებებისთვის და გამოცდილებისთვის. აღჭურვილობა, ინსტრუქტაჟი და დაზღვევა ჩვენზეა. თქვენთან მუშაობენ საშა და ეგორი.",
        location: "გონიო-კვარიათი",
        schedule: "შაბ-კვ · 10:00 / 15:00",
        priceNote: "ვარჯიშზე",
        book: "ვარჯიშზე ჩაწერა",
        learnMore: "მეტის გაგება",
        imageAlt: "კლდეზე ცოცვა გონიო-კვარიათში"
      },
      giftCard: {
        title: "აჩუქეთ\nთავგადასავალი",
        lines: [
          "იდეალური საჩუქარი ყველა მკვლევრისთვის.",
          "მოქმედებს შეძენიდან 6 თვის განმავლობაში.",
          "შეიძლება გამოყენება აღჭურვილობაზე, ტანსაცმელსა და ქირაობაზე.",
          "ხელმისაწვდომია ნებისმიერი თანხით — აირჩიეთ ფორმატი მოგზაურობისთვის."
        ],
        chooseAmount: "აირჩიეთ ნომინალი",
        customAmount: "სხვა თანხა",
        enterAmount: "შეიყვანეთ თანხა (₾)",
        amountPlaceholder: (min, max) => `${min}-დან ${max}-მდე`,
        addToCart: "კალათაში",
        addToCartAmount: (amount) => `კალათაში — ₾${amount}`,
        invalidAmount: (min, max) => `შეიყვანეთ თანხა ₾${min}-დან ₾${max}-მდე`,
        cartTitle: (amount) => `სასაჩუქრე ბარათი ₾${amount}`,
        added: (amount) => `სასაჩუქრე ბარათი ₾${amount} დაემატა კალათაში`,
        imageAlt: "Adjara Peak-ის სასაჩუქრე ბარათი"
      }
    },
    footer: {
      description: "თქვენი outdoor მაღაზია აჭარაში, საქართველოში. აღჭურვილობა, ტურები და ქირაობა მთის თავგადასავლებისთვის.",
      navigation: "ნავიგაცია",
      contacts: "კონტაქტები",
      language: "ენა",
      rights: "© 2022-2026 Adjara Peak. ყველა უფლება დაცულია.",
      address: "ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      nav: {
        shop: "მაღაზია",
        rental: "ქირაობა",
        climbing: "კლდეზე ცოცვა",
        service: "სერვის-ცენტრი",
        contacts: "კონტაქტები"
      }
    },
    contact: {
      title: "კონტაქტები",
      addressTitle: "ჩვენი მისამართი",
      address: "ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      hoursTitle: "სამუშაო საათები",
      hours: "ყოველდღე 11:00-დან 20:00-მდე",
      phonesTitle: "ტელეფონები",
      reviewsTitle: "შეფასებები",
      googleReview: "დატოვეთ შეფასება Google-ში",
      yandexReview: "დატოვეთ შეფასება Yandex-ში",
      mapTitle: "Adjara Peak-ის მაღაზია — ბათუმი, გენერალ ასლან აბაშიძის ქ. 19",
      mapLang: "ka"
    },
    service: {
      heroTitle: "ვამზადებთ თხილამურებსა და სნოუბორდებს საუკეთესო სეზონისთვის",
      heroText: "კანტების ალესვა, პარაფინი, სასრიალო ზედაპირის შეკეთება და სამაგრების დაყენება ჩვენს სახელოსნოში ბათუმში. დაფებსა და თხილამურებს ქარხნულ შეგრძნებას ვუბრუნებთ.",
      priceList: "ფასები",
      book: "ჩაწერა",
      sectionTitle: "სერვისული მომსახურება",
      sectionText: "ფასები მოქმედებს თხილამურებისა და სნოუბორდებისთვის. არასტანდარტული სამუშაოები შეთანხმებით.",
      serviceColumn: "სერვისი",
      priceColumn: "ფასი",
      galleryTitle: "მანამდე და შემდეგ ერთ კადრში",
      galleryAlt: (n) => `თხილამურებისა და სნოუბორდების სერვისი ${n}`,
      ctaTitle: "მოიტანეთ აღჭურვილობა — წაიღებთ როგორც ახალს",
      ctaText: "თხილამურებსა და სნოუბორდებს ყოველდღე ვიღებთ. სტანდარტული სრული მომზადება ერთ სამუშაო დღეში სრულდება.",
      addressLabel: "მისამართი",
      address: "ბათუმი, ჭავჭავაძის ქ. 81",
      hoursLabel: "სამუშაო საათები",
      hours: "ორშ-შაბ 10:00 — 20:00 · კვ 11:00 — 18:00",
      phoneLabel: "ტელეფონი",
      services: [
        {
          title: "სრული მომსახურება",
          desc: "კანტების ალესვა, სასრიალო ზედაპირის წმენდა, ძველი პარაფინის მოხსნა და ახლის დატანა (პარაფინები +3-დან −20-მდე, 6° ნაბიჯით).",
          price: "დაახლ. 80 ₾",
          highlight: true
        },
        {
          title: "კანტების ალესვა",
          desc: "კანტის კუთხის აღდგენა ყინულსა და მყარ ფერდობზე თავდაჯერებული კონტროლისთვის.",
          price: "დაახლ. 40 ₾"
        },
        {
          title: "კონსერვაცია",
          desc: "აღჭურვილობის მომზადება სეზონებს შორის შესანახად: წმენდა და დამცავი პარაფინის სქელი ფენა.",
          price: "20 ₾-დან"
        },
        {
          title: "სასრიალო ზედაპირის შეკეთება",
          desc: "ნაკაწრების Ptex-ით შევსება, ბაზის გასწორება და სტრუქტურის აღდგენა.",
          price: "20 ₾-დან"
        },
        {
          title: "ტემპერატურული პარაფინი",
          desc: "პარაფინის შერჩევა ტემპერატურისა და თოვლის მიხედვით, ცხლად დატანა უთოთი.",
          price: "40 ₾"
        },
        {
          title: "სამაგრების დაყენება და რეგულირება",
          desc: "სამაგრების მონტაჟი და მორგება სიმაღლის, წონისა და დონის მიხედვით.",
          price: "30 ₾-დან"
        }
      ],
      features: [
        {
          title: "პროფესიონალური დანადგარი",
          desc: "კანტის ზუსტი გეომეტრია და თანაბარი ბაზა ყოველი გატარების შემდეგ."
        },
        {
          title: "პარაფინები ფერდობისთვის",
          desc: "შემადგენლობას ვარჩევთ ტემპერატურისა და თოვლის მიხედვით +3-დან −20-მდე."
        },
        {
          title: "Ptex შეკეთება",
          desc: "ვავსებთ სასრიალო ზედაპირის ნაკაწრებსა და დაზიანებებს."
        },
        {
          title: "გარანტია სამუშაოზე",
          desc: "თუ რამე ისე არ გამოვა — კითხვების გარეშე გადავაკეთებთ."
        }
      ]
    },
    climbing: {
      heroTitle: "კლდეზე ცოცვა გონიო-კვარიათში",
      heroText: "ვარჯიშები ბუნებრივ რელიეფზე დამწყებებისთვის და გამოცდილებისთვის. სრული აღჭურვილობა, ზედა დაზღვევა და გამოცდილი ინსტრუქტორები — საშა და ეგორი.",
      book: "ჩაწერა",
      directions: "როგორ მივიდეთ",
      locationTitle: "ლოკაცია: გონიო-კვარიათის რაიონი",
      locationText: "მოსვლა შესაძლებელია საკუთარი მანქანით, ტაქსით, სამარშრუტო ტაქსით ან 16 ავტობუსით.",
      reviewLink: "ვარჯიშის შეფასების დატოვება",
      safetyTitle: "აღჭურვილობა და უსაფრთხოება",
      gearPoint: "პუნქტი 1 · აღჭურვილობა",
      gearIntro: "ვიყენებთ მხოლოდ ხარისხიან აღჭურვილობას სანდო საერთაშორისო ბრენდებისგან, რეგულარულად ვამოწმებთ და ვაახლებთ მას, და ყველა მონაწილეს სრულად ვამარაგებთ.",
      accessibilityPoint: "პუნქტი 2 · ხელმისაწვდომობა",
      accessibilityText: "ყოველი ვარჯიშის წინ ინსტრუქტაჟს ვატარებთ — დამწყებებს დეტალურად ვუხსნით, რას უნდა მოერიდონ. ვცოცავთ ზედა დაზღვევით: რთულ მონაკვეთზე ინსტრუქტორი დაგეხმარებათ. გონიო-კვარიათის რელიეფზე 5 და 6 კატეგორიის მარშრუტები ბევრ დამწყებსაც შეუძლია, განსაკუთრებით მათ, ვინც უკვე ყოფილა სკალადრომზე.",
      experiencePoint: "პუნქტი 3 · გამოცდილება",
      experienceText: "ჩვენი გუნდი — საშა და ეგორი — ამ რელიეფზე დიდი გამოცდილებით მუშაობს და მთელი ვარჯიშის განმავლობაში ზრუნავს თქვენზე.",
      scheduleTitle: "გრაფიკი და განრიგი",
      trainingPrice: "ვარჯიშის ფასი:",
      back: "უკან",
      forward: "წინ",
      photoAlt: (n) => `კლდეზე ცოცვა ${n}`,
      gear: [
        { title: "დინამიკური თოკი", desc: "გაწყვეტის გამძლეობა 22 კნ (2200 კგ)." },
        { title: "ჩაფხუტი", desc: "უძლებს 50 ჯ ძალის პირდაპირ ვერტიკალურ დარტყმას." },
        { title: "დაზღვევის სისტემა", desc: "ფიქსირდება სამ წერტილში, 150 კგ-მდე." },
        { title: "დაზღვევის სადგური", desc: "2 ფიქსაციის წერტილი, გამაგრებულია ორი საწინააღმდეგო მიმართულების კარაბინით." },
        { title: "მაგნეზია", desc: "შთანთქავს ტენს და აუმჯობესებს კლდეზე მოჭიდებას." },
        { title: "სკალური ფეხსაცმელი", desc: "კლდეზე უკეთესი დაჭერისთვის." }
      ],
      team: [
        { name: "საშა", role: "ინსტრუქტორი" },
        { name: "ეგორი", role: "ინსტრუქტორი" }
      ],
      schedule: [
        { day: "კვირა", price: "49 ₾", slots: ["1 ჯგუფი — 10:00 / 13:00", "2 ჯგუფი — 15:00 / 18:00"] }
      ]
    },
    mobileNav: {
      aria: "ქვედა ნავიგაცია",
      home: "მთავარი",
      shop: "მაღაზია",
      rental: "ქირაობა",
      cart: "კალათა"
    }
  }
};
function getSiteText(lang) {
  return SITE_TEXT[lang] ?? SITE_TEXT.RU;
}
const items = [
  { to: "/", key: "home", icon: House, exact: true },
  { to: "/sale", key: "shop", icon: Store },
  { to: "/rent", key: "rental", icon: Tent }
];
function MobileBottomNav() {
  const { pathname } = useLocation();
  const cartCount = useCartCount();
  const { lang } = useLanguage();
  const text = getSiteText(lang).mobileNav;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "nav",
    {
      "aria-label": text.aria,
      className: "lg:hidden fixed bottom-0 inset-x-0 z-40 bg-background border-t border-border pb-[env(safe-area-inset-bottom)]",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "grid grid-cols-4", children: [
        items.map(({ to, key, icon: Icon, exact }) => {
          const active = exact ? pathname === to : pathname === to || pathname.startsWith(`${to}/`);
          return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to,
              className: `flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body transition-colors ${active ? "text-ember" : "text-muted-foreground hover:text-foreground"}`,
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text[key] })
              ]
            }
          ) }, to);
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/checkout",
            className: "w-full flex flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-body text-muted-foreground hover:text-foreground transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, { className: "h-5 w-5" }),
                cartCount > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-1.5 -right-2 min-w-[16px] h-[16px] px-1 rounded-full bg-ember text-ember-foreground text-[10px] font-display flex items-center justify-center", children: cartCount })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text.cart })
            ]
          }
        ) })
      ] })
    }
  );
}
const appCss = "/assets/styles-DHDFy-br.css";
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Страница не найдена" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Страница, которую вы ищете, не существует или была перемещена." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "На главную"
      }
    ) })
  ] }) });
}
const Route$l = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adjara Peak — снаряжение и туры в Аджарии" },
      { name: "description", content: "Снаряжение, прокат и горные туры в Батуми и Аджарии." },
      { name: "author", content: "Adjara Peak" },
      { property: "og:title", content: "Adjara Peak" },
      { property: "og:description", content: "Снаряжение, прокат и горные туры в Аджарии." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@AdjaraPeak" },
      { name: "twitter:title", content: "Adjara Peak" },
      { name: "twitter:description", content: "Снаряжение, прокат и горные туры в Аджарии." }
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss
      }
    ],
    scripts: [
      {
        children: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M6PTBQG6');"
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "ru", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("noscript", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "iframe",
        {
          src: "https://www.googletagmanager.com/ns.html?id=GTM-M6PTBQG6",
          height: "0",
          width: "0",
          style: { display: "none", visibility: "hidden" }
        }
      ) }),
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(LanguageProvider, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollToTop, {}),
    !isAdmin && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(MobileBottomNav, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "lg:hidden h-16" })
    ] })
  ] });
}
const bannerSki = "/assets/banner-ski-CTYX2LTH.jpg";
const $$splitComponentImporter$k = () => import("./service-C2n__h7w.mjs");
const Route$k = createFileRoute("/service")({
  head: () => ({
    meta: [{
      title: "Сервисный центр — Adjara Peak"
    }, {
      name: "description",
      content: "Заточка кантов, парафин, ремонт скользящей поверхности лыж и сноубордов в Батуми. Профессиональный сервис Adjara Peak."
    }, {
      property: "og:title",
      content: "Сервисный центр — Adjara Peak"
    }, {
      property: "og:description",
      content: "Профессиональный сервис лыж и сноубордов в Батуми: заточка кантов, парафин, ремонт."
    }, {
      property: "og:image",
      content: bannerSki
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$k, "component")
});
const listShopGroups = createServerFn({
  method: "GET"
}).handler(createSsrRpc("1f1965490baf0720c23fa259555c4316b901461f0e86210badc140904b46816c"));
createServerFn({
  method: "GET"
}).handler(createSsrRpc("09557be2876269fcfcae243def27d89ac515f3f458d307f436550d081ee75514"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(createSsrRpc("b7db1b2098419cb7dbcc797222afcc16999a3013de0b96d8b2bfe94f7f2c1c53"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(createSsrRpc("890babc5afd5ebea25aad54ab275cde853ce1d6b359e7b51386cbc96e9224640"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("32c11ab75568a96effb27374cba2290d897b7d8d9d57e1fd431ce70bc724dbdd"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(createSsrRpc("219cf6453070a4612f6bd3bb65f56d0e431e02449a65874bc12e6075babda955"));
const getShopProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("bf3b3228beaf0b5fc017ad1357cdc9a2bf90689b0609e6f851ec8e13ed6e58a4"));
const listLatestProducts = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  limit: numberType().min(1).max(50).optional()
}).parse(input ?? {})).handler(createSsrRpc("6cabca30f37e344192c80bd77f7a568b090d19069ff21d136d8322e66fa0a509"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slugs: arrayType(stringType().min(1)).min(1).max(20)
}).parse(input)).handler(createSsrRpc("179f7261fd5d340576725bf7fc600d8d9cd7172237163fb37319256e13a185ba"));
const searchShopProducts = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  q: stringType().min(1).max(100),
  limit: numberType().min(1).max(100).optional()
}).parse(input)).handler(createSsrRpc("c80f203faa6984a0990a2f5e32e49bfc5eba9cbd097a69a103920a1bfb20ef9c"));
const searchRentalItems = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  q: stringType().min(1).max(100),
  limit: numberType().min(1).max(100).optional()
}).parse(input)).handler(createSsrRpc("cabc48c43ec23a0866d3aebf4246b636d0e91c2331d1eda11be683e6c8b36e13"));
const listOneProductPerCategorySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlugs: arrayType(stringType().min(1)).min(1).max(20)
}).parse(input)).handler(createSsrRpc("de45ef92726d4f286cdc6352c62af7c5bb7a66adce4de7a43cb7de9e3be782fc"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categoryId: stringType().min(1),
  excludeId: stringType().min(1),
  limit: numberType().min(1).max(20).optional()
}).parse(input)).handler(createSsrRpc("480fc608907a994787a62a090c70785f42aef9c60ba8fddf663564157772da47"));
const listRentalGroups = createServerFn({
  method: "GET"
}).handler(createSsrRpc("e75a6741ef669d4164790034db785d5e32a41ffe6499fbea92817801f26e3478"));
createServerFn({
  method: "GET"
}).handler(createSsrRpc("b519af0bd4afa00bcc3dbd753733a69d4be4e44408e0b0ae1e152b191ba5ab9b"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("ab5b27bf6456cfc4c5ae49321245220e31b8167fa1a430c94adf2b366a0b7492"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("dea915146ace9a9e89cf3aba49cbd112884b87224a21da7dcf875880edbc4e2f"));
createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("a4ae9132d3043d5d8e5d3f607bf4736bfc6b1e629ea5e242a9e1d7ecb6d0897f"));
const getRentalItemBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1)
}).parse(input)).handler(createSsrRpc("a4d97f94c786fd86b1040b7178566cd6aaf3e3eb204424db1134f1e11b9aab22"));
const getCartLineItems = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slugs: arrayType(stringType().min(1)).min(1).max(50)
}).parse(input)).handler(createSsrRpc("efc1fdde15af8371f49afe188e2d1b4cae89674c9a74cbe8bb558c51b5ed7efa"));
createServerFn({
  method: "GET"
}).handler(createSsrRpc("e4fc291f55a2c79d5aa2ddc2dd57c60c190aeac198f8f662aaa5d2dfdc143b2b"));
const getShopGroupView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().optional(),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(createSsrRpc("c918c9ea880298972393527d1055e7baff8da0aea170e6442d014f79a41c4611"));
const getRentalGroupView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().optional(),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(createSsrRpc("b73861788fbe3e2d6a9adc3a091c35b347c3bc6229ce38672c13b77c82ca54e0"));
const getSaleProducts = createServerFn({
  method: "GET"
}).handler(createSsrRpc("ad0767bd552d4402da48051fa3f60c7d1a6970f734dc19e69f4a597cae791021"));
const getSaleRentals = createServerFn({
  method: "GET"
}).handler(createSsrRpc("8b6a42ddf76d53c4d934b3066fdadf1bb2ff7b3704698e8c8a48a1c6fc1229a5"));
const $$splitComponentImporter$j = () => import("./sale-DJST43ge.mjs");
const Route$j = createFileRoute("/sale")({
  staleTime: 5 * 60 * 1e3,
  loader: async () => await listShopGroups(),
  head: () => ({
    meta: [{
      title: "Магазин — Adjara Peak"
    }, {
      name: "description",
      content: "Снаряжение, одежда и экипировка для приключений."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$j, "component")
});
const climbingHero = "/assets/cl-0-Bvnsr9Ds.avif";
const $$splitComponentImporter$i = () => import("./rockClimbing-DCGGzd39.mjs");
const Route$i = createFileRoute("/rockClimbing")({
  head: () => ({
    meta: [{
      title: "Скалолазание — Adjara Peak"
    }, {
      name: "description",
      content: "Тренировки по скалолазанию в Гонио-Квариати: снаряжение, инструкторы, расписание и запись."
    }, {
      property: "og:title",
      content: "Скалолазание — Adjara Peak"
    }, {
      property: "og:description",
      content: "Скалолазание с инструкторами Adjara Peak в районе Гонио-Квариати."
    }, {
      property: "og:image",
      content: climbingHero
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./rent-FZ2sGbEL.mjs");
const Route$h = createFileRoute("/rent")({
  staleTime: 5 * 60 * 1e3,
  loader: async () => await listRentalGroups(),
  head: () => ({
    meta: [{
      title: "Прокат снаряжения — Adjara Peak"
    }, {
      name: "description",
      content: "Арендуйте премиальное outdoor-снаряжение в Батуми."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$h, "component")
});
const $$splitComponentImporter$g = () => import("./contact-9qP66afK.mjs");
const Route$g = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Контакты — Adjara Peak"
    }, {
      name: "description",
      content: "Свяжитесь с Adjara Peak в Батуми: адрес, телефоны, время работы."
    }, {
      property: "og:title",
      content: "Контакты — Adjara Peak"
    }, {
      property: "og:description",
      content: "Магазин и прокат снаряжения Adjara Peak в Батуми, Грузия."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$g, "component")
});
const $$splitComponentImporter$f = () => import("./checkout-CahFURJ_.mjs");
const Route$f = createFileRoute("/checkout")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component"),
  head: () => ({
    meta: [{
      title: "Корзина — Adjara Peak"
    }, {
      name: "description",
      content: "Оформление заказа в магазине Adjara Peak."
    }]
  })
});
const $$splitComponentImporter$e = () => import("../_admin-0fQ9z5ls.mjs");
const Route$e = createFileRoute("/_admin")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./index-BmmuBVit.mjs").then((n) => n.i);
const Route$d = createFileRoute("/")({
  staleTime: 5 * 60 * 1e3,
  loader: async () => {
    const [groups, rentalGroups] = await Promise.all([listShopGroups(), listRentalGroups()]);
    return {
      groups,
      rentalGroups
    };
  },
  head: () => ({
    meta: [{
      title: "Adjara Peak — снаряжение, прокат и туры в Грузии"
    }, {
      name: "description",
      content: "Премиальное outdoor-снаряжение, горные туры с гидами и прокат экипировки в Аджарии, Грузия."
    }, {
      property: "og:title",
      content: "Adjara Peak — готовьтесь к приключениям"
    }, {
      property: "og:description",
      content: "Туры, снаряжение и прокат для хайкинга, лыж и приключений на Кавказе."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./sale.search-B94-Zr4z.mjs");
const searchSchema = objectType({
  q: fallback(stringType(), "").default("")
});
const Route$c = createFileRoute("/sale/search")({
  validateSearch: zodValidator(searchSchema),
  loaderDeps: ({
    search
  }) => ({
    q: search.q
  }),
  loader: async ({
    deps
  }) => {
    const q = deps.q.trim();
    if (!q) return {
      products: [],
      q
    };
    const products = await searchShopProducts({
      data: {
        q
      }
    });
    return {
      products,
      q
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: loaderData?.q ? `Поиск: ${loaderData.q} — Adjara Peak` : "Поиск — Adjara Peak"
    }, {
      name: "description",
      content: "Поиск товаров в магазине Adjara Peak."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./sale.sale-Dx_x9WHh.mjs");
const Route$b = createFileRoute("/sale/sale")({
  staleTime: 60 * 1e3,
  loader: () => getSaleProducts(),
  head: () => ({
    meta: [{
      title: "Распродажа — Adjara Peak"
    }, {
      name: "description",
      content: "Outdoor-снаряжение и прокат со скидками в Adjara Peak. Предложения ограничены."
    }, {
      property: "og:title",
      content: "Распродажа — Adjara Peak"
    }, {
      property: "og:description",
      content: "Outdoor-снаряжение со скидками в Adjara Peak."
    }, {
      property: "og:image",
      content: "/img/sale.webp"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const equipment = "/assets/equipment-CrM447Hb.jpg";
const camping = "/assets/camping-CC14ap06.jpg";
const trail = "/assets/trail-2fq6rWiQ.jpg";
const hikingTour = "/assets/hiking-tour-BCqVDWa4.jpg";
const kayaking = "/assets/kayaking-CThaPMRY.jpg";
const summit = "/assets/summit-5B3r3fkY.jpg";
const bannerCollection = "/assets/banner-collection-BVbmijOA.jpg";
const heroAdventure = "/assets/hero-adventure-B-15MTkj.jpg";
const heroCamping = "/assets/hero-camping-CWay2PfB.jpg";
const heroMountains = "/assets/hero-mountains-s6qnNSKR.jpg";
const catalogEquipment = "/assets/equipment-CE2PWXHg.webp";
const catalogCamping = "/assets/camping-CHICM1PV.webp";
const catalogTrail = "/assets/trail-DUbqdMkS.webp";
const catalogHikingTour = "/assets/hiking-tour-B0OfGxw-.webp";
const catalogKayaking = "/assets/kayaking-rjy1Jlfi.webp";
const catalogSummit = "/assets/summit-BLsG3zJq.webp";
const catalogBannerCollection = "/assets/banner-collection-CC5qb87p.webp";
const catalogBannerSki = "/assets/banner-ski-CyqVaXzn.webp";
const catalogHeroAdventure = "/assets/hero-adventure-6zuFBFqI.webp";
const catalogHeroCamping = "/assets/hero-camping-BMgBWiu6.webp";
const catalogHeroMountains = "/assets/hero-mountains-Dcyk0ica.webp";
const POOL = [
  equipment,
  camping,
  trail,
  hikingTour,
  kayaking,
  summit,
  bannerCollection,
  bannerSki,
  heroAdventure,
  heroCamping,
  heroMountains
];
const CATALOG_POOL = [
  catalogEquipment,
  catalogCamping,
  catalogTrail,
  catalogHikingTour,
  catalogKayaking,
  catalogSummit,
  catalogBannerCollection,
  catalogBannerSki,
  catalogHeroAdventure,
  catalogHeroCamping,
  catalogHeroMountains
];
const CATALOG_IMAGE_ALIASES = {
  "i-can-play-longboard-1-850429808748.png": "IMG_8857.PNG",
  "i-can-play-longboard-2-850429808748.png": "IMG_8860.JPEG"
};
function resolveImage(name) {
  if (!name) return POOL[0];
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = hash * 31 + name.charCodeAt(i) >>> 0;
  }
  return POOL[hash % POOL.length];
}
function resolveCatalogImage(name) {
  if (!name) return CATALOG_POOL[0];
  const imageName = CATALOG_IMAGE_ALIASES[name] ?? name;
  if (imageName.startsWith("/") || /^https?:\/\//i.test(imageName)) return imageName;
  if (CATALOG_IMAGE_FILES.has(imageName)) return `/img/${imageName}`;
  let hash = 0;
  for (let i = 0; i < imageName.length; i++) {
    hash = hash * 31 + imageName.charCodeAt(i) >>> 0;
  }
  return CATALOG_POOL[hash % CATALOG_POOL.length];
}
const $$splitComponentImporter$a = () => import("./sale._group-B5cFN6gR.mjs");
const $$splitNotFoundComponentImporter$6 = () => import("./sale._group-DFrJju5D.mjs");
const Route$a = createFileRoute("/sale/$group")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getShopGroupView({
      data: {
        groupSlug: params.group
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Магазин — Adjara Peak"
      }]
    };
    const title = `${loaderData.group.title} — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `${loaderData.group.title} в магазине Adjara Peak.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$6, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./rent.sale-DXv_URe7.mjs");
const Route$9 = createFileRoute("/rent/sale")({
  staleTime: 60 * 1e3,
  loader: () => getSaleRentals(),
  head: () => ({
    meta: [{
      title: "Распродажа проката — Adjara Peak"
    }, {
      name: "description",
      content: "Снаряжение в прокат со скидками в Adjara Peak. Предложения ограничены."
    }, {
      property: "og:title",
      content: "Распродажа проката — Adjara Peak"
    }, {
      property: "og:description",
      content: "Снаряжение в прокат со скидками в Adjara Peak."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./rent._group-AVByQ1bw.mjs");
const $$splitNotFoundComponentImporter$5 = () => import("./rent._group-CLGwR-me.mjs");
const Route$8 = createFileRoute("/rent/$group")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getRentalGroupView({
      data: {
        groupSlug: params.group
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Прокат — Adjara Peak"
      }]
    };
    const title = `${loaderData.group.title} — Прокат — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Прокат: ${loaderData.group.title} в Adjara Peak.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$5, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./app._slug-D5NM8dE6.mjs");
const $$splitErrorComponentImporter = () => import("./app._slug-BJt9Jrh3.mjs");
const $$splitNotFoundComponentImporter$4 = () => import("./app._slug-8Y8aEkRZ.mjs");
const Route$7 = createFileRoute("/app/$slug")({
  loader: async ({
    params
  }) => {
    const product = await getShopProductBySlug({
      data: {
        slug: params.slug
      }
    });
    if (product) return {
      kind: "product",
      data: product
    };
    const rental = await getRentalItemBySlug({
      data: {
        slug: params.slug
      }
    });
    if (rental) return {
      kind: "rental",
      data: rental
    };
    throw notFound();
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Не найдено — Adjara Peak"
      }]
    };
    if (loaderData.kind === "product") {
      const product = loaderData.data.product;
      const title2 = `${product.title} — Adjara Peak`;
      const desc2 = product.description ?? product.title;
      const img2 = resolveCatalogImage(product.image);
      return {
        meta: [{
          title: title2
        }, {
          name: "description",
          content: desc2
        }, {
          property: "og:title",
          content: title2
        }, {
          property: "og:description",
          content: desc2
        }, {
          property: "og:image",
          content: img2
        }, {
          property: "og:type",
          content: "product"
        }, {
          name: "twitter:card",
          content: "summary_large_image"
        }, {
          name: "twitter:image",
          content: img2
        }]
      };
    }
    const item = loaderData.data.item;
    const title = `Аренда ${item.title} — Adjara Peak`;
    const desc = item.shortly ?? item.description ?? item.title;
    const img = resolveCatalogImage(item.image);
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: desc
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:description",
        content: desc
      }, {
        property: "og:image",
        content: img
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$4, "notFoundComponent"),
  errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent"),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./admin.login-DJEZv2RP.mjs");
const Route$6 = createFileRoute("/admin/login")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Админка · Вход"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$5 = () => import("./admin.index--X8mxIH-.mjs");
const Route$5 = createFileRoute("/_admin/admin/")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component"),
  head: () => ({
    meta: [{
      title: "Админка · Панель"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const $$splitComponentImporter$4 = () => import("./sale._group._category-B8WxaBoE.mjs");
const $$splitNotFoundComponentImporter$3 = () => import("./sale._group._category-DOsuuTiH.mjs");
const Route$4 = createFileRoute("/sale/$group/$category")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getShopGroupView({
      data: {
        groupSlug: params.group,
        categorySlug: params.category
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Магазин — Adjara Peak"
      }]
    };
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${cat} — ${loaderData.group.title} — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `${cat} в магазине Adjara Peak.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$3, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./rent._group._category-Cv8N6Efb.mjs");
const $$splitNotFoundComponentImporter$2 = () => import("./rent._group._category-D0NeIugs.mjs");
const Route$3 = createFileRoute("/rent/$group/$category")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getRentalGroupView({
      data: {
        groupSlug: params.group,
        categorySlug: params.category
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Rentals — Adjara Peak"
      }]
    };
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${cat} — ${loaderData.group.title} — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Rent ${cat.toLowerCase()} in Batumi.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$2, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./sale._group._category._subcategory-AEV2TTLH.mjs");
const $$splitNotFoundComponentImporter$1 = () => import("./sale._group._category._subcategory-D5wUpslR.mjs");
const Route$2 = createFileRoute("/sale/$group/$category/$subcategory")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getShopGroupView({
      data: {
        groupSlug: params.group,
        categorySlug: params.category,
        subcategorySlug: params.subcategory
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Shop — Adjara Peak"
      }]
    };
    const sub = loaderData.activeSubcategory?.title ?? "";
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${sub} — ${cat} — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Shop ${sub.toLowerCase()} in ${cat.toLowerCase()}.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter$1, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./rent._group._category._subcategory-CNB5AnkE.mjs");
const $$splitNotFoundComponentImporter = () => import("./rent._group._category._subcategory-DTdaKBV-.mjs");
const Route$1 = createFileRoute("/rent/$group/$category/$subcategory")({
  staleTime: 5 * 60 * 1e3,
  loader: async ({
    params
  }) => {
    const data = await getRentalGroupView({
      data: {
        groupSlug: params.group,
        categorySlug: params.category,
        subcategorySlug: params.subcategory
      }
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) return {
      meta: [{
        title: "Rentals — Adjara Peak"
      }]
    };
    const sub = loaderData.activeSubcategory?.title ?? "";
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${sub} — ${cat} — Adjara Peak`;
    return {
      meta: [{
        title
      }, {
        name: "description",
        content: `Rent ${sub.toLowerCase()} in ${cat.toLowerCase()}.`
      }, {
        property: "og:title",
        content: title
      }, {
        property: "og:image",
        content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image)
      }]
    };
  },
  notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./admin.t._table-9ac1jJqS.mjs");
const Route = createFileRoute("/_admin/admin/t/$table")({
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: () => ({
    meta: [{
      title: "Админка · Таблица"
    }, {
      name: "robots",
      content: "noindex"
    }]
  })
});
const ServiceRoute = Route$k.update({
  id: "/service",
  path: "/service",
  getParentRoute: () => Route$l
});
const SaleRoute = Route$j.update({
  id: "/sale",
  path: "/sale",
  getParentRoute: () => Route$l
});
const RockClimbingRoute = Route$i.update({
  id: "/rockClimbing",
  path: "/rockClimbing",
  getParentRoute: () => Route$l
});
const RentRoute = Route$h.update({
  id: "/rent",
  path: "/rent",
  getParentRoute: () => Route$l
});
const ContactRoute = Route$g.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$l
});
const CheckoutRoute = Route$f.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$l
});
const AdminRoute = Route$e.update({
  id: "/_admin",
  getParentRoute: () => Route$l
});
const IndexRoute = Route$d.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$l
});
const SaleSearchRoute = Route$c.update({
  id: "/search",
  path: "/search",
  getParentRoute: () => SaleRoute
});
const SaleSaleRoute = Route$b.update({
  id: "/sale",
  path: "/sale",
  getParentRoute: () => SaleRoute
});
const SaleGroupRoute = Route$a.update({
  id: "/$group",
  path: "/$group",
  getParentRoute: () => SaleRoute
});
const RentSaleRoute = Route$9.update({
  id: "/sale",
  path: "/sale",
  getParentRoute: () => RentRoute
});
const RentGroupRoute = Route$8.update({
  id: "/$group",
  path: "/$group",
  getParentRoute: () => RentRoute
});
const AppSlugRoute = Route$7.update({
  id: "/app/$slug",
  path: "/app/$slug",
  getParentRoute: () => Route$l
});
const AdminLoginRoute = Route$6.update({
  id: "/admin/login",
  path: "/admin/login",
  getParentRoute: () => Route$l
});
const AdminAdminIndexRoute = Route$5.update({
  id: "/admin/",
  path: "/admin/",
  getParentRoute: () => AdminRoute
});
const SaleGroupCategoryRoute = Route$4.update({
  id: "/$category",
  path: "/$category",
  getParentRoute: () => SaleGroupRoute
});
const RentGroupCategoryRoute = Route$3.update({
  id: "/$category",
  path: "/$category",
  getParentRoute: () => RentGroupRoute
});
const SaleGroupCategorySubcategoryRoute = Route$2.update({
  id: "/$subcategory",
  path: "/$subcategory",
  getParentRoute: () => SaleGroupCategoryRoute
});
const RentGroupCategorySubcategoryRoute = Route$1.update({
  id: "/$subcategory",
  path: "/$subcategory",
  getParentRoute: () => RentGroupCategoryRoute
});
const AdminAdminTTableRoute = Route.update({
  id: "/admin/t/$table",
  path: "/admin/t/$table",
  getParentRoute: () => AdminRoute
});
const AdminRouteChildren = {
  AdminAdminIndexRoute,
  AdminAdminTTableRoute
};
const AdminRouteWithChildren = AdminRoute._addFileChildren(AdminRouteChildren);
const RentGroupCategoryRouteChildren = {
  RentGroupCategorySubcategoryRoute
};
const RentGroupCategoryRouteWithChildren = RentGroupCategoryRoute._addFileChildren(RentGroupCategoryRouteChildren);
const RentGroupRouteChildren = {
  RentGroupCategoryRoute: RentGroupCategoryRouteWithChildren
};
const RentGroupRouteWithChildren = RentGroupRoute._addFileChildren(
  RentGroupRouteChildren
);
const RentRouteChildren = {
  RentGroupRoute: RentGroupRouteWithChildren,
  RentSaleRoute
};
const RentRouteWithChildren = RentRoute._addFileChildren(RentRouteChildren);
const SaleGroupCategoryRouteChildren = {
  SaleGroupCategorySubcategoryRoute
};
const SaleGroupCategoryRouteWithChildren = SaleGroupCategoryRoute._addFileChildren(SaleGroupCategoryRouteChildren);
const SaleGroupRouteChildren = {
  SaleGroupCategoryRoute: SaleGroupCategoryRouteWithChildren
};
const SaleGroupRouteWithChildren = SaleGroupRoute._addFileChildren(
  SaleGroupRouteChildren
);
const SaleRouteChildren = {
  SaleGroupRoute: SaleGroupRouteWithChildren,
  SaleSaleRoute,
  SaleSearchRoute
};
const SaleRouteWithChildren = SaleRoute._addFileChildren(SaleRouteChildren);
const rootRouteChildren = {
  IndexRoute,
  AdminRoute: AdminRouteWithChildren,
  CheckoutRoute,
  ContactRoute,
  RentRoute: RentRouteWithChildren,
  RockClimbingRoute,
  SaleRoute: SaleRouteWithChildren,
  ServiceRoute,
  AdminLoginRoute,
  AppSlugRoute
};
const routeTree = Route$l._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({
  error,
  reset
}) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  searchRentalItems as A,
  searchShopProducts as B,
  setCartQty as C,
  useCartCount as D,
  useCartLines as E,
  useIsInCart as F,
  useLanguage as G,
  Route$j as R,
  Route$h as a,
  Route$d as b,
  Route$c as c,
  Route$b as d,
  Route$a as e,
  Route$9 as f,
  Route$8 as g,
  Route$7 as h,
  Route$4 as i,
  Route$3 as j,
  Route$2 as k,
  Route$1 as l,
  addToCart as m,
  bannerSki as n,
  camping as o,
  climbingHero as p,
  getCartLineItems as q,
  getSiteText as r,
  heroAdventure as s,
  heroCamping as t,
  heroMountains as u,
  listLatestProducts as v,
  listOneProductPerCategorySlug as w,
  removeFromCart as x,
  resolveCatalogImage as y,
  router as z
};
