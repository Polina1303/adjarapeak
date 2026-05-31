import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { b as Route$d, G as useLanguage, r as getSiteText, t as heroCamping, o as camping, u as heroMountains, s as heroAdventure, w as listOneProductPerCategorySlug } from "./router-iK0vV985.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { P as ProductCard } from "./ProductCard-DM-0-7Nm.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, e as CarouselProgress } from "./carousel-D6jC5ouG.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/sonner.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "./index.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "./discount-DnxRxSbc.mjs";
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
const climbing = "/assets/cl-4-UQ_mJSKE.avif";
const slideConfig = [
  {
    image: heroCamping,
    href: "/sale"
  },
  {
    image: climbing,
    href: "/rockClimbing"
  },
  {
    image: camping,
    href: "/rent"
  },
  {
    image: heroMountains,
    href: "/rent"
  },
  {
    image: heroAdventure,
    href: "/rockClimbing"
  }
];
function HeroCarousel() {
  const [active, setActive] = reactExports.useState(0);
  const { lang } = useLanguage();
  const heroText = getSiteText(lang).home.hero;
  const desktopSlides = slideConfig.map((slide2, index2) => ({
    ...slide2,
    ...heroText.slides[index2]
  }));
  reactExports.useEffect(() => {
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % slideConfig.length);
    }, 6e3);
    return () => window.clearInterval(id);
  }, []);
  const slide = desktopSlides[active];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "w-full bg-background py-4 md:py-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-foreground min-h-[560px]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          src: slide.image,
          alt: slide.title,
          initial: { opacity: 0, scale: 1.04 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.7, ease: "easeOut" },
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          decoding: "async"
        },
        `img-${active}`
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-[1]",
          style: {
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 16 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -16 },
          transition: { duration: 0.5 },
          className: "relative z-10 h-full w-full flex flex-col justify-end p-10",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-7xl font-bold text-primary-foreground leading-[0.95] mb-4 whitespace-pre-line drop-shadow-lg uppercase", children: slide.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-base font-body mb-6 max-w-md drop-shadow-md", children: slide.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: slide.href,
                className: "inline-flex h-12 items-center px-6 rounded-full bg-ember text-primary-foreground font-display font-medium text-sm hover:bg-ember/90 transition-colors",
                children: slide.cta
              }
            ) })
          ]
        },
        `text-${active}`
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 right-6 z-20 flex items-center gap-2", children: desktopSlides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(i),
          "aria-label": heroText.goToSlide(i + 1),
          className: `h-2 rounded-full transition-all ${i === active ? "w-6 bg-ember" : "w-2 bg-white/50 hover:bg-white/70"}`
        },
        i
      )) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-xl bg-foreground aspect-[16/15.8] sm:aspect-[16/13.2]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "sync", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        motion.img,
        {
          src: slide.image,
          alt: slide.title,
          initial: { opacity: 0, scale: 1.04 },
          animate: { opacity: 1, scale: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.7, ease: "easeOut" },
          className: "absolute inset-0 w-full h-full object-cover",
          loading: "eager",
          decoding: "async"
        },
        `m-img-${active}`
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          className: "absolute inset-0 z-[1]",
          style: {
            background: "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0) 70%)"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { opacity: 0, y: 12 },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: -12 },
          transition: { duration: 0.5 },
          className: "relative z-10 h-full w-full flex flex-col justify-end px-5 pt-5 pb-9 sm:p-5",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl sm:text-5xl font-bold text-primary-foreground leading-[0.95] mb-3 whitespace-pre-line drop-shadow-lg uppercase", children: slide.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-primary-foreground/90 text-sm font-body mb-4 max-w-md drop-shadow-md line-clamp-3", children: slide.subtitle }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: slide.href,
                className: "flex h-11 items-center justify-center px-5 rounded-full bg-ember text-primary-foreground font-display font-medium text-sm hover:bg-ember/90 transition-colors w-full pb-0",
                children: slide.cta
              }
            ) })
          ]
        },
        `m-text-${active}`
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2", children: desktopSlides.map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => setActive(i),
          "aria-label": heroText.goToSlide(i + 1),
          className: `h-1.5 rounded-full transition-all ${i === active ? "w-5 bg-ember" : "w-1.5 bg-white/50"}`
        },
        i
      )) })
    ] }) })
  ] }) });
}
const FEATURED_CATEGORY_SLUGS = ["roller", "kettlebells", "backpack", "tent", "windbreaker"];
function BrandStrip() {
  const [featuredProducts, setFeaturedProducts] = reactExports.useState([]);
  const { lang } = useLanguage();
  const text = getSiteText(lang).home;
  reactExports.useEffect(() => {
    listOneProductPerCategorySlug({ data: { categorySlugs: FEATURED_CATEGORY_SLUGS } }).then(setFeaturedProducts).catch(() => setFeaturedProducts([]));
  }, []);
  if (featuredProducts.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: text.featuredProducts }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:grid grid-cols-5 gap-5", children: featuredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product }, product.id)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      Carousel,
      {
        opts: { align: "start", dragFree: true },
        className: "w-full lg:hidden",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: featuredProducts.map((product) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            CarouselItem,
            {
              className: "pl-4 basis-[60%] sm:basis-[42%] md:basis-[32%]",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product })
            },
            product.id
          )) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselProgress, { className: "mt-6 max-w-xs mx-auto" })
        ]
      }
    )
  ] }) });
}
const ActivityCategories = reactExports.lazy(() => import("./ActivityCategories-BgEKfwNJ.mjs").then((m) => ({
  default: m.ActivityCategories
})));
const RentalSection = reactExports.lazy(() => import("./RentalSection-DQtwZjh6.mjs").then((m) => ({
  default: m.RentalSection
})));
const NewArrivals = reactExports.lazy(() => import("./NewArrivals-agUuBufT.mjs").then((m) => ({
  default: m.NewArrivals
})));
const ClimbingPromo = reactExports.lazy(() => import("./ClimbingPromo-CAzylxsZ.mjs").then((m) => ({
  default: m.ClimbingPromo
})));
const GiftCardSection = reactExports.lazy(() => import("./GiftCardSection-6TlxJczT.mjs").then((m) => ({
  default: m.GiftCardSection
})));
const StoreSection = reactExports.lazy(() => import("./StoreSection-SqWQ8wc6.mjs").then((m) => ({
  default: m.StoreSection
})));
function Index() {
  const {
    groups,
    rentalGroups
  } = Route$d.useLoaderData();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pt-16 lg:pt-18", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrandStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(reactExports.Suspense, { fallback: null, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ActivityCategories, { groups }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RentalSection, { groups: rentalGroups }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(NewArrivals, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ClimbingPromo, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(GiftCardSection, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(StoreSection, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
const index = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  component: Index
}, Symbol.toStringTag, { value: "Module" }));
export {
  climbing as c,
  index as i
};
