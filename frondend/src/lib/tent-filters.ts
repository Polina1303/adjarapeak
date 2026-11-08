export type TentLayerFilter = "single" | "double";
export type TentCapacityFilter = 1 | 2 | 3;

type TentFilterSource = {
  title: string;
  description?: string | null;
  shortly?: string | null;
  features?: string[] | null;
};

function normalizeTentText(value: string) {
  return value
    .toLocaleLowerCase("ru")
    .replace(/ё/g, "е")
    .replace(/[–—−]/g, "-")
    .replace(/\s+/g, " ")
    .trim();
}

function tentTextParts(item: TentFilterSource) {
  return [item.title, item.description, item.shortly, ...(item.features ?? [])]
    .filter((value): value is string => typeof value === "string" && value.trim().length > 0)
    .map(normalizeTentText);
}

export function getTentLayer(item: TentFilterSource): TentLayerFilter | null {
  const text = tentTextParts(item).join(" ");

  if (
    /однослойн/.test(text) ||
    /(?:количество\s+слоев\s*:\s*1|(?:^|[^0-9])1\s*(?:слой|слоя|слоев)(?:$|[^а-яa-z0-9]))/.test(text)
  ) {
    return "single";
  }

  if (
    /двухслойн/.test(text) ||
    /(?:количество\s+слоев\s*:\s*2|(?:^|[^0-9])2\s*(?:слой|слоя|слоев)(?:$|[^а-яa-z0-9]))/.test(text)
  ) {
    return "double";
  }

  return null;
}

export function getTentCapacity(item: TentFilterSource): TentCapacityFilter | null {
  const parts = tentTextParts(item);
  const wordPatterns: Array<[TentCapacityFilter, RegExp]> = [
    [1, /одно-?местн/],
    [2, /двух-?местн|для\s+двоих/],
    [3, /трех-?местн/],
  ];

  for (const text of parts) {
    for (const [capacity, pattern] of wordPatterns) {
      if (pattern.test(text)) return capacity;
    }

    const explicit = text.match(
      /(?:количество|кол\.)?\s*(?:спальных\s+)?мест\s*:\s*([123])(?:\D|$)|(?:^|\D)([123])\s*(?:-?х\s*)?мест(?:а|н(?:ая|ой|ый|ых)?)?(?:\D|$)|(?:на|для)\s+([123])\s+человек/,
    );
    const value = Number(explicit?.[1] ?? explicit?.[2] ?? explicit?.[3]);
    if (value === 1 || value === 2 || value === 3) return value;
  }

  return null;
}
