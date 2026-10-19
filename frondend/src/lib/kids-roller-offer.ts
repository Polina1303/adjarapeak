import { getDisplayPrice } from "./discount.ts";

export const KIDS_ROLLER_OFFER = "kids-rollers";
export const KIDS_ROLLER_CATALOG_PARAMS = {
  group: "cyclingRoller",
  category: "roller",
} as const;

// Reviewed children's models from the roller category. Use explicit models so
// adult skates, bags and accessories cannot qualify just because of their price.
const KIDS_ROLLER_SLUGS = new Set([
  "652140", // Moonlight
  "987123654", // Sport Ranger
  "8790123", // Magic Pon
  "2912440767673124", // Children's skates with brakes
  "912440767673124",
  "24344075467675680", // GUAN
  "243440767675678",
  "244076476723421", // M-Gro
  "8366197", // OXELO PLAY 3
  "6543872656381", // CANDY WHEELS
  "6543872656382",
  "8005659241021", // SUPER YOUNGSTER
  "8005659241022",
  "99898740767673120", // Children's five-wheel skates
  "2912498740767673300",
]);

export function isKidsRollerOfferProduct(product: {
  slug: string;
  price: number;
  sale_price?: number | null;
}) {
  const price = getDisplayPrice(product.price, product.sale_price);
  return KIDS_ROLLER_SLUGS.has(product.slug) && price >= 120 && price <= 225;
}

export function validateKidsRollerOfferSearch(search: Record<string, unknown>): { offer?: typeof KIDS_ROLLER_OFFER } {
  return { offer: search.offer === KIDS_ROLLER_OFFER ? KIDS_ROLLER_OFFER : undefined };
}

