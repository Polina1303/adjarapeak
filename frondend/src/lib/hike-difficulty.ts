import type { Lang } from "@/lib/i18n";

export type DifficultyLevelKey =
  | "easy"
  | "medium"
  | "aboveAverage"
  | "hard"
  | "hardcore";

type LocalizedText = Record<Lang, string>;

export type DifficultyLevel = {
  key: DifficultyLevelKey;
  emoji: string;
  title: LocalizedText;
  description: LocalizedText;
  className: string;
};

export const HIKE_DIFFICULTY_LEVELS: DifficultyLevel[] = [
  {
    key: "easy",
    emoji: "🟢",
    title: { RU: "Лёгкий", EN: "Easy", GE: "მარტივი" },
    description: {
      RU: "Подъём до 300 м, 2–6 км",
      EN: "Up to 300 m ascent, 2–6 km",
      GE: "300 მ-მდე აღმართი, 2–6 კმ",
    },
    className: "border-emerald-200 bg-emerald-50 text-emerald-950",
  },
  {
    key: "medium",
    emoji: "🟡",
    title: { RU: "Средний", EN: "Medium", GE: "საშუალო" },
    description: {
      RU: "Подъём 300–800 м, 8–15 км",
      EN: "300–800 m ascent, 8–15 km",
      GE: "300–800 მ აღმართი, 8–15 კმ",
    },
    className: "border-yellow-200 bg-yellow-50 text-yellow-950",
  },
  {
    key: "aboveAverage",
    emoji: "🟠",
    title: { RU: "Выше среднего", EN: "Above average", GE: "საშუალოზე რთული" },
    description: {
      RU: "Подъём 800–1200 м, 15–20 км",
      EN: "800–1,200 m ascent, 15–20 km",
      GE: "800–1200 მ აღმართი, 15–20 კმ",
    },
    className: "border-orange-200 bg-orange-50 text-orange-950",
  },
  {
    key: "hard",
    emoji: "🔴",
    title: { RU: "Сложный", EN: "Hard", GE: "რთული" },
    description: {
      RU: "Подъём 1200–1700 м, 16–30 км за день",
      EN: "1,200–1,700 m ascent, 16–30 km per day",
      GE: "1200–1700 მ აღმართი, დღეში 16–30 კმ",
    },
    className: "border-red-200 bg-red-50 text-red-950",
  },
  {
    key: "hardcore",
    emoji: "⚫",
    title: { RU: "Хардовый", EN: "Hardcore", GE: "ჰარდკორი" },
    description: {
      RU: "От 1700 м набора высоты в день",
      EN: "From 1,700 m ascent per day",
      GE: "დღეში 1700 მ-ზე მეტი აღმართი",
    },
    className: "border-neutral-300 bg-neutral-900 text-white",
  },
];

export const HIKE_DIFFICULTY_FACTORS = [
  {
    emoji: "⬆️",
    label: {
      RU: "Крутые подъёмы",
      EN: "Steep ascents",
      GE: "ციცაბო აღმართები",
    },
  },
  {
    emoji: "💧",
    label: {
      RU: "Мало воды на маршруте",
      EN: "Limited water on the route",
      GE: "მარშრუტზე ცოტა წყალია",
    },
  },
  {
    emoji: "🎒",
    label: {
      RU: "Многодневный выезд",
      EN: "Multi-day trip",
      GE: "მრავალდღიანი გასვლა",
    },
  },
  {
    emoji: "🏃‍♂️",
    label: {
      RU: "Более 25 км в день",
      EN: "More than 25 km per day",
      GE: "დღეში 25 კმ-ზე მეტი",
    },
  },
  {
    emoji: "🔎",
    label: {
      RU: "Разведка: гид идёт впервые",
      EN: "Exploration: the guide is new to the route",
      GE: "დაზვერვა: გიდი მარშრუტზე პირველად მიდის",
    },
  },
] as const;

const MATCHERS: Array<[DifficultyLevelKey, RegExp]> = [
  ["hardcore", /хард|hardcore|ჰარდ/i],
  ["aboveAverage", /выше\s+средн|above\s+average|საშუალოზე/i],
  ["hard", /сложн|(^|\s)hard(\s|$)|difficult|challenging|რთულ/i],
  ["medium", /средн|medium|moderate|საშუალო/i],
  ["easy", /л[её]гк|easy|მარტივ/i],
];

export function getDifficultyLevel(value: string | null | undefined) {
  if (!value) return null;
  const match = MATCHERS.find(([, matcher]) => matcher.test(value));
  return match
    ? HIKE_DIFFICULTY_LEVELS.find((level) => level.key === match[0]) ?? null
    : null;
}

export function getDifficultyFactors(value: string | null | undefined) {
  if (!value) return [];
  return HIKE_DIFFICULTY_FACTORS.filter((factor) => value.includes(factor.emoji));
}

export function formatDifficulty(
  value: string | null | undefined,
  lang: Lang,
) {
  if (!value) return null;
  const level = getDifficultyLevel(value);
  if (!level) return value;
  const factors = getDifficultyFactors(value)
    .map((factor) => factor.emoji)
    .join("");
  return `${level.emoji} ${level.title[lang]}${factors ? ` ${factors}` : ""}`;
}
