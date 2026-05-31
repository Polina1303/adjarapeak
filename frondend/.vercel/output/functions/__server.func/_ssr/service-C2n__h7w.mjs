import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { G as useLanguage, r as getSiteText, n as bannerSki } from "./router-iK0vV985.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { W as Wrench, x as Snowflake, i as Droplets, u as ShieldCheck, M as MapPin, h as Clock, q as Phone } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
const s0 = "/assets/service-0-Oy8lzJS0.jpg";
const s1 = "/assets/service-1-DbmNZJtW.jpg";
const s2 = "/assets/service-2-BBedGpUJ.jpg";
const s3 = "/assets/service-3-Cjkp-9D7.jpg";
const featureIcons = [Wrench, Snowflake, Droplets, ShieldCheck];
const gallery = [s0, s1, s2, s3];
function ServicePage() {
  const {
    lang
  } = useLanguage();
  const text = getSiteText(lang).service;
  const features = text.features.map((feature, index) => ({
    ...feature,
    icon: featureIcons[index] ?? Wrench
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-32 pb-20 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center opacity-25", style: {
        backgroundImage: `url(${bannerSki})`
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/80 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl md:text-7xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6", children: text.heroTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8", children: text.heroText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#prices", className: "flex-1 inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider", children: text.priceList }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "flex-1 inline-flex justify-center items-center gap-2 border border-border hover:border-ember hover:text-ember transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider text-foreground", children: text.book })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-4", children: features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
      opacity: 0,
      y: 20
    }, whileInView: {
      opacity: 1,
      y: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "p-6 rounded-2xl border border-border bg-card hover:border-ember/60 transition-colors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(f.icon, { className: "h-6 w-6 text-ember mb-4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider text-foreground mb-2", children: f.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: f.desc })
    ] }, f.title)) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "prices", className: "section-padding pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between flex-wrap gap-4 mb-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-4xl md:text-5xl font-bold text-foreground", children: text.sectionTitle }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground max-w-sm", children: text.sectionText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border overflow-hidden bg-card", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden sm:grid grid-cols-[1fr_140px] px-6 py-4 border-b border-border bg-muted/40", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-[0.2em] text-muted-foreground", children: text.serviceColumn }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-xs uppercase tracking-[0.2em] text-muted-foreground text-right", children: text.priceColumn })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { children: text.services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
          opacity: 0,
          y: 10
        }, whileInView: {
          opacity: 1,
          y: 0
        }, viewport: {
          once: true
        }, transition: {
          delay: i * 0.04
        }, className: `grid sm:grid-cols-[1fr_140px] gap-2 px-6 py-5 border-b border-border last:border-b-0 ${s.highlight ? "bg-ember/5" : ""}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-wider text-foreground mb-1", children: s.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed max-w-2xl", children: s.desc })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-display text-lg font-bold ${s.highlight ? "text-ember" : "text-foreground"}`, children: s.price }) })
        ] }, s.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground mb-8", children: text.galleryTitle }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-4 gap-3", children: gallery.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        scale: 0.96
      }, whileInView: {
        opacity: 1,
        scale: 1
      }, viewport: {
        once: true
      }, transition: {
        delay: i * 0.05
      }, className: "aspect-[4/5] rounded-2xl overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: text.galleryAlt(i + 1), className: "w-full h-full object-cover", loading: "lazy" }) }, i)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "section-padding pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto rounded-3xl bg-foreground text-background p-10 md:p-14 grid md:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold leading-tight mb-4", children: text.ctaTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-background/70 leading-relaxed max-w-md", children: text.ctaText })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 md:border-l md:border-background/15 md:pl-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-ember mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs uppercase tracking-wider text-background/60 mb-1", children: text.addressLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://www.google.com/maps/search/?api=1&query=Batumi%2C+Chavchavadze+St+81", target: "_blank", rel: "noopener noreferrer", className: "font-body text-sm hover:text-ember transition-colors", children: text.address })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, { className: "h-5 w-5 text-ember mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs uppercase tracking-wider text-background/60 mb-1", children: text.hoursLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-sm", children: text.hours })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-start gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5 text-ember mt-0.5 shrink-0" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs uppercase tracking-wider text-background/60 mb-1", children: text.phoneLabel }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "tel:+995555000000", className: "font-body text-sm hover:text-ember transition-colors", children: "+995 555 000 000" })
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ServicePage as component
};
