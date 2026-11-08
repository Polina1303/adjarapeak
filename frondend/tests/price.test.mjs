import test from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/lib/price.ts";
test("prices share currency order, ranges, decimals and translated prefixes", () => {
 assert.equal(formatPrice(120), "120 ₾");
 assert.equal(formatPrice(120, { max: 225 }), "120–225 ₾");
 assert.equal(formatPrice(40, { from: true }), "от 40 ₾");
 assert.equal(formatPrice(40, { from: true, lang: "EN", unit: "/day" }), "from 40 ₾/day");
 assert.equal(formatPrice(20.5), "20,5 ₾");
 assert.equal(formatPrice("₾20–30"), "20–30 ₾");
 assert.equal(formatPrice(null), "TODO_REAL_DATA");
 assert.equal(formatPrice(Number.NaN), "TODO_REAL_DATA");
});
