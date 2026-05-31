import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as useLanguage, r as getSiteText } from "./router-iK0vV985.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as MapPin, h as Clock, q as Phone, y as Star } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function StoreSection() {
  const { lang } = useLanguage();
  const text = getSiteText(lang).contact;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding py-12 md:py-16 bg-background text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "space-y-6 font-body text-sm",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-2", children: text.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-ember shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase tracking-wider mb-1", children: text.addressTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "a",
                {
                  href: "https://www.google.com/maps?cid=6512661380146566532",
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "text-foreground/70 uppercase hover:text-ember transition-colors",
                  children: text.address
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-ember shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase tracking-wider mb-1", children: text.hoursTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/70 uppercase", children: text.hours })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-ember shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase tracking-wider mb-1", children: text.phonesTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-foreground/70", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+995571208555", className: "hover:text-foreground transition-colors", children: "+995-571-208-555" }),
                " (GEO, ENG, RU)"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-5 w-5 text-ember shrink-0 mt-0.5" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display font-bold uppercase tracking-wider mb-1", children: text.reviewsTitle }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-x-6 gap-y-1", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://www.google.com/maps?cid=6512661380146566532",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-ember hover:underline uppercase",
                    children: text.googleReview
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "a",
                  {
                    href: "https://yandex.com.ge/maps/org/adzhara_pik/33060720484/reviews/",
                    target: "_blank",
                    rel: "noopener noreferrer",
                    className: "text-ember hover:underline uppercase",
                    children: text.yandexReview
                  }
                )
              ] })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { delay: 0.15 },
        className: "rounded-2xl overflow-hidden shadow-lg",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "iframe",
          {
            title: text.mapTitle,
            src: `https://maps.google.com/maps?cid=6512661380146566532&output=embed&hl=${text.mapLang}`,
            loading: "lazy",
            referrerPolicy: "no-referrer-when-downgrade",
            className: "w-full h-80 border-0 rounded-2xl",
            allowFullScreen: true
          }
        )
      }
    )
  ] }) }) });
}
export {
  StoreSection
};
