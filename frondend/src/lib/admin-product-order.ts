import { readProductOrder, withProductOrder } from "./product-order-metadata.ts";

type ProductOrderRow = {
  id: string;
  category_id: string;
  features: unknown;
  sort_order?: number | null;
};

type UpdateResult = {
  data: { id: string } | null;
  error: { message?: string } | null;
};

type UpdateQuery = {
  eq(column: string, value: unknown): UpdateQuery;
  is(column: string, value: null): UpdateQuery;
  select(columns: string): { maybeSingle(): PromiseLike<UpdateResult> };
};

type OrderClient = {
  from(table: "shop_products"): {
    update(values: { features: unknown }): UpdateQuery;
  };
};

type OrderChange = {
  row: ProductOrderRow;
  features: unknown;
};

const SAVE_BATCH_SIZE = 5;

async function updateFeatures(
  client: OrderClient,
  row: ProductOrderRow,
  expectedFeatures: unknown,
  features: unknown,
) {
  let query = client.from("shop_products")
    .update({ features })
    .eq("id", row.id)
    .eq("category_id", row.category_id);
  query = expectedFeatures == null
    ? query.is("features", null)
    : query.eq("features", JSON.stringify(expectedFeatures));
  const { data, error } = await query.select("id").maybeSingle();
  if (error) throw new Error(error.message || "Не удалось обновить товар");
  if (!data) {
    throw new Error("Товар уже изменён или перемещён. Обновите список и повторите сортировку.");
  }
}

/** Save only ordering metadata, preserving concurrent edits to characteristics. */
export async function saveProductOrder(client: unknown, orderedRows: readonly ProductOrderRow[]) {
  // Keep Supabase's generated generic query types outside this small persistence boundary.
  const db = client as OrderClient;
  if (!orderedRows.length) return;
  const categoryId = orderedRows[0].category_id;
  if (!categoryId || orderedRows.some((row) => row.category_id !== categoryId)) {
    throw new Error("Сортировка доступна только внутри одной категории");
  }
  if (orderedRows.some((row) => !row.id) || new Set(orderedRows.map((row) => row.id)).size !== orderedRows.length) {
    throw new Error("Список товаров содержит повторяющиеся или отсутствующие ID");
  }

  const changes = orderedRows.flatMap((row, index): OrderChange[] =>
    readProductOrder(row.features) === index + 1
      ? []
      : [{ row, features: withProductOrder(row.features, index + 1) }],
  );
  const saved: OrderChange[] = [];

  for (let offset = 0; offset < changes.length; offset += SAVE_BATCH_SIZE) {
    const batch = changes.slice(offset, offset + SAVE_BATCH_SIZE);
    const results = await Promise.allSettled(batch.map((change) =>
      updateFeatures(db, change.row, change.row.features, change.features),
    ));
    let failure: PromiseRejectedResult | undefined;
    results.forEach((result, index) => {
      if (result.status === "fulfilled") saved.push(batch[index]);
      else failure ??= result;
    });
    if (!failure) continue;

    let rollbackFailed = false;
    for (let rollbackOffset = 0; rollbackOffset < saved.length; rollbackOffset += SAVE_BATCH_SIZE) {
      const rollback = saved.slice(rollbackOffset, rollbackOffset + SAVE_BATCH_SIZE);
      const rollbackResults = await Promise.allSettled(rollback.map((change) =>
        updateFeatures(db, change.row, change.features, change.row.features),
      ));
      if (rollbackResults.some((result) => result.status === "rejected")) rollbackFailed = true;
    }
    if (rollbackFailed) {
      throw new Error(
        "Не удалось сохранить порядок полностью и отменить часть изменений. Обновите список и проверьте порядок товаров.",
        { cause: failure.reason },
      );
    }
    throw new Error(
      "Порядок не сохранён: изменения отменены. Обновите список и попробуйте ещё раз.",
      { cause: failure.reason },
    );
  }
}
