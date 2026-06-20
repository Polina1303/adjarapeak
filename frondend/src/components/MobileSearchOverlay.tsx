import { Link, useNavigate } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { LoaderCircle, Search, X } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { resolveCatalogImage } from "@/lib/catalog-image";
import {
  searchRentalItems,
  searchShopProducts,
  type RentalItem,
  type ShopProduct,
} from "@/lib/catalog.functions";
import { getDisplayPrice, getSalePrice } from "@/lib/discount";
import type { Lang } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

type SearchMode = "sale" | "rent";

type MobileSearchText = {
  title: string;
  placeholder: string;
  saleTab: string;
  rentTab: string;
  close: string;
  clear: string;
  empty: string;
  start: string;
  loading: string;
  viewAll: string;
};

const textByLang: Record<Lang, MobileSearchText> = {
  RU: {
    title: "Поиск",
    placeholder: "Что ищем?",
    saleTab: "Товары",
    rentTab: "Прокат",
    close: "Закрыть поиск",
    clear: "Очистить поиск",
    empty: "Ничего не найдено",
    start: "Начните вводить название товара",
    loading: "Ищем...",
    viewAll: "Все результаты",
  },
  EN: {
    title: "Search",
    placeholder: "What are you looking for?",
    saleTab: "Shop",
    rentTab: "Rental",
    close: "Close search",
    clear: "Clear search",
    empty: "No results found",
    start: "Start typing a product name",
    loading: "Searching...",
    viewAll: "All results",
  },
  GE: {
    title: "ძებნა",
    placeholder: "რას ეძებთ?",
    saleTab: "პროდუქტები",
    rentTab: "ქირაობა",
    close: "ძებნის დახურვა",
    clear: "ძებნის გასუფთავება",
    empty: "ვერაფერი მოიძებნა",
    start: "დაიწყეთ პროდუქტის სახელის შეყვანა",
    loading: "ძებნა...",
    viewAll: "ყველა შედეგი",
  },
};

type Props = {
  open: boolean;
  onClose: () => void;
  lang: Lang;
};

