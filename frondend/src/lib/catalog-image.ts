import equipment from "@/assets/equipment.jpg";
import camping from "@/assets/camping.jpg";
import trail from "@/assets/trail.jpg";
import hikingTour from "@/assets/hiking-tour.jpg";
import kayaking from "@/assets/kayaking.jpg";
import summit from "@/assets/summit.jpg";
import bannerCollection from "@/assets/banner-collection.jpg";
import bannerSki from "@/assets/banner-ski.jpg";
import heroAdventure from "@/assets/hero-adventure.jpg";
import heroCamping from "@/assets/hero-camping.jpg";
import heroMountains from "@/assets/hero-mountains.jpg";
import catalogEquipment from "@/assets/catalog/equipment.webp";
import catalogClimbingHarness from "@/assets/catalog/climbing-harness.webp";
import catalogCamping from "@/assets/catalog/camping.webp";
import catalogTrail from "@/assets/catalog/trail.webp";
import catalogHikingTour from "@/assets/catalog/hiking-tour.webp";
import catalogKayaking from "@/assets/catalog/kayaking.webp";
import catalogSummit from "@/assets/catalog/summit.webp";
import catalogBannerCollection from "@/assets/catalog/banner-collection.webp";
import catalogBannerSki from "@/assets/catalog/banner-ski.webp";
import catalogHeroAdventure from "@/assets/catalog/hero-adventure.webp";
import catalogHeroCamping from "@/assets/catalog/hero-camping.webp";
import catalogHeroMountains from "@/assets/catalog/hero-mountains.webp";
import { CATALOG_IMAGE_FILES } from "./catalog-images.generated";
import { getResponsiveImageProps } from "./responsive-image";

const POOL = [
  equipment,
  camping,
  trail,
  hikingTour,
  kayaking,
  summit,
  bannerCollection,
  bannerSki,
  heroAdventure,
  heroCamping,
  heroMountains,
];

const CATALOG_POOL = [
  catalogEquipment,
  catalogCamping,
  catalogTrail,
  catalogHikingTour,
  catalogKayaking,
  catalogSummit,
  catalogBannerCollection,
  catalogBannerSki,
  catalogHeroAdventure,
  catalogHeroCamping,
  catalogHeroMountains,
];

const CATALOG_IMAGE_ALIASES: Record<string, string> = {
  "climbing-harness.webp": catalogClimbingHarness,
  "i-can-play-longboard-1-850429808748.png": "IMG_8857.PNG",
  "i-can-play-longboard-2-850429808748.png": "IMG_8860.JPEG",
};

function imageKey(name: string): string {
  try {
    if (/^https?:\/\//i.test(name)) return new URL(name).href;
    if (name.startsWith("/img/")) return decodeURIComponent(name.slice(5));
  } catch { /* Keep malformed or legacy paths usable as original URLs. */ }
  return name;
}

/**
 * Resolve a catalog image filename to an actual URL.
 * If a real file exists in /public/img/ it is served from there;
 * otherwise we deterministically map the filename to one of our placeholder
 * assets so each product always shows the same image across renders.
 */
export function resolveImage(name: string | null | undefined): string {
  if (!name) return POOL[0];
  // For category hero images, keep using the bundled visual pool.
  // For now always use placeholder pool with stable mapping.
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = (hash * 31 + name.charCodeAt(i)) >>> 0;
  }
  return POOL[hash % POOL.length];
}

export function resolveCatalogImage(name: string | null | undefined, width: number | "original" = 480): string {
  if (!name) return CATALOG_POOL[0];
  const trimmedName = name.trim();
  if (!trimmedName) return CATALOG_POOL[0];
  const imageName = CATALOG_IMAGE_ALIASES[trimmedName] ?? trimmedName;
  // Allow absolute paths or full URLs to be used as-is (e.g. /img/foo.jpg).
  if (/^https?:\/\//i.test(imageName)) {
    return (width === "original" ? undefined : getResponsiveImageProps(imageKey(imageName), "100vw", width).src) ?? imageName;
  }
  const localName = imageKey(imageName);
  if (CATALOG_IMAGE_FILES.has(localName)) {
    return (width === "original" ? undefined : getResponsiveImageProps(localName, "100vw", width).src)
      ?? `/img/${localName}`;
  }
  if (imageName.startsWith("/")) return imageName;
  let hash = 0;
  for (let i = 0; i < imageName.length; i++) {
    hash = (hash * 31 + imageName.charCodeAt(i)) >>> 0;
  }
  return CATALOG_POOL[hash % CATALOG_POOL.length];
}

export function catalogImageProps(name: string | null | undefined, sizes = "(min-width: 1024px) 320px, 50vw", width = 480) {
  const trimmed = name?.trim() ?? "";
  const alias = CATALOG_IMAGE_ALIASES[trimmed] ?? trimmed;
  const key = imageKey(alias);
  return { src: resolveCatalogImage(name, width), ...getResponsiveImageProps(key, sizes, width) };
}
