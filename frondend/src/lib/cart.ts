import { useSyncExternalStore } from "react";

const STORAGE_KEY = "ap_cart_v2";
const LEGACY_COUNT = "ap_cart_count";
const LEGACY_ITEMS = "ap_cart_items";
const EVENT = "ap-cart-change";

// Cart drawer was removed; keeping a no-op so existing call sites stay valid.
export function openCart() {}

export type CartLineMeta = {
  title?: string;
  image?: string | null;
  price?: number;
  kind?: "shop" | "rental";
  unit?: "" | "/сутки";
};
export type CartLine = { slug: string; qty: number } & CartLineMeta;

function migrate(): CartLine[] | null {
  if (typeof window === "undefined") return null;
  const old = window.localStorage.getItem(LEGACY_ITEMS);
  if (!old) return null;
  try {
    const arr = JSON.parse(old);
    if (!Array.isArray(arr)) return null;
    const lines: CartLine[] = arr
      .filter((s) => typeof s === "string")
      .map((s) => ({ slug: s, qty: 1 }));
    window.localStorage.removeItem(LEGACY_ITEMS);
    window.localStorage.removeItem(LEGACY_COUNT);
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
    return lines;
  } catch {
    return null;
  }
}

function readLines(): CartLine[] {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    const migrated = migrate();
    return migrated ?? [];
  }
  try {
    const arr = JSON.parse(raw);
    if (!Array.isArray(arr)) return [];
    return arr
      .filter((x) => x && typeof x.slug === "string")
      .map((x) => ({
        slug: x.slug,
        qty: Math.max(1, Number(x.qty) || 1),
        title: typeof x.title === "string" ? x.title : undefined,
        image: typeof x.image === "string" ? x.image : null,
        price: typeof x.price === "number" ? x.price : undefined,
        kind: x.kind === "rental" || x.kind === "shop" ? x.kind : undefined,
        unit: x.unit === "/сутки" ? "/сутки" : x.unit === "" ? "" : undefined,
      }));
  } catch {
    return [];
  }
}

function writeLines(lines: CartLine[]) {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  window.dispatchEvent(new Event(EVENT));
}

export function addToCart(qty = 1, slug?: string, meta?: CartLineMeta) {
  if (!slug) return;
  const lines = readLines();
  const idx = lines.findIndex((l) => l.slug === slug);
  if (idx >= 0) lines[idx] = { ...lines[idx], ...meta, qty: lines[idx].qty + qty };
  else lines.push({ slug, qty, ...meta });
  writeLines(lines);
}

export function setCartQty(slug: string, qty: number) {
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

export function removeFromCart(slug: string) {
  writeLines(readLines().filter((l) => l.slug !== slug));
}

export function clearCart() {
  writeLines([]);
}

function subscribe(cb: () => void) {
  if (typeof window === "undefined") return () => {};
  window.addEventListener(EVENT, cb);
  window.addEventListener("storage", cb);
  return () => {
    window.removeEventListener(EVENT, cb);
    window.removeEventListener("storage", cb);
  };
}

let cachedLines: CartLine[] = [];
let cachedKey = "__init__";
function getLinesSnapshot(): CartLine[] {
  if (typeof window === "undefined") return cachedLines;
  const raw = window.localStorage.getItem(STORAGE_KEY) ?? "";
  if (raw !== cachedKey) {
    cachedKey = raw;
    cachedLines = readLines();
  }
  return cachedLines;
}
const emptyLines: CartLine[] = [];

export function useCartLines(): CartLine[] {
  return useSyncExternalStore(subscribe, getLinesSnapshot, () => emptyLines);
}

export function useCartCount(): number {
  return useSyncExternalStore(
    subscribe,
    () => getLinesSnapshot().reduce((s, l) => s + l.qty, 0),
    () => 0,
  );
}

export function useIsInCart(slug: string | undefined): boolean {
  return useSyncExternalStore(
    subscribe,
    () => (slug ? getLinesSnapshot().some((l) => l.slug === slug) : false),
    () => false,
  );
}
