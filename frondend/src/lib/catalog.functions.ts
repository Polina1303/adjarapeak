import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { CATALOG_IMAGE_FILES } from "@/lib/catalog-images.generated";
import { sortShopGroups } from "@/lib/shop-group-order";
import { getDisplayPrice, hasManualDiscount } from "@/lib/discount";
import { SHOP_COMPLEMENT_MAP } from "./recommendations";

const EMPTY_CATEGORY_ID = "00000000-0000-0000-0000-000000000000";
const BOARDS_GROUP_SLUG = "boards";
const BALANCE_BOARD_CATEGORY_SLUG = "balance_board";
const SPORTS_RENTAL_GROUP_SLUG = "sportsRental";
const SPORTS_GROUP_SLUG = "sports";
const FITNESS_GROUP_SLUG = "fitness";
const SPORTS_AIR_CATEGORY_SLUG = "air";
const SHOP_GROUP_IMAGE_OVERRIDES: Record<string, string> = {
  cyclingRoller: "b1f2b627383337af48f04d809f5c9453.webp",
  martial: "b4a5-68313d694eb1a61.avif",
};
const RENTAL_GROUP_IMAGE_OVERRIDES: Record<string, string> = {
  sportsRental: "kross-r6-rent.jpg",
};

// ---------- Types ----------
export type ShopGroup = {
  id: string;
  slug: string;
  title: string;
  image: string | null;
  sort_order: number;
};

export type ShopCategory = {
  id: string;
  group_id: string;
  slug: string;
  title: string;
  image: string | null;
  sort_order: number;
};

export type ShopSubcategory = {
  id: string;
  category_id: string;
  slug: string;
  title: string;
  sort_order: number;
};

export type ShopProduct = {
  id: string;
  legacy_id: number | null;
  slug: string;
  title: string;
  description: string | null;
  price: number;
  sale_price: number | null;
  image: string | null;
  category_id: string;
  subcategory_id: string | null;
  features: string[];
  in_stock: boolean;
  created_at?: string | null;
};

export type RentalGroup = ShopGroup;
export type RentalCategory = ShopCategory;
export type RentalItem = Omit<ShopProduct, "in_stock" | "price" | "sale_price"> & {
  shortly: string | null;
  price_per_day: number;
  sale_price_per_day: number | null;
  available: boolean;
};

type ShopProductSummaryRow = Pick<
  ShopProduct,
  | "id"
  | "slug"
  | "title"
  | "price"
  | "sale_price"
  | "image"
  | "category_id"
  | "subcategory_id"
  | "in_stock"
  | "created_at"
>;

type RentalItemSummaryRow = Pick<
  RentalItem,
  | "id"
  | "slug"
  | "title"
  | "shortly"
  | "price_per_day"
  | "sale_price_per_day"
  | "image"
  | "category_id"
  | "subcategory_id"
  | "available"
  | "created_at"
>;

type CartShopRow = Pick<
  ShopProduct,
  "slug" | "title" | "image" | "price" | "sale_price" | "in_stock" | "description"
>;

type CartRentalRow = Pick<
  RentalItem,
  | "slug"
  | "title"
  | "image"
  | "price_per_day"
  | "sale_price_per_day"
  | "available"
  | "shortly"
  | "description"
>;

const SHOP_GROUP_TITLE_OVERRIDES: Record<string, string> = {
  cyclingRoller: "Велоспорт и ролики",
  boards: "Баланс и доски",
  sports: "Игровой спорт",
  fitness: "Фитнес и йога",
  swimmingSup: "Плавание и сапы",
};

const SHOP_CATEGORY_TITLE_OVERRIDES: Record<string, string> = {
  boxing_gloves: "Перчатки для бокса",
  martialart_helmet: "Шлемы",
  martialart_protection: "Защита",
  bandages: "Бинты для рук",
  martialart_rubber: "Резина и жгуты",
  martialart_mma: "Перчатки MMA",
  martialart_exercise: "Тренажеры",
};

const BOARDS_CATEGORY_DEFS = [
  { slug: "skateboards", title: "Скейтборды" },
  { slug: "longboards", title: "Лонгборды" },
  { slug: "surfskates", title: "Серфскейты" },
  { slug: "balanceboards", title: "Баланс-борды" },
] as const;

const SPORTS_RENTAL_ALLOWED_ITEMS: Record<string, Array<{ image: string; price: number }>> = {
  rentTEAMSPORT: [
    { image: "beach-volleyball-size-5-bv100-classic-turquoise-kipsta.png", price: 5 },
    { image: "018.29.27.png", price: 5 },
    { image: "6337498439.jpg", price: 5 },
  ],
  rentFITNESS: [
    { image: "mat_with_case.jpg", price: 4 },
  ],
  rentROLLER: [
    { image: "easy-roll-3in1-skates-1-773445237516.png", price: 40 },
    { image: "f3a392a0-9695-41c1-9895-084b1f7b477e-Photoroom.png", price: 40 },
    { image: "super-youngster-3in1-skates-2-800565924102.png", price: 40 },
    { image: "IMG_9518.PNG", price: 40 },
    { image: "IMG_9520.PNG", price: 40 },
    { image: "9b748ca8-550b-4653-bf5b-a16d9981e097.webp", price: 40 },
    { image: "52f839fd-e196-4c58-b2b6-1262bfa2da10.png", price: 40 },
  ],
  rentBOARD: [
    { image: "i-can-play-surfskate-947096861241.png", price: 25 },
    { image: "IMG_8857.PNG", price: 25 },
    { image: "IMG_8860.JPEG", price: 25 },
    { image: "IMG_4474.PNG", price: 10 },
  ],
  rentBIKE: [
    { image: "trinx-m600-rent.png", price: 10 },
    { image: "kross-6-0-rent.jpg", price: 10 },
    { image: "kross-r6-rent.jpg", price: 10 },
    { image: "kross-5-0-rent.jpg", price: 10 },
  ],
};

function normalizeShopGroup(group: ShopGroup): ShopGroup {
  return {
    ...group,
    title: SHOP_GROUP_TITLE_OVERRIDES[group.slug] ?? group.title,
  };
}

function normalizeShopCategory(category: ShopCategory): ShopCategory {
  return {
    ...category,
    title: SHOP_CATEGORY_TITLE_OVERRIDES[category.slug] ?? category.title,
  };
}

function createBoardsGroup(image: string | null = null): ShopGroup {
  return {
    id: "virtual-boards",
    slug: BOARDS_GROUP_SLUG,
    title: SHOP_GROUP_TITLE_OVERRIDES.boards,
    image,
    sort_order: 9,
  };
}

function createBoardsCategories(products: ShopProduct[] = []): ShopCategory[] {
  const imageByCategory = new Map<string, string>();
  for (const product of products) {
    const categorySlug = getBoardCategorySlug(product);
    if (product.image && !imageByCategory.has(categorySlug)) {
      imageByCategory.set(categorySlug, product.image);
    }
  }

  return BOARDS_CATEGORY_DEFS.map((category, index) => ({
    id: `virtual-boards-${category.slug}`,
    group_id: "virtual-boards",
    slug: category.slug,
    title: category.title,
    image: imageByCategory.get(category.slug) ?? null,
    sort_order: index + 1,
  }));
}

