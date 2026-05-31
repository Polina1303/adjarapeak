import { Link } from "@tanstack/react-router";
import { resolveCatalogImage } from "@/lib/catalog-image";
import type { RentalItem } from "@/lib/catalog.functions";
import { getDiscountPercent, getDisplayPrice, getSalePrice } from "@/lib/discount";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselProgress,
} from "@/components/ui/carousel";

export function RentalCarousel({ items }: { items: RentalItem[] }) {
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  if (items.length === 0) return null;
  return (
    <Carousel opts={{ align: "start", slidesToScroll: "auto" }} className="w-full">
      <CarouselContent className="-ml-4">
        {items.map((item) => {
          const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
          const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
          const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);
          return (
            <CarouselItem
              key={item.id}
              className="pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
            >
              <Link
                to="/app/$slug"
                params={{ slug: item.slug }}
                className="group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full"
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
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex -left-4" />
      <CarouselNext className="hidden md:flex -right-4" />
      <CarouselProgress className="mt-6 max-w-xs mx-auto" />
    </Carousel>
  );
}
