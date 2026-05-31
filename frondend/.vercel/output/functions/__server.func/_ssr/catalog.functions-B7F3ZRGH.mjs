import { c as createServerRpc } from "./createServerRpc-wV0Vk4NU.mjs";
import { c as createServerFn } from "./index.mjs";
import { s as supabase } from "./client-0tcAzMYp.mjs";
import { C as CATALOG_IMAGE_FILES } from "./catalog-images.generated-g7c8bOKs.mjs";
import { s as sortShopGroups } from "./shop-group-order-BMA7MIrt.mjs";
import { a as getDisplayPrice, h as hasManualDiscount } from "./discount-DnxRxSbc.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType, n as numberType, a as arrayType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
const SHOP_COMPLEMENT_MAP = {
  // Cycling / Roller
  roller: ["protection", "helmet", "kneePads", "fitness_gloves", "sunglasses", "socks"],
  protection: ["helmet", "roller", "kneePads", "fitness_gloves", "sunglasses"],
  helmet: ["protection", "roller", "kneePads", "sunglasses", "fitness_gloves"],
  bike_accessories: ["helmet", "protection", "sunglasses", "bottle", "backpack"],
  // Tourism / Camping
  tent: ["sleepingbag", "mat", "lantern", "gas_burner", "chair", "knife"],
  sleepingbag: ["tent", "mat", "hermo", "lantern", "thermalUnderwear"],
  mat: ["tent", "sleepingbag", "lantern", "hammock"],
  backpack: ["bottle", "hermo", "lantern", "rope", "sunglasses", "knife"],
  trekkingsticks: ["backpack", "shoes", "bottle", "sunglasses", "hat"],
  hermo: ["bottle", "backpack", "dishes", "tent"],
  gas_burner: ["dishes", "tent", "hermo", "knife", "food"],
  lantern: ["tent", "sleepingbag", "knife", "backpack"],
  sunglasses: ["hat", "buff", "backpack", "trekkingsticks"],
  termoryukzak: ["bottle", "hermo", "food", "dishes"],
  bottle: ["backpack", "hermo", "isotonic", "trekkingsticks"],
  dishes: ["gas_burner", "tent", "knife", "food"],
  barbecue: ["knife", "dishes", "food", "chair"],
  knife: ["backpack", "tent", "lantern", "rope"],
  binoculars: ["backpack", "sunglasses", "hat"],
  chair: ["tent", "hammock", "barbecue", "lantern"],
  hammock: ["mat", "rope", "chair", "lantern"],
  rope: ["knife", "backpack", "safety", "trekkingsticks"],
  air: ["mat", "tent", "sleepingbag"],
  safety: ["helmet", "rope", "lantern", "backpack"],
  technic: ["lantern", "backpack", "binoculars"],
  food: ["isotonic", "bottle", "hermo", "dishes"],
  // Clothes / Shoes
  windbreaker: ["pants", "shoes", "buff", "hat", "fleece_jacket", "backpack"],
  fleece_jacket: ["windbreaker", "thermalUnderwear", "pants", "hat", "buff"],
  down_jackets: ["thermalUnderwear", "hat", "clothes_gloves", "pants", "buff"],
  pants: ["windbreaker", "shoes", "socks", "fleece_jacket", "thermalUnderwear"],
  shoes: ["socks", "pants", "care", "trekkingsticks"],
  buff: ["hat", "windbreaker", "sunglasses", "fleece_jacket"],
  clothes_gloves: ["hat", "buff", "thermalUnderwear", "down_jackets"],
  hat: ["buff", "windbreaker", "clothes_gloves", "fleece_jacket"],
  care: ["shoes", "pants", "windbreaker"],
  thermalUnderwear: ["socks", "fleece_jacket", "hat", "clothes_gloves", "pants"],
  socks: ["shoes", "pants", "thermalUnderwear"],
  underwear: ["thermalUnderwear", "socks", "pants"],
  // Martial arts
  boxing_gloves: ["bandages", "martialart_mouth_guard", "martialart_helmet", "martialart_protection", "paws"],
  martialart_helmet: ["boxing_gloves", "martialart_protection", "martialart_mouth_guard", "bandages"],
  martialart_mouth_guard: ["boxing_gloves", "martialart_helmet", "bandages"],
  martialart_protection: ["boxing_gloves", "martialart_helmet", "bandages", "martialart_mouth_guard"],
  paws: ["boxing_gloves", "bandages", "martialart_protection"],
  bandages: ["boxing_gloves", "martialart_mouth_guard", "martialart_protection"],
  martialart_clothes: ["martialart_shoes", "boxing_gloves", "bandages"],
  martialart_shoes: ["martialart_clothes", "boxing_gloves", "bandages"],
  martialart_rubber: ["martialart_exercise", "boxing_gloves", "bandages"],
  martialart_mma: ["boxing_gloves", "bandages", "martialart_mouth_guard", "martialart_protection"],
  martialart_exercise: ["martialart_rubber", "boxing_gloves", "bandages"],
  // Sports
  tennis: ["isotonic", "kneePads", "fitness_gloves", "shoes"],
  padel: ["isotonic", "kneePads", "shoes"],
  mini: ["isotonic", "shoes"],
  badminton: ["isotonic", "kneePads", "shoes"],
  baseball: ["kneePads", "shoes", "isotonic"],
  frisbee: ["isotonic", "shoes", "sunglasses"],
  football: ["kneePads", "isotonic", "shoes", "socks"],
  basketball: ["kneePads", "isotonic", "shoes", "socks"],
  volleyball: ["kneePads", "isotonic", "shoes"],
  rugby: ["kneePads", "isotonic", "shoes"],
  kneePads: ["fitness_gloves", "isotonic", "shoes"],
  isotonic: ["bottle", "shaker", "kneePads"],
  // Fitness
  fitness_gloves: ["kettlebells", "jumprope", "extender", "mats", "shaker"],
  kettlebells: ["fitness_gloves", "mats", "jumprope", "extender", "shaker"],
  accessories_fitnes: ["mats", "fitness_gloves", "extender", "elasticbands"],
  shaker: ["isotonic", "kettlebells", "fitness_gloves", "bottle"],
  extender: ["fitness_gloves", "mats", "elasticbands", "kettlebells"],
  jumprope: ["mats", "fitness_gloves", "shaker", "extender"],
  elasticbands: ["mats", "extender", "fitness_gloves", "gymnastic"],
  mats: ["jumprope", "fitness_gloves", "balance_board", "gymnastic", "elasticbands"],
  hoop: ["mats", "fitness_gloves", "jumprope"],
  gymnastic: ["mats", "elasticbands", "balance_board"],
  balance_board: ["mats", "gymnastic", "fitness_gloves"],
  // Swimming / SUP
  supboard: ["oar", "vest", "sup_accessories", "fin", "hat_sea"],
  oar: ["supboard", "vest", "sup_accessories"],
  fin: ["mask", "goggles", "hat_sea", "vest"],
  vest: ["supboard", "oar", "sup_accessories"],
  sup_accessories: ["supboard", "oar", "vest"],
  mask: ["goggles", "fin", "hat_sea"],
  goggles: ["mask", "fin", "hat_sea"],
  hat_sea: ["mask", "goggles", "vest"],
  // Alpine / Ski
  snowboardsky: ["snowboardsky_boots", "fasteners_sky", "helmet_sky", "skigoggles", "gloves_sky", "bag_sky"],
  snowboardsky_boots: ["socks_sky", "snowboardsky", "gloves_sky", "fasteners_sky"],
  fasteners_sky: ["snowboardsky", "snowboardsky_boots", "sky_care", "bag_sky"],
  closes_ski: ["thermalUnderwear", "gloves_sky", "socks_sky", "buff", "helmet_sky"],
  helmet_sky: ["skigoggles", "gloves_sky", "buff", "snowboardsky", "closes_ski"],
  skigoggles: ["helmet_sky", "buff", "gloves_sky", "sunscreen"],
  sky_care: ["snowboardsky", "fasteners_sky", "bag_sky"],
  air_sky: ["closes_ski", "thermalUnderwear", "buff"],
  gloves_sky: ["helmet_sky", "skigoggles", "socks_sky", "buff"],
  socks_sky: ["snowboardsky_boots", "gloves_sky", "thermalUnderwear"],
  snowshoes: ["trekkingsticks", "gloves_sky", "thermalUnderwear", "socks_sky"],
  bag_sky: ["snowboardsky", "snowboardsky_boots", "sky_care"],
  winter_chains: ["sky_care", "bag_sky"],
  sunscreen: ["skigoggles", "buff", "sunglasses"]
};
const EMPTY_CATEGORY_ID = "00000000-0000-0000-0000-000000000000";
const BOARDS_GROUP_SLUG = "boards";
const BALANCE_BOARD_CATEGORY_SLUG = "balance_board";
const SPORTS_RENTAL_GROUP_SLUG = "sportsRental";
const SPORTS_GROUP_SLUG = "sports";
const FITNESS_GROUP_SLUG = "fitness";
const SPORTS_AIR_CATEGORY_SLUG = "air";
const SHOP_GROUP_IMAGE_OVERRIDES = {
  cyclingRoller: "b1f2b627383337af48f04d809f5c9453.webp",
  martial: "b4a5-68313d694eb1a61.avif"
};
const RENTAL_GROUP_IMAGE_OVERRIDES = {
  sportsRental: "kross-r6-rent.jpg"
};
const SHOP_GROUP_TITLE_OVERRIDES = {
  cyclingRoller: "Велоспорт и ролики",
  boards: "Баланс и доски",
  sports: "Игровой спорт",
  fitness: "Фитнес и йога",
  swimmingSup: "Плавание и сапы"
};
const SHOP_CATEGORY_TITLE_OVERRIDES = {
  boxing_gloves: "Перчатки для бокса",
  martialart_helmet: "Шлемы",
  martialart_protection: "Защита",
  bandages: "Бинты для рук",
  martialart_rubber: "Резина и жгуты",
  martialart_mma: "Перчатки MMA",
  martialart_exercise: "Тренажеры"
};
const BOARDS_CATEGORY_DEFS = [{
  slug: "skateboards",
  title: "Скейтборды"
}, {
  slug: "longboards",
  title: "Лонгборды"
}, {
  slug: "surfskates",
  title: "Серфскейты"
}, {
  slug: "balanceboards",
  title: "Баланс-борды"
}];
const SPORTS_RENTAL_ALLOWED_ITEMS = {
  rentTEAMSPORT: [{
    image: "beach-volleyball-size-5-bv100-classic-turquoise-kipsta.png",
    price: 5
  }, {
    image: "018.29.27.png",
    price: 5
  }, {
    image: "6337498439.jpg",
    price: 5
  }],
  rentFITNESS: [{
    image: "mat_with_case.jpg",
    price: 4
  }],
  rentROLLER: [{
    image: "easy-roll-3in1-skates-1-773445237516.png",
    price: 40
  }, {
    image: "f3a392a0-9695-41c1-9895-084b1f7b477e-Photoroom.png",
    price: 40
  }, {
    image: "super-youngster-3in1-skates-2-800565924102.png",
    price: 40
  }, {
    image: "IMG_9518.PNG",
    price: 40
  }, {
    image: "IMG_9520.PNG",
    price: 40
  }, {
    image: "9b748ca8-550b-4653-bf5b-a16d9981e097.webp",
    price: 40
  }, {
    image: "52f839fd-e196-4c58-b2b6-1262bfa2da10.png",
    price: 40
  }],
  rentBOARD: [{
    image: "i-can-play-surfskate-947096861241.png",
    price: 25
  }, {
    image: "IMG_8857.PNG",
    price: 25
  }, {
    image: "IMG_8860.JPEG",
    price: 25
  }, {
    image: "IMG_4474.PNG",
    price: 10
  }],
  rentBIKE: [{
    image: "trinx-m600-rent.png",
    price: 10
  }, {
    image: "kross-6-0-rent.jpg",
    price: 10
  }, {
    image: "kross-r6-rent.jpg",
    price: 10
  }, {
    image: "kross-5-0-rent.jpg",
    price: 10
  }]
};
function normalizeShopGroup(group) {
  return {
    ...group,
    title: SHOP_GROUP_TITLE_OVERRIDES[group.slug] ?? group.title
  };
}
function normalizeShopCategory(category) {
  return {
    ...category,
    title: SHOP_CATEGORY_TITLE_OVERRIDES[category.slug] ?? category.title
  };
}
function createBoardsGroup(image = null) {
  return {
    id: "virtual-boards",
    slug: BOARDS_GROUP_SLUG,
    title: SHOP_GROUP_TITLE_OVERRIDES.boards,
    image,
    sort_order: 9
  };
}
function createBoardsCategories(products = []) {
  const imageByCategory = /* @__PURE__ */ new Map();
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
    sort_order: index + 1
  }));
}
function withVirtualShopGroups(groups, boardImage = null) {
  const normalized = groups.map(normalizeShopGroup);
  const hasBoards = normalized.some((group) => group.slug === BOARDS_GROUP_SLUG);
  return sortShopGroups(hasBoards ? normalized : [...normalized, createBoardsGroup(boardImage)]);
}
function productHaystack(product) {
  return [product.title, product.slug, product.image].filter(Boolean).join(" ").toLowerCase();
}
function getBoardCategorySlug(product) {
  const haystack = productHaystack(product);
  if (/серф|surf/.test(haystack)) return "surfskates";
  if (/лонг|long/.test(haystack)) return "longboards";
  if (/скейт|skate|sk8/.test(haystack)) return "skateboards";
  return "balanceboards";
}
function isPillowOrMattressProduct(product) {
  return /подуш|pillow|матрас|mattress|airbasic|u-neck/.test(productHaystack(product));
}
function filterShopCategoriesForGroup(groupSlug, categories) {
  const visible = groupSlug === FITNESS_GROUP_SLUG ? categories.filter((category) => category.slug !== BALANCE_BOARD_CATEGORY_SLUG) : categories;
  return visible.map(normalizeShopCategory);
}
function filterShopProductsForGroup(products, groupSlug, categories) {
  if (groupSlug !== SPORTS_GROUP_SLUG) return products;
  const airCategoryIds = new Set(categories.filter((category) => category.slug === SPORTS_AIR_CATEGORY_SLUG).map((category) => category.id));
  if (airCategoryIds.size === 0) return products;
  return products.filter((product) => !airCategoryIds.has(product.category_id) || !isPillowOrMattressProduct(product));
}
function filterRentalItemsForGroup(items, groupSlug, categories) {
  if (groupSlug !== SPORTS_RENTAL_GROUP_SLUG) return items;
  const categorySlugById = new Map(categories.map((category) => [category.id, category.slug]));
  const seen = /* @__PURE__ */ new Set();
  return items.filter((item) => {
    const categorySlug = categorySlugById.get(item.category_id);
    const allowedItems = categorySlug ? SPORTS_RENTAL_ALLOWED_ITEMS[categorySlug] : void 0;
    if (!allowedItems) return false;
    const allowed = allowedItems.find((entry) => entry.image === item.image && entry.price === Number(item.price_per_day));
    if (!allowed) return false;
    const key = `${categorySlug}:${allowed.image}:${allowed.price}`;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}
function isMissingSaleColumnError(error) {
  return /sale_price|sale_price_per_day/i.test(error?.message ?? "");
}
function rowsHaveShopDiscount(rows) {
  return rows.some((row) => hasManualDiscount(row.price, row.sale_price));
}
async function hasShopSaleProducts() {
  const {
    data,
    error
  } = await supabase.from("shop_products").select("price,sale_price").eq("in_stock", true).limit(1e3);
  if (error) return false;
  return rowsHaveShopDiscount(data ?? []);
}
function filterShopSaleGroup(groups, showSaleGroup) {
  return groups.filter((group) => group.slug !== "sale" || showSaleGroup);
}
function sortByCatalogHierarchyThenNewest(rows, categories, subcategories = []) {
  const categoryRank = new Map(categories.map((category, index) => [category.id, {
    index,
    sortOrder: Number(category.sort_order ?? Number.MAX_SAFE_INTEGER),
    title: category.title ?? ""
  }]));
  const subcategoryRank = new Map(subcategories.map((subcategory, index) => [subcategory.id, {
    categoryId: subcategory.category_id,
    index,
    sortOrder: Number(subcategory.sort_order ?? Number.MAX_SAFE_INTEGER),
    title: subcategory.title ?? ""
  }]));
  return [...rows].sort((a, b) => {
    const aCategory = categoryRank.get(a.category_id);
    const bCategory = categoryRank.get(b.category_id);
    const byCategorySort = (aCategory?.sortOrder ?? Number.MAX_SAFE_INTEGER) - (bCategory?.sortOrder ?? Number.MAX_SAFE_INTEGER);
    if (byCategorySort !== 0) return byCategorySort;
    const byCategoryIndex = (aCategory?.index ?? Number.MAX_SAFE_INTEGER) - (bCategory?.index ?? Number.MAX_SAFE_INTEGER);
    if (byCategoryIndex !== 0) return byCategoryIndex;
    const aSubcategory = a.subcategory_id ? subcategoryRank.get(a.subcategory_id) : void 0;
    const bSubcategory = b.subcategory_id ? subcategoryRank.get(b.subcategory_id) : void 0;
    const bySubcategorySort = (aSubcategory?.sortOrder ?? Number.MAX_SAFE_INTEGER) - (bSubcategory?.sortOrder ?? Number.MAX_SAFE_INTEGER);
    if (bySubcategorySort !== 0) return bySubcategorySort;
    const bySubcategoryIndex = (aSubcategory?.index ?? Number.MAX_SAFE_INTEGER) - (bSubcategory?.index ?? Number.MAX_SAFE_INTEGER);
    if (bySubcategoryIndex !== 0) return bySubcategoryIndex;
    const byNewest = Date.parse(b.created_at ?? "") - Date.parse(a.created_at ?? "");
    if (!Number.isNaN(byNewest) && byNewest !== 0) return byNewest;
    return String(a.title ?? "").localeCompare(String(b.title ?? ""), "ru");
  });
}
async function getBalanceBoardSourceCategory() {
  const {
    data: category,
    error
  } = await supabase.from("shop_categories").select("*").eq("slug", BALANCE_BOARD_CATEGORY_SLUG).maybeSingle();
  if (error) throw new Error(error.message);
  return category ?? null;
}
async function getBoardProducts() {
  const sourceCategory = await getBalanceBoardSourceCategory();
  if (!sourceCategory) return [];
  const {
    data: rows,
    error
  } = await supabase.from("shop_products").select("*").eq("category_id", sourceCategory.id).order("created_at", {
    ascending: false
  }).limit(500);
  if (error) throw new Error(error.message);
  return (rows ?? []).map((row) => ({
    ...row,
    description: null,
    legacy_id: null,
    features: []
  }));
}
async function getBoardsView(groups, categorySlug, subcategorySlug) {
  if (subcategorySlug) return null;
  const products = await getBoardProducts();
  const categories = createBoardsCategories(products);
  const group = createBoardsGroup(products.find((product) => product.image)?.image ?? null);
  const activeCategory = categorySlug ? categories.find((category) => category.slug === categorySlug) ?? null : null;
  if (categorySlug && !activeCategory) return null;
  return {
    groups: withVirtualShopGroups(groups, group.image),
    group,
    categories,
    subsByCat: {},
    activeCategory,
    activeSubcategory: null,
    products: activeCategory ? products.filter((product) => getBoardCategorySlug(product) === activeCategory.slug) : products
  };
}
const listShopGroups_createServerFn_handler = createServerRpc({
  id: "1f1965490baf0720c23fa259555c4316b901461f0e86210badc140904b46816c",
  name: "listShopGroups",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listShopGroups.__executeServer(opts));
const listShopGroups = createServerFn({
  method: "GET"
}).handler(listShopGroups_createServerFn_handler, async () => {
  const [{
    data: groups,
    error
  }, {
    data: cats
  }, {
    data: prods
  }, saleResult] = await Promise.all([supabase.from("shop_groups").select("*").order("sort_order"), supabase.from("shop_categories").select("id,group_id,slug"), supabase.from("shop_products").select("category_id,image").not("image", "is", null).limit(2e3), supabase.from("shop_products").select("price,sale_price").eq("in_stock", true).limit(1e3)]);
  if (error) throw new Error(error.message);
  const catById = new Map((cats ?? []).map((c) => [c.id, c]));
  const groupImage = {};
  let boardImage = null;
  for (const p of prods ?? []) {
    const category = catById.get(p.category_id);
    if (!category) continue;
    if (category.slug === BALANCE_BOARD_CATEGORY_SLUG) {
      boardImage ||= p.image;
      continue;
    }
    if (!groupImage[category.group_id]) groupImage[category.group_id] = p.image;
  }
  const showSaleGroup = !saleResult.error && rowsHaveShopDiscount(saleResult.data ?? []);
  const baseGroups = filterShopSaleGroup(groups ?? [], showSaleGroup);
  return withVirtualShopGroups(baseGroups.map((g) => ({
    ...g,
    image: SHOP_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image ?? groupImage[g.id] ?? null
  })), boardImage);
});
const listAllShopCategories_createServerFn_handler = createServerRpc({
  id: "09557be2876269fcfcae243def27d89ac515f3f458d307f436550d081ee75514",
  name: "listAllShopCategories",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listAllShopCategories.__executeServer(opts));
const listAllShopCategories = createServerFn({
  method: "GET"
}).handler(listAllShopCategories_createServerFn_handler, async () => {
  const [{
    data: groups,
    error: ge
  }, {
    data: cats,
    error: ce
  }] = await Promise.all([supabase.from("shop_groups").select("*").order("sort_order"), supabase.from("shop_categories").select("*").order("sort_order")]);
  if (ge) throw new Error(ge.message);
  if (ce) throw new Error(ce.message);
  const groupsList = withVirtualShopGroups(groups ?? []);
  const groupSlugById = new Map((groups ?? []).map((group) => [group.id, group.slug]));
  return {
    groups: groupsList,
    categories: [...(cats ?? []).filter((category) => !(groupSlugById.get(category.group_id) === FITNESS_GROUP_SLUG && category.slug === BALANCE_BOARD_CATEGORY_SLUG)).map(normalizeShopCategory), ...createBoardsCategories()]
  };
});
const getShopCategoryBySlug_createServerFn_handler = createServerRpc({
  id: "b7db1b2098419cb7dbcc797222afcc16999a3013de0b96d8b2bfe94f7f2c1c53",
  name: "getShopCategoryBySlug",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getShopCategoryBySlug.__executeServer(opts));
const getShopCategoryBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(getShopCategoryBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    data: category,
    error: ce
  } = await supabase.from("shop_categories").select("*").eq("slug", data.categorySlug).maybeSingle();
  if (ce) throw new Error(ce.message);
  if (!category) return null;
  const {
    data: group
  } = await supabase.from("shop_groups").select("*").eq("id", category.group_id).maybeSingle();
  const {
    data: subcategories,
    error: sce
  } = await supabase.from("shop_subcategories").select("*").eq("category_id", category.id).order("sort_order");
  if (sce) throw new Error(sce.message);
  let activeSub = null;
  if (data.subcategorySlug) {
    activeSub = (subcategories ?? []).find((s) => s.slug === data.subcategorySlug) ?? null;
    if (!activeSub) return null;
  }
  let q = supabase.from("shop_products").select("*").eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (activeSub) q = q.eq("subcategory_id", activeSub.id);
  const {
    data: products,
    error: pe
  } = await q;
  if (pe) throw new Error(pe.message);
  return {
    group: group ?? null,
    category,
    subcategories: subcategories ?? [],
    activeSubcategory: activeSub,
    products: products ?? []
  };
});
const getRentalCategoryBySlugWithSub_createServerFn_handler = createServerRpc({
  id: "890babc5afd5ebea25aad54ab275cde853ce1d6b359e7b51386cbc96e9224640",
  name: "getRentalCategoryBySlugWithSub",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalCategoryBySlugWithSub.__executeServer(opts));
const getRentalCategoryBySlugWithSub = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(getRentalCategoryBySlugWithSub_createServerFn_handler, async ({
  data
}) => {
  const {
    data: category,
    error: ce
  } = await supabase.from("rental_categories").select("*").eq("slug", data.categorySlug).maybeSingle();
  if (ce) throw new Error(ce.message);
  if (!category) return null;
  const {
    data: group
  } = await supabase.from("rental_groups").select("*").eq("id", category.group_id).maybeSingle();
  const {
    data: subcategories
  } = await supabase.from("rental_subcategories").select("*").eq("category_id", category.id).order("sort_order");
  let activeSub = null;
  if (data.subcategorySlug) {
    activeSub = (subcategories ?? []).find((s) => s.slug === data.subcategorySlug) ?? null;
    if (!activeSub) return null;
  }
  let q = supabase.from("rental_items").select("*").eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (activeSub) q = q.eq("subcategory_id", activeSub.id);
  const {
    data: items,
    error: ie
  } = await q;
  if (ie) throw new Error(ie.message);
  return {
    group: group ?? null,
    category,
    subcategories: subcategories ?? [],
    activeSubcategory: activeSub,
    items: items ?? []
  };
});
const getShopGroupWithCategories_createServerFn_handler = createServerRpc({
  id: "32c11ab75568a96effb27374cba2290d897b7d8d9d57e1fd431ce70bc724dbdd",
  name: "getShopGroupWithCategories",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getShopGroupWithCategories.__executeServer(opts));
const getShopGroupWithCategories = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1)
}).parse(input)).handler(getShopGroupWithCategories_createServerFn_handler, async ({
  data
}) => {
  if (data.groupSlug === BOARDS_GROUP_SLUG) {
    return {
      group: createBoardsGroup(),
      categories: createBoardsCategories()
    };
  }
  const {
    data: group,
    error: ge
  } = await supabase.from("shop_groups").select("*").eq("slug", data.groupSlug).maybeSingle();
  if (ge) throw new Error(ge.message);
  if (!group) return null;
  const {
    data: categories,
    error: ce
  } = await supabase.from("shop_categories").select("*").eq("group_id", group.id).order("sort_order");
  if (ce) throw new Error(ce.message);
  return {
    group: normalizeShopGroup(group),
    categories: filterShopCategoriesForGroup(group.slug, categories ?? [])
  };
});
const getShopCategoryView_createServerFn_handler = createServerRpc({
  id: "219cf6453070a4612f6bd3bb65f56d0e431e02449a65874bc12e6075babda955",
  name: "getShopCategoryView",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getShopCategoryView.__executeServer(opts));
const getShopCategoryView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().min(1),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(getShopCategoryView_createServerFn_handler, async ({
  data
}) => {
  if (data.groupSlug === BOARDS_GROUP_SLUG) {
    const boardView = await getBoardsView([], data.categorySlug, data.subcategorySlug);
    if (!boardView || !boardView.activeCategory) return null;
    return {
      group: boardView.group,
      category: boardView.activeCategory,
      subcategories: [],
      activeSubcategory: null,
      products: boardView.products
    };
  }
  const {
    data: group,
    error: ge
  } = await supabase.from("shop_groups").select("*").eq("slug", data.groupSlug).maybeSingle();
  if (ge) throw new Error(ge.message);
  if (!group) return null;
  const {
    data: category,
    error: ce
  } = await supabase.from("shop_categories").select("*").eq("group_id", group.id).eq("slug", data.categorySlug).maybeSingle();
  if (ce) throw new Error(ce.message);
  if (!category) return null;
  const {
    data: subcategories,
    error: sce
  } = await supabase.from("shop_subcategories").select("*").eq("category_id", category.id).order("sort_order");
  if (sce) throw new Error(sce.message);
  let activeSub = null;
  if (data.subcategorySlug) {
    activeSub = (subcategories ?? []).find((s) => s.slug === data.subcategorySlug) ?? null;
    if (!activeSub) return null;
  }
  let q = supabase.from("shop_products").select("*").eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (activeSub) q = q.eq("subcategory_id", activeSub.id);
  const {
    data: productRows,
    error: pe
  } = await q;
  if (pe) throw new Error(pe.message);
  const products = (productRows ?? []).filter((product) => !(group.slug === SPORTS_GROUP_SLUG && category.slug === SPORTS_AIR_CATEGORY_SLUG && isPillowOrMattressProduct(product)));
  return {
    group: normalizeShopGroup(group),
    category: normalizeShopCategory(category),
    subcategories: subcategories ?? [],
    activeSubcategory: activeSub,
    products
  };
});
const getShopProductBySlug_createServerFn_handler = createServerRpc({
  id: "bf3b3228beaf0b5fc017ad1357cdc9a2bf90689b0609e6f851ec8e13ed6e58a4",
  name: "getShopProductBySlug",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getShopProductBySlug.__executeServer(opts));
const getShopProductBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1)
}).parse(input)).handler(getShopProductBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    data: product,
    error
  } = await supabase.from("shop_products").select("*").eq("slug", data.slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (!product) return null;
  const {
    data: category
  } = await supabase.from("shop_categories").select("*").eq("id", product.category_id).maybeSingle();
  const {
    data: group
  } = category ? await supabase.from("shop_groups").select("*").eq("id", category.group_id).maybeSingle() : {
    data: null
  };
  const TARGET = 8;
  const related = [];
  const seen = /* @__PURE__ */ new Set([product.id]);
  const pushOne = (r) => {
    if (related.length >= TARGET) return false;
    if (seen.has(r.id)) return false;
    if (r.category_id === product.category_id) return false;
    if (product.subcategory_id && r.subcategory_id === product.subcategory_id) return false;
    seen.add(r.id);
    related.push(r);
    return true;
  };
  const shuffle = (arr) => arr.slice().sort(() => Math.random() - 0.5);
  const complementSlugs = category ? SHOP_COMPLEMENT_MAP[category.slug] ?? [] : [];
  if (complementSlugs.length > 0) {
    const {
      data: compCats
    } = await supabase.from("shop_categories").select("id,slug").in("slug", complementSlugs);
    const slugToId = new Map((compCats ?? []).map((c) => [c.slug, c.id]));
    const orderedIds = complementSlugs.map((s) => slugToId.get(s)).filter((id) => Boolean(id));
    if (orderedIds.length > 0) {
      const {
        data: candidates
      } = await supabase.from("shop_products").select("*").in("category_id", orderedIds).eq("in_stock", true).limit(200);
      const byCat = /* @__PURE__ */ new Map();
      for (const r of candidates ?? []) {
        if (!byCat.has(r.category_id)) byCat.set(r.category_id, []);
        byCat.get(r.category_id).push(r);
      }
      for (const [, list] of byCat) shuffle(list);
      let added = true;
      while (added && related.length < TARGET) {
        added = false;
        for (const id of orderedIds) {
          if (related.length >= TARGET) break;
          const list = byCat.get(id);
          if (!list || list.length === 0) continue;
          const next = list.shift();
          if (pushOne(next)) added = true;
        }
      }
    }
  }
  if (related.length < TARGET && category?.group_id) {
    const {
      data: groupCatIds
    } = await supabase.from("shop_categories").select("id").eq("group_id", category.group_id);
    const otherCatIds = (groupCatIds ?? []).map((c) => c.id).filter((id) => id !== product.category_id);
    if (otherCatIds.length > 0) {
      const {
        data: groupRel
      } = await supabase.from("shop_products").select("*").in("category_id", otherCatIds).eq("in_stock", true).limit(60);
      for (const r of shuffle(groupRel ?? [])) {
        if (related.length >= TARGET) break;
        pushOne(r);
      }
    }
  }
  if (related.length < TARGET) {
    const {
      data: anyRel
    } = await supabase.from("shop_products").select("*").neq("category_id", product.category_id).eq("in_stock", true).limit(60);
    for (const r of shuffle(anyRel ?? [])) {
      if (related.length >= TARGET) break;
      pushOne(r);
    }
  }
  return {
    product,
    category: category ?? null,
    group: group ?? null,
    related
  };
});
async function getFeaturedProductsByCategorySlugs(slugs, limit) {
  const {
    data: categories,
    error: categoryError
  } = await supabase.from("shop_categories").select("id,slug").in("slug", slugs);
  if (categoryError) throw new Error(categoryError.message);
  const categoryIds = (categories ?? []).map((category) => category.id);
  if (categoryIds.length === 0) return [];
  const {
    data: products,
    error
  } = await supabase.from("shop_products").select("*").in("category_id", categoryIds).eq("in_stock", true).order("created_at", {
    ascending: false
  }).limit(Math.max(limit * 4, 20));
  if (error) throw new Error(error.message);
  return (products ?? []).filter((product) => product.image && CATALOG_IMAGE_FILES.has(product.image)).slice(0, limit);
}
const listLatestProducts_createServerFn_handler = createServerRpc({
  id: "6cabca30f37e344192c80bd77f7a568b090d19069ff21d136d8322e66fa0a509",
  name: "listLatestProducts",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listLatestProducts.__executeServer(opts));
const listLatestProducts = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  limit: numberType().min(1).max(50).optional()
}).parse(input ?? {})).handler(listLatestProducts_createServerFn_handler, async ({
  data
}) => {
  const limit = data.limit ?? 6;
  const rollerLimit = Math.min(2, limit);
  const boardLimit = Math.max(limit - rollerLimit, 0);
  const [boardProducts, rollerProducts] = await Promise.all([getFeaturedProductsByCategorySlugs([BALANCE_BOARD_CATEGORY_SLUG], boardLimit), getFeaturedProductsByCategorySlugs(["roller", "rollers"], rollerLimit)]);
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (const product of [...boardProducts, ...rollerProducts]) {
    if (seen.has(product.id)) continue;
    seen.add(product.id);
    result.push(product);
    if (result.length >= limit) break;
  }
  return result;
});
const listProductsBySlugs_createServerFn_handler = createServerRpc({
  id: "179f7261fd5d340576725bf7fc600d8d9cd7172237163fb37319256e13a185ba",
  name: "listProductsBySlugs",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listProductsBySlugs.__executeServer(opts));
const listProductsBySlugs = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slugs: arrayType(stringType().min(1)).min(1).max(20)
}).parse(input)).handler(listProductsBySlugs_createServerFn_handler, async ({
  data
}) => {
  const {
    data: products,
    error
  } = await supabase.from("shop_products").select("*").in("slug", data.slugs).eq("in_stock", true);
  if (error) throw new Error(error.message);
  const bySlug = new Map((products ?? []).map((p) => [p.slug, p]));
  return data.slugs.map((s) => bySlug.get(s)).filter((p) => Boolean(p));
});
const searchShopProducts_createServerFn_handler = createServerRpc({
  id: "c80f203faa6984a0990a2f5e32e49bfc5eba9cbd097a69a103920a1bfb20ef9c",
  name: "searchShopProducts",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => searchShopProducts.__executeServer(opts));
const searchShopProducts = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  q: stringType().min(1).max(100),
  limit: numberType().min(1).max(100).optional()
}).parse(input)).handler(searchShopProducts_createServerFn_handler, async ({
  data
}) => {
  const limit = data.limit ?? 60;
  const q = data.q.trim();
  if (!q) return [];
  const SYNONYMS = {
    "спальник": ["спальн"],
    "спальники": ["спальн"]
  };
  const lower = q.toLowerCase();
  const terms = /* @__PURE__ */ new Set([q]);
  for (const [key, vals] of Object.entries(SYNONYMS)) {
    if (lower.includes(key)) for (const v of vals) terms.add(v);
  }
  const patterns = Array.from(terms).map((t) => `%${t}%`);
  const orFilter = (col) => patterns.map((p) => `${col}.ilike.${p}`).join(",");
  const [catsRes, subsRes] = await Promise.all([supabase.from("shop_categories").select("id").or(orFilter("title")), supabase.from("shop_subcategories").select("id").or(orFilter("title"))]);
  if (catsRes.error) throw new Error(catsRes.error.message);
  if (subsRes.error) throw new Error(subsRes.error.message);
  const catIds = (catsRes.data ?? []).map((c) => c.id);
  const subIds = (subsRes.data ?? []).map((s) => s.id);
  const queries = [supabase.from("shop_products").select("*").or(`${orFilter("title")},${orFilter("description")}`).limit(limit)];
  if (catIds.length) {
    queries.push(supabase.from("shop_products").select("*").in("category_id", catIds).limit(limit));
  }
  if (subIds.length) {
    queries.push(supabase.from("shop_products").select("*").in("subcategory_id", subIds).limit(limit));
  }
  const results = await Promise.all(queries);
  const seen = /* @__PURE__ */ new Set();
  const merged = [];
  for (const r of results) {
    if (r.error) throw new Error(r.error.message);
    for (const p of r.data ?? []) {
      if (seen.has(p.id)) continue;
      seen.add(p.id);
      merged.push(p);
      if (merged.length >= limit) break;
    }
    if (merged.length >= limit) break;
  }
  return merged;
});
const searchRentalItems_createServerFn_handler = createServerRpc({
  id: "cabc48c43ec23a0866d3aebf4246b636d0e91c2331d1eda11be683e6c8b36e13",
  name: "searchRentalItems",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => searchRentalItems.__executeServer(opts));
const searchRentalItems = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  q: stringType().min(1).max(100),
  limit: numberType().min(1).max(100).optional()
}).parse(input)).handler(searchRentalItems_createServerFn_handler, async ({
  data
}) => {
  const limit = data.limit ?? 60;
  const q = data.q.trim();
  if (!q) return [];
  const patterns = [`%${q}%`];
  const orFilter = (col) => patterns.map((p) => `${col}.ilike.${p}`).join(",");
  const [groupsRes, catsRes, subsRes] = await Promise.all([supabase.from("rental_groups").select("id").or(orFilter("title")), supabase.from("rental_categories").select("id,group_id").or(orFilter("title")), supabase.from("rental_subcategories").select("id").or(orFilter("title"))]);
  if (groupsRes.error) throw new Error(groupsRes.error.message);
  if (catsRes.error) throw new Error(catsRes.error.message);
  if (subsRes.error) throw new Error(subsRes.error.message);
  const groupIds = (groupsRes.data ?? []).map((g) => g.id);
  const groupCategoryIds = groupIds.length ? await supabase.from("rental_categories").select("id").in("group_id", groupIds) : {
    data: [],
    error: null
  };
  if (groupCategoryIds.error) throw new Error(groupCategoryIds.error.message);
  const catIds = [...(catsRes.data ?? []).map((c) => c.id), ...(groupCategoryIds.data ?? []).map((c) => c.id)];
  const subIds = (subsRes.data ?? []).map((s) => s.id);
  const queries = [supabase.from("rental_items").select("*").or(`${orFilter("title")},${orFilter("description")},${orFilter("shortly")}`).limit(limit)];
  if (catIds.length) {
    queries.push(supabase.from("rental_items").select("*").in("category_id", catIds).limit(limit));
  }
  if (subIds.length) {
    queries.push(supabase.from("rental_items").select("*").in("subcategory_id", subIds).limit(limit));
  }
  const results = await Promise.all(queries);
  const seen = /* @__PURE__ */ new Set();
  const merged = [];
  for (const r of results) {
    if (r.error) throw new Error(r.error.message);
    for (const item of r.data ?? []) {
      if (seen.has(item.id)) continue;
      seen.add(item.id);
      merged.push(item);
      if (merged.length >= limit) break;
    }
    if (merged.length >= limit) break;
  }
  return merged;
});
const listOneProductPerCategorySlug_createServerFn_handler = createServerRpc({
  id: "de45ef92726d4f286cdc6352c62af7c5bb7a66adce4de7a43cb7de9e3be782fc",
  name: "listOneProductPerCategorySlug",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listOneProductPerCategorySlug.__executeServer(opts));
const listOneProductPerCategorySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlugs: arrayType(stringType().min(1)).min(1).max(20)
}).parse(input)).handler(listOneProductPerCategorySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    data: cats,
    error: ce
  } = await supabase.from("shop_categories").select("id,slug").in("slug", data.categorySlugs);
  if (ce) throw new Error(ce.message);
  const catList = cats ?? [];
  if (catList.length === 0) return [];
  const ids = catList.map((c) => c.id);
  const {
    data: products,
    error
  } = await supabase.from("shop_products").select("*").in("category_id", ids).eq("in_stock", true);
  if (error) throw new Error(error.message);
  const all = (products ?? []).filter((p) => p.image && CATALOG_IMAGE_FILES.has(p.image));
  const slugById = new Map(catList.map((c) => [c.id, c.slug]));
  const pickedBySlug = /* @__PURE__ */ new Map();
  for (const p of all) {
    const slug = slugById.get(p.category_id);
    if (slug && !pickedBySlug.has(slug)) pickedBySlug.set(slug, p);
  }
  return data.categorySlugs.map((s) => pickedBySlug.get(s)).filter((p) => Boolean(p));
});
const listRelatedProducts_createServerFn_handler = createServerRpc({
  id: "480fc608907a994787a62a090c70785f42aef9c60ba8fddf663564157772da47",
  name: "listRelatedProducts",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listRelatedProducts.__executeServer(opts));
const listRelatedProducts = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categoryId: stringType().min(1),
  excludeId: stringType().min(1),
  limit: numberType().min(1).max(20).optional()
}).parse(input)).handler(listRelatedProducts_createServerFn_handler, async ({
  data
}) => {
  const {
    data: products,
    error
  } = await supabase.from("shop_products").select("*").eq("category_id", data.categoryId).neq("id", data.excludeId).limit(data.limit ?? 4);
  if (error) throw new Error(error.message);
  return products ?? [];
});
const listRentalGroups_createServerFn_handler = createServerRpc({
  id: "e75a6741ef669d4164790034db785d5e32a41ffe6499fbea92817801f26e3478",
  name: "listRentalGroups",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listRentalGroups.__executeServer(opts));
const listRentalGroups = createServerFn({
  method: "GET"
}).handler(listRentalGroups_createServerFn_handler, async () => {
  const [{
    data: groups,
    error
  }, {
    data: cats
  }, {
    data: items
  }] = await Promise.all([supabase.from("rental_groups").select("*").order("sort_order"), supabase.from("rental_categories").select("id,group_id"), supabase.from("rental_items").select("category_id,image").not("image", "is", null).limit(2e3)]);
  if (error) throw new Error(error.message);
  const catToGroup = new Map((cats ?? []).map((c) => [c.id, c.group_id]));
  const groupImage = {};
  for (const it of items ?? []) {
    const g = catToGroup.get(it.category_id);
    if (g && !groupImage[g]) groupImage[g] = it.image;
  }
  return (groups ?? []).map((g) => ({
    ...g,
    image: RENTAL_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image ?? groupImage[g.id] ?? null
  }));
});
const listAllRentalCategories_createServerFn_handler = createServerRpc({
  id: "b519af0bd4afa00bcc3dbd753733a69d4be4e44408e0b0ae1e152b191ba5ab9b",
  name: "listAllRentalCategories",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => listAllRentalCategories.__executeServer(opts));
const listAllRentalCategories = createServerFn({
  method: "GET"
}).handler(listAllRentalCategories_createServerFn_handler, async () => {
  const [{
    data: groups,
    error: ge
  }, {
    data: cats,
    error: ce
  }] = await Promise.all([supabase.from("rental_groups").select("*").order("sort_order"), supabase.from("rental_categories").select("*").order("sort_order")]);
  if (ge) throw new Error(ge.message);
  if (ce) throw new Error(ce.message);
  return {
    groups: groups ?? [],
    categories: cats ?? []
  };
});
const getRentalCategoryBySlug_createServerFn_handler = createServerRpc({
  id: "ab5b27bf6456cfc4c5ae49321245220e31b8167fa1a430c94adf2b366a0b7492",
  name: "getRentalCategoryBySlug",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalCategoryBySlug.__executeServer(opts));
const getRentalCategoryBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  categorySlug: stringType().min(1)
}).parse(input)).handler(getRentalCategoryBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    data: category,
    error: ce
  } = await supabase.from("rental_categories").select("*").eq("slug", data.categorySlug).maybeSingle();
  if (ce) throw new Error(ce.message);
  if (!category) return null;
  const {
    data: group
  } = await supabase.from("rental_groups").select("*").eq("id", category.group_id).maybeSingle();
  const {
    data: subcategories
  } = await supabase.from("rental_subcategories").select("*").eq("category_id", category.id).order("sort_order");
  const {
    data: items,
    error: ie
  } = await supabase.from("rental_items").select("*").eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (ie) throw new Error(ie.message);
  return {
    group: group ?? null,
    category,
    subcategories: subcategories ?? [],
    items: items ?? []
  };
});
const getRentalGroupWithCategories_createServerFn_handler = createServerRpc({
  id: "dea915146ace9a9e89cf3aba49cbd112884b87224a21da7dcf875880edbc4e2f",
  name: "getRentalGroupWithCategories",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalGroupWithCategories.__executeServer(opts));
const getRentalGroupWithCategories = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1)
}).parse(input)).handler(getRentalGroupWithCategories_createServerFn_handler, async ({
  data
}) => {
  const {
    data: group,
    error: ge
  } = await supabase.from("rental_groups").select("*").eq("slug", data.groupSlug).maybeSingle();
  if (ge) throw new Error(ge.message);
  if (!group) return null;
  const {
    data: categories,
    error: ce
  } = await supabase.from("rental_categories").select("*").eq("group_id", group.id).order("sort_order");
  if (ce) throw new Error(ce.message);
  return {
    group,
    categories: categories ?? []
  };
});
const getRentalCategoryView_createServerFn_handler = createServerRpc({
  id: "a4ae9132d3043d5d8e5d3f607bf4736bfc6b1e629ea5e242a9e1d7ecb6d0897f",
  name: "getRentalCategoryView",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalCategoryView.__executeServer(opts));
const getRentalCategoryView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().min(1)
}).parse(input)).handler(getRentalCategoryView_createServerFn_handler, async ({
  data
}) => {
  const {
    data: group,
    error: ge
  } = await supabase.from("rental_groups").select("*").eq("slug", data.groupSlug).maybeSingle();
  if (ge) throw new Error(ge.message);
  if (!group) return null;
  const {
    data: category,
    error: ce
  } = await supabase.from("rental_categories").select("*").eq("group_id", group.id).eq("slug", data.categorySlug).maybeSingle();
  if (ce) throw new Error(ce.message);
  if (!category) return null;
  const {
    data: items,
    error: ie
  } = await supabase.from("rental_items").select("*").eq("category_id", category.id).order("created_at", {
    ascending: false
  });
  if (ie) throw new Error(ie.message);
  return {
    group,
    category,
    items: items ?? []
  };
});
const getRentalItemBySlug_createServerFn_handler = createServerRpc({
  id: "a4d97f94c786fd86b1040b7178566cd6aaf3e3eb204424db1134f1e11b9aab22",
  name: "getRentalItemBySlug",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalItemBySlug.__executeServer(opts));
const getRentalItemBySlug = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slug: stringType().min(1)
}).parse(input)).handler(getRentalItemBySlug_createServerFn_handler, async ({
  data
}) => {
  const {
    data: item,
    error
  } = await supabase.from("rental_items").select("*").eq("slug", data.slug).maybeSingle();
  if (error) throw new Error(error.message);
  if (!item) return null;
  const {
    data: category
  } = await supabase.from("rental_categories").select("*").eq("id", item.category_id).maybeSingle();
  const {
    data: group
  } = category ? await supabase.from("rental_groups").select("*").eq("id", category.group_id).maybeSingle() : {
    data: null
  };
  const related = [];
  const seen = /* @__PURE__ */ new Set([item.id]);
  const pushUnique = (rows) => {
    for (const r of rows) {
      if (related.length >= 8) break;
      if (seen.has(r.id)) continue;
      if (r.category_id === item.category_id) continue;
      if (item.subcategory_id && r.subcategory_id === item.subcategory_id) continue;
      seen.add(r.id);
      related.push(r);
    }
  };
  if (category?.group_id) {
    const {
      data: groupCatIds
    } = await supabase.from("rental_categories").select("id").eq("group_id", category.group_id);
    const otherCatIds = (groupCatIds ?? []).map((c) => c.id).filter((id) => id !== item.category_id);
    if (otherCatIds.length > 0) {
      const {
        data: groupRel
      } = await supabase.from("rental_items").select("*").in("category_id", otherCatIds).eq("available", true).limit(40);
      pushUnique((groupRel ?? []).sort(() => Math.random() - 0.5));
    }
  }
  if (related.length < 8) {
    const {
      data: anyRel
    } = await supabase.from("rental_items").select("*").neq("category_id", item.category_id).eq("available", true).limit(40);
    pushUnique((anyRel ?? []).sort(() => Math.random() - 0.5));
  }
  return {
    item,
    category: category ?? null,
    group: group ?? null,
    related
  };
});
const getCartLineItems_createServerFn_handler = createServerRpc({
  id: "efc1fdde15af8371f49afe188e2d1b4cae89674c9a74cbe8bb558c51b5ed7efa",
  name: "getCartLineItems",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getCartLineItems.__executeServer(opts));
const getCartLineItems = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  slugs: arrayType(stringType().min(1)).min(1).max(50)
}).parse(input)).handler(getCartLineItems_createServerFn_handler, async ({
  data
}) => {
  const slugs = Array.from(new Set(data.slugs));
  const giftcardSlugs = slugs.filter((s) => /^giftcard-\d+$/.test(s));
  const lookupSlugs = slugs.filter((s) => !giftcardSlugs.includes(s));
  const [{
    data: products
  }, {
    data: rentals
  }] = await Promise.all([lookupSlugs.length ? supabase.from("shop_products").select("*").in("slug", lookupSlugs) : Promise.resolve({
    data: []
  }), lookupSlugs.length ? supabase.from("rental_items").select("*").in("slug", lookupSlugs) : Promise.resolve({
    data: []
  })]);
  const map = /* @__PURE__ */ new Map();
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
      description: "Действует 6 месяцев с момента покупки."
    });
  }
  for (const p of products ?? []) {
    map.set(p.slug, {
      slug: p.slug,
      kind: "shop",
      title: p.title,
      image: p.image,
      price: getDisplayPrice(p.price, p.sale_price),
      unit: "",
      available: !!p.in_stock,
      description: shortText(p.description)
    });
  }
  for (const r of rentals ?? []) {
    if (map.has(r.slug)) continue;
    map.set(r.slug, {
      slug: r.slug,
      kind: "rental",
      title: r.title,
      image: r.image,
      price: getDisplayPrice(r.price_per_day, r.sale_price_per_day),
      unit: "/сутки",
      available: !!r.available,
      description: shortText(r.shortly ?? r.description)
    });
  }
  return slugs.map((s) => map.get(s)).filter((x) => Boolean(x));
});
function shortText(value) {
  if (typeof value !== "string") return null;
  const trimmed = value.replace(/\s+/g, " ").trim();
  if (!trimmed) return null;
  return trimmed.length > 140 ? trimmed.slice(0, 137) + "…" : trimmed;
}
const getCatalogNav_createServerFn_handler = createServerRpc({
  id: "e4fc291f55a2c79d5aa2ddc2dd57c60c190aeac198f8f662aaa5d2dfdc143b2b",
  name: "getCatalogNav",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getCatalogNav.__executeServer(opts));
const getCatalogNav = createServerFn({
  method: "GET"
}).handler(getCatalogNav_createServerFn_handler, async () => {
  const [{
    data: shopGroups
  }, {
    data: shopCats
  }, {
    data: rentGroups
  }, {
    data: rentCats
  }] = await Promise.all([supabase.from("shop_groups").select("*").order("sort_order"), supabase.from("shop_categories").select("*").order("sort_order"), supabase.from("rental_groups").select("*").order("sort_order"), supabase.from("rental_categories").select("*").order("sort_order")]);
  const visibleShopGroups = filterShopSaleGroup(shopGroups ?? [], await hasShopSaleProducts());
  const normalizedShopGroups = withVirtualShopGroups(visibleShopGroups.map((group) => ({
    ...group,
    image: SHOP_GROUP_IMAGE_OVERRIDES[group.slug] ?? group.image
  })));
  const groupSlugById = new Map((shopGroups ?? []).map((group) => [group.id, group.slug]));
  const normalizedShopCategories = (shopCats ?? []).filter((category) => !(groupSlugById.get(category.group_id) === FITNESS_GROUP_SLUG && category.slug === BALANCE_BOARD_CATEGORY_SLUG)).map(normalizeShopCategory);
  return {
    shopGroups: normalizedShopGroups,
    shopCategories: [...normalizedShopCategories, ...createBoardsCategories()],
    rentalGroups: (rentGroups ?? []).map((group) => ({
      ...group,
      image: RENTAL_GROUP_IMAGE_OVERRIDES[group.slug] ?? group.image
    })),
    rentalCategories: rentCats ?? []
  };
});
const getShopGroupView_createServerFn_handler = createServerRpc({
  id: "c918c9ea880298972393527d1055e7baff8da0aea170e6442d014f79a41c4611",
  name: "getShopGroupView",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getShopGroupView.__executeServer(opts));
const getShopGroupView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().optional(),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(getShopGroupView_createServerFn_handler, async ({
  data
}) => {
  const {
    data: groups,
    error: gse
  } = await supabase.from("shop_groups").select("*").order("sort_order");
  if (gse) throw new Error(gse.message);
  const group = (groups ?? []).find((g) => g.slug === data.groupSlug) ?? null;
  const visibleRawGroups = filterShopSaleGroup(groups ?? [], await hasShopSaleProducts());
  if (data.groupSlug === BOARDS_GROUP_SLUG) {
    return await getBoardsView(visibleRawGroups, data.categorySlug, data.subcategorySlug);
  }
  if (!group) return null;
  const visibleGroups = withVirtualShopGroups(visibleRawGroups.map((g) => ({
    ...g,
    image: SHOP_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image
  })));
  const {
    data: categories,
    error: ce
  } = await supabase.from("shop_categories").select("*").eq("group_id", group.id).order("sort_order");
  if (ce) throw new Error(ce.message);
  const catList = filterShopCategoriesForGroup(group.slug, categories ?? []);
  const catIds = catList.map((c) => c.id);
  const {
    data: subs
  } = catIds.length ? await supabase.from("shop_subcategories").select("*").in("category_id", catIds).order("sort_order") : {
    data: []
  };
  const subsByCat = {};
  for (const s of subs ?? []) {
    (subsByCat[s.category_id] ||= []).push(s);
  }
  let activeCategory = null;
  let activeSubcategory = null;
  if (data.categorySlug) {
    activeCategory = catList.find((c) => c.slug === data.categorySlug) ?? null;
    if (!activeCategory) return null;
    if (data.subcategorySlug) {
      const list = subsByCat[activeCategory.id] ?? [];
      activeSubcategory = list.find((s) => s.slug === data.subcategorySlug) ?? null;
      if (!activeSubcategory) return null;
    }
  }
  let products = [];
  let q = supabase.from("shop_products").select("*").order("created_at", {
    ascending: false
  }).limit(5e3);
  if (activeSubcategory) q = q.eq("subcategory_id", activeSubcategory.id);
  else if (activeCategory) q = q.eq("category_id", activeCategory.id);
  else if (catIds.length) q = q.in("category_id", catIds);
  else q = q.eq("category_id", EMPTY_CATEGORY_ID);
  const {
    data: rows,
    error: pe
  } = await q;
  if (pe) throw new Error(pe.message);
  products = sortByCatalogHierarchyThenNewest(rows ?? [], catList, subs ?? []).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: []
  }));
  products = filterShopProductsForGroup(products, group.slug, catList);
  if (catIds.length) {
    const {
      data: catImgs
    } = await supabase.from("shop_products").select("category_id,image").in("category_id", catIds).not("image", "is", null).limit(2e3);
    const catImage = {};
    for (const p of catImgs ?? []) {
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
    products
  };
});
const getRentalGroupView_createServerFn_handler = createServerRpc({
  id: "b73861788fbe3e2d6a9adc3a091c35b347c3bc6229ce38672c13b77c82ca54e0",
  name: "getRentalGroupView",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getRentalGroupView.__executeServer(opts));
const getRentalGroupView = createServerFn({
  method: "GET"
}).inputValidator((input) => objectType({
  groupSlug: stringType().min(1),
  categorySlug: stringType().optional(),
  subcategorySlug: stringType().optional()
}).parse(input)).handler(getRentalGroupView_createServerFn_handler, async ({
  data
}) => {
  const [groupsResult, categoriesResult] = await Promise.all([supabase.from("rental_groups").select("*").order("sort_order"), supabase.from("rental_categories").select("*").order("sort_order")]);
  const {
    data: groups,
    error: gse
  } = groupsResult;
  if (gse) throw new Error(gse.message);
  const group = (groups ?? []).find((g) => g.slug === data.groupSlug) ?? null;
  if (!group) return null;
  const visibleGroups = (groups ?? []).map((g) => ({
    ...g,
    image: RENTAL_GROUP_IMAGE_OVERRIDES[g.slug] ?? g.image
  }));
  const {
    data: categories,
    error: ce
  } = categoriesResult;
  if (ce) throw new Error(ce.message);
  const catList = (categories ?? []).filter((category) => category.group_id === group.id);
  const catIds = catList.map((c) => c.id);
  let activeCategory = null;
  if (data.categorySlug) {
    activeCategory = catList.find((c) => c.slug === data.categorySlug) ?? null;
    if (!activeCategory) return null;
  }
  let q = supabase.from("rental_items").select("*").order("created_at", {
    ascending: false
  }).limit(5e3);
  if (activeCategory) q = q.eq("category_id", activeCategory.id);
  else if (catIds.length) q = q.in("category_id", catIds);
  else q = q.eq("category_id", "00000000-0000-0000-0000-000000000000");
  const [subsResult, itemsResult] = await Promise.all([catIds.length ? supabase.from("rental_subcategories").select("*").in("category_id", catIds).order("sort_order") : Promise.resolve({
    data: [],
    error: null
  }), q]);
  const {
    data: subs,
    error: se
  } = subsResult;
  if (se) throw new Error(se.message);
  const {
    data: rows,
    error: ie
  } = itemsResult;
  if (ie) throw new Error(ie.message);
  const subsByCat = {};
  for (const s of subs ?? []) {
    (subsByCat[s.category_id] ||= []).push(s);
  }
  let activeSubcategory = null;
  if (activeCategory && data.subcategorySlug) {
    const list = subsByCat[activeCategory.id] ?? [];
    activeSubcategory = list.find((s) => s.slug === data.subcategorySlug) ?? null;
    if (!activeSubcategory) return null;
  }
  const scopedRows = activeSubcategory ? (rows ?? []).filter((r) => r.subcategory_id === activeSubcategory.id) : rows ?? [];
  const cleanRows = filterRentalItemsForGroup(scopedRows, group.slug, catList);
  const items = sortByCatalogHierarchyThenNewest(cleanRows, catList, subs ?? []).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: []
  }));
  if (catIds.length) {
    const {
      data: catImgs
    } = await supabase.from("rental_items").select("category_id,image").in("category_id", catIds).not("image", "is", null).limit(2e3);
    const catImage = {};
    for (const it of catImgs ?? []) {
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
    items
  };
});
const getSaleProducts_createServerFn_handler = createServerRpc({
  id: "ad0767bd552d4402da48051fa3f60c7d1a6970f734dc19e69f4a597cae791021",
  name: "getSaleProducts",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getSaleProducts.__executeServer(opts));
const getSaleProducts = createServerFn({
  method: "GET"
}).handler(getSaleProducts_createServerFn_handler, async () => {
  const {
    data: rows,
    error
  } = await supabase.from("shop_products").select("*").not("image", "is", null).eq("in_stock", true).limit(400);
  if (error) {
    if (isMissingSaleColumnError(error)) return {
      products: []
    };
    throw new Error(error.message);
  }
  const all = (rows ?? []).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: []
  }));
  const products = all.filter((product) => hasManualDiscount(product.price, product.sale_price)).slice(0, 36);
  return {
    products
  };
});
const getSaleRentals_createServerFn_handler = createServerRpc({
  id: "8b6a42ddf76d53c4d934b3066fdadf1bb2ff7b3704698e8c8a48a1c6fc1229a5",
  name: "getSaleRentals",
  filename: "src/lib/catalog.functions.ts"
}, (opts) => getSaleRentals.__executeServer(opts));
const getSaleRentals = createServerFn({
  method: "GET"
}).handler(getSaleRentals_createServerFn_handler, async () => {
  const {
    data: rows,
    error
  } = await supabase.from("rental_items").select("*").not("image", "is", null).eq("available", true).limit(400);
  if (error) {
    if (isMissingSaleColumnError(error)) return {
      items: []
    };
    throw new Error(error.message);
  }
  const all = (rows ?? []).map((r) => ({
    ...r,
    description: null,
    legacy_id: null,
    features: []
  }));
  const items = all.filter((item) => hasManualDiscount(item.price_per_day, item.sale_price_per_day)).slice(0, 36);
  return {
    items
  };
});
export {
  getCartLineItems_createServerFn_handler,
  getCatalogNav_createServerFn_handler,
  getRentalCategoryBySlugWithSub_createServerFn_handler,
  getRentalCategoryBySlug_createServerFn_handler,
  getRentalCategoryView_createServerFn_handler,
  getRentalGroupView_createServerFn_handler,
  getRentalGroupWithCategories_createServerFn_handler,
  getRentalItemBySlug_createServerFn_handler,
  getSaleProducts_createServerFn_handler,
  getSaleRentals_createServerFn_handler,
  getShopCategoryBySlug_createServerFn_handler,
  getShopCategoryView_createServerFn_handler,
  getShopGroupView_createServerFn_handler,
  getShopGroupWithCategories_createServerFn_handler,
  getShopProductBySlug_createServerFn_handler,
  listAllRentalCategories_createServerFn_handler,
  listAllShopCategories_createServerFn_handler,
  listLatestProducts_createServerFn_handler,
  listOneProductPerCategorySlug_createServerFn_handler,
  listProductsBySlugs_createServerFn_handler,
  listRelatedProducts_createServerFn_handler,
  listRentalGroups_createServerFn_handler,
  listShopGroups_createServerFn_handler,
  searchRentalItems_createServerFn_handler,
  searchShopProducts_createServerFn_handler
};
