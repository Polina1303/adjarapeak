import { Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, SlidersHorizontal, ArrowLeft } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogSidebar } from "@/components/CatalogSidebar";
import { CatalogToolbar, type SortKey } from "@/components/CatalogToolbar";
import { ProductGrid } from "@/components/ProductGrid";
import { RentalGrid } from "@/components/RentalGrid";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { CATALOG_UI_TEXT } from "@/lib/catalog-ui-text";
import { getDisplayPrice } from "@/lib/discount";
import {
  searchRentalItems,
  searchShopProducts,
  type ShopGroup,
  type ShopCategory,
  type ShopSubcategory,
  type ShopProduct,
  type RentalGroup,
  type RentalCategory,
  type RentalItem,
} from "@/lib/catalog.functions";
import { useLanguage } from "@/lib/i18n";

const INITIAL_VISIBLE_COUNT = 36;
const SEARCH_DEBOUNCE_MS = 350;

const CATALOG_PAGE_TEXT = {
  RU: {
    back: "Назад",
    home: "Главная",
    shop: "Магазин",
    rental: "Прокат",
    scrollLeft: "Прокрутить категории влево",
    scrollRight: "Прокрутить категории вправо",
  },
  EN: {
    back: "Back",
    home: "Home",
    shop: "Shop",
    rental: "Rental",
    scrollLeft: "Scroll categories left",
    scrollRight: "Scroll categories right",
  },
  GE: {
    back: "უკან",
    home: "მთავარი",
    shop: "მაღაზია",
    rental: "ქირაობა",
    scrollLeft: "კატეგორიების მარცხნივ გადახვევა",
    scrollRight: "კატეგორიების მარჯვნივ გადახვევა",
  },
} as const;

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
  { key: "alpinesking", groupSlug: "alpinesking" },
] as const;

type ShopProps = {
  kind: "shop";
  groups: ShopGroup[];
  group: ShopGroup;
  categories: ShopCategory[];
  subsByCat: Record<string, ShopSubcategory[]>;
  activeCategory: ShopCategory | null;
  activeSubcategory: ShopSubcategory | null;
  products: ShopProduct[];
};

type RentalProps = {
  kind: "rentals";
  groups: RentalGroup[];
  group: RentalGroup;
  categories: RentalCategory[];
  subsByCat: Record<string, ShopSubcategory[]>;
  activeCategory: RentalCategory | null;
  activeSubcategory: ShopSubcategory | null;
  items: RentalItem[];
};

