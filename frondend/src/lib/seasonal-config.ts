export type Season = "winter" | "summer";
export const seasonalHero: { mode: Season; winter: { image: string }; summer: { image: string } } = {
  mode: "winter",
  winter: { image: "/images/winter-hero-placeholder.svg" }, // TODO_REAL_DATA: approved winter photograph
  summer: { image: "/images/summer-hero-placeholder.svg" },
};
export const homeSectionOrder = {
  winter: ["hero", "rental", "offers", "ski", "service", "resorts", "fitness", "reviews", "hikes", "activities", "gift", "contacts"],
  summer: ["hero", "rental", "hikes", "offers", "fitness", "ski", "service", "resorts", "reviews", "activities", "gift", "contacts"],
} as const;
// A general rental policy is not proof of ski-specific deposit conditions.
export const skiRentalPolicy = { depositConfirmed: false };
