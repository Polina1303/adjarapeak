import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import type { RentalItem } from "@/lib/catalog.functions";
import { CATALOG_UI_TEXT } from "@/lib/catalog-ui-text";
import { addToCart, useIsInCart } from "@/lib/cart";
import { getDiscountPercent, getDisplayPrice, getSalePrice } from "@/lib/discount";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { toast } from "sonner";

export function RentalGrid({ items }: { items: RentalItem[] }) {
  const { lang } = useLanguage();
  if (items.length === 0) {
    return (
      <p className="text-center py-20 text-muted-foreground font-body">
        {CATALOG_UI_TEXT[lang].emptyRentals}
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
      {items.map((item) => {
        const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
        const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
        const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);
        return (
          <RentalCard
            key={item.id}
            item={item}
            salePrice={salePrice}
            displayPrice={displayPrice}
            discountPct={discountPct}
          />
        );
      })}
    </div>
  );
}

function RentalCard({
  item,
  salePrice,
  displayPrice,
  discountPct,
}: {
  item: RentalItem;
  salePrice: number | null;
  displayPrice: number;
  discountPct: number | null;
}) {
  const inCart = useIsInCart(item.slug);
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) return;
    addToCart(1, item.slug, {
      title: item.title,
      image: item.image,
      price: displayPrice,
      kind: "rental",
      unit: text.perDay,
    });
    toast.success(text.addedToCart(item.title));
  };
  return (
    <Link
      to="/app/$slug"
      params={{ slug: item.slug }}
      className="group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
    >
            <div className="relative aspect-square bg-background overflow-hidden">
              <img
                src={resolveCatalogImage(item.image)}
                alt={item.title}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
              />
              {!item.available && (
                <span className="absolute top-3 right-3 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2.5 py-1 rounded-full">
                  {text.occupied}
                </span>
              )}
            </div>
            <div className="px-5 pt-4 pb-5 flex flex-col gap-2">
              {discountPct !== null && (
                <span className="self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded">
                  -{discountPct}%
                </span>
              )}
              <div className="flex items-baseline gap-2 flex-wrap">
                <span className="font-display font-bold text-foreground text-xl">
                  ₾{displayPrice}
                  <span className="text-sm font-body font-normal text-muted-foreground">
                    {text.perDay}
                  </span>
                </span>
                {salePrice && (
                  <span className="font-body text-sm text-muted-foreground line-through">
                    ₾{item.price_per_day}
                  </span>
                )}
              </div>
              <h3 className="font-body text-foreground text-sm leading-snug line-clamp-2">
                {item.title}
              </h3>
              {item.description && (
                <p className="font-body text-xs text-muted-foreground uppercase tracking-wide line-clamp-2">
                  {item.description}
                </p>
              )}
            </div>
            <div className="px-5 pb-5 mt-auto opacity-100 translate-y-0">
              <button
                type="button"
                onClick={handleAdd}
                disabled={!item.available}
                className={`flex items-center justify-center w-full h-11 rounded-full font-body text-xs sm:text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
                  inCart
                    ? "bg-foreground text-background hover:bg-foreground/90"
                    : "bg-ember text-primary-foreground hover:bg-ember/90"
                }`}
              >
                {!item.available ? text.occupied : inCart ? text.inCart : (
                  <>
                    <span className="hidden sm:inline">{text.addToCart}</span>
                    <span className="sm:hidden">{text.addToCartShort}</span>
                  </>
                )}
              </button>
            </div>
    </Link>
  );
}
