import { r as reactExports } from "../_libs/react.mjs";
const LANG_TO_LOCALE = {
  RU: "ru",
  EN: "en",
  GE: "ka"
};
const SHOP_GROUP_LABELS = {
  RU: {
    sale: "Распродажа",
    cyclingRoller: "Велоспорт и ролики",
    boards: "Баланс и доски",
    clothesAndShoes: "Одежда и обувь",
    martial: "Единоборства",
    tourismCamping: "Туризм и кемпинг",
    sports: "Игровой спорт",
    fitness: "Фитнес и йога",
    swimmingSup: "Плавание и сапы",
    alpinesking: "Горнолыжный спорт"
  },
  EN: {
    sale: "SALE",
    cyclingRoller: "CYCLING AND ROLLERS",
    boards: "BALANCE AND BOARDS",
    clothesAndShoes: "CLOTHING AND SHOES",
    martial: "MARTIAL ARTS",
    tourismCamping: "TOURISM AND CAMPING",
    sports: "TEAM SPORTS",
    fitness: "FITNESS AND YOGA",
    swimmingSup: "SWIMMING AND SUP",
    alpinesking: "ALPINE SKIING"
  },
  GE: {
    sale: "ფასდაკლება",
    cyclingRoller: "ველოსპორტი და როლიკები",
    boards: "ბალანსი და დაფები",
    clothesAndShoes: "ტანსაცმელი და ფეხსაცმელი",
    martial: "ბოქსი, ორთაბრძოლა",
    tourismCamping: "ტურიზმი და კემპინგი",
    sports: "სპორტული თამაშები",
    fitness: "ფიტნესი და იოგა",
    swimmingSup: "საპ-ბორდი და ცურვა",
    alpinesking: "სამთო-სათხილამურო სპორტი"
  }
};
const RENT_GROUP_LABELS = {
  RU: {
    sports: "Спортивное",
    skiing: "Горнолыжное",
    tourism: "Туристическое"
  },
  EN: {
    sports: "SPORTS RENTAL",
    skiing: "SKI RENTAL",
    tourism: "TOURISM RENTAL"
  },
  GE: {
    sports: "სპორტული",
    skiing: "სამთოსათხილამურო",
    tourism: "ტურისტული"
  }
};
const CATEGORY_ALIASES = {
  boards: {
    skateboards: "skateboard",
    longboards: "longboard",
    surfskates: "surfskate",
    balanceboards: "balance_board"
  }
};
const localeCache = /* @__PURE__ */ new Map();
async function fetchLocale(code) {
  const cached = localeCache.get(code);
  if (cached) return cached;
  const [common, rent] = await Promise.all([
    fetch(`/locales/${code}/common.json`).then((res) => res.json()),
    fetch(`/locales/${code}/rent.json`).then((res) => res.json())
  ]);
  const locale = { common, rent };
  localeCache.set(code, locale);
  return locale;
}
function getGroupSource(locale, kind) {
  return kind === "shop" ? locale?.common : locale?.rent;
}
function getGroupLocale(locale, kind, groupSlug) {
  const group = getGroupSource(locale, kind)?.[groupSlug];
  return typeof group === "object" && group ? group : null;
}
function normalizeCategorySlug(groupSlug, categorySlug) {
  return CATEGORY_ALIASES[groupSlug]?.[categorySlug] ?? categorySlug;
}
function getCategoryLocale(locale, kind, groupSlug, categorySlug) {
  const group = getGroupLocale(locale, kind, groupSlug);
  const normalizedSlug = normalizeCategorySlug(groupSlug, categorySlug);
  return group?.category?.[normalizedSlug] ?? null;
}
function getCategoryTitle(category) {
  if (!category) return null;
  return typeof category === "string" ? category : category.title ?? null;
}
function useCatalogTranslations(lang) {
  const code = LANG_TO_LOCALE[lang];
  const [locale, setLocale] = reactExports.useState(
    () => localeCache.get(code) ?? null
  );
  reactExports.useEffect(() => {
    let cancelled = false;
    const cached = localeCache.get(code);
    if (cached) {
      setLocale(cached);
      return;
    }
    fetchLocale(code).then((nextLocale) => {
      if (!cancelled) setLocale(nextLocale);
    }).catch(() => {
      if (!cancelled) setLocale(null);
    });
    return () => {
      cancelled = true;
    };
  }, [code]);
  return reactExports.useMemo(
    () => ({
      group(kind, groupSlug, fallback) {
        const staticLabel = kind === "shop" ? SHOP_GROUP_LABELS[lang][groupSlug] : RENT_GROUP_LABELS[lang][groupSlug];
        if (staticLabel) return staticLabel;
        return getGroupLocale(locale, kind, groupSlug)?.title ?? fallback;
      },
      sale() {
        return SHOP_GROUP_LABELS[lang].sale;
      },
      category(kind, groupSlug, categorySlug, fallback) {
        return getCategoryTitle(getCategoryLocale(locale, kind, groupSlug, categorySlug)) ?? fallback;
      },
      subcategory(kind, groupSlug, categorySlug, subcategorySlug, fallback) {
        const category = getCategoryLocale(locale, kind, groupSlug, categorySlug);
        if (!category || typeof category === "string") return fallback;
        return category.subcategories?.[subcategorySlug] ?? fallback;
      }
    }),
    [lang, locale]
  );
}
export {
  useCatalogTranslations as u
};
