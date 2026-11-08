import groups from "./product-category-groups.generated.json";
import { getShopGroupLabel } from "./catalog-translations";
import type { Lang } from "./i18n";
export function productCategoryLabel(categoryId: string, lang: Lang) {
  const group = (groups as Record<string, string>)[categoryId];
  return group ? getShopGroupLabel(group, lang) : "";
}
