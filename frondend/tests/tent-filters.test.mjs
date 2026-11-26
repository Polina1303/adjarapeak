import assert from "node:assert/strict";
import { test } from "node:test";
import { getTentCapacity, getTentLayer } from "../src/lib/tent-filters.ts";
import { productFeatureStrings, withProductOrder } from "../src/lib/product-order-metadata.ts";

test("layer filter recognizes numeric and word forms", () => {
  assert.equal(
    getTentLayer({ title: "ARTEN SPACE", description: "2-х местная легкая (1 слой)" }),
    "single",
  );
  assert.equal(
    getTentLayer({ title: "Naturehike", description: "Двухслойная горная палатка" }),
    "double",
  );
  assert.equal(
    getTentLayer({ title: "BTrace", features: ["Количество слоев: 2"] }),
    "double",
  );
  assert.equal(getTentLayer({ title: "Шатер на 6 мест" }), null);
});

test("capacity filter recognizes the existing rental catalog wording", () => {
  assert.equal(getTentCapacity({ title: "Палатка Clostnature", description: "1-х местная" }), 1);
  assert.equal(getTentCapacity({ title: "Набор для двоих", features: ["Палатка на 2 человека"] }), 2);
  assert.equal(getTentCapacity({ title: "Outventure", description: "3-х местная" }), 3);
  assert.equal(getTentCapacity({ title: "Cloud Up", description: "3 места" }), 3);
  assert.equal(getTentCapacity({ title: "BlackDear", description: "Для 4–6 человек" }), null);
});

test("layer and capacity can be combined independently", () => {
  const tent = {
    title: "Палатка",
    description: "2-х местная (2 слоя)",
  };
  assert.equal(getTentLayer(tent), "double");
  assert.equal(getTentCapacity(tent), 2);
});

test("admin order metadata is hidden while nested legacy tent characteristics still filter", () => {
  const rawFeatures = ["Количество слоев: 2", ["Палатка на 3 человека"]];
  const rankedFeatures = withProductOrder(rawFeatures, 1);
  const tent = { title: "Палатка", features: productFeatureStrings(rankedFeatures) };
  assert.deepEqual(tent.features, ["Количество слоев: 2", "Палатка на 3 человека"]);
  assert.equal(getTentLayer(tent), "double");
  assert.equal(getTentCapacity(tent), 3);
  assert.equal(JSON.stringify(tent).includes("__adjarapeak_admin"), false);
  assert.deepEqual(rawFeatures, ["Количество слоев: 2", ["Палатка на 3 человека"]]);
});
