function toPrice(value) {
  const price = Number(value);
  return Number.isFinite(price) ? price : 0;
}
function roundPrice(value) {
  return Math.round(value * 100) / 100;
}
function getSalePrice(basePrice, salePrice) {
  const base = toPrice(basePrice);
  const sale = toPrice(salePrice);
  if (base <= 0 || sale <= 0 || sale >= base) return null;
  return roundPrice(sale);
}
function getDisplayPrice(basePrice, salePrice) {
  return getSalePrice(basePrice, salePrice) ?? roundPrice(toPrice(basePrice));
}
function getDiscountPercent(basePrice, salePrice) {
  const base = toPrice(basePrice);
  const sale = getSalePrice(basePrice, salePrice);
  if (!sale || base <= 0) return null;
  return Math.round((base - sale) / base * 100);
}
function hasManualDiscount(basePrice, salePrice) {
  return getSalePrice(basePrice, salePrice) !== null;
}
export {
  getDisplayPrice as a,
  getSalePrice as b,
  getDiscountPercent as g,
  hasManualDiscount as h
};
