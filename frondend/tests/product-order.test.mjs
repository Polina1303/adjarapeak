import test from "node:test";
import assert from "node:assert/strict";
import {
  compareProductOrder,
  compareProductsNewestFirst,
  sortProductsByCatalogOrder,
} from "../src/lib/product-order.ts";

const categories = [
  { id: "clothes", sort_order: 1 },
  { id: "equipment", sort_order: 2 },
];
const subcategories = [
  { id: "jackets", category_id: "clothes", sort_order: 1 },
  { id: "trousers", category_id: "clothes", sort_order: 2 },
];
const product = (id, extra = {}) => ({
  id,
  title: id,
  category_id: "clothes",
  subcategory_id: "jackets",
  created_at: "2026-11-01",
  ...extra,
});
const ids = (rows) => rows.map((row) => row.id);

test("manual positions override subcategory order within their category", () => {
  const rows = [
    product("jacket", { sort_order: 2 }),
    product("trousers", { subcategory_id: "trousers", sort_order: 1 }),
    product("equipment", { category_id: "equipment", sort_order: 1 }),
    product("new-unranked", { created_at: "2026-11-26" }),
  ];
  assert.deepEqual(ids(sortProductsByCatalogOrder(rows, categories, subcategories)), [
    "trousers", "jacket", "new-unranked", "equipment",
  ]);
  assert.deepEqual(ids(rows), ["jacket", "trousers", "equipment", "new-unranked"]);
});

test("unranked products retain subcategory order and newest-first fallback", () => {
  const rows = [
    product("trousers", { subcategory_id: "trousers", created_at: "2026-11-26" }),
    product("old-jacket", { created_at: "2026-10-01", sort_order: null }),
    product("new-jacket", { created_at: "2026-11-01" }),
    product("no-subcategory", { subcategory_id: null }),
  ];
  assert.deepEqual(ids(sortProductsByCatalogOrder(rows, categories, subcategories)), [
    "new-jacket", "old-jacket", "trousers", "no-subcategory",
  ]);
});

test("only finite positive manual positions move products ahead of unranked items", () => {
  for (const sort_order of [null, undefined, 0, -1, NaN, Infinity]) {
    assert.ok(compareProductOrder({ sort_order: 1 }, { sort_order }) < 0);
  }
  assert.equal(compareProductOrder({}, { sort_order: null }), 0);
  assert.ok(compareProductOrder({ sort_order: 2 }, { sort_order: 12 }) < 0);
});

test("explicit newest sorting ignores manual positions and category hierarchy", () => {
  const rows = [
    product("pinned-old", { sort_order: 1, created_at: "2026-10-01" }),
    product("new-equipment", { category_id: "equipment", created_at: "2026-11-26" }),
    product("missing-date", { created_at: null }),
    product("invalid-date", { created_at: "invalid" }),
    product("new-clothes", { created_at: "2026-11-20" }),
  ];
  assert.deepEqual(ids(rows.sort(compareProductsNewestFirst)), [
    "new-equipment", "new-clothes", "pinned-old", "invalid-date", "missing-date",
  ]);
});

test("duplicate positions have stable subcategory, date and title fallbacks", () => {
  const rows = [
    product("B", { sort_order: 1 }),
    product("A", { sort_order: 1 }),
    product("trousers", { subcategory_id: "trousers", sort_order: 1 }),
  ];
  assert.deepEqual(ids(sortProductsByCatalogOrder(rows, categories, subcategories)), ["A", "B", "trousers"]);
});
