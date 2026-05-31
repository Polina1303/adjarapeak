import { ChevronDown, Search, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CATALOG_UI_TEXT, type CatalogUiSortKey } from "@/lib/catalog-ui-text";
import { useLanguage } from "@/lib/i18n";

export type SortKey = CatalogUiSortKey;

const SORT_OPTIONS: { value: SortKey }[] = [
  { value: "default" },
  { value: "newest" },
  { value: "price-asc" },
  { value: "price-desc" },
];

type Props = {
  search: string;
  onSearchChange: (v: string) => void;
  searchPlaceholder?: string;
  sort: SortKey;
  onSortChange: (v: SortKey) => void;
  onlyAvailable: boolean;
  onAvailableChange: (v: boolean) => void;
  availabilityLabel?: string;
  count: number;
};

export function CatalogToolbar({
  search,
  onSearchChange,
  searchPlaceholder,
  sort,
  onSortChange,
  onlyAvailable,
  onAvailableChange,
  availabilityLabel,
  count,
}: Props) {
  const { lang } = useLanguage();
  const text = CATALOG_UI_TEXT[lang];
  const [sortOpen, setSortOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);
  const actualSearchPlaceholder = searchPlaceholder ?? text.searchSection;
  const actualAvailabilityLabel = availabilityLabel ?? text.inStock;
  const currentSortLabel = text.sortOptions[sort] ?? text.sortOptions.default;

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (sortRef.current && !sortRef.current.contains(e.target as Node)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className="flex flex-col gap-4 mb-6">
      <div className="relative w-full max-w-xl" role="search">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-foreground/40" />
        <input
          type="search"
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={actualSearchPlaceholder}
          aria-label={text.searchAriaLabel(actualSearchPlaceholder, count)}
          className="h-11 w-full rounded-lg border border-border bg-background pl-11 pr-11 font-body text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-ember"
        />
        {search && (
          <button
            type="button"
            aria-label={text.clearSearch}
            onClick={() => onSearchChange("")}
            className="absolute right-2 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <div className="flex items-center gap-3 flex-wrap">
        <div ref={sortRef} className="relative">
          <span className="absolute -top-2 left-4 px-1 bg-background text-[10px] uppercase tracking-wider text-ember font-body z-10">
            {text.sort}
          </span>
          <button
            type="button"
            onClick={() => setSortOpen((v) => !v)}
            className="flex items-center gap-2 h-11 px-5 rounded-full border border-ember/40 bg-ember/5 text-sm font-body font-medium text-foreground hover:border-ember transition-colors"
          >
            <span>{currentSortLabel}</span>
            <ChevronDown
              className={`h-3 w-3 transition-transform ${sortOpen ? "rotate-180" : ""}`}
            />
          </button>
          <AnimatePresence>
            {sortOpen && (
              <motion.div
                initial={{ opacity: 0, y: -4 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -4 }}
                transition={{ duration: 0.15 }}
                className="absolute left-0 top-full mt-2 bg-background border border-border rounded-lg shadow-xl overflow-hidden min-w-[220px] z-20"
              >
                {SORT_OPTIONS.map((opt) => (
                  <button
                    key={opt.value}
                    type="button"
                    onClick={() => {
                      onSortChange(opt.value);
                      setSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-2 text-xs font-body transition-colors ${
                      sort === opt.value
                        ? "text-ember bg-foreground/5"
                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                    }`}
                  >
                    {text.sortOptions[opt.value]}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={() => onAvailableChange(!onlyAvailable)}
          className={`h-11 px-5 rounded-full border text-sm font-body uppercase tracking-wider transition-colors ${
            onlyAvailable
              ? "border-ember bg-ember text-ember-foreground"
              : "border-border text-foreground hover:border-ember"
          }`}
        >
          {actualAvailabilityLabel}
        </button>

      </div>
    </div>
  );
}
