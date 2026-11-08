import test from "node:test";
import assert from "node:assert/strict";
import { formatPrice } from "../src/lib/price.ts";
test("prices normalize decimals, currency order and ranges", () => {
  assert.equal(formatPrice(120), "120 ₾");
  assert.equal(formatPrice(120, { max: 225 }), "120–225 ₾");
  assert.equal(formatPrice(20.5), "20,5 ₾");
  assert.equal(formatPrice("₾20–30"), "20–30 ₾");
  assert.equal(formatPrice("от 40 ₾"), "от 40 ₾");
  assert.throws(() => formatPrice(NaN), RangeError);
  assert.throws(() => formatPrice(20, { max: 10 }), RangeError);
});
