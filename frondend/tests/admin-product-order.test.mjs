import assert from "node:assert/strict";
import { test } from "node:test";
import { saveProductOrder } from "../src/lib/admin-product-order.ts";
import { readProductOrder, stripProductOrderMetadata, withProductOrder } from "../src/lib/product-order-metadata.ts";

const product = (id, features = [`Характеристика ${id}`], category_id = "category") => ({ id, category_id, features });
const copy = (value) => structuredClone(value);

function fakeClient(initialRows, beforeUpdate = () => {}, expectedTable = "shop_products") {
  const rows = new Map(initialRows.map((row) => [row.id, copy(row)]));
  const calls = [];
  let active = 0;
  let maxActive = 0;
  const client = {
    from(table) {
      assert.equal(table, expectedTable);
      return {
        update(payload) {
          assert.deepEqual(Object.keys(payload), ["features"]);
          const filters = new Map();
          const query = {
            eq(key, value) { filters.set(key, value); return query; },
            is(key, value) { assert.equal(value, null); filters.set(key, value); return query; },
            select(columns) {
              assert.equal(columns, "id");
              return {
                async maybeSingle() {
                  const call = { table, id: filters.get("id"), payload: copy(payload), filters };
                  calls.push(call);
                  active++;
                  maxActive = Math.max(maxActive, active);
                  try {
                    await Promise.resolve();
                    const error = await beforeUpdate(call, rows, calls.length);
                    if (error) return { data: null, error: { message: error } };
                    const current = rows.get(call.id);
                    const expected = filters.get("features");
                    if (!current || current.category_id !== filters.get("category_id") ||
                      (expected === null ? current.features != null : JSON.stringify(current.features) !== expected)) {
                      return { data: null, error: null };
                    }
                    current.features = copy(payload.features);
                    return { data: { id: current.id }, error: null };
                  } finally { active--; }
                },
              };
            },
          };
          return query;
        },
      };
    },
  };
  return { client, rows, calls, get maxActive() { return maxActive; } };
}

test("persists category order without changing characteristics or its source rows", async () => {
  const products = [
    product("b", ["Материал", ["Вложенная характеристика"], { legacy: "value" }]),
    product("a", ["Размер"]),
  ];
  const original = copy(products);
  const db = fakeClient(products);
  await saveProductOrder(db.client, products);
  assert.deepEqual(products, original);
  products.forEach((row, index) => {
    const stored = db.rows.get(row.id).features;
    assert.equal(readProductOrder(stored), index + 1);
    assert.deepEqual(stripProductOrderMetadata(stored), row.features);
  });
  assert.equal(db.calls.length, 2);
});

test("persists rental order only in rental_items while preserving rental characteristics", async () => {
  const items = [
    product("tent", ["Двухслойная", ["Вместимость: 2 человека"], { legacy: "rental detail" }]),
    product("backpack", { material: "Нейлон", capacity: "60 л" }),
  ];
  const original = copy(items);
  const db = fakeClient(items, undefined, "rental_items");
  await saveProductOrder(db.client, items, "rental_items");
  assert.deepEqual(items, original);
  assert.deepEqual(db.calls.map((call) => call.table), ["rental_items", "rental_items"]);
  items.forEach((row, index) => {
    const stored = db.rows.get(row.id).features;
    assert.equal(readProductOrder(stored), index + 1);
    assert.deepEqual(stripProductOrderMetadata(stored), row.features);
  });
});

test("rental failures compensate in the same table and leave no partial positions", async () => {
  const items = [product("tent"), product("backpack")];
  const db = fakeClient(items, (call) => call.id === "backpack" ? "offline" : undefined, "rental_items");
  await assert.rejects(saveProductOrder(db.client, items, "rental_items"), /изменения отменены/);
  assert.equal(db.calls.length, 3);
  assert.ok(db.calls.every((call) => call.table === "rental_items"));
  items.forEach((row) => assert.deepEqual(db.rows.get(row.id).features, row.features));
});

test("rejects unsupported persistence tables without writes", async () => {
  const db = fakeClient([product("a")]);
  await assert.rejects(saveProductOrder(db.client, [product("a")], "user_roles"), /этой таблицы недоступна/);
  assert.equal(db.calls.length, 0);
});

test("skips unchanged positions and rejects mixed categories or duplicate IDs before writes", async () => {
  const unchanged = [product("a", withProductOrder(["a"], 1)), product("b", withProductOrder(["b"], 2))];
  const db = fakeClient(unchanged);
  await saveProductOrder(db.client, unchanged);
  assert.equal(db.calls.length, 0);
  await assert.rejects(saveProductOrder(db.client, [product("a"), product("b", [], "other")]), /одной категории/);
  await assert.rejects(saveProductOrder(db.client, [product("a"), product("a")]), /повторяющиеся/);
  assert.equal(db.calls.length, 0);
});

test("limits parallel writes to five and saves subsequent batches", async () => {
  const products = Array.from({ length: 12 }, (_, index) => product(String(index)));
  const db = fakeClient(products);
  await saveProductOrder(db.client, products);
  assert.equal(db.calls.length, products.length);
  assert.equal(db.maxActive, 5);
  products.forEach((row, index) => assert.equal(readProductOrder(db.rows.get(row.id).features), index + 1));
});

test("compensates successful writes and stops before another batch after a failure", async () => {
  const products = Array.from({ length: 12 }, (_, index) => product(String(index)));
  let rejected = false;
  const db = fakeClient(products, (call) => {
    if (call.id === "7" && !rejected) { rejected = true; return "offline"; }
  });
  await assert.rejects(saveProductOrder(db.client, products), /изменения отменены/);
  products.forEach((row) => assert.deepEqual(db.rows.get(row.id).features, row.features));
  assert.ok(!db.calls.some((call) => call.id === "10" || call.id === "11"));
  assert.ok(db.maxActive <= 5);
});

test("compare-and-set preserves characteristics edited by another administrator", async () => {
  const products = [product("a"), product("b")];
  const concurrentFeatures = ["Новая характеристика другого администратора"];
  let edited = false;
  const db = fakeClient(products, (call, rows) => {
    if (call.id === "b" && !edited) { edited = true; rows.get("b").features = copy(concurrentFeatures); }
  });
  await assert.rejects(saveProductOrder(db.client, products), /изменения отменены/);
  assert.deepEqual(db.rows.get("b").features, concurrentFeatures);
  assert.deepEqual(db.rows.get("a").features, products[0].features);
});

test("does not update a product moved into another category during saving", async () => {
  const products = [product("a"), product("b")];
  const db = fakeClient(products, (call, rows) => {
    if (call.id === "b") rows.get("b").category_id = "other";
  });
  await assert.rejects(saveProductOrder(db.client, products), /изменения отменены/);
  assert.equal(db.rows.get("b").category_id, "other");
  products.forEach((row) => assert.deepEqual(db.rows.get(row.id).features, row.features));
});

test("reports incomplete compensation and preserves a concurrent edit made after saving", async () => {
  const products = [product("a"), product("b")];
  const concurrentFeatures = ["Редактирование после сортировки"];
  const db = fakeClient(products, (call, rows) => {
    if (call.id === "b") return "offline";
    if (call.id === "a" && readProductOrder(call.payload.features) === null) {
      rows.get("a").features = copy(concurrentFeatures);
    }
  });
  await assert.rejects(saveProductOrder(db.client, products), /отменить часть изменений/);
  assert.deepEqual(db.rows.get("a").features, concurrentFeatures);
  assert.deepEqual(db.rows.get("b").features, products[1].features);
});
