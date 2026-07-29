import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import {
  Wrench,
  Snowflake,
  Droplets,
  ShieldCheck,
  Clock,
  MapPin,
  Phone,
  Bike,
  Cog,
  CircleDot,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import bannerBike from "@/assets/banner-bike.jpg";
import s0 from "@/assets/service-0.jpg";
import s1 from "@/assets/service-1.jpg";
import s2 from "@/assets/service-2.jpg";
import s3 from "@/assets/service-3.jpg";
import nikitaBikeService1 from "@/assets/nikita-bike-service-1.jpg";
import nikitaBikeService2 from "@/assets/nikita-bike-service-2.jpg";
import nikitaBikeService3 from "@/assets/nikita-bike-service-3.jpg";
import nikitaBikeService4 from "@/assets/nikita-bike-service-4.jpg";
import { type Lang, useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import {
  inferServiceCategory,
  isServiceCategoryKey,
  SERVICE_CATEGORY_KEYS,
  SERVICE_CATEGORY_LABELS,
  type ServiceCategoryKey,
} from "@/lib/service-categories";
import { supabase } from "@/integrations/supabase/client";

export const Route = createFileRoute("/service")({
  head: () => ({
    meta: [
      { title: "Сервисный центр — Adjara Peak" },
      {
        name: "description",
        content:
          "Заточка кантов, парафин, ремонт скользящей поверхности лыж и сноубордов в Батуми. Профессиональный сервис Adjara Peak.",
      },
      { property: "og:title", content: "Сервисный центр — Adjara Peak" },
      {
        property: "og:description",
        content:
          "Профессиональный сервис лыж и сноубордов в Батуми: заточка кантов, парафин, ремонт.",
      },
      { property: "og:image", content: bannerBike },
    ],
  }),
  component: ServicePage,
});

type Service = {
  title: string;
  desc: string;
  price: string;
  category: ServiceCategoryKey;
  highlight?: boolean;
};
type ServiceFallback = ReadonlyArray<{
  title: string;
  desc: string;
  price: string;
  highlight?: boolean;
}>;
type ServicePriceRow = {
  title: string;
  description: string | null;
  price: string;
  highlight: boolean;
  title_en?: string | null;
  title_ka?: string | null;
  description_en?: string | null;
  description_ka?: string | null;
  price_en?: string | null;
  price_ka?: string | null;
  category?: string | null;
};

const winterFeatureIcons = [Wrench, Snowflake, Droplets, ShieldCheck];
const summerFeatureIcons = [Bike, Cog, CircleDot, ShieldCheck];
const gallery = [s0, s1, s2, s3];
const mechanicGallery = [
  nikitaBikeService1,
  nikitaBikeService2,
  nikitaBikeService3,
  nikitaBikeService4,
];

function useServiceCarousel(active: boolean) {
  const scroller = useRef<HTMLDivElement>(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const element = scroller.current;
    if (!element) return;

    const update = () => {
      setCanLeft(element.scrollLeft > 4);
      setCanRight(
        element.scrollLeft + element.clientWidth < element.scrollWidth - 4
      );
      const maxScroll = element.scrollWidth - element.clientWidth;
      setProgress(
        maxScroll > 0
          ? Math.min(1, Math.max(0, element.scrollLeft / maxScroll))
          : 1
      );
    };

    update();
    element.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      element.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [active]);

  const scroll = (direction: -1 | 1) => {
    const element = scroller.current;
    if (!element) return;
    element.scrollBy({
      left: direction * Math.max(element.clientWidth * 0.72, 280),
      behavior: "smooth",
    });
  };

  return { scroller, canLeft, canRight, progress, scroll };
}

function getTranslatedValue(
  row: ServicePriceRow,
  key: "title" | "description" | "price",
  lang: Lang
) {
  if (lang === "RU") return row[key];
  const suffix = lang === "EN" ? "en" : "ka";
  const value = row[`${key}_${suffix}` as keyof ServicePriceRow];
  return typeof value === "string" && value.trim() ? value : null;
}

function localizePrice(
  price: string,
  fallback: string | undefined,
  lang: Lang
) {
  if (lang === "RU") return price;
  if (fallback) return fallback;
  if (lang === "EN") return price.replace(/^от\s+/i, "from ");
  if (/^от\s+/i.test(price)) return `${price.replace(/^от\s+/i, "")}-დან`;
  if (/^≈\s*/.test(price)) return price.replace(/^≈\s*/, "დაახლ. ");
  return price;
}

function ServicePage() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).service;
  const [season, setSeason] = useState<"winter" | "summer">("summer");
  const mechanicCarousel = useServiceCarousel(season === "summer");
  const [winterServices, setWinterServices] = useState<Service[]>([]);
  const [summerServices, setSummerServices] = useState<Service[]>([]);
  const featureSource =
    season === "winter" ? text.features : text.summerFeatures;
  const featureIcons =
    season === "winter" ? winterFeatureIcons : summerFeatureIcons;
  const features = featureSource.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index] ?? Wrench,
  }));
  const heroTitle = season === "winter" ? text.heroTitle : text.summerHeroTitle;
  const heroText = season === "winter" ? text.heroText : text.summerHeroText;

  useEffect(() => {
    (async () => {
      const [{ data: winter }, { data: summer }] = await Promise.all([
        supabase
          .from("service_winter_prices")
          .select("*")
          .order("sort_order", { ascending: true }),
        supabase
          .from("service_summer_prices")
          .select("*")
          .order("sort_order", { ascending: true }),
      ]);
      const map = (
        rows: ServicePriceRow[] | null,
        fallback: ServiceFallback
      ): Service[] =>
        (rows ?? []).map((r, index) => ({
          title:
            lang === "RU"
              ? r.title
              : (getTranslatedValue(r, "title", lang) ??
                fallback[index]?.title ??
                r.title),
          desc:
            lang === "RU"
              ? (r.description ?? "")
              : (getTranslatedValue(r, "description", lang) ??
                fallback[index]?.desc ??
                ""),
          price: localizePrice(
            getTranslatedValue(r, "price", lang) ?? r.price ?? "",
            fallback[index]?.price,
            lang
          ),
          category: isServiceCategoryKey(r.category)
            ? r.category
            : inferServiceCategory(r.title),
          highlight: !!r.highlight,
        }));
      setWinterServices(map(winter, text.services));
      setSummerServices(map(summer, text.summerServices));
    })();
  }, [lang, text.services, text.summerServices]);

  const fallbackSource =
    season === "winter" ? text.services : text.summerServices;
  const fallbackServices: Service[] = fallbackSource.map((s) => ({
    ...s,
    category: inferServiceCategory(s.title),
    highlight: "highlight" in s ? !!s.highlight : false,
  }));
  const services = season === "winter" ? winterServices : summerServices;
  const displayServices = services.length > 0 ? services : fallbackServices;
  const serviceGroups = SERVICE_CATEGORY_KEYS.map((key) => ({
    key,
    title: SERVICE_CATEGORY_LABELS[lang][key],
    services: displayServices.filter((service) => service.category === key),
  })).filter((group) => group.services.length > 0);
  const serviceSource = services.length > 0 ? "remote" : "fallback";
  const sectionText =
    season === "winter" ? text.winterSectionText : text.summerSectionText;
  const ctaTitle = season === "winter" ? text.ctaTitle : text.summerCtaTitle;
  const ctaText = season === "winter" ? text.ctaText : text.summerCtaText;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* HERO */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-[0.85]"
          style={{ backgroundImage: `url(${bannerBike})` }}
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/35 to-background/90"
          aria-hidden
        />
        <div className="relative section-padding">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="font-display text-4xl md:text-7xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6">
                {heroTitle}
              </h1>
              <p className="text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8">
                {heroText}
              </p>
              <div className="flex flex-wrap gap-3 w-full">
                <a
                  href="#prices"
                  className="flex-1 inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider"
                >
                  {text.priceList}
                </a>
                <a
                  href="#contact"
                  className="flex-1 inline-flex justify-center items-center gap-2 border border-border hover:border-ember hover:text-ember transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider text-foreground"
                >
                  {text.book}
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="section-padding py-12 md:py-16">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="p-6 rounded-2xl border border-border bg-card hover:border-ember/60 transition-colors"
            >
              <f.icon className="h-6 w-6 text-ember mb-4" />
              <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-2">
                {f.title}
              </h3>
              <p className="font-body text-xs text-muted-foreground leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* PRICES */}
      <section id="prices" className="section-padding pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">
              {text.sectionTitle}
            </h2>
          </div>

          <div className="mb-6">
            <div className="inline-flex p-1 rounded-full border border-border bg-card">
              {(
                [
                  { key: "winter", label: text.winterSeason },
                  { key: "summer", label: text.summerSeason },
                ] as const
              ).map((t) => (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setSeason(t.key)}
                  className={`px-5 py-2 rounded-full font-display text-xs uppercase tracking-wider transition-colors ${
                    season === t.key
                      ? "bg-ember text-ember-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="mt-4 font-body text-sm text-muted-foreground max-w-sm">
              {sectionText}
            </p>
          </div>

          <div className="rounded-3xl border border-border overflow-hidden bg-card">
            <div className="hidden sm:grid grid-cols-[1fr_140px] px-6 py-4 border-b border-border bg-muted/40">
              <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {text.serviceColumn}
              </span>
              <span className="font-display text-xs uppercase tracking-[0.2em] text-muted-foreground text-right">
                {text.priceColumn}
              </span>
            </div>
            <Accordion
              key={`${season}-${serviceSource}`}
              type="multiple"
              defaultValue={serviceGroups[0] ? [serviceGroups[0].key] : []}
            >
              {serviceGroups.map((group) => (
                <AccordionItem
                  key={group.key}
                  value={group.key}
                  className="border-border last:border-b-0"
                >
                  <AccordionTrigger className="px-6 py-5 hover:no-underline hover:bg-muted/30">
                    <span className="flex items-center gap-3 pr-4">
                      <span className="font-display text-sm md:text-base uppercase tracking-wider text-foreground">
                        {group.title}
                      </span>
                      <span className="inline-flex min-w-6 h-6 items-center justify-center rounded-full bg-muted px-2 font-body text-xs text-muted-foreground">
                        {group.services.length}
                      </span>
                    </span>
                  </AccordionTrigger>
                  <AccordionContent className="pb-0">
                    <ul className="border-t border-border">
                      {group.services.map((service, index) => (
                        <motion.li
                          key={`${group.key}-${service.title}-${index}`}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.03 }}
                          className={`grid sm:grid-cols-[1fr_140px] gap-2 px-6 py-5 border-b border-border last:border-b-0 ${
                            service.highlight ? "bg-ember/5" : ""
                          }`}
                        >
                          <div>
                            <h3 className="font-display text-sm uppercase tracking-wider text-foreground mb-1">
                              {service.title}
                            </h3>
                            <p className="font-body text-xs text-muted-foreground leading-relaxed max-w-2xl">
                              {service.desc}
                            </p>
                          </div>
                          <div className="sm:text-right">
                            <span
                              className={`font-display text-lg font-bold ${
                                service.highlight
                                  ? "text-ember"
                                  : "text-foreground"
                              }`}
                            >
                              {service.price}
                            </span>
                          </div>
                        </motion.li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* BIKE MECHANIC */}
      {season === "summer" && (
        <section className="section-padding pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              className="overflow-hidden rounded-3xl bg-foreground text-background"
            >
              <div className="grid lg:grid-cols-[minmax(0,0.82fr)_minmax(0,1.18fr)]">
                <div className="flex flex-col justify-center p-8 md:p-12 lg:p-14">
                  <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-background/15 px-3 py-1.5">
                    <Wrench className="h-3.5 w-3.5 text-ember" />
                    <span className="font-body text-[10px] uppercase tracking-[0.18em] text-background/60">
                      {text.mechanicEyebrow}
                    </span>
                  </div>
                  <h2 className="font-display text-3xl font-bold leading-[1.08] md:text-4xl">
                    {text.mechanicTitle}
                  </h2>
                  <div className="mt-6 space-y-4">
                    {text.mechanicParagraphs.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="font-body text-sm leading-relaxed text-background/70 md:text-base"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-3 border-t border-background/15 pt-6">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ember text-ember-foreground">
                      <Bike className="h-5 w-5" />
                    </span>
                    <div>
                      <div className="font-display text-sm font-bold uppercase tracking-wider">
                        {text.mechanicName}
                      </div>
                      <div className="font-body text-xs text-background/55">
                        {text.mechanicRole}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="min-w-0 border-t border-background/15 bg-background/5 p-4 md:p-6 lg:border-l lg:border-t-0">
                  <div className="mb-4 flex items-center justify-between gap-4">
                    <span className="font-display text-xs uppercase tracking-[0.18em] text-background/55">
                      {text.mechanicGalleryTitle}
                    </span>
                    <div className="hidden items-center gap-2 md:flex">
                      <button
                        type="button"
                        onClick={() => mechanicCarousel.scroll(-1)}
                        disabled={!mechanicCarousel.canLeft}
                        aria-label={text.mechanicPreviousPhoto}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background transition-colors hover:border-ember hover:text-ember disabled:cursor-default disabled:opacity-30"
                      >
                        <ChevronLeft className="h-5 w-5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => mechanicCarousel.scroll(1)}
                        disabled={!mechanicCarousel.canRight}
                        aria-label={text.mechanicNextPhoto}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 text-background transition-colors hover:border-ember hover:text-ember disabled:cursor-default disabled:opacity-30"
                      >
                        <ChevronRight className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  <div
                    ref={mechanicCarousel.scroller}
                    role="region"
                    aria-roledescription="carousel"
                    aria-label={text.mechanicGalleryLabel}
                    tabIndex={0}
                    onKeyDown={(event) => {
                      if (event.key === "ArrowLeft") {
                        event.preventDefault();
                        mechanicCarousel.scroll(-1);
                      }
                      if (event.key === "ArrowRight") {
                        event.preventDefault();
                        mechanicCarousel.scroll(1);
                      }
                    }}
                    className="flex snap-x snap-mandatory gap-3 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-ember [&::-webkit-scrollbar]:hidden"
                    style={{
                      touchAction: "pan-x pan-y",
                      WebkitOverflowScrolling: "touch",
                    }}
                  >
                    {mechanicGallery.map((src, index) => (
                      <figure
                        key={src}
                        role="group"
                        aria-label={`${index + 1} / ${mechanicGallery.length}`}
                        className="relative aspect-[3/4] w-[84%] shrink-0 snap-start overflow-hidden rounded-2xl bg-background/10 sm:w-[58%] lg:w-[72%]"
                      >
                        <img
                          src={src}
                          alt={text.mechanicPhotoAlt(index + 1)}
                          width={960}
                          height={1280}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                        <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/55 to-transparent px-4 pb-4 pt-12 font-body text-xs text-white/75">
                          {String(index + 1).padStart(2, "0")} /{" "}
                          {String(mechanicGallery.length).padStart(2, "0")}
                        </figcaption>
                      </figure>
                    ))}
                  </div>

                  <div className="mt-5 h-[3px] overflow-hidden rounded-full bg-background/15">
                    <div
                      className="h-full rounded-full bg-ember transition-[margin] duration-200 ease-out"
                      style={{
                        width: `${100 / mechanicGallery.length}%`,
                        marginLeft: `${
                          mechanicCarousel.progress *
                          (100 - 100 / mechanicGallery.length)
                        }%`,
                      }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* GALLERY */}
      {season === "winter" && (
        <section className="section-padding pb-12 md:pb-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
              {text.galleryTitle}
            </h2>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {gallery.map((src, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted"
                >
                  <img
                    src={src}
                    alt={text.galleryAlt(i + 1)}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CONTACT CTA */}
      <section id="contact" className="section-padding pb-24">
        <div className="max-w-6xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 grid md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              {ctaTitle}
            </h2>
            <p className="font-body text-sm text-background/70 leading-relaxed max-w-md">
              {ctaText}
            </p>
          </div>
          <div className="space-y-5 md:border-l md:border-background/15 md:pl-10">
            <div className="flex items-start gap-3">
              <MapPin className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">
                  {text.addressLabel}
                </div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Batumi%2C+Chavchavadze+St+81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body text-sm hover:text-ember transition-colors"
                >
                  {text.address}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">
                  {text.hoursLabel}
                </div>
                <div className="font-body text-sm">{text.hours}</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="h-5 w-5 text-ember mt-0.5 shrink-0" />
              <div>
                <div className="font-display text-xs uppercase tracking-wider text-background/60 mb-1">
                  {text.phoneLabel}
                </div>
                <a
                  href="tel:+995571208555"
                  className="font-body text-sm hover:text-ember transition-colors"
                >
                  +995-571-208-555 (Geo, Eng, Ru)
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
