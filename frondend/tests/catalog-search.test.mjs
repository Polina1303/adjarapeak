import assert from "node:assert/strict";
import { test } from "node:test";
import { createSearchIndex, normalizeSearchText, rankSearchResults } from "../src/lib/catalog-search.ts";

const index = createSearchIndex([
  { id: "adult", title: "Спальный мешок Tramp", taxonomy: "Туризм Кемпинг sleepingbag" },
  { id: "kids", title: "Детский спальный мешок", taxonomy: "Спальные мешки" },
  { id: "board", title: "Баланс-борд", taxonomy: "Баланс и доски" },
  { id: "bike", title: "Горный велосипед Trinx", taxonomy: "Велоспорт" },
  { id: "sup", title: "SUP-доска", taxonomy: "Сапборды" },
  { id: "super", title: "Super tent", taxonomy: "Палатки" },
  { id: "thermal", title: "Термобельё", taxonomy: "Одежда" },
  { id: "description", title: "Рюкзак", description: "Можно прикрепить спальный мешок" },
  { id: "helmet", title: "Petzl BOREO", taxonomy: "Шлемы Helmet" },
]);

test("synonyms work in both directions and across languages", () => {
  for (const query of ["спальник", "спальники", "спальный мешок", "sleeping bag", "საძილე ტომარა"]) {
    const results = rankSearchResults(index, query);
    assert.ok(results.includes("adult"), query);
    assert.ok(results.includes("kids"), query);
  }
  const englishIndex = createSearchIndex([{ id: "en", title: "Sleeping bag Marmot" }]);
  assert.deepEqual(rankSearchResults(englishIndex, "спальник"), ["en"]);
});

test("hyphens, dashes, spaces and joined compound names are equivalent", () => {
  for (const query of ["баланс-борд", "баланс—борд", "баланс борд", "балансборд", "  БАЛАНС\u00a0–  БОРД ", "balance_board"]) {
    assert.deepEqual(rankSearchResults(index, query), ["board"], query);
  }
});

test("all concepts in a multiword query are required", () => {
  assert.deepEqual(rankSearchResults(index, "детский спальник"), ["kids"]);
  assert.deepEqual(rankSearchResults(index, "спальник детский"), ["kids"]);
  assert.deepEqual(rankSearchResults(index, "спальник Tramp"), ["adult"]);
  assert.deepEqual(rankSearchResults(index, "спальник велосипед"), []);
});

test("literal title matches rank above category and description matches", () => {
  assert.equal(rankSearchResults(index, "спальный мешок")[0], "adult");
  assert.ok(rankSearchResults(index, "спальник").indexOf("description") > rankSearchResults(index, "спальник").indexOf("kids"));
});

test("normalization preserves Russian й and ignores ё, accents and punctuation", () => {
  assert.equal(normalizeSearchText("Треккинговый — Café, ЁЖ!"), "треккинговый cafe еж");
  assert.deepEqual(rankSearchResults(index, "термо-белье"), ["thermal"]);
  assert.deepEqual(rankSearchResults(index, "petzl-boreo"), ["helmet"]);
});

test("category vocabulary, word forms and partial input continue to work", () => {
  assert.deepEqual(rankSearchResults(index, "каска"), ["helmet"]);
  assert.deepEqual(rankSearchResults(index, "велики"), ["bike"]);
  assert.deepEqual(rankSearchResults(index, "вел"), ["bike"]);
  assert.deepEqual(rankSearchResults(index, "па"), ["super"]);
});

test("short synonyms do not match unrelated substrings", () => {
  assert.deepEqual(rankSearchResults(index, "sup"), ["sup"]);
});

test("punctuation-only and SQL filter characters are plain text", () => {
  for (const query of ["---", "(),.%_*", " "]) assert.deepEqual(rankSearchResults(index, query), []);
  assert.deepEqual(rankSearchResults(index, "палатка),id.gt.0"), []);
});

test("rank before applying the result limit and retain stable ties", () => {
  assert.deepEqual(rankSearchResults(index, "спальный мешок", 1), ["adult"]);
  const many = createSearchIndex(Array.from({ length: 1200 }, (_, i) => ({ id: String(i), title: i === 1199 ? "Special tent" : "Tent" })));
  assert.deepEqual(rankSearchResults(many, "special палатка", 1), ["1199"]);
});
