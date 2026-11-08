export type PriceOptions = { max?: number; from?: boolean; lang?: "RU" | "EN" | "GE"; unit?: string };

/** One currency representation for catalog, rentals, promotions and checkout. */
export function formatPrice(value: number | string | null | undefined, options: PriceOptions = {}): string {
  if (typeof value === "string") {
    return value.replace(/₾\s*([\d.,]+(?:[–-][\d.,]+)?)/g, "$1 ₾").replace(/([\d.,]+)\s*₾/g, "$1 ₾");
  }
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return "TODO_REAL_DATA";
  const number = (n: number) => new Intl.NumberFormat("ru-RU", { maximumFractionDigits: 2 }).format(n).replace(/\u00a0/g, " ");
  const amount = options.max === undefined ? number(value) : `${number(value)}–${number(options.max)}`;
  const prefix = options.from ? ({ RU: "от ", EN: "from ", GE: "" }[options.lang ?? "RU"]) : "";
  const suffix = options.from && options.lang === "GE" ? "-დან" : "";
  return `${prefix}${amount} ₾${suffix}${options.unit ?? ""}`;
}
