import type { Lang } from "./i18n";

export type ServiceFallback = ReadonlyArray<{
  title: string;
  desc: string;
  price: string;
  highlight?: boolean;
}>;

export type ServicePriceRow = {
  title: string;
  description: string | null;
  price: string;
  highlight: boolean;
  title_en?: string | null;
  title_ka?: string | null;
  description_en?: string | null;
  description_ka?: string | null;
  price_en?: string | null;
  price_ka?: string | null;
  category?: string | null;
};

function getTranslatedValue(
  row: ServicePriceRow,
  key: "title" | "description" | "price",
  lang: Lang
) {
  if (lang === "RU") return row[key];
  const suffix = lang === "EN" ? "en" : "ka";
  const value = row[`${key}_${suffix}` as keyof ServicePriceRow];
  return typeof value === "string" && value.trim() ? value : null;
}

function localizePrice(price: string, lang: Lang) {
  if (lang === "RU") return price;
  if (/^бесплатно$/i.test(price.trim())) {
    return lang === "EN" ? "FREE" : "უფასოდ";
  }
  if (lang === "EN") return price.replace(/^от\s+/i, "from ");
  if (/^от\s+/i.test(price)) return `${price.replace(/^от\s+/i, "")}-დან`;
  if (/^≈\s*/.test(price)) return price.replace(/^≈\s*/, "დაახლ. ");
  return price;
}

export function translateServicePrice(
  row: ServicePriceRow,
  source: ServiceFallback,
  localized: ServiceFallback,
  lang: Lang
) {
  // Match the source title so admin reordering cannot attach another service's
  // translation. Prices always come from the admin record.
  const sourceIndex = source.findIndex((service) => service.title === row.title);
  const fallback = sourceIndex >= 0 ? localized[sourceIndex] : undefined;

  return {
    title: getTranslatedValue(row, "title", lang) ?? fallback?.title ?? row.title,
    desc:
      lang === "RU"
        ? (row.description ?? "")
        : (getTranslatedValue(row, "description", lang) ?? fallback?.desc ?? ""),
    price:
      lang === "RU"
        ? row.price
        : (getTranslatedValue(row, "price", lang) ?? localizePrice(row.price, lang)),
  };
}
