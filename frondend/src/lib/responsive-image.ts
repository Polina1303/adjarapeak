import generatedVariants from "./image-variants.generated.json";

type ImageVariants = [hash: string, width: number, height: number];
const images = generatedVariants as unknown as Record<string, ImageVariants>;

export function getResponsiveImageProps(key: string, sizes: string, preferredWidth = 480) {
  const image = images[key];
  if (!image) return {};
  const [hash, width, height] = image;
  const targets = key.startsWith("hero/") ? [640, 1280, 1920] : [160, 480, 960];
  const widths = [...new Set(targets.map((target) => Math.min(target, width)))];
  const selected = widths.find((size) => size >= preferredWidth) ?? widths.at(-1)!;
  const url = (size: number) => `/media/optimized/${hash}-${size}.webp`;
  return {
    src: url(selected),
    srcSet: widths.map((size) => `${url(size)} ${size}w`).join(", "),
    sizes,
    width,
    height,
  };
}