export function MobileSearchOverlay({ open, onClose, lang }: Props) {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<SearchMode>("sale");
  const [products, setProducts] = useState<ShopProduct[]>([]);
  const [rentals, setRentals] = useState<RentalItem[]>([]);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const text = textByLang[lang];
  const commonText = getSiteText(lang).common;
  const trimmedQuery = query.trim();
  const canSearch = trimmedQuery.length >= 2;
  const activeResults = mode === "sale" ? products : rentals;

  useEffect(() => {
    if (!open) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => inputRef.current?.focus(), 180);
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.clearTimeout(focusTimer);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose, open]);

  useEffect(() => {
    if (!open || !canSearch) {
      setProducts([]);
      setRentals([]);
      setLoading(false);
      return;
    }

    let cancelled = false;
    setLoading(true);
    const timer = window.setTimeout(() => {
      Promise.all([
        searchShopProducts({ data: { q: trimmedQuery, limit: 12 } }),
        searchRentalItems({ data: { q: trimmedQuery, limit: 12 } }),
      ])
        .then(([shopResults, rentalResults]) => {
          if (cancelled) return;
          setProducts(shopResults);
          setRentals(rentalResults);
        })
        .catch(() => {
          if (cancelled) return;
          setProducts([]);
          setRentals([]);
        })
        .finally(() => {
          if (!cancelled) setLoading(false);
        });
    }, 220);

    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [canSearch, open, trimmedQuery]);

  useEffect(() => {
    if (!canSearch) return;
    if (mode === "sale" && products.length === 0 && rentals.length > 0) setMode("rent");
    if (mode === "rent" && rentals.length === 0 && products.length > 0) setMode("sale");
  }, [canSearch, mode, products.length, rentals.length]);

  const resultStatus = useMemo(() => {
    if (!canSearch) return text.start;
    if (loading) return text.loading;
    if (activeResults.length === 0) return text.empty;
    return "";
  }, [activeResults.length, canSearch, loading, text.empty, text.loading, text.start]);

  const submitSearch = () => {
    if (!trimmedQuery) return;
    onClose();
    navigate({ to: "/search", search: { q: trimmedQuery, mode } });
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="lg:hidden fixed inset-0 z-[70] bg-foreground/25 backdrop-blur-[2px]"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) onClose();
          }}
        >
          <motion.div
            initial={{ y: -28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -24, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="mx-auto w-full max-w-[560px] bg-background shadow-2xl"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <form
              role="search"
              onSubmit={(event) => {
                event.preventDefault();
                submitSearch();
              }}
              className="flex items-center gap-3 border-b border-border px-4 pt-[calc(env(safe-area-inset-top)+14px)] pb-3"
            >
              <Search className="h-5 w-5 shrink-0 text-foreground/55" />
              <input
                ref={inputRef}
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder={text.placeholder}
                aria-label={text.title}
                className="h-11 min-w-0 flex-1 bg-transparent font-body text-base text-foreground outline-none placeholder:text-foreground/40"
              />
              {loading && <SearchSpinner className="h-5 w-5 text-ember" />}
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label={text.clear}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground/45 transition-colors hover:bg-muted hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
              <button
                type="button"
                onClick={onClose}
                aria-label={text.close}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-foreground/60 transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            </form>

            <div className="flex border-b border-border px-4">
              <ModeButton
                active={mode === "sale"}
                count={products.length}
                label={text.saleTab}
                onClick={() => setMode("sale")}
              />
              <ModeButton
                active={mode === "rent"}
                count={rentals.length}
                label={text.rentTab}
                onClick={() => setMode("rent")}
              />
            </div>

            <div className="max-h-[calc(100dvh-168px)] min-h-[340px] overflow-y-auto px-4 pb-[calc(env(safe-area-inset-bottom)+18px)]">
              {resultStatus ? (
                <div className="flex min-h-[260px] flex-col items-center justify-center gap-3 text-center font-body text-sm text-muted-foreground">
                  {loading && <SearchSpinner className="h-7 w-7 text-ember" />}
                  {resultStatus}
                </div>
              ) : (
                <div className="divide-y divide-border">
                  {mode === "sale"
                    ? products.map((product) => (
                        <ProductSearchRow
                          key={product.id}
                          product={product}
                          onClick={onClose}
                          outOfStockText={commonText.outOfStock}
                        />
                      ))
                    : rentals.map((item) => (
                        <RentalSearchRow
                          key={item.id}
                          item={item}
                          onClick={onClose}
                          occupiedText={commonText.occupied}
                          perDayText={commonText.perDay}
                        />
                      ))}
                </div>
              )}
            </div>

            {canSearch && activeResults.length > 0 && (
              <div className="sticky bottom-0 border-t border-border bg-background px-4 py-3 pb-[calc(env(safe-area-inset-bottom)+12px)]">
                <button
                  type="button"
                  onClick={submitSearch}
                  className="h-11 w-full rounded-full bg-ember px-5 font-body text-sm font-bold uppercase tracking-wide text-ember-foreground transition-colors hover:bg-ember/90"
                >
                  {text.viewAll}
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function SearchSpinner({ className }: { className: string }) {
  return <LoaderCircle aria-hidden="true" className={`shrink-0 animate-spin ${className}`} />;
}

function ModeButton({
  active,
  count,
  label,
  onClick,
}: {
  active: boolean;
  count: number;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative flex h-12 items-center gap-2 px-3 font-body text-xs font-bold uppercase tracking-wide transition-colors ${
        active ? "text-ember" : "text-foreground/55"
      }`}
    >
      <span>{label}</span>
      <span className="text-[10px] text-foreground/40">{count}</span>
      {active && <span className="absolute bottom-0 left-2 right-2 h-[2px] rounded-full bg-ember" />}
    </button>
  );
}

function ProductSearchRow({
  product,
  onClick,
  outOfStockText,
}: {
  product: ShopProduct;
  onClick: () => void;
  outOfStockText: string;
}) {
  const salePrice = getSalePrice(product.price, product.sale_price);
  const displayPrice = getDisplayPrice(product.price, product.sale_price);

  return (
    <Link
      to="/app/$slug"
      params={{ slug: product.slug }}
      onClick={onClick}
      className="grid grid-cols-[72px_1fr] gap-3 py-3 text-left transition-colors hover:bg-muted/50"
    >
      <SearchThumb image={product.image} title={product.title} />
      <div className="flex min-w-0 flex-col justify-center gap-1">
        <h3 className="line-clamp-2 font-body text-sm font-bold leading-snug text-foreground">
          {product.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="font-display text-base font-bold text-ember">₾{displayPrice}</span>
          {salePrice && (
            <span className="font-body text-xs text-muted-foreground line-through">₾{product.price}</span>
          )}
        </div>
        {!product.in_stock && (
          <span className="font-body text-[11px] uppercase tracking-wide text-muted-foreground">
            {outOfStockText}
          </span>
        )}
      </div>
    </Link>
  );
}

function RentalSearchRow({
  item,
  onClick,
  occupiedText,
  perDayText,
}: {
  item: RentalItem;
  onClick: () => void;
  occupiedText: string;
  perDayText: string;
}) {
  const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
  const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);

  return (
    <Link
      to="/app/$slug"
      params={{ slug: item.slug }}
      onClick={onClick}
      className="grid grid-cols-[72px_1fr] gap-3 py-3 text-left transition-colors hover:bg-muted/50"
    >
      <SearchThumb image={item.image} title={item.title} />
      <div className="flex min-w-0 flex-col justify-center gap-1">
        <h3 className="line-clamp-2 font-body text-sm font-bold leading-snug text-foreground">
          {item.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="font-display text-base font-bold text-ember">
            ₾{displayPrice}
            <span className="font-body text-xs font-normal text-muted-foreground">{perDayText}</span>
          </span>
          {salePrice && (
            <span className="font-body text-xs text-muted-foreground line-through">
              ₾{item.price_per_day}
            </span>
          )}
        </div>
        {!item.available && (
          <span className="font-body text-[11px] uppercase tracking-wide text-muted-foreground">
            {occupiedText}
          </span>
        )}
      </div>
    </Link>
  );
}

function SearchThumb({ image, title }: { image: string | null; title: string }) {
  return (
    <div className="flex h-[72px] w-[72px] items-center justify-center rounded-full border border-border bg-background">
      {image ? (
        <img
          src={resolveCatalogImage(image)}
          alt={title}
          loading="lazy"
          decoding="async"
          className="h-14 w-14 object-contain"
        />
      ) : (
        <Search className="h-5 w-5 text-foreground/25" />
      )}
    </div>
  );
}
