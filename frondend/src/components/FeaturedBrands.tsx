import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import {
  Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious,
} from "@/components/ui/carousel";

// Curated from brands present in the shop; this is not a sales ranking.
const brands = [
  { name: "Naturehike", logo: "naturehike.png" },
  { name: "Petzl", logo: "petzl.svg" },
  { name: "Quechua", logo: "quechua.svg" },
  { name: "Stanley", logo: "stanley.svg" },
  { name: "Black Diamond", logo: "black-diamond.svg" },
  { name: "Osprey", logo: "osprey.png" },
];
const copy = {
  RU: { title: "Бренды", subtitle: "Снаряжение для ваших приключений", action: "Смотреть товары", previous: "Предыдущие бренды", next: "Следующие бренды", browse: "Товары бренда" },
  EN: { title: "Brands", subtitle: "Gear for your adventures", action: "Explore products", previous: "Previous brands", next: "Next brands", browse: "Shop" },
  GE: { title: "ბრენდები", subtitle: "აღჭურვილობა თქვენი თავგადასავლებისთვის", action: "პროდუქტების ნახვა", previous: "წინა ბრენდები", next: "შემდეგი ბრენდები", browse: "ბრენდის პროდუქტები" },
};

export function FeaturedBrands({ compact = false }: { compact?: boolean }) {
  const { lang } = useLanguage();
  const text = copy[lang];

  return (
    <section className={compact ? "mb-10" : "section-padding py-8 md:py-11"} aria-label={text.title}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-5 flex items-center gap-5 md:mb-7">
          <div className="shrink-0">
            <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">{text.title}</h2>
            <p className="mt-1 font-body text-sm text-muted-foreground">{text.subtitle}</p>
          </div>
          <div className="h-px flex-1 bg-ember/25" aria-hidden="true" />
        </div>
        <Carousel opts={{ align: "start", slidesToScroll: "auto" }} aria-label={text.title}>
          <CarouselContent className="-ml-3 py-2">
            {brands.map((brand) => (
              <CarouselItem key={brand.name} className="basis-[46%] pl-3 sm:basis-1/3 lg:basis-1/6">
                <Link
                  to="/sale/search"
                  search={{ q: brand.name }}
                  aria-label={`${text.browse} ${brand.name}`}
                  className="group flex h-32 flex-col items-center justify-center gap-3 rounded-xl border border-border bg-white px-4 shadow-sm transition-[border-color,box-shadow] hover:border-ember/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 md:h-36"
                >
                  <img
                    src={`/brands/${brand.logo}`}
                    alt={brand.name}
                    width={160}
                    height={64}
                    loading="lazy"
                    decoding="async"
                    className="h-16 w-full max-w-40 object-contain grayscale"
                  />
                  <span className="font-body text-[11px] text-muted-foreground transition-colors group-hover:text-ember">{text.action} <span aria-hidden="true">↗</span></span>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious aria-label={text.previous} className="-left-3 z-10 h-9 w-9 shadow-sm" />
          <CarouselNext aria-label={text.next} className="-right-3 z-10 h-9 w-9 shadow-sm" />
        </Carousel>
      </div>
    </section>
  );
}
