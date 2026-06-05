import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import heroCamping from "@/assets/hero-camping.jpg";
import heroMountains from "@/assets/hero-mountains.jpg";
import heroAdventure from "@/assets/hero-adventure.jpg";
import camping from "@/assets/camping.jpg";
import climbingPromo from "@/assets/climbing-promo.avif";
import { Link } from "@tanstack/react-router";
import { useLanguage } from "@/lib/i18n";
import { getSiteText } from "@/lib/site-translations";

const slideConfig = [
  {
    image: heroCamping,
    href: "/sale" as const,
  },
  {
    image: climbingPromo,
    href: "/rockClimbing" as const,
  },
  {
    image: camping,
    href: "/rent" as const,
  },
  {
    image: heroMountains,
    href: "/rent" as const,
  },
  {
    image: heroAdventure,
    href: "/hikes" as const,
  },
];

export function HeroCarousel() {
  const [desktopActive, setDesktopActive] = useState(0);
  const [mobileActive, setMobileActive] = useState(0);
  const [mobileApi, setMobileApi] = useState<CarouselApi>();
  const { lang } = useLanguage();
  const heroText = getSiteText(lang).home.hero;
  const desktopSlides = slideConfig.map((slide, index) => ({
    ...slide,
    ...heroText.slides[index],
  }));

  useEffect(() => {
    const id = window.setInterval(() => {
      setDesktopActive((i) => (i + 1) % slideConfig.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    if (!mobileApi) return;

    const id = window.setInterval(() => {
      mobileApi.scrollNext();
    }, 6000);

    return () => window.clearInterval(id);
  }, [mobileApi]);

  useEffect(() => {
    if (!mobileApi) return;

    const updateActive = () => {
      setMobileActive(mobileApi.selectedScrollSnap());
    };

    updateActive();
    mobileApi.on("select", updateActive);
    mobileApi.on("reInit", updateActive);

    return () => {
      mobileApi.off("select", updateActive);
      mobileApi.off("reInit", updateActive);
    };
  }, [mobileApi]);

  const slide = desktopSlides[desktopActive];

  return (
    <section className="w-full bg-background py-4 md:py-6">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8">
        {/* Desktop layout — single full-width hero carousel */}
        <div className="hidden lg:block">
          <div className="relative overflow-hidden rounded-xl bg-foreground min-h-[560px]">
            <AnimatePresence mode="sync">
              <motion.img
                key={`img-${desktopActive}`}
                src={slide.image}
                alt={slide.title}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager"
                decoding="async"
              />
            </AnimatePresence>
            <div
              className="absolute inset-0 z-[1]"
              style={{
                background:
                  "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 70%)",
              }}
            />
            <AnimatePresence mode="wait">
              <motion.div
                key={`text-${desktopActive}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 h-full w-full flex flex-col justify-end p-10"
              >
                <h2 className="font-display text-7xl font-bold text-primary-foreground leading-[0.95] mb-4 whitespace-pre-line drop-shadow-lg uppercase">
                  {slide.title}
                </h2>
                <p className="text-primary-foreground/90 text-base font-body mb-6 max-w-md drop-shadow-md">
                  {slide.subtitle}
                </p>
                <div>
                  <Link
                    to={slide.href}
                    className="inline-flex h-12 items-center px-6 rounded-full bg-ember text-primary-foreground font-display font-medium text-sm hover:bg-ember/90 transition-colors"
                  >
                    {slide.cta}
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dots */}
            <div className="absolute bottom-5 right-6 z-20 flex items-center gap-2">
              {desktopSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setDesktopActive(i)}
                  aria-label={heroText.goToSlide(i + 1)}
                  className={`h-2 rounded-full transition-all ${
                    i === desktopActive ? "w-6 bg-ember" : "w-2 bg-white/50 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile/tablet — swipeable hero carousel */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden rounded-xl bg-foreground">
            <Carousel opts={{ loop: true }} setApi={setMobileApi} className="w-full">
              <CarouselContent className="ml-0">
                {desktopSlides.map((mobileSlide) => (
                  <CarouselItem key={mobileSlide.title} className="pl-0">
                    <div className="relative overflow-hidden bg-foreground aspect-[16/15.8] sm:aspect-[16/13.2]">
                      <img
                        src={mobileSlide.image}
                        alt={mobileSlide.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                      <div
                        className="absolute inset-0 z-[1]"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 70%)",
                        }}
                      />
                      <div className="relative z-10 h-full w-full flex flex-col justify-end px-5 pt-5 pb-9 sm:p-5">
                        <h2 className="font-display text-3xl sm:text-5xl font-bold text-primary-foreground leading-[0.95] mb-3 whitespace-pre-line drop-shadow-lg uppercase">
                          {mobileSlide.title}
                        </h2>
                        <p className="text-primary-foreground/90 text-sm font-body mb-4 max-w-md drop-shadow-md line-clamp-3">
                          {mobileSlide.subtitle}
                        </p>
                        <div>
                          <Link
                            to={mobileSlide.href}
                            className="flex h-11 items-center justify-center px-5 rounded-full bg-ember text-primary-foreground font-display font-medium text-sm hover:bg-ember/90 transition-colors w-full pb-0"
                          >
                            {mobileSlide.cta}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
              {desktopSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setMobileActive(i);
                    mobileApi?.scrollTo(i);
                  }}
                  aria-label={heroText.goToSlide(i + 1)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === mobileActive ? "w-5 bg-ember" : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
