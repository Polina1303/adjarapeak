const SHOP_GROUP_SLUG_ORDER = [
  "sale",
  "cyclingRoller",
  "boards",
  "clothesAndShoes",
  "martial",
  "tourismCamping",
  "sports",
  "fitness",
  "swimmingSup",
  "alpinesking"
];
const SHOP_GROUP_ORDER_INDEX = new Map(
  SHOP_GROUP_SLUG_ORDER.map((slug, index) => [slug, index])
);
function getShopGroupOrderIndex(slug) {
  return slug ? SHOP_GROUP_ORDER_INDEX.get(slug) : void 0;
}
function sortShopGroups(groups) {
  return [...groups].sort((a, b) => {
    const aIndex = getShopGroupOrderIndex(a.slug);
    const bIndex = getShopGroupOrderIndex(b.slug);
    if (aIndex !== void 0 || bIndex !== void 0) {
      return (aIndex ?? Number.MAX_SAFE_INTEGER) - (bIndex ?? Number.MAX_SAFE_INTEGER);
    }
    const bySortOrder = Number(a.sort_order ?? 0) - Number(b.sort_order ?? 0);
    if (bySortOrder !== 0) return bySortOrder;
    return String(a.title ?? "").localeCompare(String(b.title ?? ""), "ru");
  });
}
export {
  getShopGroupOrderIndex as g,
  sortShopGroups as s
};
