// Keep aliases together so the same vocabulary works for shop and rental search.
export const SEARCH_SYNONYMS = [
  ["спальник", "спальный мешок", "sleeping bag", "sleepingbag", "საძილე ტომარა"],
  ["палатка", "tent", "კარავი"],
  ["рюкзак", "backpack", "rucksack", "ზურგჩანთა"],
  ["коврик", "каремат", "пенка", "туристический мат", "sleeping mat", "sleeping pad", "ქვეშაგები"],
  ["треккинговые палки", "трековые палки", "трекинговые палки", "trekking poles", "hiking poles", "trekkingsticks"],
  ["велосипед", "велик", "bike", "bicycle", "ველოსიპედი"],
  ["шлем", "каска", "helmet", "ჩაფხუტი"],
  ["фонарь", "фонарик", "налобник", "headlamp", "flashlight", "lantern", "ფანარი"],
  ["дождевик", "пончо", "raincoat", "poncho", "საწვიმარი"],
  ["гермомешок", "гермо мешок", "гермобаул", "dry bag", "drybag", "waterproof bag"],
  ["термос", "thermos", "vacuum flask", "თერმოსი"],
  ["бутылка", "фляга", "bottle", "წყლის ბოთლი"],
  ["горелка", "примус", "burner", "camping stove", "gas burner"],
  ["гамак", "hammock", "ჰამაკი"],
  ["сап", "сапборд", "сап борд", "sup", "supboard", "sup board", "paddleboard", "paddle board"],
  ["балансборд", "баланс борд", "балансировочная доска", "balanceboard", "balance board", "balanceboards", "balance_board"],
  ["скейт", "скейтборд", "скейт борд", "skateboard", "skate board", "skateboards"],
  ["лонгборд", "лонг борд", "longboard", "long board", "longboards"],
  ["серфскейт", "серф скейт", "surfskate", "surf skate", "surfskates"],
  ["ролики", "роликовые коньки", "roller skates", "inline skates", "roller"],
  ["сноуборд", "сноубординг", "snowboard", "snowboardsky"],
  ["лыжи", "ski", "skis", "თხილამურები"],
  ["снегоступы", "snowshoes"],
  ["термобелье", "термо белье", "thermal underwear", "thermalunderwear", "base layer"],
  ["бафф", "buff", "neck warmer", "neck gaiter"],
  ["перчатки", "gloves", "ხელთათმანები"],
  ["кроссовки", "sneakers", "trainers"],
  ["ботинки", "boots"],
  ["сандалии", "sandals"],
  ["очки", "goggles", "sunglasses", "სათვალე"],
  ["гидратор", "hydration pack", "hydration bladder"],
  ["карабин", "carabiner", "karabiner"],
  ["магнезия", "chalk"],
  ["скальники", "скальные туфли", "climbing shoes"],
  ["обвязка", "страховочная система", "harness"],
  ["эспандер", "резинки", "resistance band", "expander"],
  ["гантели", "dumbbells", "dumbbell"],
  ["скакалка", "jump rope", "skipping rope"],
] as const;

export function normalizeSearchText(value: string): string {
  return value
    .replace(/([a-zа-яё])([A-ZА-ЯЁ])/g, "$1 $2")
    .normalize("NFKC")
    .toLowerCase()
    .replace(/ё/g, "е")
    .normalize("NFD")
    .replace(/([\p{Script=Latin}])\p{M}+/gu, "$1")
    .normalize("NFC")
    .replace(/[^\p{L}\p{N}]+/gu, " ")
    .trim()
    .replace(/\s+/g, " ");
}

function stem(word: string): string {
  if (/^[а-я]+$/.test(word) && word.length > 4) {
    const result = word.replace(/(иями|ями|ами|ого|ему|ому|ыми|ими|ий|ый|ой|ая|яя|ое|ее|ые|ие|ов|ев|ей|ам|ям|ах|ях|ом|ем|ую|юю|а|я|ы|и|у|ю|е|о|ь)$/, "");
    return result.length >= 3 ? result : word;
  }
  if (/^[a-z]+$/.test(word) && word.length > 4 && !word.endsWith("ss")) {
    return word.replace(/s$/, "");
  }
  return word;
}

