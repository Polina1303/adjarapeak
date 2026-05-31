function toPrice(value: number | string | null | undefined): number {
  const price = Number(value);
  return Number.isFinite(price) ? price : 0;
}

function roundPrice(value: number): number {
  return Math.round(value * 100) / 100;
}

export function getSalePrice(
  basePrice: number | string | null | undefined,
  salePrice: number | string | null | undefined,
): number | null {
  const base = toPrice(basePrice);
  const sale = toPrice(salePrice);
  if (base <= 0 || sale <= 0 || sale >= base) return null;
  return roundPrice(sale);
}

export function getDisplayPrice(
  basePrice: number | string | null | undefined,
  salePrice: number | string | null | undefined,
): number {
  return getSalePrice(basePrice, salePrice) ?? roundPrice(toPrice(basePrice));
}

export function getDiscountPercent(
  basePrice: number | string | null | undefined,
  salePrice: number | string | null | undefined,
): number | null {
  const base = toPrice(basePrice);
  const sale = getSalePrice(basePrice, salePrice);
  if (!sale || base <= 0) return null;
  return Math.round(((base - sale) / base) * 100);
}

export function hasManualDiscount(
  basePrice: number | string | null | undefined,
  salePrice: number | string | null | undefined,
): boolean {
  return getSalePrice(basePrice, salePrice) !== null;
}
