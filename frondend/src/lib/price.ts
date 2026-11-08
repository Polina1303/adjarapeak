type PriceOptions = { max?: number };
/** Public GEL prices always put the currency after the amount. */
export function formatPrice(
  value: number | string,
  { max }: PriceOptions = {},
): string {
  if (typeof value === "string")
    return value
      .replace(/₾\s*([\d.,]+(?:[–-][\d.,]+)?)/g, "$1 ₾")
      .replace(/([\d.,]+)\s*₾/g, "$1 ₾");
  if (
    !Number.isFinite(value) ||
    value < 0 ||
    (max !== undefined && (!Number.isFinite(max) || max < value))
  )
    throw new RangeError("Invalid price");
  const number = (n: number) =>
    new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 })
      .format(n)
      .replace(/\u00a0/g, " ");
  return `${number(value)}${max === undefined ? "" : `–${number(max)}`} ₾`;
}
