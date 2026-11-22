import test from "node:test";
import assert from "node:assert/strict";
import { getHikeBookingUrl, getHikePrice } from "../src/lib/hike-display.ts";

test("individually priced services show a request label without a discount", () => {
  for (const [lang, label] of [
    ["RU", "Стоимость по запросу"],
    ["EN", "Price on request"],
    ["GE", "ფასი მოთხოვნით"],
  ]) {
    assert.deepEqual(getHikePrice({ price: 0, sale_price: null }, lang), {
      label,
      hasDiscount: false,
    });
  }
  assert.equal(getHikePrice({ price: 0, sale_price: -1 }, "RU").hasDiscount, false);
});

test("fixed tour prices and discounts retain their displayed amounts", () => {
  assert.deepEqual(getHikePrice({ price: 750, sale_price: null }, "RU"), {
    label: "750 ₾",
    hasDiscount: false,
  });
  assert.deepEqual(getHikePrice({ price: 750, sale_price: 650 }, "RU"), {
    label: "650 ₾",
    hasDiscount: true,
  });
  assert.equal(getHikePrice({ price: 750, sale_price: 800 }, "RU").label, "750 ₾");
});

test("Misha's individual services use his contact while other tours keep theirs", () => {
  assert.equal(getHikeBookingUrl("individual-guide-misha"), "https://t.me/mishano98");
  assert.equal(getHikeBookingUrl("individual-transfer-misha"), "https://t.me/mishano98");
  assert.equal(getHikeBookingUrl("svaneti-26-30-november-2026"), "https://t.me/shpaksn");
});
