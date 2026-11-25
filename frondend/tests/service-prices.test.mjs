import test from "node:test";
import assert from "node:assert/strict";
import { translateServicePrice } from "../src/lib/service-prices.ts";

const source = [
  { title: "Парафин", desc: "", price: "40 ₾" },
  { title: "Настройка креплений", desc: "", price: "БЕСПЛАТНО" },
];
const english = [
  { title: "Waxing", desc: "", price: "40 ₾" },
  { title: "Binding adjustment", desc: "", price: "FREE" },
];
const row = (title, price, extra = {}) => ({
  title,
  description: null,
  price,
  highlight: false,
  ...extra,
});

test("admin order and price changes keep each service's own translation and current price", () => {
  const rows = [row("Настройка креплений", "БЕСПЛАТНО"), row("Парафин", "55 ₾")];
  assert.deepEqual(
    rows.map((service) => translateServicePrice(service, source, english, "EN")),
    [
      { title: "Binding adjustment", desc: "", price: "FREE" },
      { title: "Waxing", desc: "", price: "55 ₾" },
    ]
  );
});

test("live translated admin fields take precedence over bundled fallback text and prices", () => {
  assert.deepEqual(
    translateServicePrice(
      row("Парафин", "60 ₾", {
        title_en: "Hot waxing",
        description_en: "New service details",
        price_en: "from 60 ₾",
      }),
      source,
      english,
      "EN"
    ),
    { title: "Hot waxing", desc: "New service details", price: "from 60 ₾" }
  );
});

test("new admin services do not inherit an unrelated service's fallback", () => {
  assert.deepEqual(
    translateServicePrice(row("Новая услуга", "от 25 ₾"), source, english, "EN"),
    { title: "Новая услуга", desc: "", price: "from 25 ₾" }
  );
});

test("Georgian prices localize free and minimum prices while Russian values stay intact", () => {
  const service = row("Настройка креплений", "БЕСПЛАТНО");
  assert.equal(translateServicePrice(service, [], [], "GE").price, "უფასოდ");
  assert.equal(translateServicePrice(row("Ремонт", "от 80 ₾"), [], [], "GE").price, "80 ₾-დან");
  assert.deepEqual(translateServicePrice(service, source, english, "RU"), {
    title: "Настройка креплений", desc: "", price: "БЕСПЛАТНО",
  });
});