function withVirtualShopGroups(groups: ShopGroup[], boardImage: string | null = null): ShopGroup[] {
  const normalized = groups.map(normalizeShopGroup);
  const hasBoards = normalized.some((group) => group.slug === BOARDS_GROUP_SLUG);
  return sortShopGroups(hasBoards ? normalized : [...normalized, createBoardsGroup(boardImage)]);
}

function productHaystack(product: Pick<ShopProduct, "title" | "slug" | "image">) {
  return [product.title, product.slug, product.image]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
}

function getBoardCategorySlug(product: Pick<ShopProduct, "title" | "slug" | "image">) {
  const haystack = productHaystack(product);
  if (/серф|surf/.test(haystack)) return "surfskates";
  if (/лонг|long/.test(haystack)) return "longboards";
  if (/скейт|skate|sk8/.test(haystack)) return "skateboards";
  return "balanceboards";
}

function isPillowOrMattressProduct(product: Pick<ShopProduct, "title" | "slug" | "image">) {
  return /подуш|pillow|матрас|mattress|airbasic|u-neck/.test(productHaystack(product));
}

function filterShopCategoriesForGroup(groupSlug: string, categories: ShopCategory[]) {
  const visible = groupSlug === FITNESS_GROUP_SLUG
    ? categories.filter((category) => category.slug !== BALANCE_BOARD_CATEGORY_SLUG)
    : categories;
  return visible.map(normalizeShopCategory);
}

function filterShopProductsForGroup(
  products: ShopProduct[],
  groupSlug: string,
  categories: ShopCategory[],
) {
  if (groupSlug !== SPORTS_GROUP_SLUG) return products;
  const airCategoryIds = new Set(
    categories
      .filter((category) => category.slug === SPORTS_AIR_CATEGORY_SLUG)
      .map((category) => category.id),
  );
  if (airCategoryIds.size === 0) return products;
  return products.filter(
    (product) => !airCategoryIds.has(product.category_id) || !isPillowOrMattressProduct(product),
  );
}

