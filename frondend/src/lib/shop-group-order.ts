export const SHOP_GROUP_SLUG_ORDER = [
  "sale",
  "cyclingRoller",
  "boards",
  "clothesAndShoes",
  "martial",
  "tourismCamping",
  "sports",
  "fitness",
  "swimmingSup",
  "alpinesking",
] as const;

const SHOP_GROUP_ORDER_INDEX = new Map<string, number>(
  SHOP_GROUP_SLUG_ORDER.map((slug, index) => [slug, index]),
);

type OrderedShopGroup = {
  slug?: string | null;
  sort_order?: number | null;
  title?: string | null;
};

export function getShopGroupOrderIndex(slug: string | null | undefined) {
  return slug ? SHOP_GROUP_ORDER_INDEX.get(slug) : undefined;
}

export function sortShopGroups<T extends OrderedShopGroup>(groups: T[]): T[] {
  return [...groups].sort((a, b) => {
    const aIndex = getShopGroupOrderIndex(a.slug);
    const bIndex = getShopGroupOrderIndex(b.slug);
    if (aIndex !== undefined || bIndex !== undefined) {
      return (aIndex ?? Number.MAX_SAFE_INTEGER) - (bIndex ?? Number.MAX_SAFE_INTEGER);
    }
    const bySortOrder = Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0);
    if (bySortOrder !== 0) return bySortOrder;
    return String(a.title ?? "").localeCompare(String(b.title ?? ""), "ru");
  });
}
