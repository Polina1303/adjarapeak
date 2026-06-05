import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import type { ShopProduct } from "@/lib/catalog.functions";
import { addToCart, useIsInCart, openCart } from "@/lib/cart";
import { getDiscountPercent, getDisplayPrice, getSalePrice } from "@/lib/discount";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { toast } from "sonner";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";

function CarouselCard({ product: p }: { product: ShopProduct }) {
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
      className="group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
    >
      <div className="relative aspect-square bg-background overflow-hidden">
        <img
          src={resolveCatalogImage(p.image)}
          alt={p.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
        {!p.in_stock && (
          <span className="absolute top-3 right-3 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2.5 py-1 rounded-full">
            {text.outOfStock}
          </span>
        )}
      </div>
      <div className="px-5 pt-4 pb-3 flex flex-col gap-2 flex-1">
        {discountPct !== null && (
          <span className="self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded">
            -{discountPct}%
          </span>
        )}
        <div className="flex items-baseline gap-2 flex-wrap">
          <span className="font-display font-bold text-foreground text-xl">
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
      <div className="px-5 pb-5">
        <button
          type="button"
          onClick={handleAdd}
          disabled={!p.in_stock}
          className={`flex items-center justify-center w-full h-10 rounded-full font-body text-xs uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${
            inCart
              ? "bg-foreground text-background hover:bg-foreground/90"
              : "bg-ember text-primary-foreground hover:bg-ember/90"
          }`}
        >
          {!p.in_stock ? text.outOfStock : inCart ? text.inCart : (
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

export function ProductCarousel({ products }: { products: ShopProduct[] }) {
  if (products.length === 0) return null;
  return (
    <Carousel opts={{ align: "start", slidesToScroll: "auto" }} className="w-full">
      <CarouselContent className="-ml-4">
        {products.map((p) => (
          <CarouselItem
            key={p.id}
            className="pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
          >
            <CarouselCard product={p} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4" />
      <CarouselNext className="hidden md:flex -right-4" />
      <CarouselProgress className="mt-6 max-w-xs mx-auto" />
    </Carousel>
  );
}