function filterRentalItemsForGroup(
  items: RentalItemSummaryRow[],
  groupSlug: string,
  categories: RentalCategory[],
) {
  if (groupSlug !== SPORTS_RENTAL_GROUP_SLUG) return items;
  const categorySlugById = new Map(categories.map((category) => [category.id, category.slug]));
  const seen = new Set<string>();

  return items.filter((item) => {
    const categorySlug = categorySlugById.get(item.category_id);
    const allowedItems = categorySlug ? SPORTS_RENTAL_ALLOWED_ITEMS[categorySlug] : undefined;
    if (!allowedItems) return false;

    const allowed = allowedItems.find(
      (entry) => entry.image === item.image && entry.price === Number(item.price_per_day),
    );
    if (!allowed) return false;

    const key = `${categorySlug}:${allowed.image}:${allowed.price}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function isMissingSaleColumnError(error: { message?: string } | null | undefined) {
  return /sale_price|sale_price_per_day/i.test(error?.message ?? "");
}

function rowsHaveShopDiscount(rows: Array<Pick<ShopProduct, "price" | "sale_price">>) {
  return rows.some((row) => hasManualDiscount(row.price, row.sale_price));
}

async function hasShopSaleProducts() {
  const { data, error } = await supabase
    .from("shop_products")
    .select("price,sale_price")
    .eq("in_stock", true)
    .limit(1000);
  if (error) return false;
  return rowsHaveShopDiscount((data ?? []) as Array<Pick<ShopProduct, "price" | "sale_price">>);
}

function filterShopSaleGroup(groups: ShopGroup[], showSaleGroup: boolean) {
  return groups.filter((group) => group.slug !== "sale" || showSaleGroup);
}

function sortByCatalogHierarchyThenNewest<
  T extends Pick<ShopProduct, "category_id" | "subcategory_id" | "title" | "created_at">,
>(
  rows: T[],
  categories: Array<Pick<ShopCategory, "id" | "sort_order" | "title">>,
  subcategories: Array<Pick<ShopSubcategory, "id" | "category_id" | "sort_order" | "title">> = [],
) {
  const categoryRank = new Map(
    categories.map((category, index) => [
      category.id,
      {
        index,
        sortOrder: Number(category.sort_order ?? Number.MAX_SAFE_INTEGER),
        title: category.title ?? "",
      },
    ]),
  );
  const subcategoryRank = new Map(
    subcategories.map((subcategory, index) => [
      subcategory.id,
      {
        categoryId: subcategory.category_id,
        index,
        sortOrder: Number(subcategory.sort_order ?? Number.MAX_SAFE_INTEGER),
        title: subcategory.title ?? "",
      },
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

    const byNewest =
      Date.parse(b.created_at ?? "") - Date.parse(a.created_at ?? "");
    if (!Number.isNaN(byNewest) && byNewest !== 0) return byNewest;

    return String(a.title ?? "").localeCompare(String(b.title ?? ""), "ru");
  });
}

async function getBalanceBoardSourceCategory() {
  const { data: category, error } = await supabase
    .from("shop_categories")
    .select("*")
    .eq("slug", BALANCE_BOARD_CATEGORY_SLUG)
    .maybeSingle();
  if (error) throw new Error(error.message);
  return (category ?? null) as ShopCategory | null;
}

async function getBoardProducts() {
  const sourceCategory = await getBalanceBoardSourceCategory();
  if (!sourceCategory) return [] as ShopProduct[];

  const { data: rows, error } = await supabase
    .from("shop_products")
    .select("*")
    .eq("category_id", sourceCategory.id)
    .order("created_at", { ascending: false })
    .limit(500);
  if (error) throw new Error(error.message);

  return ((rows ?? []) as ShopProductSummaryRow[]).map((row) => ({
    ...row,
    description: null,
    legacy_id: null,
    features: [],
  })) as ShopProduct[];
}

async function getBoardsView(
  groups: ShopGroup[],
  categorySlug?: string,
  subcategorySlug?: string,
) {
  if (subcategorySlug) return null;

  const products = await getBoardProducts();
  const categories = createBoardsCategories(products);
  const group = createBoardsGroup(products.find((product) => product.image)?.image ?? null);
  const activeCategory = categorySlug
    ? categories.find((category) => category.slug === categorySlug) ?? null
    : null;
  if (categorySlug && !activeCategory) return null;

  return {
    groups: withVirtualShopGroups(groups, group.image),
    group,
    categories,
    subsByCat: {} as Record<string, ShopSubcategory[]>,
    activeCategory,
    activeSubcategory: null as ShopSubcategory | null,
    products: activeCategory
      ? products.filter((product) => getBoardCategorySlug(product) === activeCategory.slug)
      : products,
  };
}

// ---------- Shop ----------
export const listShopGroups = createServerFn({ method: "GET" }).handler(async () => {
  const [{ data: groups, error }, { data: cats }, { data: prods }, saleResult] = await Promise.all([
    supabase.from("shop_groups").select("*").order("sort_order"),
    supabase.from("shop_categories").select("id,group_id,slug"),
    supabase
      .from("shop_products")
      .select("category_id,image")
      .not("image", "is", null)
      .limit(2000),
    supabase
      .from("shop_products")
      .select("price,sale_price")
      .eq("in_stock", true)
      .limit(1000),
  ]);
  if (error) throw new Error(error.message);
  const catById = new Map<string, Pick<ShopCategory, "id" | "group_id" | "slug">>(
    ((cats ?? []) as Pick<ShopCategory, "id" | "group_id" | "slug">[]).map((c) => [
      c.id,
      c,
    ]),
  );
  const groupImage: Record<string, string> = {};
  let boardImage: string | null = null;
  for (const p of (prods ?? []) as { category_id: string; image: string }[]) {
    const category = catById.get(p.category_id);
    if (!category) continue;
    if (category.slug === BALANCE_BOARD_CATEGORY_SLUG) {
      boardImage ||= p.image;
      continue;
    }
    if (!groupImage[category.group_id]) groupImage[category.group_id] = p.image;
  }
  const showSaleGroup =
    !saleResult.error &&
    rowsHaveShopDiscount(
      ((saleResult.data ?? []) as Array<Pick<ShopProduct, "price" | "sale_price">>),
    );
  const baseGroups = filterShopSaleGroup((groups ?? []) as ShopGroup[], showSaleGroup);
  return withVirtualShopGroups(baseGroups.map((g) => ({
    ...g,
    image: SHOP_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image ?? groupImage[g.id] ?? null,
  })), boardImage);
});

export const listAllShopCategories = createServerFn({ method: "GET" }).handler(async () => {
  const [{ data: groups, error: ge }, { data: cats, error: ce }] = await Promise.all([
    supabase.from("shop_groups").select("*").order("sort_order"),
    supabase.from("shop_categories").select("*").order("sort_order"),
  ]);
  if (ge) throw new Error(ge.message);
  if (ce) throw new Error(ce.message);
  const groupsList = withVirtualShopGroups((groups ?? []) as ShopGroup[]);
  const groupSlugById = new Map(
    ((groups ?? []) as ShopGroup[]).map((group) => [group.id, group.slug]),
  );
  return {
    groups: groupsList,
    categories: [
      ...((cats ?? []) as ShopCategory[])
        .filter(
          (category) =>
            !(
              groupSlugById.get(category.group_id) === FITNESS_GROUP_SLUG &&
              category.slug === BALANCE_BOARD_CATEGORY_SLUG
            ),
        )
        .map(normalizeShopCategory),
      ...createBoardsCategories(),
    ],
  };
});

export const getShopCategoryBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { categorySlug: string; subcategorySlug?: string }) =>
    z
      .object({
        categorySlug: z.string().min(1),
        subcategorySlug: z.string().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { data: category, error: ce } = await supabase
      .from("shop_categories")
      .select("*")
      .eq("slug", data.categorySlug)
      .maybeSingle();
    if (ce) throw new Error(ce.message);
    if (!category) return null;

    const { data: group } = await supabase
      .from("shop_groups")
      .select("*")
      .eq("id", category.group_id)
      .maybeSingle();


    const { data: subcategories, error: sce } = await supabase
      .from("shop_subcategories")
      .select("*")
      .eq("category_id", category.id)
      .order("sort_order");
    if (sce) throw new Error(sce.message);

    let activeSub: ShopSubcategory | null = null;
    if (data.subcategorySlug) {
      activeSub =
        ((subcategories ?? []) as ShopSubcategory[]).find(
          (s) => s.slug === data.subcategorySlug,
        ) ?? null;
      if (!activeSub) return null;
    }

    let q = supabase
      .from("shop_products")
      .select("*")
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (activeSub) q = q.eq("subcategory_id", activeSub.id);

    const { data: products, error: pe } = await q;
    if (pe) throw new Error(pe.message);

    return {
      group: (group ?? null) as ShopGroup | null,
      category: category as ShopCategory,
      subcategories: (subcategories ?? []) as ShopSubcategory[],
      activeSubcategory: activeSub,
      products: (products ?? []) as ShopProduct[],
    };
  });

export const getRentalCategoryBySlugWithSub = createServerFn({ method: "GET" })
  .inputValidator((input: { categorySlug: string; subcategorySlug?: string }) =>
    z
      .object({
        categorySlug: z.string().min(1),
        subcategorySlug: z.string().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { data: category, error: ce } = await supabase
      .from("rental_categories")
      .select("*")
      .eq("slug", data.categorySlug)
      .maybeSingle();
    if (ce) throw new Error(ce.message);
    if (!category) return null;

    const { data: group } = await supabase
      .from("rental_groups")
      .select("*")
      .eq("id", category.group_id)
      .maybeSingle();


    const { data: subcategories } = await supabase
      .from("rental_subcategories")
      .select("*")
      .eq("category_id", category.id)
      .order("sort_order");

    let activeSub: ShopSubcategory | null = null;
    if (data.subcategorySlug) {
      activeSub =
        ((subcategories ?? []) as ShopSubcategory[]).find(
          (s) => s.slug === data.subcategorySlug,
        ) ?? null;
      if (!activeSub) return null;
    }

    let q = supabase
      .from("rental_items")
      .select("*")
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (activeSub) q = q.eq("subcategory_id", activeSub.id);

    const { data: items, error: ie } = await q;
    if (ie) throw new Error(ie.message);

    return {
      group: (group ?? null) as RentalGroup | null,
      category: category as RentalCategory,
      subcategories: (subcategories ?? []) as ShopSubcategory[],
      activeSubcategory: activeSub,
      items: (items ?? []) as RentalItem[],
    };
  });

export const getShopGroupWithCategories = createServerFn({ method: "GET" })
  .inputValidator((input: { groupSlug: string }) =>
    z.object({ groupSlug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    if (data.groupSlug === BOARDS_GROUP_SLUG) {
      return {
        group: createBoardsGroup(),
        categories: createBoardsCategories(),
      };
    }

    const { data: group, error: ge } = await supabase
      .from("shop_groups")
      .select("*")
      .eq("slug", data.groupSlug)
      .maybeSingle();
    if (ge) throw new Error(ge.message);
    if (!group) return null;

    const { data: categories, error: ce } = await supabase
      .from("shop_categories")
      .select("*")
      .eq("group_id", group.id)
      .order("sort_order");
    if (ce) throw new Error(ce.message);

    return {
      group: normalizeShopGroup(group as ShopGroup),
      categories: filterShopCategoriesForGroup(
        (group as ShopGroup).slug,
        (categories ?? []) as ShopCategory[],
      ),
    };
  });

export const getShopCategoryView = createServerFn({ method: "GET" })
  .inputValidator((input: {
    groupSlug: string;
    categorySlug: string;
    subcategorySlug?: string;
  }) =>
    z
      .object({
        groupSlug: z.string().min(1),
        categorySlug: z.string().min(1),
        subcategorySlug: z.string().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    if (data.groupSlug === BOARDS_GROUP_SLUG) {
      const boardView = await getBoardsView([], data.categorySlug, data.subcategorySlug);
      if (!boardView || !boardView.activeCategory) return null;
      return {
        group: boardView.group,
        category: boardView.activeCategory,
        subcategories: [] as ShopSubcategory[],
        activeSubcategory: null as ShopSubcategory | null,
        products: boardView.products,
      };
    }

    const { data: group, error: ge } = await supabase
      .from("shop_groups")
      .select("*")
      .eq("slug", data.groupSlug)
      .maybeSingle();
    if (ge) throw new Error(ge.message);
    if (!group) return null;

    const { data: category, error: ce } = await supabase
      .from("shop_categories")
      .select("*")
      .eq("group_id", group.id)
      .eq("slug", data.categorySlug)
      .maybeSingle();
    if (ce) throw new Error(ce.message);
    if (!category) return null;

    const { data: subcategories, error: sce } = await supabase
      .from("shop_subcategories")
      .select("*")
      .eq("category_id", category.id)
      .order("sort_order");
    if (sce) throw new Error(sce.message);

    let activeSub: ShopSubcategory | null = null;
    if (data.subcategorySlug) {
      activeSub =
        ((subcategories ?? []) as ShopSubcategory[]).find(
          (s) => s.slug === data.subcategorySlug,
        ) ?? null;
      if (!activeSub) return null;
    }

    let q = supabase
      .from("shop_products")
      .select("*")
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (activeSub) q = q.eq("subcategory_id", activeSub.id);

    const { data: productRows, error: pe } = await q;
    if (pe) throw new Error(pe.message);
    const products = ((productRows ?? []) as ShopProduct[]).filter(
      (product) =>
        !(
          (group as ShopGroup).slug === SPORTS_GROUP_SLUG &&
          (category as ShopCategory).slug === SPORTS_AIR_CATEGORY_SLUG &&
          isPillowOrMattressProduct(product)
        ),
    );

    return {
      group: normalizeShopGroup(group as ShopGroup),
      category: normalizeShopCategory(category as ShopCategory),
      subcategories: (subcategories ?? []) as ShopSubcategory[],
      activeSubcategory: activeSub,
      products,
    };
  });

export const getShopProductBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) =>
    z.object({ slug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: product, error } = await supabase
      .from("shop_products")
      .select("*")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!product) return null;

    const { data: category } = await supabase
      .from("shop_categories")
      .select("*")
      .eq("id", product.category_id)
      .maybeSingle();
    const { data: group } = category
      ? await supabase
          .from("shop_groups")
          .select("*")
          .eq("id", category.group_id)
          .maybeSingle()
      : { data: null };


    // Complementary recommendations: show products that COMPLETE the kit.
    // Tier 1: curated SHOP_COMPLEMENT_MAP — pick 1 product per complementary
    //         category in priority order, then top up with 2nd picks.
    // Tier 2: same group, different category (variety fallback).
    // Tier 3: any other in-stock product.
    const TARGET = 8;
    const related: ShopProduct[] = [];
    const seen = new Set<string>([product.id]);
    const pushOne = (r: ShopProduct) => {
      if (related.length >= TARGET) return false;
      if (seen.has(r.id)) return false;
      if (r.category_id === product.category_id) return false;
      if (product.subcategory_id && r.subcategory_id === product.subcategory_id) return false;
      seen.add(r.id);
      related.push(r);
      return true;
    };
    const shuffle = <T,>(arr: T[]): T[] => arr.slice().sort(() => Math.random() - 0.5);

    // Tier 1: curated map
    const complementSlugs = category ? SHOP_COMPLEMENT_MAP[category.slug] ?? [] : [];
    if (complementSlugs.length > 0) {
      const { data: compCats } = await supabase
        .from("shop_categories")
        .select("id,slug")
        .in("slug", complementSlugs);
      const slugToId = new Map<string, string>(
        ((compCats ?? []) as Pick<ShopCategory, "id" | "slug">[]).map((c) => [
          c.slug,
          c.id,
        ]),
      );
      const orderedIds = complementSlugs
        .map((s) => slugToId.get(s))
        .filter((id): id is string => Boolean(id));

      if (orderedIds.length > 0) {
        const { data: candidates } = await supabase
          .from("shop_products")
          .select("*")
          .in("category_id", orderedIds)
          .eq("in_stock", true)
          .limit(200);
        const byCat = new Map<string, ShopProduct[]>();
        for (const r of (candidates ?? []) as ShopProduct[]) {
          if (!byCat.has(r.category_id)) byCat.set(r.category_id, []);
          byCat.get(r.category_id)!.push(r);
        }
        for (const [, list] of byCat) shuffle(list);

        // Round-robin: 1 per category in priority order, repeat until full.
        let added = true;
        while (added && related.length < TARGET) {
          added = false;
          for (const id of orderedIds) {
            if (related.length >= TARGET) break;
            const list = byCat.get(id);
            if (!list || list.length === 0) continue;
            const next = list.shift()!;
            if (pushOne(next)) added = true;
          }
        }
      }
    }

    // Tier 2: same-group fallback
    if (related.length < TARGET && category?.group_id) {
      const { data: groupCatIds } = await supabase
        .from("shop_categories")
        .select("id")
        .eq("group_id", category.group_id);
      const otherCatIds = ((groupCatIds ?? []) as Pick<ShopCategory, "id">[])
        .map((c) => c.id)
        .filter((id) => id !== product.category_id);
      if (otherCatIds.length > 0) {
        const { data: groupRel } = await supabase
          .from("shop_products")
          .select("*")
          .in("category_id", otherCatIds)
          .eq("in_stock", true)
          .limit(60);
        for (const r of shuffle((groupRel ?? []) as ShopProduct[])) {
          if (related.length >= TARGET) break;
          pushOne(r);
        }
      }
    }

    // Tier 3: global fallback
    if (related.length < TARGET) {
      const { data: anyRel } = await supabase
        .from("shop_products")
        .select("*")
        .neq("category_id", product.category_id)
        .eq("in_stock", true)
        .limit(60);
      for (const r of shuffle((anyRel ?? []) as ShopProduct[])) {
        if (related.length >= TARGET) break;
        pushOne(r);
      }
    }

    return {
      product: product as ShopProduct,
      category: (category ?? null) as ShopCategory | null,
      group: (group ?? null) as ShopGroup | null,
      related,
    };
  });

async function getFeaturedProductsByCategorySlugs(slugs: string[], limit: number) {
  const { data: categories, error: categoryError } = await supabase
    .from("shop_categories")
    .select("id,slug")
    .in("slug", slugs);
  if (categoryError) throw new Error(categoryError.message);
  const categoryIds = ((categories ?? []) as Pick<ShopCategory, "id" | "slug">[]).map(
    (category) => category.id,
  );
  if (categoryIds.length === 0) return [] as ShopProduct[];

  const { data: products, error } = await supabase
    .from("shop_products")
    .select("*")
    .in("category_id", categoryIds)
    .eq("in_stock", true)
    .order("created_at", { ascending: false })
    .limit(Math.max(limit * 4, 20));
  if (error) throw new Error(error.message);

  return ((products ?? []) as ShopProduct[])
    .filter((product) => product.image && CATALOG_IMAGE_FILES.has(product.image))
    .slice(0, limit);
}

export const listLatestProducts = createServerFn({ method: "GET" })
  .inputValidator((input: { limit?: number }) =>
    z.object({ limit: z.number().min(1).max(50).optional() }).parse(input ?? {}),
  )
  .handler(async ({ data }) => {
    const limit = data.limit ?? 6;
    const rollerLimit = Math.min(2, limit);
    const boardLimit = Math.max(limit - rollerLimit, 0);
    const [boardProducts, rollerProducts] = await Promise.all([
      getFeaturedProductsByCategorySlugs([BALANCE_BOARD_CATEGORY_SLUG], boardLimit),
      getFeaturedProductsByCategorySlugs(["roller", "rollers"], rollerLimit),
    ]);

    const seen = new Set<string>();
    const result: ShopProduct[] = [];
    for (const product of [...boardProducts, ...rollerProducts]) {
      if (seen.has(product.id)) continue;
      seen.add(product.id);
      result.push(product);
      if (result.length >= limit) break;
    }
    return result;
  });

export const listProductsBySlugs = createServerFn({ method: "GET" })
  .inputValidator((input: { slugs: string[] }) =>
    z.object({ slugs: z.array(z.string().min(1)).min(1).max(20) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: products, error } = await supabase
      .from("shop_products")
      .select("*")
      .in("slug", data.slugs)
      .eq("in_stock", true);
    if (error) throw new Error(error.message);
    const bySlug = new Map<string, ShopProduct>(
      ((products ?? []) as ShopProduct[]).map((p) => [p.slug, p]),
    );
    return data.slugs
      .map((s) => bySlug.get(s))
      .filter((p): p is ShopProduct => Boolean(p));
  });

export const searchShopProducts = createServerFn({ method: "GET" })
  .inputValidator((input: { q: string; limit?: number }) =>
    z.object({ q: z.string().min(1).max(100), limit: z.number().min(1).max(100).optional() }).parse(input),
  )
  .handler(async ({ data }) => {
    const limit = data.limit ?? 60;
    const q = data.q.trim();
    if (!q) return [] as ShopProduct[];
    // Synonyms: map common short queries to canonical terms.
    const SYNONYMS: Record<string, string[]> = {
      "спальник": ["спальн"],
      "спальники": ["спальн"],
    };
    const lower = q.toLowerCase();
    const terms = new Set<string>([q]);
    for (const [key, vals] of Object.entries(SYNONYMS)) {
      if (lower.includes(key)) for (const v of vals) terms.add(v);
    }
    const patterns = Array.from(terms).map((t) => `%${t}%`);
    const orFilter = (col: string) => patterns.map((p) => `${col}.ilike.${p}`).join(",");
    const [catsRes, subsRes] = await Promise.all([
      supabase.from("shop_categories").select("id").or(orFilter("title")),
      supabase.from("shop_subcategories").select("id").or(orFilter("title")),
    ]);
    if (catsRes.error) throw new Error(catsRes.error.message);
    if (subsRes.error) throw new Error(subsRes.error.message);
    const catIds = (catsRes.data ?? []).map((c) => c.id as string);
    const subIds = (subsRes.data ?? []).map((s) => s.id as string);
    const queries: Promise<{ data: ShopProduct[] | null; error: { message: string } | null }>[] = [
      supabase.from("shop_products").select("*").or(`${orFilter("title")},${orFilter("description")}`).limit(limit) as never,
    ];
    if (catIds.length) {
      queries.push(supabase.from("shop_products").select("*").in("category_id", catIds).limit(limit) as never);
    }
    if (subIds.length) {
      queries.push(supabase.from("shop_products").select("*").in("subcategory_id", subIds).limit(limit) as never);
    }
    const results = await Promise.all(queries);
    const seen = new Set<string>();
    const merged: ShopProduct[] = [];
    for (const r of results) {
      if (r.error) throw new Error(r.error.message);
      for (const p of (r.data ?? []) as ShopProduct[]) {
        if (seen.has(p.id)) continue;
        seen.add(p.id);
        merged.push(p);
        if (merged.length >= limit) break;
      }
      if (merged.length >= limit) break;
    }
    return merged;
  });

export const searchRentalItems = createServerFn({ method: "GET" })
  .inputValidator((input: { q: string; limit?: number }) =>
    z.object({ q: z.string().min(1).max(100), limit: z.number().min(1).max(100).optional() }).parse(input),
  )
  .handler(async ({ data }) => {
    const limit = data.limit ?? 60;
    const q = data.q.trim();
    if (!q) return [] as RentalItem[];

    const patterns = [`%${q}%`];
    const orFilter = (col: string) => patterns.map((p) => `${col}.ilike.${p}`).join(",");
    const [groupsRes, catsRes, subsRes] = await Promise.all([
      supabase.from("rental_groups").select("id").or(orFilter("title")),
      supabase.from("rental_categories").select("id,group_id").or(orFilter("title")),
      supabase.from("rental_subcategories").select("id").or(orFilter("title")),
    ]);
    if (groupsRes.error) throw new Error(groupsRes.error.message);
    if (catsRes.error) throw new Error(catsRes.error.message);
    if (subsRes.error) throw new Error(subsRes.error.message);

    const groupIds = (groupsRes.data ?? []).map((g) => g.id as string);
    const groupCategoryIds = groupIds.length
      ? (
          await supabase
            .from("rental_categories")
            .select("id")
            .in("group_id", groupIds)
        )
      : { data: [] as { id: string }[], error: null };
    if (groupCategoryIds.error) throw new Error(groupCategoryIds.error.message);

    const catIds = [
      ...(catsRes.data ?? []).map((c) => c.id as string),
      ...(groupCategoryIds.data ?? []).map((c) => c.id as string),
    ];
    const subIds = (subsRes.data ?? []).map((s) => s.id as string);

    const queries: Promise<{ data: RentalItem[] | null; error: { message: string } | null }>[] = [
      supabase
        .from("rental_items")
        .select("*")
        .or(`${orFilter("title")},${orFilter("description")},${orFilter("shortly")}`)
        .limit(limit) as never,
    ];
    if (catIds.length) {
      queries.push(supabase.from("rental_items").select("*").in("category_id", catIds).limit(limit) as never);
    }
    if (subIds.length) {
      queries.push(supabase.from("rental_items").select("*").in("subcategory_id", subIds).limit(limit) as never);
    }

    const results = await Promise.all(queries);
    const seen = new Set<string>();
    const merged: RentalItem[] = [];
    for (const r of results) {
      if (r.error) throw new Error(r.error.message);
      for (const item of (r.data ?? []) as RentalItem[]) {
        if (seen.has(item.id)) continue;
        seen.add(item.id);
        merged.push(item);
        if (merged.length >= limit) break;
      }
      if (merged.length >= limit) break;
    }
    return merged;
  });

export const listOneProductPerCategorySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { categorySlugs: string[] }) =>
    z.object({ categorySlugs: z.array(z.string().min(1)).min(1).max(20) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: cats, error: ce } = await supabase
      .from("shop_categories")
      .select("id,slug")
      .in("slug", data.categorySlugs);
    if (ce) throw new Error(ce.message);
    const catList = (cats ?? []) as { id: string; slug: string }[];
    if (catList.length === 0) return [] as ShopProduct[];
    const ids = catList.map((c) => c.id);
    const { data: products, error } = await supabase
      .from("shop_products")
      .select("*")
      .in("category_id", ids)
      .eq("in_stock", true);
    if (error) throw new Error(error.message);
    const all = ((products ?? []) as ShopProduct[]).filter(
      (p) => p.image && CATALOG_IMAGE_FILES.has(p.image),
    );
    const slugById = new Map(catList.map((c) => [c.id, c.slug]));
    const pickedBySlug = new Map<string, ShopProduct>();
    for (const p of all) {
      const slug = slugById.get(p.category_id);
      if (slug && !pickedBySlug.has(slug)) pickedBySlug.set(slug, p);
    }
    return data.categorySlugs
      .map((s) => pickedBySlug.get(s))
      .filter((p): p is ShopProduct => Boolean(p));
  });

export const listRelatedProducts = createServerFn({ method: "GET" })
  .inputValidator((input: { categoryId: string; excludeId: string; limit?: number }) =>
    z
      .object({
        categoryId: z.string().min(1),
        excludeId: z.string().min(1),
        limit: z.number().min(1).max(20).optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { data: products, error } = await supabase
      .from("shop_products")
      .select("*")
      .eq("category_id", data.categoryId)
      .neq("id", data.excludeId)
      .limit(data.limit ?? 4);
    if (error) throw new Error(error.message);
    return (products ?? []) as ShopProduct[];
  });

// ---------- Rentals ----------
export const listRentalGroups = createServerFn({ method: "GET" }).handler(async () => {
  const [{ data: groups, error }, { data: cats }, { data: items }] = await Promise.all([
    supabase.from("rental_groups").select("*").order("sort_order"),
    supabase.from("rental_categories").select("id,group_id"),
    supabase
      .from("rental_items")
      .select("category_id,image")
      .not("image", "is", null)
      .limit(2000),
  ]);
  if (error) throw new Error(error.message);
  const catToGroup = new Map<string, string>(
    ((cats ?? []) as Pick<RentalCategory, "id" | "group_id">[]).map((c) => [
      c.id,
      c.group_id,
    ]),
  );
  const groupImage: Record<string, string> = {};
  for (const it of (items ?? []) as { category_id: string; image: string }[]) {
    const g = catToGroup.get(it.category_id);
    if (g && !groupImage[g]) groupImage[g] = it.image;
  }
  return ((groups ?? []) as RentalGroup[]).map((g) => ({
    ...g,
    image: RENTAL_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image ?? groupImage[g.id] ?? null,
  }));
});

export const listAllRentalCategories = createServerFn({ method: "GET" }).handler(async () => {
  const [{ data: groups, error: ge }, { data: cats, error: ce }] = await Promise.all([
    supabase.from("rental_groups").select("*").order("sort_order"),
    supabase.from("rental_categories").select("*").order("sort_order"),
  ]);
  if (ge) throw new Error(ge.message);
  if (ce) throw new Error(ce.message);
  return {
    groups: (groups ?? []) as RentalGroup[],
    categories: (cats ?? []) as RentalCategory[],
  };
});

export const getRentalCategoryBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { categorySlug: string }) =>
    z.object({ categorySlug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: category, error: ce } = await supabase
      .from("rental_categories")
      .select("*")
      .eq("slug", data.categorySlug)
      .maybeSingle();
    if (ce) throw new Error(ce.message);
    if (!category) return null;

    const { data: group } = await supabase
      .from("rental_groups")
      .select("*")
      .eq("id", category.group_id)
      .maybeSingle();


    const { data: subcategories } = await supabase
      .from("rental_subcategories")
      .select("*")
      .eq("category_id", category.id)
      .order("sort_order");

    const { data: items, error: ie } = await supabase
      .from("rental_items")
      .select("*")
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (ie) throw new Error(ie.message);

    return {
      group: (group ?? null) as RentalGroup | null,
      category: category as RentalCategory,
      subcategories: (subcategories ?? []) as ShopSubcategory[],
      items: (items ?? []) as RentalItem[],
    };
  });

export const getRentalGroupWithCategories = createServerFn({ method: "GET" })
  .inputValidator((input: { groupSlug: string }) =>
    z.object({ groupSlug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: group, error: ge } = await supabase
      .from("rental_groups")
      .select("*")
      .eq("slug", data.groupSlug)
      .maybeSingle();
    if (ge) throw new Error(ge.message);
    if (!group) return null;

    const { data: categories, error: ce } = await supabase
      .from("rental_categories")
      .select("*")
      .eq("group_id", group.id)
      .order("sort_order");
    if (ce) throw new Error(ce.message);

    return {
      group: group as RentalGroup,
      categories: (categories ?? []) as RentalCategory[],
    };
  });

export const getRentalCategoryView = createServerFn({ method: "GET" })
  .inputValidator((input: { groupSlug: string; categorySlug: string }) =>
    z
      .object({
        groupSlug: z.string().min(1),
        categorySlug: z.string().min(1),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { data: group, error: ge } = await supabase
      .from("rental_groups")
      .select("*")
      .eq("slug", data.groupSlug)
      .maybeSingle();
    if (ge) throw new Error(ge.message);
    if (!group) return null;

    const { data: category, error: ce } = await supabase
      .from("rental_categories")
      .select("*")
      .eq("group_id", group.id)
      .eq("slug", data.categorySlug)
      .maybeSingle();
    if (ce) throw new Error(ce.message);
    if (!category) return null;

    const { data: items, error: ie } = await supabase
      .from("rental_items")
      .select("*")
      .eq("category_id", category.id)
      .order("created_at", { ascending: false });
    if (ie) throw new Error(ie.message);

    return {
      group: group as RentalGroup,
      category: category as RentalCategory,
      items: (items ?? []) as RentalItem[],
    };
  });

export const getRentalItemBySlug = createServerFn({ method: "GET" })
  .inputValidator((input: { slug: string }) =>
    z.object({ slug: z.string().min(1) }).parse(input),
  )
  .handler(async ({ data }) => {
    const { data: item, error } = await supabase
      .from("rental_items")
      .select("*")
      .eq("slug", data.slug)
      .maybeSingle();
    if (error) throw new Error(error.message);
    if (!item) return null;

    const { data: category } = await supabase
      .from("rental_categories")
      .select("*")
      .eq("id", item.category_id)
      .maybeSingle();
    const { data: group } = category
      ? await supabase
          .from("rental_groups")
          .select("*")
          .eq("id", category.group_id)
          .maybeSingle()
      : { data: null };


    // Complementary rental recommendations: show items that COMPLETE the
    // adventure kit instead of duplicates. E.g. renting a tent surfaces
    // sleeping bags, mats, stoves — not other tents.
    // Strategy:
    //   1. Same rental group, DIFFERENT category.
    //   2. Fallback to other groups if not enough.
    //   3. Exclude current item, same subcategory, and same category.
    const related: RentalItem[] = [];
    const seen = new Set<string>([item.id]);
    const pushUnique = (rows: RentalItem[]) => {
      for (const r of rows) {
        if (related.length >= 8) break;
        if (seen.has(r.id)) continue;
        if (r.category_id === item.category_id) continue;
        if (
          item.subcategory_id &&
          r.subcategory_id === item.subcategory_id
        )
          continue;
        seen.add(r.id);
        related.push(r);
      }
    };

    if (category?.group_id) {
      const { data: groupCatIds } = await supabase
        .from("rental_categories")
        .select("id")
        .eq("group_id", category.group_id);
      const otherCatIds = (groupCatIds ?? [])
        .map((c) => c.id as string)
        .filter((id) => id !== item.category_id);
      if (otherCatIds.length > 0) {
        const { data: groupRel } = await supabase
          .from("rental_items")
          .select("*")
          .in("category_id", otherCatIds)
          .eq("available", true)
          .limit(40);
        pushUnique(((groupRel ?? []) as RentalItem[]).sort(() => Math.random() - 0.5));
      }
    }

    if (related.length < 8) {
      const { data: anyRel } = await supabase
        .from("rental_items")
        .select("*")
        .neq("category_id", item.category_id)
        .eq("available", true)
        .limit(40);
      pushUnique(((anyRel ?? []) as RentalItem[]).sort(() => Math.random() - 0.5));
    }

    return {
      item: item as RentalItem,
      category: (category ?? null) as RentalCategory | null,
      group: (group ?? null) as RentalGroup | null,
      related,
    };
  });

export type CartLineItem = {
  slug: string;
  kind: "shop" | "rental";
  title: string;
  image: string | null;
  price: number;
  unit: "" | "/сутки" | "/day" | "/დღე";
  available: boolean;
  description: string | null;
};

export const getCartLineItems = createServerFn({ method: "GET" })
  .inputValidator((input: { slugs: string[] }) =>
    z.object({ slugs: z.array(z.string().min(1)).min(1).max(50) }).parse(input),
  )
  .handler(async ({ data }) => {
    const slugs = Array.from(new Set(data.slugs));
    const giftcardSlugs = slugs.filter((s) => /^giftcard-\d+$/.test(s));
    const lookupSlugs = slugs.filter((s) => !giftcardSlugs.includes(s));
    const [{ data: products }, { data: rentals }] = await Promise.all([
      lookupSlugs.length
        ? supabase
            .from("shop_products")
            .select("*")
            .in("slug", lookupSlugs)
        : Promise.resolve({ data: [] as CartShopRow[] }),
      lookupSlugs.length
        ? supabase
            .from("rental_items")
            .select("*")
            .in("slug", lookupSlugs)
        : Promise.resolve({ data: [] as CartRentalRow[] }),
    ]);
    const map = new Map<string, CartLineItem>();
    for (const slug of giftcardSlugs) {
      const amount = Number(slug.split("-")[1]) || 0;
      map.set(slug, {
        slug,
        kind: "shop",
        title: `Подарочная карта на ₾${amount}`,
        image: null,
        price: amount,
        unit: "",
        available: true,
        description: "Действует 6 месяцев с момента покупки.",
      });
    }
    for (const p of (products ?? []) as CartShopRow[]) {
      map.set(p.slug, {
        slug: p.slug,
        kind: "shop",
        title: p.title,
        image: p.image,
        price: getDisplayPrice(p.price, p.sale_price),
        unit: "",
        available: !!p.in_stock,
        description: shortText(p.description),
      });
    }
    for (const r of (rentals ?? []) as CartRentalRow[]) {
      if (map.has(r.slug)) continue;
      map.set(r.slug, {
        slug: r.slug,
        kind: "rental",
        title: r.title,
        image: r.image,
        price: getDisplayPrice(r.price_per_day, r.sale_price_per_day),
        unit: "/сутки",
        available: !!r.available,
        description: shortText(r.shortly ?? r.description),
      });
    }
    return slugs
      .map((s) => map.get(s))
      .filter((x): x is CartLineItem => Boolean(x));
  });

function shortText(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  return trimmed.length > 140 ? trimmed.slice(0, 137) + "…" : trimmed;
}

// ---------- Header navigation ----------
export const getCatalogNav = createServerFn({ method: "GET" }).handler(async () => {
  const [{ data: shopGroups }, { data: shopCats }, { data: rentGroups }, { data: rentCats }] =
    await Promise.all([
      supabase.from("shop_groups").select("*").order("sort_order"),
      supabase.from("shop_categories").select("*").order("sort_order"),
      supabase.from("rental_groups").select("*").order("sort_order"),
      supabase.from("rental_categories").select("*").order("sort_order"),
    ]);
  const visibleShopGroups = filterShopSaleGroup(
    (shopGroups ?? []) as ShopGroup[],
    await hasShopSaleProducts(),
  );
  const normalizedShopGroups = withVirtualShopGroups(visibleShopGroups.map((group) => ({
    ...group,
    image: SHOP_GROUP_IMAGE_OVERRIDES[group.slug] ?? group.image,
  })));
  const groupSlugById = new Map(
    ((shopGroups ?? []) as ShopGroup[]).map((group) => [group.id, group.slug]),
  );
  const normalizedShopCategories = ((shopCats ?? []) as ShopCategory[])
    .filter(
      (category) =>
        !(
          groupSlugById.get(category.group_id) === FITNESS_GROUP_SLUG &&
          category.slug === BALANCE_BOARD_CATEGORY_SLUG
        ),
    )
    .map(normalizeShopCategory);

  return {
    shopGroups: normalizedShopGroups,
    shopCategories: [...normalizedShopCategories, ...createBoardsCategories()],
    rentalGroups: ((rentGroups ?? []) as RentalGroup[]).map((group) => ({
      ...group,
      image: RENTAL_GROUP_IMAGE_OVERRIDES[group.slug] ?? group.image,
    })),
    rentalCategories: (rentCats ?? []) as RentalCategory[],
  };
});

// ---------- Group views (sidebar layout) ----------
export const getShopGroupView = createServerFn({ method: "GET" })
  .inputValidator((input: {
    groupSlug: string;
    categorySlug?: string;
    subcategorySlug?: string;
  }) =>
    z
      .object({
        groupSlug: z.string().min(1),
        categorySlug: z.string().optional(),
        subcategorySlug: z.string().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const { data: groups, error: gse } = await supabase
      .from("shop_groups")
      .select("*")
      .order("sort_order");
    if (gse) throw new Error(gse.message);

    const group =
      ((groups ?? []) as ShopGroup[]).find((g) => g.slug === data.groupSlug) ?? null;
    const visibleRawGroups = filterShopSaleGroup(
      (groups ?? []) as ShopGroup[],
      await hasShopSaleProducts(),
    );
    if (data.groupSlug === BOARDS_GROUP_SLUG) {
      return await getBoardsView(visibleRawGroups, data.categorySlug, data.subcategorySlug);
    }
    if (!group) return null;
    const visibleGroups = withVirtualShopGroups(visibleRawGroups.map((g) => ({
      ...g,
      image: SHOP_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image,
    })));

    const { data: categories, error: ce } = await supabase
      .from("shop_categories")
      .select("*")
      .eq("group_id", group.id)
      .order("sort_order");
    if (ce) throw new Error(ce.message);

    const catList = filterShopCategoriesForGroup(
      group.slug,
      (categories ?? []) as ShopCategory[],
    );
    const catIds = catList.map((c) => c.id);

    const { data: subs } = catIds.length
      ? await supabase
          .from("shop_subcategories")
          .select("*")
          .in("category_id", catIds)
          .order("sort_order")
      : { data: [] as ShopSubcategory[] };

    const subsByCat: Record<string, ShopSubcategory[]> = {};
    for (const s of (subs ?? []) as ShopSubcategory[]) {
      (subsByCat[s.category_id] ||= []).push(s);
    }

    let activeCategory: ShopCategory | null = null;
    let activeSubcategory: ShopSubcategory | null = null;
    if (data.categorySlug) {
      activeCategory = catList.find((c) => c.slug === data.categorySlug) ?? null;
      if (!activeCategory) return null;
      if (data.subcategorySlug) {
        const list = subsByCat[activeCategory.id] ?? [];
        activeSubcategory = list.find((s) => s.slug === data.subcategorySlug) ?? null;
        if (!activeSubcategory) return null;
      }
    }

    // Fetch products for the current scope: subcategory > category > whole group.
    let products: ShopProduct[] = [];
    let q = supabase
      .from("shop_products")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5000);
    if (activeSubcategory) q = q.eq("subcategory_id", activeSubcategory.id);
    else if (activeCategory) q = q.eq("category_id", activeCategory.id);
    else if (catIds.length) q = q.in("category_id", catIds);
    else q = q.eq("category_id", EMPTY_CATEGORY_ID);
    const { data: rows, error: pe } = await q;
    if (pe) throw new Error(pe.message);
    products = sortByCatalogHierarchyThenNewest(
      (rows ?? []) as ShopProductSummaryRow[],
      catList,
      (subs ?? []) as ShopSubcategory[],
    ).map((r) => ({
      ...r,
      description: null,
      legacy_id: null,
      features: [],
    })) as ShopProduct[];
    products = filterShopProductsForGroup(products, group.slug, catList);

    // Attach a representative product image to each category (for tile picker)
    if (catIds.length) {
      const { data: catImgs } = await supabase
        .from("shop_products")
        .select("category_id,image")
        .in("category_id", catIds)
        .not("image", "is", null)
        .limit(2000);
      const catImage: Record<string, string> = {};
      for (const p of (catImgs ?? []) as { category_id: string; image: string }[]) {
        if (!catImage[p.category_id]) catImage[p.category_id] = p.image;
      }
      for (const c of catList) {
        if (!c.image) c.image = catImage[c.id] ?? null;
      }
    }

    return {
      groups: visibleGroups,
      group: normalizeShopGroup(group),
      categories: catList,
      subsByCat,
      activeCategory,
      activeSubcategory,
      products,
    };
  });

export const getRentalGroupView = createServerFn({ method: "GET" })
  .inputValidator((input: {
    groupSlug: string;
    categorySlug?: string;
    subcategorySlug?: string;
  }) =>
    z
      .object({
        groupSlug: z.string().min(1),
        categorySlug: z.string().optional(),
        subcategorySlug: z.string().optional(),
      })
      .parse(input),
  )
  .handler(async ({ data }) => {
    const [groupsResult, categoriesResult] = await Promise.all([
      supabase.from("rental_groups").select("*").order("sort_order"),
      supabase.from("rental_categories").select("*").order("sort_order"),
    ]);
    const { data: groups, error: gse } = groupsResult;
    if (gse) throw new Error(gse.message);

    const group =
      ((groups ?? []) as RentalGroup[]).find((g) => g.slug === data.groupSlug) ?? null;
    if (!group) return null;
    const visibleGroups = ((groups ?? []) as RentalGroup[]).map((g) => ({
      ...g,
      image: RENTAL_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image,
    }));

    const { data: categories, error: ce } = categoriesResult;
    if (ce) throw new Error(ce.message);

    const catList = ((categories ?? []) as RentalCategory[]).filter(
      (category) => category.group_id === group.id,
    );
    const catIds = catList.map((c) => c.id);

    let activeCategory: RentalCategory | null = null;
    if (data.categorySlug) {
      activeCategory = catList.find((c) => c.slug === data.categorySlug) ?? null;
      if (!activeCategory) return null;
    }

    let q = supabase
      .from("rental_items")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(5000);
    if (activeCategory) q = q.eq("category_id", activeCategory.id);
    else if (catIds.length) q = q.in("category_id", catIds);
    else q = q.eq("category_id", "00000000-0000-0000-0000-000000000000");

    const [subsResult, itemsResult] = await Promise.all([
      catIds.length
        ? supabase
            .from("rental_subcategories")
            .select("*")
            .in("category_id", catIds)
            .order("sort_order")
        : Promise.resolve({ data: [] as ShopSubcategory[], error: null }),
      q,
    ]);
    const { data: subs, error: se } = subsResult;
    if (se) throw new Error(se.message);
    const { data: rows, error: ie } = itemsResult;
    if (ie) throw new Error(ie.message);

    const subsByCat: Record<string, ShopSubcategory[]> = {};
    for (const s of (subs ?? []) as ShopSubcategory[]) {
      (subsByCat[s.category_id] ||= []).push(s);
    }

    let activeSubcategory: ShopSubcategory | null = null;
    if (activeCategory && data.subcategorySlug) {
      const list = subsByCat[activeCategory.id] ?? [];
      activeSubcategory = list.find((s) => s.slug === data.subcategorySlug) ?? null;
      if (!activeSubcategory) return null;
    }

    const scopedRows = activeSubcategory
      ? ((rows ?? []) as RentalItemSummaryRow[]).filter(
          (r) => r.subcategory_id === activeSubcategory.id,
        )
      : ((rows ?? []) as RentalItemSummaryRow[]);
    const cleanRows = filterRentalItemsForGroup(scopedRows, group.slug, catList);
    const items = sortByCatalogHierarchyThenNewest(
      cleanRows,
      catList,
      (subs ?? []) as ShopSubcategory[],
    ).map((r) => ({
      ...r,
      description: null,
      legacy_id: null,
      features: [],
    })) as RentalItem[];

    // Attach a representative item image to each category (for tile picker)
    if (catIds.length) {
      const { data: catImgs } = await supabase
        .from("rental_items")
        .select("category_id,image")
        .in("category_id", catIds)
        .not("image", "is", null)
        .limit(2000);
      const catImage: Record<string, string> = {};
      for (const it of (catImgs ?? []) as { category_id: string; image: string }[]) {
        if (!catImage[it.category_id] && CATALOG_IMAGE_FILES.has(it.image)) {
          catImage[it.category_id] = it.image;
        }
      }
      for (const c of catList) {
        if (!c.image || !CATALOG_IMAGE_FILES.has(c.image)) {
          c.image = catImage[c.id] ?? c.image ?? null;
        }
      }
    }

    return {
      groups: visibleGroups,
      group,
      categories: catList,
      subsByCat,
      activeCategory,
      activeSubcategory,
      items,
    };
  });

// ---------- Sale ----------
export const getSaleProducts = createServerFn({ method: "GET" }).handler(async () => {
  const { data: rows, error } = await supabase
    .from("shop_products")
    .select("*")
    .not("image", "is", null)
    .eq("in_stock", true)
    .limit(400);
  if (error) {
    if (isMissingSaleColumnError(error)) return { products: [] as ShopProduct[] };
    throw new Error(error.message);
  }

  const all = ((rows ?? []) as ShopProductSummaryRow[]).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: [],
  })) as ShopProduct[];

  const products = all
    .filter((product) => hasManualDiscount(product.price, product.sale_price))
    .slice(0, 36);
  return { products };
});

export const getSaleRentals = createServerFn({ method: "GET" }).handler(async () => {
  const { data: rows, error } = await supabase
    .from("rental_items")
    .select("*")
    .not("image", "is", null)
    .eq("available", true)
    .limit(400);
  if (error) {
    if (isMissingSaleColumnError(error)) return { items: [] as RentalItem[] };
    throw new Error(error.message);
  }

  const all = ((rows ?? []) as RentalItemSummaryRow[]).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: [],
  })) as RentalItem[];

  const items = all
    .filter((item) => hasManualDiscount(item.price_per_day, item.sale_price_per_day))
    .slice(0, 36);
  return { items };
});
