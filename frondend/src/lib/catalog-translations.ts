import { useEffect, useMemo, useState } from "react";
import type { Lang } from "@/lib/i18n";

type LocaleCode = "ru" | "en" | "ka";
type CatalogKind = "shop" | "rentals";
type CategoryLocale =
  | string
  | {
      title?: string;
      subcategories?: Record<string, string>;
    };
type GroupLocale = {
  title?: string;
  category?: Record<string, CategoryLocale>;
};
type LocaleFile = Record<string, GroupLocale | string>;
type CatalogLocale = {
  common: LocaleFile;
  rent: LocaleFile;
};

const LANG_TO_LOCALE: Record<Lang, LocaleCode> = {
  RU: "ru",
  EN: "en",
  GE: "ka",
};

const SHOP_GROUP_LABELS: Record<Lang, Record<string, string>> = {
  RU: {
    sale: "Распродажа",
    cyclingRoller: "Велоспорт, ролики и самокаты",
    boards: "Баланс и доски",
    clothesAndShoes: "Одежда и обувь",
    martial: "Единоборства",
    tourismCamping: "Туризм и кемпинг",
    food: "Еда",
    sports: "Игровой спорт",
    fitness: "Фитнес и йога",
    swimmingSup: "Плавание и сапы",
    winterSports: "Зимние виды спорта",
    alpinesking: "Горнолыжный спорт",
  },
  EN: {
    sale: "SALE",
    cyclingRoller: "CYCLING, ROLLERS AND SCOOTERS",
    boards: "BALANCE AND BOARDS",
    clothesAndShoes: "CLOTHING AND SHOES",
    martial: "MARTIAL ARTS",
    tourismCamping: "TOURISM AND CAMPING",
    food: "FOOD",
    sports: "TEAM SPORTS",
    fitness: "FITNESS AND YOGA",
    swimmingSup: "SWIMMING AND SUP",
    winterSports: "WINTER SPORTS",
    alpinesking: "ALPINE SKIING",
  },
  GE: {
    sale: "ფასდაკლება",
    cyclingRoller: "ველოსპორტი, როლიკები და სკუტერები",
    boards: "ბალანსი და დაფები",
    clothesAndShoes: "ტანსაცმელი და ფეხსაცმელი",
    martial: "ბოქსი, ორთაბრძოლა",
    tourismCamping: "ტურიზმი და კემპინგი",
    food: "საჭმელი",
    sports: "სპორტული თამაშები",
    fitness: "ფიტნესი და იოგა",
    swimmingSup: "საპ-ბორდი და ცურვა",
    winterSports: "ზამთრის სპორტი",
    alpinesking: "სამთო-სათხილამურო სპორტი",
  },
};

const RENT_GROUP_LABELS: Record<Lang, Record<string, string>> = {
  RU: {
    sports: "Спортивное",
    skiing: "Горнолыжное",
    tourism: "Туристическое",
  },
  EN: {
    sports: "SPORTS RENTAL",
    skiing: "SKI RENTAL",
    tourism: "TOURISM RENTAL",
  },
  GE: {
    sports: "სპორტული",
    skiing: "სამთოსათხილამურო",
    tourism: "ტურისტული",
  },
};

const CATEGORY_ALIASES: Record<string, Record<string, string>> = {
  boards: {
    skateboards: "skateboard",
    longboards: "longboard",
    surfskates: "surfskate",
    balanceboards: "balance_board",
  },
};

const localeCache = new Map<LocaleCode, CatalogLocale>();

async function fetchLocale(code: LocaleCode): Promise<CatalogLocale> {
  const cached = localeCache.get(code);
  if (cached) return cached;

  const [common, rent] = await Promise.all([
    fetch(`/locales/${code}/common.json`).then((res) => res.json() as Promise<LocaleFile>),
    fetch(`/locales/${code}/rent.json`).then((res) => res.json() as Promise<LocaleFile>),
  ]);
  const locale = { common, rent };
  localeCache.set(code, locale);
  return locale;
}

function getGroupSource(locale: CatalogLocale | null, kind: CatalogKind) {
  return kind === "shop" ? locale?.common : locale?.rent;
}

function getGroupLocale(
  locale: CatalogLocale | null,
  kind: CatalogKind,
  groupSlug: string,
) {
  const group = getGroupSource(locale, kind)?.[groupSlug];
  return typeof group === "object" && group ? group : null;
}

function normalizeCategorySlug(groupSlug: string, categorySlug: string) {
  return CATEGORY_ALIASES[groupSlug]?.[categorySlug] ?? categorySlug;
}

function getCategoryLocale(
  locale: CatalogLocale | null,
  kind: CatalogKind,
  groupSlug: string,
  categorySlug: string,
) {
  const group = getGroupLocale(locale, kind, groupSlug);
  const normalizedSlug = normalizeCategorySlug(groupSlug, categorySlug);
  return group?.category?.[normalizedSlug] ?? null;
}

function getCategoryTitle(category: CategoryLocale | null) {
  if (!category) return null;
  return typeof category === "string" ? category : category.title ?? null;
}

export function useCatalogTranslations(lang: Lang) {
  const code = LANG_TO_LOCALE[lang];
  const [locale, setLocale] = useState<CatalogLocale | null>(
    () => localeCache.get(code) ?? null,
  );

  useEffect(() => {
    let cancelled = false;
    const cached = localeCache.get(code);
    if (cached) {
      setLocale(cached);
      return;
    }

    fetchLocale(code)
      .then((nextLocale) => {
        if (!cancelled) setLocale(nextLocale);
      })
      .catch(() => {
        if (!cancelled) setLocale(null);
      });

    return () => {
      cancelled = true;
    };
  }, [code]);

  return useMemo(
    () => ({
      group(kind: CatalogKind, groupSlug: string, fallback: string) {
        const staticLabel =
          kind === "shop"
            ? SHOP_GROUP_LABELS[lang][groupSlug]
            : RENT_GROUP_LABELS[lang][groupSlug];
        if (staticLabel) return staticLabel;
        return getGroupLocale(locale, kind, groupSlug)?.title ?? fallback;
      },
      sale() {
        return SHOP_GROUP_LABELS[lang].sale;
      },
      category(
        kind: CatalogKind,
        groupSlug: string,
        categorySlug: string,
        fallback: string,
      ) {
        return getCategoryTitle(getCategoryLocale(locale, kind, groupSlug, categorySlug)) ?? fallback;
      },
      subcategory(
        kind: CatalogKind,
        groupSlug: string,
        categorySlug: string,
        subcategorySlug: string,
        fallback: string,
      ) {
        const category = getCategoryLocale(locale, kind, groupSlug, categorySlug);
        if (!category || typeof category === "string") return fallback;
        return category.subcategories?.[subcategorySlug] ?? fallback;
      },
    }),
    [lang, locale],
  );
}
