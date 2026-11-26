import test from "node:test";
import assert from "node:assert/strict";
import {
  productFeatureStrings,
  readProductOrder,
  stripProductOrderMetadata,
  withProductOrder,
} from "../src/lib/product-order-metadata.ts";
import { sortProductsByCatalogOrder } from "../src/lib/product-order.ts";

const sentinel = (sort_order) => ({ __adjarapeak_admin: { version: 1, sort_order } });

test("array metadata roundtrips nested legacy content without mutating it", () => {
  const original = ["Waterproof", ["Outer shell", ["Lining"]], { material: "Nylon" }, null, 17];
  const snapshot = structuredClone(original);
  const ranked = withProductOrder(original, 2);
  assert.deepEqual(original, snapshot);
  assert.equal(readProductOrder(ranked), 2);
  assert.deepEqual(ranked, [...snapshot, sentinel(2)]);
  assert.deepEqual(stripProductOrderMetadata(ranked), snapshot);
  assert.deepEqual(withProductOrder(ranked, null), snapshot);
  assert.deepEqual(withProductOrder(ranked, 1), [...snapshot, sentinel(1)]);
});

test("unexpected object content is preserved and reserved-key collisions are kept", () => {
  const original = { material: "Nylon", measurements: [12, 30] };
  assert.deepEqual(withProductOrder(original, 3), { ...original, ...sentinel(3) });
  assert.deepEqual(withProductOrder(withProductOrder(original, 3), null), original);
  const collision = { material: "Nylon", __adjarapeak_admin: { version: 2, value: "keep" } };
  assert.deepEqual(stripProductOrderMetadata(collision), collision);
  assert.deepEqual(withProductOrder(collision, 4), [collision, sentinel(4)]);
  assert.deepEqual(stripProductOrderMetadata(withProductOrder(collision, 4)), [collision]);
});

test("unrecognized metadata values remain stored and cannot set an order", () => {
  const unrecognized = [
    { __adjarapeak_admin: "legacy value" },
    { __adjarapeak_admin: { version: 2, sort_order: 1 } },
    { __adjarapeak_admin: { version: 1, sort_order: 1, unrelated: "keep" } },
    ...[0, -1, 1.5, "2", null, NaN, Infinity].map((order) => sentinel(order)),
  ];
  for (const value of unrecognized) {
    assert.equal(readProductOrder(value), null);
    assert.deepEqual(stripProductOrderMetadata(value), value);
  }
  assert.deepEqual(withProductOrder(unrecognized, 6), [...unrecognized, sentinel(6)]);
});

test("public feature strings preserve legacy nested strings and exclude internal metadata", () => {
  const legacy = ["Waterproof", ["Shell", ["Lining"]], { material: "Nylon" }];
  const ranked = withProductOrder(legacy, 3);
  assert.deepEqual(productFeatureStrings(ranked), ["Waterproof", "Shell", "Lining"]);
  assert.deepEqual(productFeatureStrings(["One", [sentinel(2), "Two"]]), ["One", "Two"]);
  assert.equal(JSON.stringify(productFeatureStrings(ranked)).includes("__adjarapeak_admin"), false);
  assert.deepEqual(stripProductOrderMetadata(["One", [sentinel(2), "Two"]]), ["One", ["Two"]]);
});

test("raw card rows sort by features metadata before their public features are cleared", () => {
  const rows = [
    { id: "new", category_id: "a", created_at: "2026-11-26", features: ["New"] },
    { id: "second", category_id: "a", created_at: "2026-10-01", features: withProductOrder(["Second"], 2) },
    { id: "first", category_id: "a", created_at: "2026-10-01", features: withProductOrder([["First"]], 1) },
  ];
  const cards = sortProductsByCatalogOrder(rows, [{ id: "a", sort_order: 1 }])
    .map((row) => ({ id: row.id, sort_order: readProductOrder(row.features), features: [] }));
  assert.deepEqual(cards.map((card) => card.id), ["first", "second", "new"]);
  assert.deepEqual(cards.map((card) => card.sort_order), [1, 2, null]);
  assert.equal(JSON.stringify(cards).includes("__adjarapeak_admin"), false);
});

test("clearing null and legacy primitives is lossless and invalid positions are rejected", () => {
  for (const value of [null, undefined, "Legacy string", 3, true]) {
    assert.equal(withProductOrder(value, null), value);
  }
  assert.deepEqual(withProductOrder("Legacy string", 2), ["Legacy string", sentinel(2)]);
  for (const value of [0, -1, 0.5, NaN, Infinity, Number.MAX_SAFE_INTEGER + 1]) {
    assert.throws(() => withProductOrder([], value), RangeError);
  }
});
