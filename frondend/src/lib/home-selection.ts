import type { ShopProduct } from "./catalog.functions";
/** Visible, priced products with genuine images only; active featured flags precede recent arrivals. */
export function selectHomeProducts(
  products: ShopProduct[],
  limit: number,
  today = new Date().toISOString().slice(0, 10),
) {
  const featured = (p: ShopProduct) =>
    p.featured === true && (!p.featured_until || p.featured_until >= today);
  const sorted = products
    .filter(
      (p) => p.in_stock && p.image && Number.isFinite(p.price) && p.price > 0,
    )
    .sort(
      (a, b) =>
        Number(featured(b)) - Number(featured(a)) ||
        (featured(a) && featured(b)
          ? (b.featured_priority ?? 0) - (a.featured_priority ?? 0)
          : 0) ||
        (b.created_at ?? "").localeCompare(a.created_at ?? "") ||
        a.slug.localeCompare(b.slug),
    );
  const picked = sorted.filter(featured).slice(0, limit);
  const ids = new Set(picked.map((p) => p.id));
  const categories = new Set(picked.map((p) => p.category_id));
  for (const p of sorted) {
    if (picked.length >= limit) break;
    if (ids.has(p.id) || categories.has(p.category_id)) continue;
    picked.push(p);
    ids.add(p.id);
    categories.add(p.category_id);
  }
  for (const p of sorted) {
    if (picked.length >= limit) break;
    if (ids.has(p.id)) continue;
    picked.push(p);
    ids.add(p.id);
  }
  return picked;
}
export const HOME_GROUP_ORDER = [
  "alpinesking",
  "winterSports",
  "clothesAndShoes",
  "fitness",
  "tourismCamping",
  "cyclingRoller",
];
export function sortHomeGroups<T extends { slug: string }>(groups: T[]): T[] {
  return [...groups].sort((a, b) => {
    const rank = (slug: string) =>
      slug === "sale"
        ? Number.MAX_SAFE_INTEGER
        : HOME_GROUP_ORDER.includes(slug)
          ? HOME_GROUP_ORDER.indexOf(slug)
          : HOME_GROUP_ORDER.length;
    return rank(a.slug) - rank(b.slug);
  });
}

/** Cards do not need long descriptions or arbitrary database columns in the SSR payload. */
export function homeCardProduct(p: ShopProduct): ShopProduct {
  return {
    id: p.id,
    legacy_id: p.legacy_id,
    slug: p.slug,
    title: p.title,
    price: p.price,
    sale_price: p.sale_price,
    image: p.image,
    category_id: p.category_id,
    subcategory_id: p.subcategory_id,
    sizes: p.sizes,
    colors: p.colors,
    in_stock: p.in_stock,
    description: null,
    features: [],
  };
}
