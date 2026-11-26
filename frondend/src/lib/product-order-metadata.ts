const METADATA_KEY = "__adjarapeak_admin";

function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

function validOrder(value: unknown): value is number {
  return typeof value === "number" && Number.isSafeInteger(value) && value > 0;
}

function orderFromObject(value: unknown): number | null {
  if (!isRecord(value) || !Object.hasOwn(value, METADATA_KEY)) return null;
  const metadata = value[METADATA_KEY];
  return isRecord(metadata) && metadata.version === 1 && validOrder(metadata.sort_order) &&
    Object.keys(metadata).every((key) => key === "version" || key === "sort_order")
    ? metadata.sort_order
    : null;
}

/** The existing features JSON carries admin-only ordering alongside legacy values. */
export function readProductOrder(features: unknown): number | null {
  if (!Array.isArray(features)) return orderFromObject(features);
  for (let index = features.length - 1; index >= 0; index -= 1) {
    const order = orderFromObject(features[index]);
    if (order !== null) return order;
  }
  return null;
}

/** Remove only the reserved metadata; retain legacy values and nested array shapes. */
export function stripProductOrderMetadata(features: unknown): unknown {
  if (Array.isArray(features)) {
    return features.flatMap((item) => {
      if (orderFromObject(item) !== null) {
        const cleaned = stripProductOrderMetadata(item) as Record<string, unknown>;
        return Object.keys(cleaned).length ? [cleaned] : [];
      }
      // Wrap nested arrays so flatMap preserves their original shape.
      return [Array.isArray(item) ? stripProductOrderMetadata(item) : item];
    });
  }
  if (orderFromObject(features) !== null && isRecord(features)) {
    return Object.fromEntries(Object.entries(features).filter(([key]) => key !== METADATA_KEY));
  }
  return features;
}

/** Write one canonical metadata value without discarding existing feature content. */
export function withProductOrder(features: unknown, order: number | null): unknown {
  if (order !== null && !validOrder(order)) {
    throw new RangeError("Порядок сортировки должен быть положительным целым числом");
  }
  const cleaned = stripProductOrderMetadata(features);
  if (order === null) return cleaned;
  const metadata = { version: 1, sort_order: order };
  if (Array.isArray(cleaned)) return [...cleaned, { [METADATA_KEY]: metadata }];
  if (isRecord(cleaned) && !Object.hasOwn(cleaned, METADATA_KEY)) {
    return { ...cleaned, [METADATA_KEY]: metadata };
  }
  return [
    ...(cleaned === null || cleaned === undefined ? [] : [cleaned]),
    { [METADATA_KEY]: metadata },
  ];
}

/** Public feature lists expose strings only, including strings in legacy nested arrays. */
export function productFeatureStrings(features: unknown): string[] {
  const cleaned = stripProductOrderMetadata(features);
  if (typeof cleaned === "string") return [cleaned];
  if (!Array.isArray(cleaned)) return [];
  return cleaned.flat(Infinity).filter((value): value is string => typeof value === "string");
}