export function CatalogPage(props: ShopProps | RentalProps) {
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const catalogUi = CATALOG_UI_TEXT[lang];
  const pageText = CATALOG_PAGE_TEXT[lang];
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<SortKey>("default");
  const [onlyAvailable, setOnlyAvailable] = useState(false);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_COUNT);
  const [filtersOpen, setFiltersOpen] = useState(false);
  const tabsRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [debouncedGlobalSearch, setDebouncedGlobalSearch] = useState("");
  const [globalSearchProducts, setGlobalSearchProducts] = useState<ShopProduct[]>([]);
  const [globalSearchItems, setGlobalSearchItems] = useState<RentalItem[]>([]);
  const [globalSearchLoading, setGlobalSearchLoading] = useState(false);

  useEffect(() => {
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

  const scrollTabs = (dir: -1 | 1) => {
    const el = tabsRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * el.clientWidth * 0.8, behavior: "smooth" });
  };

  const isShop = props.kind === "shop";
  const trimmedSearch = search.trim();
  const shouldSearchWholeCatalog = trimmedSearch.length >= 3;
  const isWholeCatalogSearchActive = shouldSearchWholeCatalog && debouncedGlobalSearch.length >= 3;
  const navigate = useNavigate();

  useEffect(() => {
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

  useEffect(() => {
    if (debouncedGlobalSearch.length < 3) return;

    let cancelled = false;
    setGlobalSearchLoading(true);

    const searchPromise = isShop
      ? searchShopProducts({ data: { q: debouncedGlobalSearch, limit: 100 } })
      : searchRentalItems({ data: { q: debouncedGlobalSearch, limit: 100 } });

    searchPromise
      .then((results) => {
        if (cancelled) return;
        if (isShop) {
          setGlobalSearchProducts(results as ShopProduct[]);
        } else {
          setGlobalSearchItems(results as RentalItem[]);
        }
      })
      .catch(() => {
        if (cancelled) return;
        if (isShop) {
          setGlobalSearchProducts([]);
        } else {
          setGlobalSearchItems([]);
        }
      })
      .finally(() => {
        if (!cancelled) setGlobalSearchLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [isShop, debouncedGlobalSearch]);

  const filteredProducts = useMemo(() => {
    if (!isShop) return [] as ShopProduct[];
    let arr = (isWholeCatalogSearchActive ? globalSearchProducts : props.products).slice();
    if (onlyAvailable) arr = arr.filter((p) => p.in_stock);
    if (sort === "price-asc")
      arr.sort((a, b) => getDisplayPrice(a.price, a.sale_price) - getDisplayPrice(b.price, b.sale_price));
    else if (sort === "price-desc")
      arr.sort((a, b) => getDisplayPrice(b.price, b.sale_price) - getDisplayPrice(a.price, a.sale_price));
    return arr;
  }, [globalSearchProducts, isShop, isWholeCatalogSearchActive, onlyAvailable, props, sort]);

  const filteredItems = useMemo(() => {
    if (isShop) return [] as RentalItem[];
    let arr = (isWholeCatalogSearchActive ? globalSearchItems : (props as RentalProps).items).slice();
    if (onlyAvailable) arr = arr.filter((p) => p.available);
    if (sort === "price-asc")
      arr.sort(
        (a, b) =>
          getDisplayPrice(a.price_per_day, a.sale_price_per_day) -
          getDisplayPrice(b.price_per_day, b.sale_price_per_day),
      );
    else if (sort === "price-desc")
      arr.sort(
        (a, b) =>
          getDisplayPrice(b.price_per_day, b.sale_price_per_day) -
          getDisplayPrice(a.price_per_day, a.sale_price_per_day),
      );
    return arr;
  }, [globalSearchItems, isShop, isWholeCatalogSearchActive, props, sort, onlyAvailable]);

  const count = isShop ? filteredProducts.length : filteredItems.length;
  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const visibleItems = filteredItems.slice(0, visibleCount);
  const hasMore = count > visibleCount;
  const groupTitle = catalogTranslations.group(props.kind, props.group.slug, props.group.title);
  const translateCategoryTitle = (category: ShopCategory | RentalCategory) =>
    catalogTranslations.category(props.kind, props.group.slug, category.slug, category.title);
  const translateSubcategoryTitle = (
    category: ShopCategory | RentalCategory,
    subcategory: ShopSubcategory,
  ) =>
    catalogTranslations.subcategory(
      props.kind,
      props.group.slug,
      category.slug,
      subcategory.slug,
      subcategory.title,
    );
  const activeCategoryTitle = props.activeCategory
    ? translateCategoryTitle(props.activeCategory)
    : null;
  const activeSubcategoryTitle =
    props.activeCategory && props.activeSubcategory
      ? translateSubcategoryTitle(props.activeCategory, props.activeSubcategory)
      : null;
  const groupTabs = useMemo(() => {
    if (!isShop) {
      return props.groups.map((group) => ({
        key: group.id,
        label: catalogTranslations.group("rentals", group.slug, group.title),
        groupSlug: group.slug,
        group,
      }));
    }

    const bySlug = new Map(props.groups.map((group) => [group.slug, group]));
    return SHOP_GROUP_TAB_CONFIG.map((tab) => {
      const group = bySlug.get(tab.groupSlug);
      if (!group) return null;
      return {
        ...tab,
        label:
          tab.groupSlug === "sale"
            ? catalogTranslations.sale()
            : catalogTranslations.group("shop", group.slug, group.title),
        group,
      };
    }).filter((tab): tab is NonNullable<typeof tab> => Boolean(tab));
  }, [catalogTranslations, isShop, props.groups]);

  useEffect(() => {
    setVisibleCount(INITIAL_VISIBLE_COUNT);
  }, [search, sort, onlyAvailable, props.group.id, props.activeCategory?.id, props.activeSubcategory?.id]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined" && window.history.length > 1) {
                window.history.back();
              } else {
                navigate({ to: isShop ? "/sale" : "/rent" });
              }
            }}
            className="lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {pageText.back}
          </button>
          {/* Breadcrumb */}
          <nav className="hidden lg:flex items-center gap-2 text-sm font-body text-muted-foreground mb-4 flex-wrap">
            <Link to="/" className="hover:text-foreground transition-colors">
              {pageText.home}
            </Link>
            <span>/</span>
            <Link
              to={isShop ? "/sale" : "/rent"}
              className="hover:text-foreground transition-colors"
            >
              {isShop ? pageText.shop : pageText.rental}
            </Link>
            <span>/</span>
            {props.activeCategory ? (
              isShop ? (
                <Link
                  to="/sale/$group"
                  params={{ group: props.group.slug }}
                  className="hover:text-foreground transition-colors"
                >
                  {groupTitle}
                </Link>
              ) : (
                <Link
                  to="/rent/$group"
                  params={{ group: props.group.slug }}
                  className="hover:text-foreground transition-colors"
                >
                  {groupTitle}
                </Link>
              )
            ) : (
              <span className="text-foreground">{groupTitle}</span>
            )}
            {props.activeCategory && (
              <>
                <span>/</span>
                {props.activeSubcategory ? (
                  isShop ? (
                    <Link
                      to="/sale/$group/$category"
                      params={{ group: props.group.slug, category: props.activeCategory.slug }}
                      className="hover:text-foreground transition-colors"
                    >
                      {activeCategoryTitle}
                    </Link>
                  ) : (
                    <Link
                      to="/rent/$group/$category"
                      params={{ group: props.group.slug, category: props.activeCategory.slug }}
                      className="hover:text-foreground transition-colors"
                    >
                      {activeCategoryTitle}
                    </Link>
                  )
                ) : (
                  <span className="text-foreground">{activeCategoryTitle}</span>
                )}
              </>
            )}
          </nav>

          {/* Group tabs */}
          {groupTabs.length > 1 && (
            <div className="relative mb-8 border-b border-border">
              {canScrollLeft && (
                <>
                  <button
                    type="button"
                    aria-label={pageText.scrollLeft}
                    onClick={() => scrollTabs(-1)}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-r from-background to-transparent transition-opacity duration-300 opacity-100" />
                </>
              )}
              {canScrollRight && (
                <>
                  <button
                    type="button"
                    aria-label={pageText.scrollRight}
                    onClick={() => scrollTabs(1)}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-20 flex items-center justify-center h-8 w-8 rounded-full bg-background border border-border shadow-sm hover:bg-secondary transition-colors"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 z-10 bg-gradient-to-l from-background to-transparent transition-opacity duration-300 opacity-100" />
                </>
              )}
              <div
                ref={tabsRef}
                className="flex gap-1 sm:gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
              >
                {groupTabs.map((tab) => {
                  const active = tab.group.id === props.group.id;
                  const inner = (
                    <span
                      className={`relative inline-block px-3 sm:px-4 py-3 text-[10px] sm:text-xs font-display font-bold uppercase tracking-wider whitespace-nowrap transition-colors ${
                        active
                          ? "text-ember"
                          : "text-foreground/60 hover:text-foreground"
                      }`}
                    >
                      {tab.label}
                      {active && (
                        <motion.span
                          layoutId={`tab-underline-${props.kind}`}
                          className="absolute left-2 right-2 -bottom-px h-[3px] bg-ember rounded-full"
                        />
                      )}
                    </span>
                  );

                  if (isShop && tab.groupSlug === "sale") {
                    return (
                      <Link key={tab.key} to="/sale/sale" className="shrink-0">
                        {inner}
                      </Link>
                    );
                  }

                  return isShop ? (
                    <Link
                      key={tab.key}
                      to="/sale/$group"
                      params={{ group: tab.groupSlug }}
                      className="shrink-0"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <Link
                      key={tab.key}
                      to="/rent/$group"
                      params={{ group: tab.groupSlug }}
                      className="shrink-0"
                    >
                      {inner}
                    </Link>
                  );
                })}
              </div>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
            <aside className="hidden lg:block shrink-0">
              <CatalogSidebar
                kind={props.kind}
                groupSlug={props.group.slug}
                groupTitle={groupTitle}
                categories={props.categories}
                subsByCat={props.subsByCat}
                activeCategorySlug={props.activeCategory?.slug}
                activeSubcategorySlug={props.activeSubcategory?.slug}
                translateCategory={translateCategoryTitle}
                translateSubcategory={translateSubcategoryTitle}
              />
            </aside>
            <div className="flex-1 min-w-0 flex flex-col gap-6">
              <div>
              <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground uppercase tracking-wide">
                {activeSubcategoryTitle ?? activeCategoryTitle ?? groupTitle}
              </h1>
              <p className="mt-2 text-xs font-body text-muted-foreground">
                {isWholeCatalogSearchActive && globalSearchLoading ? (
                  <>{catalogUi.searchingQuery(debouncedGlobalSearch)}</>
                ) : isWholeCatalogSearchActive ? (
                  <>{catalogUi.searchResults(count, debouncedGlobalSearch)}</>
                ) : (
                  <>{catalogUi.itemCount(count)}</>
                )}
              </p>
            </div>

            <Sheet open={filtersOpen} onOpenChange={setFiltersOpen}>
              <SheetTrigger asChild>
                <button
                  type="button"
                  className="lg:hidden inline-flex items-center gap-2 self-start h-11 px-5 rounded-full border border-border text-sm font-body uppercase tracking-wider text-foreground hover:border-ember transition-colors"
                >
                  <SlidersHorizontal className="h-4 w-4" />
                  {catalogUi.filters}
                </button>
              </SheetTrigger>
              <SheetContent side="left" className="w-full sm:max-w-full overflow-y-auto">
                <SheetHeader>
                  <SheetTitle className="font-display uppercase tracking-wide">
                    {catalogUi.filters}
                  </SheetTitle>
                </SheetHeader>
                <div className="mt-4" onClick={() => setFiltersOpen(false)}>
                  <CatalogSidebar
                    kind={props.kind}
                    groupSlug={props.group.slug}
                    groupTitle={groupTitle}
                    categories={props.categories}
                    subsByCat={props.subsByCat}
                    activeCategorySlug={props.activeCategory?.slug}
                    activeSubcategorySlug={props.activeSubcategory?.slug}
                    translateCategory={translateCategoryTitle}
                    translateSubcategory={translateSubcategoryTitle}
                  />
                </div>
              </SheetContent>
            </Sheet>

            <div className="flex-1 min-w-0">
              <CatalogToolbar
                search={search}
                onSearchChange={setSearch}
                searchPlaceholder={isShop ? catalogUi.searchShop : catalogUi.searchRental}
                sort={sort}
                onSortChange={setSort}
                onlyAvailable={onlyAvailable}
                onAvailableChange={setOnlyAvailable}
                availabilityLabel={isShop ? catalogUi.inStock : catalogUi.available}
                count={count}
              />

              {isShop ? (
                globalSearchLoading && isWholeCatalogSearchActive ? (
                  <p className="text-center py-20 text-muted-foreground font-body">
                    {catalogUi.searchingProducts}
                  </p>
                ) : (
                  <ProductGrid products={visibleProducts} />
                )
              ) : globalSearchLoading && isWholeCatalogSearchActive ? (
                <p className="text-center py-20 text-muted-foreground font-body">
                  {catalogUi.searchingProducts}
                </p>
              ) : (
                <RentalGrid items={visibleItems} />
              )}
              {hasMore && (
                <div className="mt-8 flex flex-col items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setVisibleCount((current) => current + INITIAL_VISIBLE_COUNT)}
                    className="h-11 rounded-lg border border-border px-6 font-body text-sm uppercase tracking-wider text-foreground transition-colors hover:border-ember"
                  >
                    {catalogUi.showMore}
                  </button>
                  <p className="text-xs font-body uppercase tracking-wider text-muted-foreground">
                    {catalogUi.shownOf(Math.min(visibleCount, count), count)}
                  </p>
                </div>
              )}
            </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
