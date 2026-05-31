import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import type { ShopProduct } from "@/lib/catalog.functions";
import { addToCart, useIsInCart, openCart } from "@/lib/cart";
import { getDiscountPercent, getDisplayPrice, getSalePrice } from "@/lib/discount";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { toast } from "sonner";

type Props = {
  product: ShopProduct;
  bordered?: boolean;
};

export function ProductCard({ product: p, bordered = false }: Props) {
  const salePrice = getSalePrice(p.price, p.sale_price);
  const displayPrice = getDisplayPrice(p.price, p.sale_price);
  const discountPct = getDiscountPercent(p.price, p.sale_price);
  const inCart = useIsInCart(p.slug);
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      openCart();
      return;
    }
    addToCart(1, p.slug, {
      title: p.title,
      image: p.image,
      price: displayPrice,
      kind: "shop",
      unit: "",
    });
    toast.success(text.addedToCart(p.title));
  };
  return (
    <Link
      to="/app/$slug"
      params={{ slug: p.slug }}
      className={`group relative bg-card rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${
        bordered ? "border border-border hover:border-transparent" : ""
      }`}
    >
      <div className="relative aspect-square bg-background overflow-hidden">
        <img
          src={resolveCatalogImage(p.image)}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
        />
        {!p.in_stock && (
          <span className="absolute top-2 right-2 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2 py-0.5 rounded-full">
            {text.outOfStock}
          </span>
        )}
      </div>
      <div className="px-4 pt-4 pb-4 flex flex-col gap-2">
        {discountPct !== null && (
          <span className="self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded">
            -{discountPct}%
          </span>
        )}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-display font-bold text-foreground text-lg">
            ₾{displayPrice}
          </span>
          {salePrice && (
            <span className="font-body text-sm text-muted-foreground line-through">
              ₾{p.price}
            </span>
          )}
        </div>
        <h3 className="font-body text-foreground text-sm leading-snug line-clamp-2">
          {p.title}
        </h3>
      </div>
      <div className="px-4 pb-4 mt-auto opacity-100 translate-y-0">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!p.in_stock}
          className={`flex items-center justify-center w-full h-10 rounded-full font-body text-[10px] sm:text-xs uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
            inCart
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-ember text-primary-foreground hover:bg-ember/90"
          }`}
        >
          {!p.in_stock ? text.outOfStock : inCart ? text.inCart : text.addToCart}
        </button>
      </div>
    </Link>
  );
}
