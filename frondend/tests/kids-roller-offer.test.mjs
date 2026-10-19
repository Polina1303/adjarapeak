import assert from "node:assert/strict";
import { test } from "node:test";
import { isKidsRollerOfferProduct, validateKidsRollerOfferSearch } from "../src/lib/kids-roller-offer.ts";

test("the offer includes verified children's models at the advertised price boundaries", () => {
  assert.equal(isKidsRollerOfferProduct({ slug: "912440767673124", price: 130, sale_price: 120 }), true);
  assert.equal(isKidsRollerOfferProduct({ slug: "8005659241021", price: 225 }), true);
  assert.equal(isKidsRollerOfferProduct({ slug: "8005659241021", price: 226 }), false);
  assert.equal(isKidsRollerOfferProduct({ slug: "912440767673124", price: 119 }), false);
});

test("adult skates and accessories never qualify based on price or a discount", () => {
  for (const slug of ["244076767", "micro-sporty-backpack-p0272", "96743341235", "8111805"]) {
    assert.equal(isKidsRollerOfferProduct({ slug, price: 150, sale_price: 120 }), false, slug);
  }
});

test("eligibility uses the same valid sale price as the product card", () => {
  assert.equal(isKidsRollerOfferProduct({ slug: "24344075467675680", price: 230, sale_price: 197 }), true);
  for (const sale_price of [null, 0, -10, 300]) {
    assert.equal(isKidsRollerOfferProduct({ slug: "24344075467675680", price: 230, sale_price }), false);
  }
});

test("only the known offer query activates the selection", () => {
  assert.equal(validateKidsRollerOfferSearch({ offer: "kids-rollers" }).offer, "kids-rollers");
  for (const offer of [undefined, "other", ["kids-rollers"], { value: "kids-rollers" }]) {
    assert.equal(validateKidsRollerOfferSearch({ offer }).offer, undefined);
  }
});
