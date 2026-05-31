import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { C as CATALOG_UI_TEXT } from "./catalog-ui-text-Dc3UrwST.mjs";
import { G as useLanguage, B as searchShopProducts, A as searchRentalItems } from "./router-iK0vV985.mjs";
import { P as ProductGrid } from "./ProductGrid-Bpn3yquN.mjs";
import { R as RentalGrid } from "./RentalGrid-DXtVNGmz.mjs";
import { S as Sheet, e as SheetTrigger, a as SheetContent, c as SheetHeader, d as SheetTitle } from "./sheet-CR4gl3eO.mjs";
import { u as useCatalogTranslations } from "./catalog-translations-Dcqii-5G.mjs";
import { a as getDisplayPrice } from "./discount-DnxRxSbc.mjs";
import { A as ArrowLeft, e as ChevronLeft, f as ChevronRight, w as SlidersHorizontal, d as ChevronDown, S as Search, X } from "../_libs/lucide-react.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
function CatalogSidebar({
  kind,
  groupSlug,
  groupTitle,
  categories,
  subsByCat,
  activeCategorySlug,
  activeSubcategorySlug,
  translateCategory,
  translateSubcategory
}) {
  const initiallyOpen = /* @__PURE__ */ new Set();
  for (const c of categories) {
    if (c.slug === activeCategorySlug && (subsByCat[c.id] ?? []).length > 0) {
      initiallyOpen.add(c.id);
    }
  }
  const [openIds, setOpenIds] = reactExports.useState(initiallyOpen);
  const toggle = (id) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "w-full lg:w-[260px] shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col", children: categories.map((c) => {
    const subs = subsByCat[c.id] ?? [];
    const hasSubs = subs.length > 0;
    const isActiveCat = c.slug === activeCategorySlug;
    const isOpen = openIds.has(c.id) || isActiveCat;
    const categoryTitle = translateCategory?.(c) ?? c.title;
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "border-b border-border/40", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-stretch", children: [
        kind === "shop" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/sale/$group/$category",
            params: { group: groupSlug, category: c.slug },
            className: `flex-1 px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors ${isActiveCat && !activeSubcategorySlug ? "text-ember font-semibold" : "text-foreground/80 hover:text-foreground"}`,
            children: categoryTitle
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/rent/$group/$category",
            params: { group: groupSlug, category: c.slug },
            className: `flex-1 px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors ${isActiveCat && !activeSubcategorySlug ? "text-ember font-semibold" : "text-foreground/80 hover:text-foreground"}`,
            children: categoryTitle
          }
        ),
        hasSubs && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            "aria-label": isOpen ? "Свернуть" : "Развернуть",
            onClick: () => toggle(c.id),
            className: "px-3 text-ember hover:bg-muted/50 transition-colors",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              ChevronDown,
              {
                className: `h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`
              }
            )
          }
        )
      ] }),
      hasSubs && isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "bg-muted/30", children: subs.map((s) => {
        const isActiveSub = isActiveCat && s.slug === activeSubcategorySlug;
        const subcategoryTitle = translateSubcategory?.(c, s) ?? s.title;
        return /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: kind === "shop" ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/sale/$group/$category/$subcategory",
            params: {
              group: groupSlug,
              category: c.slug,
              subcategory: s.slug
            },
            className: `block pl-8 pr-3 py-2.5 text-xs font-body uppercase tracking-wider transition-colors ${isActiveSub ? "text-ember font-semibold" : "text-foreground/70 hover:text-foreground"}`,
            children: subcategoryTitle
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/rent/$group/$category/$subcategory",
            params: {
              group: groupSlug,
              category: c.slug,
              subcategory: s.slug
            },
            className: `block pl-8 pr-3 py-2.5 text-xs font-body uppercase tracking-wider transition-colors ${isActiveSub ? "text-ember font-semibold" : "text-foreground/70 hover:text-foreground"}`,
            children: subcategoryTitle
          }
        ) }, s.id);
      }) })
    ] }, c.id);
  }) }) });
}
const SORT_OPTIONS = [
  { value: "default" },
  { value: "newest" },
  { value: "price-asc" },
  { value: "price-desc" }
];
function CatalogToolbar({
  search,
  onSearchChange,
  searchPlaceholder,
  sort,
  onSortChange,
  onlyAvailable,
  onAvailableChange,
  availabilityLabel,
  count
}) {
  const { lang } = useLanguage();
  const text = CATALOG_UI_TEXT[lang];
  const [sortOpen, setSortOpen] = reactExports.useState(false);
  const sortRef = reactExports.useRef(null);
  const actualSearchPlaceholder = searchPlaceholder ?? text.searchSection;
  const actualAvailabilityLabel = availabilityLabel ?? text.inStock;
  const currentSortLabel = text.sortOptions[sort] ?? text.sortOptions.default;
  reactExports.useEffect(() => {
    const onClick = (e) => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 mb-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full max-w-xl", role: "search", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Search, { className: "absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "input",
        {
          type: "search",
          value: search,
          onChange: (event) => onSearchChange(event.target.value),
          placeholder: actualSearchPlaceholder,
          "aria-label": text.searchAriaLabel(actualSearchPlaceholder, count),
          className: "h-11 w-full rounded-lg border border-border bg-background pl-11 pr-11 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ember"
        }
      ),
      search && /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          "aria-label": text.clearSearch,
          onClick: () => onSearchChange(""),
          className: "absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 flex-wrap", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: sortRef, className: "relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute -top-2 left-4 px-1 bg-background text-[10px] uppercase tracking-wider text-ember font-body z-10", children: text.sort }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "button",
          {
            type: "button",
            onClick: () => setSortOpen((v) => !v),
            className: "flex items-center gap-2 h-11 px-5 rounded-full border border-ember/40 bg-ember/5 text-sm font-body font-medium text-foreground hover:border-ember transition-colors",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: currentSortLabel }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                ChevronDown,
                {
                  className: `h-3 w-3 transition-transform ${sortOpen ? "rotate-180" : ""}`
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: sortOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -4 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -4 },
            transition: { duration: 0.15 },
            className: "absolute left-0 top-full mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden min-w-[220px] z-20",
            children: SORT_OPTIONS.map((opt) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  onSortChange(opt.value);
                  setSortOpen(false);
                },
                className: `w-full text-left px-4 py-2 text-xs font-body transition-colors ${sort === opt.value ? "text-ember bg-foreground/5" : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"}`,
                children: text.sortOptions[opt.value]
              },
              opt.value
            ))
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onAvailableChange(!onlyAvailable),
          className: `h-11 px-5 rounded-full border text-sm font-body uppercase tracking-wider transition-colors ${onlyAvailable ? "border-ember bg-ember text-ember-foreground" : "border-border text-foreground hover:border-ember"}`,
          children: actualAvailabilityLabel
        }
      )
    ] })
  ] });
}
const INITIAL_VISIBLE_COUNT = 36;
const SEARCH_DEBOUNCE_MS = 350;
const CATALOG_PAGE_TEXT = {
  RU: {
    back: "Назад",
    home: "Главная",
    shop: "Магазин",
    rental: "Прокат",
    scrollLeft: "Прокрутить категории влево",
    scrollRight: "Прокрутить категории вправо"
  },
  EN: {
    back: "Back",
    home: "Home",
    shop: "Shop",
    rental: "Rental",
    scrollLeft: "Scroll categories left",
    scrollRight: "Scroll categories right"
  },
  GE: {
    back: "უკან",
    home: "მთავარი",
    shop: "მაღაზია",
    rental: "ქირაობა",
    scrollLeft: "კატეგორიების მარცხნივ გადახვევა",
    scrollRight: "კატეგორიების მარჯვნივ გადახვევა"
  }
};
const SHOP_GROUP_TAB_CONFIG = [
  { key: "sale", groupSlug: "sale" },
  { key: "cyclingRoller", groupSlug: "cyclingRoller" },
  { key: "boards", groupSlug: "boards" },
  { key: "clothesAndShoes", groupSlug: "clothesAndShoes" },
  { key: "martial", groupSlug: "martial" },
  { key: "tourismCamping", groupSlug: "tourismCamping" },
  { key: "sports", groupSlug: "sports" },
  { key: "fitness", groupSlug: "fitness" },
  { key: "swimmingSup", groupSlug: "swimmingSup" },
  { key: "alpinesking", groupSlug: "alpinesking" }
];
function CatalogPage(props) {
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const catalogUi = CATALOG_UI_TEXT[lang];
  const pageText = CATALOG_PAGE_TEXT[lang];
  const [search, setSearch] = reactExports.useState("");
  const [sort, setSort] = reactExports.useState("default");
  const [onlyAvailable, setOnlyAvailable] = reactExports.useState(false);
  const [visibleCount, setVisibleCount] = reactExports.useState(INITIAL_VISIBLE_COUNT);
  const [filtersOpen, setFiltersOpen] = reactExports.useState(false);
  const tabsRef = reactExports.useRef(null);
  const [canScrollLeft, setCanScrollLeft] = reactExports.useState(false);
  const [canScrollRight, setCanScrollRight] = reactExports.useState(false);
  const [debouncedGlobalSearch, setDebouncedGlobalSearch] = reactExports.useState("");
  const [globalSearchProducts, setGlobalSearchProducts] = reactExports.useState([]);
  const [globalSearchItems, setGlobalSearchItems] = reactExports.useState([]);
  const [globalSearchLoading, setGlobalSearchLoading] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = tabsRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [props.groups.length]);
  const scrollTabs = (dir) => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };
  const isShop = props.kind === "shop";
  const trimmedSearch = search.trim();
  const shouldSearchWholeCatalog = trimmedSearch.length >= 3;
  const isWholeCatalogSearchActive = shouldSearchWholeCatalog && debouncedGlobalSearch.length >= 3;
  const navigate = useNavigate();
  reactExports.useEffect(() => {
    if (!shouldSearchWholeCatalog) {
      setDebouncedGlobalSearch("");
      setGlobalSearchProducts([]);
      setGlobalSearchItems([]);
      setGlobalSearchLoading(false);
      return;
    }
    const timer = window.setTimeout(() => {
      setDebouncedGlobalSearch(trimmedSearch);
    }, SEARCH_DEBOUNCE_MS);
    return () => window.clearTimeout(timer);
  }, [shouldSearchWholeCatalog, trimmedSearch]);
  reactExports.useEffect(() => {
    if (debouncedGlobalSearch.length < 3) return;
    let cancelled = false;
    setGlobalSearchLoading(true);
    const searchPromise = isShop ? searchShopProducts({ data: { q: debouncedGlobalSearch, limit: 100 } }) : searchRentalItems({ data: { q: debouncedGlobalSearch, limit: 100 } });
    searchPromise.then((results) => {
      if (cancelled) return;
      if (isShop) {
        setGlobalSearchProducts(results);
      } else {
        setGlobalSearchItems(results);
      }
    }).catch(() => {
      if (cancelled) return;
      if (isShop) {
        setGlobalSearchProducts([]);
      } else {
        setGlobalSearchItems([]);
      }
    }).finally(() => {
      if (!cancelled) setGlobalSearchLoading(false);
    });
    return () => {
      cancelled = true;
    };
  }, [isShop, debouncedGlobalSearch]);
  const filteredProducts = reactExports.useMemo(() => {
    if (!isShop) return [];
    let arr = (isWholeCatalogSearchActive ? globalSearchProducts : props.products).slice();
    if (onlyAvailable) arr = arr.filter((p) => p.in_stock);
    if (sort === "price-asc")
      arr.sort((a, b) => getDisplayPrice(a.price, a.sale_price) - getDisplayPrice(b.price, b.sale_price));
    else if (sort === "price-desc")
      arr.sort((a, b) => getDisplayPrice(b.price, b.sale_price) - getDisplayPrice(a.price, a.sale_price));
    return arr;
  }, [globalSearchProducts, isShop, isWholeCatalogSearchActive, onlyAvailable, props, sort]);
  const filteredItems = reactExports.useMemo(() => {
    if (isShop) return [];
    let arr = (isWholeCatalogSearchActive ? globalSearchItems : props.items).slice();
    if (onlyAvailable) arr = arr.filter((p) => p.available);
    if (sort === "price-asc")
      arr.sort(
        (a, b) => getDisplayPrice(a.price_per_day, a.sale_price_per_day) - getDisplayPrice(b.price_per_day, b.sale_price_per_day)
      );
    else if (sort === "price-desc")
      arr.sort(
        (a, b) => getDisplayPrice(b.price_per_day, b.sale_price_per_day) - getDisplayPrice(a.price_per_day, a.sale_price_per_day)
      );
    return arr;
  }, [globalSearchItems, isShop, isWholeCatalogSearchActive, props, sort, onlyAvailable]);
  const count = isShop ? filteredProducts.length : filteredItems.length;
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = count > visibleCount;
  const groupTitle = catalogTranslations.group(props.kind, props.group.slug, props.group.title);
  const translateCategoryTitle = (category) => catalogTranslations.category(props.kind, props.group.slug, category.slug, category.title);
  const translateSubcategoryTitle = (category, subcategory) => catalogTranslations.subcategory(
    props.kind,
    props.group.slug,
    category.slug,
    subcategory.slug,
    subcategory.title
  );
  const activeCategoryTitle = props.activeCategory ? translateCategoryTitle(props.activeCategory) : null;
  const activeSubcategoryTitle = props.activeCategory && props.activeSubcategory ? translateSubcategoryTitle(props.activeCategory, props.activeSubcategory) : null;
  const groupTabs = reactExports.useMemo(() => {
    if (!isShop) {
      return props.groups.map((group) => ({
        key: group.id,
        label: catalogTranslations.group("rentals", group.slug, group.title),
        groupSlug: group.slug,
        group
      }));
    }
    const bySlug = new Map(props.groups.map((group) => [group.slug, group]));
    return SHOP_GROUP_TAB_CONFIG.map((tab) => {
      const group = bySlug.get(tab.groupSlug);
      if (!group) return null;
      return {
        ...tab,
        label: tab.groupSlug === "sale" ? catalogTranslations.sale() : catalogTranslations.group("shop", group.slug, group.title),
        group
      };
    }).filter((tab) => Boolean(tab));
  }, [catalogTranslations, isShop, props.groups]);
  reactExports.useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [search, sort, onlyAvailable, props.group.id, props.activeCategory?.id, props.activeSubcategory?.id]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-20 section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => {
            if (typeof window !== "undefined" && window.history.length > 1) {
              window.history.back();
            } else {
              navigate({ to: isShop ? "/sale" : "/rent" });
            }
          },
          className: "lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            pageText.back
          ]
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden lg:flex items-center gap-2 text-sm font-body text-muted-foreground mb-4 flex-wrap", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: pageText.home }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: isShop ? "/sale" : "/rent",
            className: "hover:text-foreground transition-colors",
            children: isShop ? pageText.shop : pageText.rental
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
        props.activeCategory ? isShop ? /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/sale/$group",
            params: { group: props.group.slug },
            className: "hover:text-foreground transition-colors",
            children: groupTitle
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
          Link,
          {
            to: "/rent/$group",
            params: { group: props.group.slug },
            className: "hover:text-foreground transition-colors",
            children: groupTitle
          }
        ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: groupTitle }),
        props.activeCategory && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" }),
          props.activeSubcategory ? isShop ? /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/sale/$group/$category",
              params: { group: props.group.slug, category: props.activeCategory.slug },
              className: "hover:text-foreground transition-colors",
              children: activeCategoryTitle
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
            Link,
            {
              to: "/rent/$group/$category",
              params: { group: props.group.slug, category: props.activeCategory.slug },
              className: "hover:text-foreground transition-colors",
              children: activeCategoryTitle
            }
          ) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: activeCategoryTitle })
        ] })
      ] }),
      groupTabs.length > 1 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-8 border-b border-border", children: [
        canScrollLeft && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": pageText.scrollLeft,
              onClick: () => scrollTabs(-1),
              className: "absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 opacity-100" })
        ] }),
        canScrollRight && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              type: "button",
              "aria-label": pageText.scrollRight,
              onClick: () => scrollTabs(1),
              className: "absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-4 w-4" })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 opacity-100" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            ref: tabsRef,
            className: "flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide scroll-smooth",
            children: groupTabs.map((tab) => {
              const active = tab.group.id === props.group.id;
              const inner = /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "span",
                {
                  className: `relative inline-block px-3 sm:px-4 py-3 text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${active ? "text-ember" : "text-foreground/60 hover:text-foreground"}`,
                  children: [
                    tab.label,
                    active && /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        layoutId: `tab-underline-${props.kind}`,
                        className: "absolute left-2 right-2 -bottom-px h-[3px] bg-ember rounded-full"
                      }
                    )
                  ]
                }
              );
              if (isShop && tab.groupSlug === "sale") {
                return /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sale/sale", className: "shrink-0", children: inner }, tab.key);
              }
              return isShop ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/sale/$group",
                  params: { group: tab.groupSlug },
                  className: "shrink-0",
                  children: inner
                },
                tab.key
              ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/rent/$group",
                  params: { group: tab.groupSlug },
                  className: "shrink-0",
                  children: inner
                },
                tab.key
              );
            })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col lg:flex-row gap-6 lg:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("aside", { className: "hidden lg:block shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          CatalogSidebar,
          {
            kind: props.kind,
            groupSlug: props.group.slug,
            groupTitle,
            categories: props.categories,
            subsByCat: props.subsByCat,
            activeCategorySlug: props.activeCategory?.slug,
            activeSubcategorySlug: props.activeSubcategory?.slug,
            translateCategory: translateCategoryTitle,
            translateSubcategory: translateSubcategoryTitle
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0 flex flex-col gap-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide", children: activeSubcategoryTitle ?? activeCategoryTitle ?? groupTitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-xs font-body text-muted-foreground", children: isWholeCatalogSearchActive && globalSearchLoading ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: catalogUi.searchingQuery(debouncedGlobalSearch) }) : isWholeCatalogSearchActive ? /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: catalogUi.searchResults(count, debouncedGlobalSearch) }) : /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: catalogUi.itemCount(count) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Sheet, { open: filtersOpen, onOpenChange: setFiltersOpen, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "button",
                className: "lg:hidden inline-flex items-center gap-2 self-start h-11 px-5 rounded-full border border-border text-sm font-body uppercase tracking-wider text-foreground hover:border-ember transition-colors",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(SlidersHorizontal, { className: "h-4 w-4" }),
                  catalogUi.filters
                ]
              }
            ) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(SheetContent, { side: "left", className: "w-full sm:max-w-full overflow-y-auto", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SheetHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SheetTitle, { className: "font-display uppercase tracking-wide", children: catalogUi.filters }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4", onClick: () => setFiltersOpen(false), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CatalogSidebar,
                {
                  kind: props.kind,
                  groupSlug: props.group.slug,
                  groupTitle,
                  categories: props.categories,
                  subsByCat: props.subsByCat,
                  activeCategorySlug: props.activeCategory?.slug,
                  activeSubcategorySlug: props.activeSubcategory?.slug,
                  translateCategory: translateCategoryTitle,
                  translateSubcategory: translateSubcategoryTitle
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CatalogToolbar,
              {
                search,
                onSearchChange: setSearch,
                searchPlaceholder: isShop ? catalogUi.searchShop : catalogUi.searchRental,
                sort,
                onSortChange: setSort,
                onlyAvailable,
                onAvailableChange: setOnlyAvailable,
                availabilityLabel: isShop ? catalogUi.inStock : catalogUi.available,
                count
              }
            ),
            isShop ? globalSearchLoading && isWholeCatalogSearchActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground font-body", children: catalogUi.searchingProducts }) : /* @__PURE__ */ jsxRuntimeExports.jsx(ProductGrid, { products: visibleProducts }) : globalSearchLoading && isWholeCatalogSearchActive ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground font-body", children: catalogUi.searchingProducts }) : /* @__PURE__ */ jsxRuntimeExports.jsx(RentalGrid, { items: visibleItems }),
            hasMore && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setVisibleCount((current) => current + INITIAL_VISIBLE_COUNT),
                  className: "h-11 rounded-lg border border-border px-6 font-body text-sm uppercase tracking-wider text-foreground transition-colors hover:border-ember",
                  children: catalogUi.showMore
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-body uppercase tracking-wider text-muted-foreground", children: catalogUi.shownOf(Math.min(visibleCount, count), count) })
            ] })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  CatalogPage as C
};
