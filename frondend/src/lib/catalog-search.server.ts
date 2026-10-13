import { createClient } from "@supabase/supabase-js";
import type { Database } from "@/integrations/supabase/types";
import { createAsyncCache } from "./async-cache";
import { createSearchIndex, normalizeSearchText, rankSearchResults, type IndexedDocument } from "./catalog-search";
import { SHOP_CARD_COLUMNS, RENTAL_CARD_COLUMNS } from "./catalog-columns";

type Kind = "shop" | "rental";
type TaxonomyRow = { id: string; title: string; slug: string; group_id?: string; category_id?: string };
type IndexRow = { id: string; title: string; slug: string; description: string | null; category_id: string; subcategory_id: string | null; shortly?: string | null; in_stock?: boolean; available?: boolean };
const indexCache = createAsyncCache<IndexedDocument[]>(60_000, 2);
const resultCache = createAsyncCache<unknown[]>(30_000, 100);
let publicClient: ReturnType<typeof createClient<Database>> | undefined;
let rentalSaleColumnMissingUntil = 0;

function getPublicClient() {
  // A shared public search cache must never inherit an administrator's session.
  publicClient ??= createClient<Database>(
    import.meta.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL!,
    import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY || process.env.SUPABASE_PUBLISHABLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false } },
  );
  return publicClient;
}

async function loadIndex(kind: Kind): Promise<IndexedDocument[]> {
  const db = getPublicClient();
  const table = kind === "shop" ? "shop_products" : "rental_items";
  const loadRows = async () => {
    const rows: IndexRow[] = [];
    // Supabase caps each response at 1,000 rows; explicitly read every page.
    for (let offset = 0;; offset += 1000) {
      const columns = "id,title,slug,description,category_id,subcategory_id," +
        (kind === "shop" ? "in_stock" : "available,shortly");
      const { data, error } = await db.from(table).select(columns)
        .order("id").range(offset, offset + 999);
      if (error) throw new Error(error.message);
      const page = (data ?? []) as unknown as IndexRow[];
      rows.push(...page);
      if (page.length < 1000) break;
    }
    return rows;
  };
  const [rows, groupsResult, categoriesResult, subcategoriesResult] = await Promise.all([
    loadRows(),
    db.from(kind === "shop" ? "shop_groups" : "rental_groups").select("id,title,slug"),
    db.from(kind === "shop" ? "shop_categories" : "rental_categories").select("id,title,slug,group_id"),
    db.from(kind === "shop" ? "shop_subcategories" : "rental_subcategories").select("id,title,slug,category_id"),
  ]);
  for (const result of [groupsResult, categoriesResult, subcategoriesResult]) {
    if (result.error) throw new Error(result.error.message);
  }
  const groups = new Map((groupsResult.data ?? []).map((row) => [row.id, row]));
  const categories = new Map((categoriesResult.data ?? []).map((row) => [row.id, row]));
  const subcategories = new Map((subcategoriesResult.data ?? []).map((row) => [row.id, row]));
  const label = (row?: TaxonomyRow) => row ? `${row.title} ${row.slug}` : "";
  return createSearchIndex(rows.map((row) => {
    const category = categories.get(row.category_id);
    // The old balance_board category contains all board types. Match the
    // virtual categories visitors actually see instead of treating every skate as a balance board.
    const boardText = normalizeSearchText(`${row.title} ${row.slug}`);
    const boardCategory = /серф|surf/.test(boardText) ? "Серфскейты surfskates"
      : /лонг|long/.test(boardText) ? "Лонгборды longboards"
      : /скейт|skate|sk8/.test(boardText) ? "Скейтборды skateboards"
      : "Баланс-борды balanceboards";
    const taxonomy = kind === "shop" && category?.slug === "balance_board"
      ? `Баланс и доски boards ${boardCategory}`
      : [label(category), label(category ? groups.get(category.group_id) : undefined),
        label(row.subcategory_id ? subcategories.get(row.subcategory_id) : undefined)].join(" ");
    return {
      id: row.id, title: row.title, slug: row.slug,
      description: [row.shortly, row.description].filter(Boolean).join(" "),
      taxonomy,
      available: row.in_stock ?? row.available,
    };
  }));
}

export async function searchCatalog(kind: Kind, query: string, limit: number): Promise<unknown[]> {
  const normalized = normalizeSearchText(query);
  if (!normalized) return [];
  return resultCache(`${kind}:${limit}:${normalized}`, async () => {
    const index = await indexCache(kind, () => loadIndex(kind));
    const ids = rankSearchResults(index, query, limit);
    if (!ids.length) return [];
    const result = await getPublicClient()
      .from(kind === "shop" ? "shop_products" : "rental_items")
      .select(kind === "shop" ? SHOP_CARD_COLUMNS
        : Date.now() < rentalSaleColumnMissingUntil ? RENTAL_CARD_COLUMNS.replace(",sale_price_per_day", "")
        : RENTAL_CARD_COLUMNS).in("id", ids);
    let error = result.error;
    let rows = (result.data ?? []) as unknown as { id: string }[];
    if (kind === "rental" && error?.message.includes("sale_price_per_day")) {
      rentalSaleColumnMissingUntil = Date.now() + 5 * 60_000;
      const result = await getPublicClient().from("rental_items")
        .select(RENTAL_CARD_COLUMNS.replace(",sale_price_per_day", "")).in("id", ids);
      rows = (result.data ?? []) as unknown as { id: string }[];
      error = result.error;
    }
    if (error) throw new Error(error.message);
    const byId = new Map(rows.map((row) => [row.id, row]));
    return ids.map((id) => byId.get(id)).filter(Boolean);
  });
}
