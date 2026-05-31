import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, r as getSiteText, y as resolveCatalogImage } from "./router-iK0vV985.mjs";
import { u as useCatalogTranslations } from "./catalog-translations-Dcqii-5G.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, d as CarouselPrevious, c as CarouselNext, e as CarouselProgress } from "./carousel-D6jC5ouG.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "../_libs/lucide-react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "./button-ODMTIVjw.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ActivityCategories({ groups }) {
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = getSiteText(lang).home;
  if (!groups || groups.length === 0) return null;
  const translatedGroups = groups.map((group) => ({
    ...group,
    title: catalogTranslations.group("shop", group.slug, group.title)
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-4xl font-bold text-foreground mb-8 md:mb-10", children: text.popularCategories }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-3 md:hidden", children: translatedGroups.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 20 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true },
        transition: { delay: Math.min(i * 0.04, 0.3) },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Link,
          {
            to: "/sale",
            className: "group flex flex-col items-center text-center rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors p-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-square rounded-lg overflow-hidden bg-secondary/60 flex items-center justify-center mb-3", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: resolveCatalogImage(cat.image),
                  alt: cat.title,
                  loading: "lazy",
                  style: { mixBlendMode: "multiply" },
                  className: "w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm leading-tight group-hover:text-ember transition-colors", children: cat.title })
            ]
          }
        )
      },
      cat.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", slidesToScroll: "auto" }, className: "w-full hidden md:block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-3 md:-ml-5", children: translatedGroups.map((cat, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        CarouselItem,
        {
          className: "pl-3 md:pl-5 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: true },
              transition: { delay: Math.min(i * 0.04, 0.3) },
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                Link,
                {
                  to: "/sale",
                  className: "group flex flex-col items-center text-center",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full aspect-[3/4] rounded-xl overflow-hidden bg-secondary/60 mb-3 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "img",
                      {
                        src: resolveCatalogImage(cat.image),
                        alt: cat.title,
                        loading: "lazy",
                        style: { mixBlendMode: "multiply" },
                        className: "w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-semibold text-foreground text-sm md:text-base group-hover:text-ember transition-colors", children: cat.title })
                  ]
                }
              )
            }
          )
        },
        cat.id
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden md:flex -left-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden md:flex -right-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselProgress, { className: "mt-6 max-w-xs mx-auto" })
    ] })
  ] }) });
}
export {
  ActivityCategories
};