type SearchText = { text: string; compact: string; words: string[] };
type SearchTerm = { original: SearchText; alternatives: SearchText[]; partial: boolean };

function prepareText(value: string): SearchText {
  const text = normalizeSearchText(value);
  return { text, compact: text.replace(/ /g, ""), words: text.split(" ").filter(Boolean).map(stem) };
}

const aliasGroups = SEARCH_SYNONYMS.map((aliases) => aliases.map(prepareText));
const aliasesByLength = aliasGroups.flatMap((aliases) =>
  aliases.map((alias) => ({ alias, alternatives: aliases })),
).sort((a, b) => b.alias.words.length - a.alias.words.length);

function queryTerms(query: string): SearchTerm[] {
  const words = normalizeSearchText(query).split(" ").filter(Boolean);
  const terms: SearchTerm[] = [];
  for (let i = 0; i < words.length;) {
    const match = aliasesByLength.find(({ alias }) =>
      alias.words.every((word, offset) => word === stem(words[i + offset] ?? "")),
    );
    const length = match?.alias.words.length ?? 1;
    const original = prepareText(words.slice(i, i + length).join(" "));
    terms.push({ original, alternatives: match?.alternatives ?? [original], partial: !match });
    i += length;
  }
  return terms;
}

function matches(field: SearchText, term: SearchText, partial = false): boolean {
  if (!term.text) return false;
  if (term.words.length === 1) {
    // Short words such as SUP must match a word, not the middle of "super".
    return field.words.some((word) => word === term.words[0] ||
      (partial && term.words[0].length >= 2 && word.startsWith(term.words[0])) ||
      (term.words[0].length >= 4 && word.includes(term.words[0])));
  }
  if (field.text.includes(term.text) || field.compact.includes(term.compact)) return true;
  return field.words.some((_, start) => term.words.every((word, offset) =>
    field.words[start + offset] === word,
  ));
}

export type SearchDocument = {
  id: string;
  title: string;
  slug?: string;
  description?: string | null;
  taxonomy?: string;
  available?: boolean;
};

export type IndexedDocument = {
  id: string;
  title: SearchText;
  slug: SearchText;
  description: SearchText;
  taxonomy: SearchText;
  available: boolean;
};

export function createSearchIndex(documents: SearchDocument[]): IndexedDocument[] {
  return documents.map((document) => ({
    id: document.id,
    title: prepareText(document.title),
    slug: prepareText(document.slug ?? ""),
    description: prepareText(document.description ?? ""),
    taxonomy: prepareText(document.taxonomy ?? ""),
    available: document.available ?? true,
  }));
}

export function rankSearchResults(index: IndexedDocument[], query: string, limit = 60): string[] {
  const terms = queryTerms(query);
  if (!terms.length) return [];
  const normalizedQuery = normalizeSearchText(query);
  const compactQuery = normalizedQuery.replace(/ /g, "");
  const ranked: { id: string; score: number; order: number }[] = [];
  index.forEach((document, order) => {
    let score = 0;
    for (const term of terms) {
      let best = 0;
      for (const [field, weight] of [
        [document.title, 80], [document.slug, 60],
        [document.taxonomy, 40], [document.description, 10],
      ] as const) {
        if (matches(field, term.original, term.partial)) best = Math.max(best, weight + 20);
        else if (term.alternatives.some((alias) => matches(field, alias))) best = Math.max(best, weight);
      }
      // All concepts in a multiword query must match ("детский спальник").
      if (!best) return;
      score += best;
    }
    if (document.title.compact === compactQuery) score += 300;
    else if (document.title.text.includes(normalizedQuery)) score += 150;
    else if (document.title.compact.includes(compactQuery)) score += 100;
    if (document.available) score += 5;
    ranked.push({ id: document.id, score, order });
  });
  return ranked.sort((a, b) => b.score - a.score || a.order - b.order)
    .slice(0, limit).map(({ id }) => id);
}
