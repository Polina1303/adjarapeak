/* eslint-disable @typescript-eslint/no-explicit-any */
import { getShopGroupOrderIndex, sortShopGroups } from "@/lib/shop-group-order";

type Row = Record<string, any>;

type AdminGroupRow = {
  id: string;
  slug?: string | null;
  title?: string | null;
  sort_order?: number | null;
};

type AdminCategoryRow = {
  id: string;
  group_id?: string | null;
  slug?: string | null;
  title?: string | null;
  sort_order?: number | null;
};

type AdminSortRefs = {
  shopGroups?: AdminGroupRow[];
  shopCategories?: AdminCategoryRow[];
  rentalGroups?: AdminGroupRow[];
  rentalCategories?: AdminCategoryRow[];
};

const VIRTUAL_BOARDS_CATEGORY_SLUG = "balance_board";
const VIRTUAL_BOARDS_GROUP_SLUG = "boards";

function byText(a?: string | null, b?: string | null) {
  return String(a ?? "").localeCompare(String(b ?? ""), "ru");
}

function byNumber(a?: number | null, b?: number | null) {
  return Number(a ?? 0) - Number(b ?? 0);
}

function shopGroupIndex(group: AdminGroupRow | undefined, categorySlug?: string | null) {
  if (categorySlug === VIRTUAL_BOARDS_CATEGORY_SLUG) {
    return getShopGroupOrderIndex(VIRTUAL_BOARDS_GROUP_SLUG) ?? Number.MAX_SAFE_INTEGER;
  }
  return getShopGroupOrderIndex(group?.slug) ?? Number.MAX_SAFE_INTEGER;
}

function shopGroupFallback(group: AdminGroupRow | undefined) {
  return Number(group?.sort_order ?? Number.MAX_SAFE_INTEGER);
}

function rentalGroupOrder(group: AdminGroupRow | undefined) {
  return Number(group?.sort_order ?? Number.MAX_SAFE_INTEGER);
}

function compareByCategory(a: Row, b: Row, refs: AdminSortRefs, kind: "shop" | "rental") {
  const groups = kind === "shop" ? refs.shopGroups : refs.rentalGroups;
  const groupById = new Map((groups ?? []).map((group) => [group.id, group]));
  const aGroup = groupById.get(a.group_id);
  const bGroup = groupById.get(b.group_id);

  if (kind === "shop") {
    const byGroupIndex = shopGroupIndex(aGroup, a.slug) - shopGroupIndex(bGroup, b.slug);
    if (byGroupIndex !== 0) return byGroupIndex;
    const byGroupSort = shopGroupFallback(aGroup) - shopGroupFallback(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  } else {
    const byGroupSort = rentalGroupOrder(aGroup) - rentalGroupOrder(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  }

  const bySort = byNumber(a.sort_order, b.sort_order);
  if (bySort !== 0) return bySort;
  return byText(a.title, b.title);
}

function compareBySubcategory(a: Row, b: Row, refs: AdminSortRefs, kind: "shop" | "rental") {
  const categories = kind === "shop" ? refs.shopCategories : refs.rentalCategories;
  const groups = kind === "shop" ? refs.shopGroups : refs.rentalGroups;
  const categoryById = new Map((categories ?? []).map((category) => [category.id, category]));
  const groupById = new Map((groups ?? []).map((group) => [group.id, group]));
  const aCategory = categoryById.get(a.category_id);
  const bCategory = categoryById.get(b.category_id);
  const aGroup = aCategory?.group_id ? groupById.get(aCategory.group_id) : undefined;
  const bGroup = bCategory?.group_id ? groupById.get(bCategory.group_id) : undefined;

  if (kind === "shop") {
    const byGroupIndex =
      shopGroupIndex(aGroup, aCategory?.slug) - shopGroupIndex(bGroup, bCategory?.slug);
    if (byGroupIndex !== 0) return byGroupIndex;
    const byGroupSort = shopGroupFallback(aGroup) - shopGroupFallback(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  } else {
    const byGroupSort = rentalGroupOrder(aGroup) - rentalGroupOrder(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  }

  const byCategorySort = byNumber(aCategory?.sort_order, bCategory?.sort_order);
  if (byCategorySort !== 0) return byCategorySort;
  const byCategoryTitle = byText(aCategory?.title, bCategory?.title);
  if (byCategoryTitle !== 0) return byCategoryTitle;

  const bySort = byNumber(a.sort_order, b.sort_order);
  if (bySort !== 0) return bySort;
  return byText(a.title, b.title);
}

export function sortAdminRows(table: string, rows: Row[], refs: AdminSortRefs = {}) {
  if (table === "shop_groups") return sortShopGroups(rows);
  if (table === "shop_categories") {
    return [...rows].sort((a, b) => compareByCategory(a, b, refs, "shop"));
  }
  if (table === "shop_subcategories") {
    return [...rows].sort((a, b) => compareBySubcategory(a, b, refs, "shop"));
  }
  if (table === "rental_categories") {
    return [...rows].sort((a, b) => compareByCategory(a, b, refs, "rental"));
  }
  if (table === "rental_subcategories") {
    return [...rows].sort((a, b) => compareBySubcategory(a, b, refs, "rental"));
  }
  return rows;
}

export async function loadAdminSortRefs(table: string, client: any): Promise<AdminSortRefs> {
  if (table === "shop_categories" || table === "shop_subcategories") {
    const [groups, categories] = await Promise.all([
      client.from("shop_groups").select("id,slug,title,sort_order"),
      table === "shop_subcategories"
        ? client.from("shop_categories").select("id,group_id,slug,title,sort_order")
        : Promise.resolve({ data: [] }),
    ]);
    return {
      shopGroups: groups.data ?? [],
      shopCategories: categories.data ?? [],
    };
  }

  if (table === "rental_categories" || table === "rental_subcategories") {
    const [groups, categories] = await Promise.all([
      client.from("rental_groups").select("id,slug,title,sort_order"),
      table === "rental_subcategories"
        ? client.from("rental_categories").select("id,group_id,slug,title,sort_order")
        : Promise.resolve({ data: [] }),
    ]);
    return {
      rentalGroups: groups.data ?? [],
      rentalCategories: categories.data ?? [],
    };
  }

  return {};
}
