import { SALES_TEXT } from "@/lib/sales-text";
import { Link } from "@tanstack/react-router";
import { catalogImageProps } from "@/lib/catalog-image";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";
type Group = {
  id: string;
  slug: string;
  title: string;
  image: string | null;
  product_count?: number;
};
export function RentalSection({ groups }: { groups: Group[] }) {
  const { lang } = useLanguage();
  const translations = useCatalogTranslations(lang);
  const text = getSiteText(lang).home;
  if (!groups.length) return null;
  return (
    <section className="section-padding  py-8 md:py-11">
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-end justify-between gap-4 md:mb-7">
          <h2 className="font-display text-2xl font-bold md:text-3xl">
            {text.rentalEquipment}
          </h2>
          <Link
            to="/rent"
            className="inline-flex items-center gap-1.5 font-display text-xs font-bold uppercase tracking-wide text-ember sm:text-sm"
          >
            {text.actions.rental}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <Carousel
          opts={{
            align: "start",
            slidesToScroll: "auto",
            breakpoints: { "(max-width: 767px)": { active: false } },
          }}
        >
          <CarouselContent className="ml-0 grid grid-cols-2 gap-3 md:-ml-5 md:flex md:gap-0">
            {groups.map((group) => {
              const title =
                group.slug === "skiRental"
                  ? SALES_TEXT[lang].skiRent
                  : translations.group("rentals", group.slug, group.title);
              return (
                <CarouselItem
                  key={group.id}
                  className="min-w-0 pl-0 md:basis-1/4 md:pl-5 lg:basis-1/5"
                >
                  <Link
                    to={"/rent/$group"}
                    params={{ group: group.slug }}
                    data-category-tile={title}
                    className="group flex h-full flex-col items-center rounded-xl p-3 text-center md:p-0"
                  >
                    {group.image && (
                      <div className="catalog-media mb-3 w-full rounded-xl">
                        <img
                          {...catalogImageProps(group.image)}
                          alt={title}
                          width={240}
                          height={240}
                          loading="lazy"
                          decoding="async"
                          className="catalog-media__image transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                    )}
                    <h3 className="font-display text-sm font-semibold group-hover:text-ember md:text-base">
                      {title}
                    </h3>
                    {typeof group.product_count === "number" && (
                      <span className="mt-1 text-xs text-muted-foreground">
                        {group.product_count}
                      </span>
                    )}
                  </Link>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="-left-4 hidden md:flex" />
          <CarouselNext className="-right-4 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}
