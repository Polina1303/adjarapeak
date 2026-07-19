import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import {
  Calendar,
  Route as RouteIcon,
  Mountain,
  Wallet,
  ChevronLeft,
  Check,
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselProgress,
} from "@/components/ui/carousel";
import { getHikeBySlug } from "@/lib/hikes.functions";
import { localizeHike } from "@/lib/hike-translations";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";
import { HikeDifficultyScale } from "@/components/HikeDifficultyScale";
import { formatDifficulty } from "@/lib/hike-difficulty";

export const Route = createFileRoute("/hikes/$slug")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const hike = await getHikeBySlug({ data: { slug: params.slug } });
    if (!hike) throw notFound();
    return hike;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Походы Adjara Peak` },
          {
            name: "description",
            content:
              loaderData.shortly ??
              loaderData.description?.slice(0, 160) ??
              "Поход с гидами Adjara Peak.",
          },
          { property: "og:title", content: loaderData.title },
          {
            property: "og:description",
            content: loaderData.shortly ?? "Поход с гидами Adjara Peak.",
          },
          ...(loaderData.image
            ? [{ property: "og:image", content: loaderData.image }]
            : []),
        ]
      : [{ title: "Поход — Adjara Peak" }],
  }),
  component: HikePage,
  notFoundComponent: HikeNotFound,
});

function HikeNotFound() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-32 pb-24 section-padding text-center">
        <h1 className="font-display text-3xl font-bold mb-4">
          {text.notFoundTitle}
        </h1>
        <Link to="/hikes" className="text-ember hover:underline">
          {text.allHikes}
        </Link>
      </div>
      <Footer />
    </div>
  );
}

function HikePage() {
  const rawHike = Route.useLoaderData();
  const { lang } = useLanguage();
  const text = getSiteText(lang).hikes;
  const hike = localizeHike(rawHike, lang);
  const price =
    hike.sale_price && hike.sale_price < hike.price
      ? hike.sale_price
      : hike.price;
  const hasDiscount = price !== hike.price;

  const dateLabel = hike.start_date
    ? new Date(hike.start_date).toLocaleDateString(text.dateLocale, {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
      })
    : null;
  const timeLabel = hike.start_time ? hike.start_time.slice(0, 5) : null;
  const dateTimeLabel = [dateLabel, timeLabel].filter(Boolean).join(" | ");

  const metaRows: { icon: typeof Calendar; text: string }[] = [];
  if (dateTimeLabel) metaRows.push({ icon: Calendar, text: dateTimeLabel });
  if (hike.distance_km != null)
    metaRows.push({ icon: RouteIcon, text: `${hike.distance_km} ${text.distanceUnit}` });
  if (hike.difficulty)
    metaRows.push({
      icon: Mountain,
      text: formatDifficulty(hike.difficulty, lang) ?? hike.difficulty,
    });
  metaRows.push({ icon: Wallet, text: `${price} ₾` });

  const reasons = hike.reasons;

  const features = hike.features.length > 0 ? hike.features : text.demoFeatures;
  const packingList =
    hike.packing_list.length > 0 ? hike.packing_list : text.demoPackingList;

  const mainPhoto = hike.image ?? hike.gallery[0] ?? null;
  const photos = hike.gallery.filter((photo) => photo && photo !== mainPhoto);

  useEffect(() => {
    document.title = text.detailTitle(hike.title);
    const meta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (meta) {
      meta.content =
        hike.shortly ?? hike.description?.slice(0, 160) ?? text.detailDescriptionFallback;
    }
  }, [hike.description, hike.shortly, hike.title, text]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        {/* MAIN HORIZONTAL PHOTO */}
        <section className="section-padding pb-5 pt-8 md:pb-6 md:pt-12">
          <div className="mx-auto max-w-7xl">
            <Link
              to="/hikes"
              className="mb-5 inline-flex items-center gap-1 font-body text-xs uppercase tracking-wider text-muted-foreground hover:text-foreground"
            >
              <ChevronLeft className="h-3.5 w-3.5" /> {text.allHikes}
            </Link>

            <div className="overflow-hidden rounded-3xl border border-border bg-card sm:relative sm:aspect-[16/10] sm:border-0 lg:aspect-[21/9]">
              <div className="relative aspect-[16/10] bg-muted sm:absolute sm:inset-0 sm:aspect-auto">
                {mainPhoto && (
                  <img
                    src={mainPhoto}
                    alt={hike.title}
                    fetchPriority="high"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/5 to-transparent sm:from-black/85 sm:via-black/25 sm:to-black/10" />
              </div>

              <div className="relative p-5 text-foreground sm:absolute sm:inset-x-0 sm:bottom-0 sm:p-8 sm:text-white md:p-10 lg:p-12">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="max-w-4xl font-display text-2xl font-bold leading-[1.05] sm:text-4xl md:text-5xl"
                >
                  {hike.title}
                </motion.h1>

                {hike.shortly && (
                  <p className="mt-4 max-w-3xl font-body text-sm leading-relaxed text-muted-foreground sm:text-white/85 md:text-base">
                    {hike.shortly}
                  </p>
                )}

                <motion.ul
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex flex-wrap gap-2"
                >
                  {metaRows.map(({ icon: Icon, text: rowText }, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-2 font-body text-xs text-foreground backdrop-blur-md sm:border-white/20 sm:bg-black/30 sm:text-white md:text-sm"
                    >
                      <Icon className="h-4 w-4 shrink-0 stroke-[1.7]" />
                      <span>{rowText}</span>
                    </li>
                  ))}
                </motion.ul>

                <div className="mt-6 flex flex-wrap items-center gap-4">
                  <a
                    href="https://t.me/shpaksn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-ember px-8 py-3.5 font-display text-xs uppercase tracking-wider text-ember-foreground transition-colors hover:bg-ember/90"
                  >
                    {text.book}
                  </a>
                  {hasDiscount && (
                    <span className="font-display text-sm text-muted-foreground line-through sm:text-white/65">
                      {hike.price} ₾
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* VERTICAL GALLERY */}
        {photos.length > 0 && (
          <section className="section-padding pb-12 md:pb-16">
            <div className="mx-auto max-w-7xl">
              <h2 className="mb-5 font-display text-xl font-bold text-foreground md:text-2xl">
                {text.galleryTitle}
              </h2>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-4 lg:grid-cols-4">
                {photos.map((photo, index) => (
                  <div
                    key={`${photo}-${index}`}
                    className="aspect-[3/4] overflow-hidden rounded-2xl bg-muted"
                  >
                    <img
                      src={photo}
                      alt={`${hike.title} — ${index + 2}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* DESCRIPTION + FEATURES */}
        <section className="section-padding py-12 md:py-16">
          <div className="max-w-6xl mx-auto">
            <div className="py-2">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                {text.routeTitle}
              </h2>
              {hike.description ? (
                <div className="font-body text-sm md:text-base text-foreground/80 leading-relaxed whitespace-pre-line">
                  {hike.description}
                </div>
              ) : (
                <p className="font-body text-sm text-muted-foreground">
                  {text.descriptionComing}
                </p>
              )}
            </div>
          </div>
        </section>

        <HikeDifficultyScale
          lang={lang}
          difficulty={hike.difficulty}
          variant="detail"
        />

        {/* REASONS — Why go on this hike */}
        {reasons.length > 0 && (
          <section className="section-padding pt-0 pb-12 md:pb-16">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8 md:mb-12 text-center">
                {text.reasonsTitle}
              </h2>

              {/* Mobile: shadcn carousel */}
              <div className="md:hidden">
                <Carousel
                  opts={{ align: "start", slidesToScroll: "auto" }}
                  className="w-full"
                >
                  <CarouselContent className="-ml-4">
                    {reasons.map((r, i) => (
                      <CarouselItem key={i} className="pl-4 basis-[80%]">
                        <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-3">
                          <img
                            src={r.image}
                            alt={r.text}
                            loading="lazy"
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="font-body text-sm text-foreground/80 leading-relaxed">
                          {r.text}
                        </p>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselProgress className="mt-4 max-w-xs mx-auto" />
                </Carousel>
              </div>

              {/* Desktop: 3-column grid (two rows for 6 items) */}
              <div className="hidden md:grid grid-cols-3 gap-x-8 gap-y-10">
                {reasons.map((r, i) => (
                  <div key={i}>
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted mb-4">
                      <img
                        src={r.image}
                        alt={r.text}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="font-body text-base text-foreground/80 leading-relaxed">
                      {r.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}


        {/* FAQ */}
        <section className="section-padding pb-16 md:pb-24">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6 md:mb-10 text-center">
              {text.faqTitle}
            </h2>
            <Accordion type="multiple" className="text-left">
              {text.faq.map((item, index) => (
                <AccordionItem key={item.question} value={`faq-${index + 1}`} className="border-b border-border">
                  <AccordionTrigger className="font-display text-base md:text-lg font-bold text-foreground hover:no-underline py-5 text-left">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 font-body text-sm md:text-base text-foreground/80 leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* PRICING */}
        <section className="section-padding pt-0 pb-12 md:pb-20">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              {text.priceTitle}
            </h2>
            <div className="font-display text-2xl md:text-4xl font-bold text-foreground mb-8">
              {price} ₾
            </div>
            <a
              href="https://t.me/shpaksn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-12 py-4 rounded-full font-display text-sm uppercase tracking-wider mb-10 md:mb-14"
            >
              {text.book}
            </a>

            <Accordion type="multiple" className="text-left">
              <AccordionItem
                value="included"
                className="border-b border-border"
              >
                <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-foreground hover:no-underline py-5">
                  {text.includedTitle}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <ul className="space-y-3">
                    {features.map((f, i) => (
                      <li
                        key={i}
                        className="flex gap-3 font-body text-sm md:text-base text-foreground/80"
                      >
                        <Check className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="packing" className="border-b border-border">
                <AccordionTrigger className="font-display text-lg md:text-xl font-bold text-foreground hover:no-underline py-5">
                  {text.packingTitle}
                </AccordionTrigger>
                <AccordionContent className="pb-5">
                  <div className="space-y-6">
                    {packingList.map((group, gi) => (
                      <div key={gi}>
                        <h4 className="font-display text-base md:text-lg font-bold text-foreground mb-3">
                          {group.title}
                        </h4>
                        <ul className="space-y-2">
                          {group.items.map((item, i) => (
                            <li
                              key={i}
                              className="flex gap-3 font-body text-sm md:text-base text-foreground/80"
                            >
                              <Check className="h-5 w-5 text-ember shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
}
