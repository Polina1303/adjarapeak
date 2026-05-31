import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as climbing } from "./index-BmmuBVit.mjs";
import { G as useLanguage, r as getSiteText } from "./router-iK0vV985.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as MapPin, C as Calendar, a as ArrowRight } from "../_libs/lucide-react.mjs";
import "./Footer-BfAK2mGB.mjs";
import "../_libs/tanstack__react-router.mjs";
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
import "./ProductCard-DM-0-7Nm.mjs";
import "./discount-DnxRxSbc.mjs";
import "./carousel-D6jC5ouG.mjs";
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
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function ClimbingPromo() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.climbingPromo;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding section-spacing", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative grid md:grid-cols-2 rounded-3xl overflow-hidden bg-foreground text-background min-h-[420px]", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, scale: 1.05 },
        whileInView: { opacity: 1, scale: 1 },
        viewport: { once: true },
        transition: { duration: 0.7 },
        className: "relative h-72 md:h-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: climbing, alt: text.imageAlt, className: "absolute inset-0 w-full h-full object-cover", loading: "lazy" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:via-transparent md:to-foreground/30" })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-8 md:p-12 lg:p-14 flex flex-col justify-center gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold leading-[1.05]", children: text.title }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm md:text-base text-background/75 leading-relaxed max-w-md", children: text.subtitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-3 text-xs font-body text-background/70", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-3.5 w-3.5 text-ember" }),
          " ",
          text.location
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "h-3.5 w-3.5 text-ember" }),
          " ",
          text.schedule
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center font-display text-base md:text-lg font-bold text-background", children: [
          "49 ₾ ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-1.5 text-xs font-body font-normal text-background/70", children: text.priceNote })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://t.me/shpaksn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "inline-flex items-center justify-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider w-full sm:w-auto",
            children: [
              text.book,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3.5 w-3.5" })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://t.me/shpaksn",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "font-display text-xs uppercase tracking-wider text-ember hover:text-background/80 transition-colors",
            children: text.learnMore
          }
        )
      ] })
    ] })
  ] }) }) });
}
export {
  ClimbingPromo
};
