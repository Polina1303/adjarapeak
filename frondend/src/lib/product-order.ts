import { readProductOrder } from "./product-order-metadata.ts";

type ProductOrderRow = {
  category_id: string;
  subcategory_id?: string | null;
  sort_order?: number | null;
  features?: unknown;
  created_at?: string | null;
  title?: string | null;
};

type CategoryOrderRow = {
  id: string;
  sort_order?: number | null;
};

type SubcategoryOrderRow = CategoryOrderRow & {
  category_id?: string;
};

function manualRank(row: Pick<ProductOrderRow, "sort_order" | "features">) {
  const value = row.sort_order ?? readProductOrder(row.features);
  return typeof value === "number" && Number.isSafeInteger(value) && value > 0
    ? value
    : Number.MAX_SAFE_INTEGER;
}

/** Lower positive positions come first; products without a position follow them. */
export function compareProductOrder(a: Pick<ProductOrderRow, "sort_order" | "features">, b: Pick<ProductOrderRow, "sort_order" | "features">) {
  return manualRank(a) - manualRank(b);
}

export function compareProductsNewestFirst(
  a: Pick<ProductOrderRow, "created_at" | "title">,
  b: Pick<ProductOrderRow, "created_at" | "title">,
) {
  const aTime = Date.parse(a.created_at ?? "");
  const bTime = Date.parse(b.created_at ?? "");
  const byNewest = (Number.isFinite(bTime) ? bTime : 0) - (Number.isFinite(aTime) ? aTime : 0);
  if (byNewest !== 0) return byNewest;
  return String(a.title ?? "").localeCompare(String(b.title ?? ""), "ru");
}

/** Category order stays fixed; a manual product position overrides its subcategory. */
export function sortProductsByCatalogOrder<T extends ProductOrderRow>(
  rows: readonly T[],
  categories: readonly CategoryOrderRow[],
  subcategories: readonly SubcategoryOrderRow[] = [],
): T[] {
  const categoryRank = new Map(
    categories.map((category, index) => [
      category.id,
      { index, sortOrder: Number(category.sort_order ?? Number.MAX_SAFE_INTEGER) },
    ]),
  );
  const subcategoryRank = new Map(
    subcategories.map((subcategory, index) => [
      subcategory.id,
      { index, sortOrder: Number(subcategory.sort_order ?? Number.MAX_SAFE_INTEGER) },
    ]),
  );

  return [...rows].sort((a, b) => {
    const aCategory = categoryRank.get(a.category_id);
    const bCategory = categoryRank.get(b.category_id);
    const byCategorySort =
      (aCategory?.sortOrder ?? Number.MAX_SAFE_INTEGER) -
      (bCategory?.sortOrder ?? Number.MAX_SAFE_INTEGER);
    if (byCategorySort !== 0) return byCategorySort;

    const byCategoryIndex =
      (aCategory?.index ?? Number.MAX_SAFE_INTEGER) -
      (bCategory?.index ?? Number.MAX_SAFE_INTEGER);
    if (byCategoryIndex !== 0) return byCategoryIndex;

    const byManualOrder = compareProductOrder(a, b);
    if (byManualOrder !== 0) return byManualOrder;

    const aSubcategory = a.subcategory_id ? subcategoryRank.get(a.subcategory_id) : undefined;
    const bSubcategory = b.subcategory_id ? subcategoryRank.get(b.subcategory_id) : undefined;
    const bySubcategorySort =
      (aSubcategory?.sortOrder ?? Number.MAX_SAFE_INTEGER) -
      (bSubcategory?.sortOrder ?? Number.MAX_SAFE_INTEGER);
    if (bySubcategorySort !== 0) return bySubcategorySort;

    const bySubcategoryIndex =
      (aSubcategory?.index ?? Number.MAX_SAFE_INTEGER) -
      (bSubcategory?.index ?? Number.MAX_SAFE_INTEGER);
    if (bySubcategoryIndex !== 0) return bySubcategoryIndex;

    return compareProductsNewestFirst(a, b);
  });
}
