import { Link } from "@tanstack/react-router";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import type { ShopCategory, ShopSubcategory, RentalCategory } from "@/lib/catalog.functions";

type Props = {
  kind: "shop" | "rentals";
  groupSlug: string;
  groupTitle: string;
  categories: (ShopCategory | RentalCategory)[];
  subsByCat: Record<string, ShopSubcategory[]>;
  activeCategorySlug?: string;
  activeSubcategorySlug?: string;
  allItemsLabel?: string;
  onNavigate?: () => void;
  translateCategory?: (category: ShopCategory | RentalCategory) => string;
  translateSubcategory?: (
    category: ShopCategory | RentalCategory,
    subcategory: ShopSubcategory,
  ) => string;
};

export function CatalogSidebar({
  kind,
  groupSlug,
  groupTitle,
  categories,
  subsByCat,
  activeCategorySlug,
  activeSubcategorySlug,
  allItemsLabel,
  onNavigate,
  translateCategory,
  translateSubcategory,
}: Props) {
  // a category is initially expanded if it (or one of its subs) is active
  const initiallyOpen = new Set<string>();
  for (const c of categories) {
    if (c.slug === activeCategorySlug && (subsByCat[c.id] ?? []).length > 0) {
      initiallyOpen.add(c.id);
    }
  }
  const [openIds, setOpenIds] = useState<Set<string>>(initiallyOpen);

  const toggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <aside className="w-full lg:w-[260px] shrink-0">
      <ul className="flex flex-col">
        {allItemsLabel && (
          <li className="border-b border-border/40">
            {kind === "shop" && groupSlug === "tourismCamping" ? (
              <Link
                to="/tourismCamping/"
                onClick={onNavigate}
                className={`flex min-h-11 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                  !activeCategorySlug
                    ? "text-ember font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {allItemsLabel}
              </Link>
            ) : kind === "shop" && groupSlug === "sale" ? (
              <Link
                to="/sale/sale"
                onClick={onNavigate}
                className={`flex min-h-11 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                  !activeCategorySlug
                    ? "text-ember font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {allItemsLabel}
              </Link>
            ) : kind === "shop" ? (
              <Link
                to="/sale/$group"
                params={{ group: groupSlug }}
                onClick={onNavigate}
                className={`flex min-h-11 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                  !activeCategorySlug
                    ? "text-ember font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {allItemsLabel}
              </Link>
            ) : (
              <Link
                to="/rent/$group"
                params={{ group: groupSlug }}
                onClick={onNavigate}
                className={`flex min-h-11 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                  !activeCategorySlug
                    ? "text-ember font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {allItemsLabel}
              </Link>
            )}
          </li>
        )}
        {categories.map((c) => {
          const subs = subsByCat[c.id] ?? [];
          const hasSubs = subs.length > 0;
          const isActiveCat = c.slug === activeCategorySlug;
          const isOpen = openIds.has(c.id) || isActiveCat;
          const categoryTitle = translateCategory?.(c) ?? c.title;

          return (
            <li key={c.id} className="border-b border-border/40">
              <div className="flex items-stretch">
                {kind === "shop" ? (
                  <Link
                    to="/sale/$group/$category"
                    params={{ group: groupSlug, category: c.slug }}
                    onClick={onNavigate}
                    className={`flex min-h-11 flex-1 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                      isActiveCat && !activeSubcategorySlug
                        ? "text-ember font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {categoryTitle}
                  </Link>
                ) : (
                  <Link
                    to="/rent/$group/$category"
                    params={{ group: groupSlug, category: c.slug }}
                    onClick={onNavigate}
                    className={`flex min-h-11 flex-1 items-center px-3 py-3 text-sm font-body uppercase tracking-wider transition-colors touch-manipulation ${
                      isActiveCat && !activeSubcategorySlug
                        ? "text-ember font-semibold"
                      : "text-foreground/80 hover:text-foreground"
                    }`}
                  >
                    {categoryTitle}
                  </Link>
                )}
                {hasSubs && (
                  <button
                    type="button"
                    aria-label={isOpen ? "Свернуть" : "Развернуть"}
                    onClick={() => toggle(c.id)}
                    className="flex min-h-11 min-w-11 items-center justify-center text-ember hover:bg-muted/50 transition-colors touch-manipulation"
                  >
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>
                )}
              </div>

              {hasSubs && isOpen && (
                <ul className="bg-muted/30">
                  {subs.map((s) => {
                    const isActiveSub =
                      isActiveCat && s.slug === activeSubcategorySlug;
                    const subcategoryTitle = translateSubcategory?.(c, s) ?? s.title;
                    return (
                      <li key={s.id}>
                        {kind === "shop" ? (
                          <Link
                            to="/sale/$group/$category/$subcategory"
                            params={{
                              group: groupSlug,
                              category: c.slug,
                              subcategory: s.slug,
                            }}
                            onClick={onNavigate}
                            className={`flex min-h-11 items-center pl-8 pr-3 py-3 text-xs font-body uppercase tracking-wider transition-colors touch-manipulation ${
                              isActiveSub
                                ? "text-ember font-semibold"
                              : "text-foreground/70 hover:text-foreground"
                            }`}
                          >
                            {subcategoryTitle}
                          </Link>
                        ) : (
                          <Link
                            to="/rent/$group/$category/$subcategory"
                            params={{
                              group: groupSlug,
                              category: c.slug,
                              subcategory: s.slug,
                            }}
                            onClick={onNavigate}
                            className={`flex min-h-11 items-center pl-8 pr-3 py-3 text-xs font-body uppercase tracking-wider transition-colors touch-manipulation ${
                              isActiveSub
                                ? "text-ember font-semibold"
                              : "text-foreground/70 hover:text-foreground"
                            }`}
                          >
                            {subcategoryTitle}
                          </Link>
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
