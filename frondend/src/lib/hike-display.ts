import type { Lang } from "./i18n";
import { formatPrice } from "./price.ts";

const PRICE_ON_REQUEST: Record<Lang, string> = {
  RU: "Стоимость по запросу",
  EN: "Price on request",
  GE: "ფასი მოთხოვნით",
};

export function getHikePrice(
  hike: { price: number; sale_price: number | null },
  lang: Lang,
) {
  // A zero base price represents individually agreed pricing in the hikes admin.
  const onRequest = hike.price === 0;
  const price =
    !onRequest && hike.sale_price && hike.sale_price < hike.price
      ? hike.sale_price
      : hike.price;

  return {
    label: onRequest ? PRICE_ON_REQUEST[lang] : formatPrice(price),
    hasDiscount: !onRequest && price !== hike.price,
  };
}

export function getHikeBookingUrl(slug: string) {
  // These services are operated by Misha; other hikes keep the general contact.
  return slug === "individual-guide-misha" || slug === "individual-transfer-misha"
    ? "https://t.me/mishano98"
    : "https://t.me/shpaksn";
}
