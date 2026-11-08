import type { RentalItem, ShopCategory, ShopProduct } from "./catalog.functions";
export const skiCardKeys = ["skis", "snowboard", "boots", "helmet", "goggles", "set"] as const;
export type SkiCardKey = (typeof skiCardKeys)[number];
/** Categories are taken from the existing rental taxonomy. Boots/sets may be embedded in a title. */
export function selectSkiRentalCards(items: RentalItem[], categories: ShopCategory[]) {
 const categorySlug = new Map(categories.map(c => [c.id, c.slug]));
 const patterns: Record<SkiCardKey, RegExp> = { skis: /лыж|ski|თხილამურ/i, snowboard: /сноуборд|snowboard|სნოუბორდ/i, boots: /ботин|boots|ჩექმ/i, helmet: /шлем|helmet|ჩაფხუტ/i, goggles: /маск|goggl|სათვალ/i, set: /комплект|set|package|კომპლექტ/i };
 const slugs: Partial<Record<SkiCardKey, string>> = { skis: "sky", snowboard: "snowboard", helmet: "helmet", goggles: "mask" };
 return skiCardKeys.map(key => {
  const candidates = items.filter(item => item.available && (slugs[key] ? categorySlug.get(item.category_id) === slugs[key] : patterns[key].test(item.title)) && Number.isFinite(item.price_per_day) && item.price_per_day > 0).sort((a,b) => (a.sale_price_per_day ?? a.price_per_day) - (b.sale_price_per_day ?? b.price_per_day));
  // A ski+boots package must not be presented as a price for boots alone.
  const eligible = key === "boots" ? candidates.filter(i => !/комплект|set|package|лыжи|сноуборд/i.test(i.title)) : candidates;
  return { key, item: eligible[0] ?? null };
 });
}
export function diverseProducts(products: ShopProduct[], limit: number): ShopProduct[] {
 const sorted = [...products].sort((a,b) => Number(!!b.featured) - Number(!!a.featured) || (b.featured_priority ?? 0) - (a.featured_priority ?? 0));
 const seen = new Set<string>();
 const first = sorted.filter(p => { if(seen.has(p.category_id)) return false; seen.add(p.category_id); return true; });
 return [...first, ...sorted.filter(p => !first.includes(p))].slice(0, limit);
}
