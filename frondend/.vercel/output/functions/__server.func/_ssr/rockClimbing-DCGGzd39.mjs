import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { G as useLanguage, r as getSiteText, p as climbingHero } from "./router-iK0vV985.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as MapPin, E as ExternalLink, t as Shield, F as Users, e as ChevronLeft, f as ChevronRight, o as Mountain, C as Calendar } from "../_libs/lucide-react.mjs";
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
const cl0 = "/assets/cl-0-Bvnsr9Ds.avif";
const cl1 = "/assets/cl-1-bRdU-j7X.avif";
const cl2 = "/assets/cl-2-CXCi0qNh.avif";
const cl3 = "/assets/cl-3-BpzAwe6j.avif";
const cl4 = "/assets/cl-4-UQ_mJSKE.avif";
const cl5 = "/assets/cl-5-CwZgsn9n.avif";
const team0 = "/assets/team-0-LDIKiBzA.avif";
const team1 = "/assets/team-1-DVlOSZ8L.avif";
const carousel = [cl0, cl1, cl2, cl3, cl4, cl5];
const teamImages = [team0, team1];
function useHorizontalCarousel() {
  const scroller = reactExports.useRef(null);
  const [canLeft, setCanLeft] = reactExports.useState(false);
  const [canRight, setCanRight] = reactExports.useState(false);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const update = () => {
      setCanLeft(el.scrollLeft > 4);
      setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
      const max = el.scrollWidth - el.clientWidth;
      setProgress(max > 0 ? Math.min(1, Math.max(0, el.scrollLeft / max)) : 1);
    };
    update();
    el.addEventListener("scroll", update, {
      passive: true
    });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);
  const scroll = (dir) => {
    scroller.current?.scrollBy({
      left: dir * 360,
      behavior: "smooth"
    });
  };
  return {
    scroller,
    canLeft,
    canRight,
    progress,
    scroll
  };
}
function ClimbingPage() {
  const photoCarousel = useHorizontalCarousel();
  const teamCarousel = useHorizontalCarousel();
  const {
    lang
  } = useLanguage();
  const text = getSiteText(lang).climbing;
  const team = text.team.map((member, index) => ({
    ...member,
    img: teamImages[index] ?? team0
  }));
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-cover bg-center", style: {
        backgroundImage: `url(${climbingHero})`
      }, "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 backdrop-blur-md bg-background/55", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background", "aria-hidden": true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-6xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, className: "max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-4xl sm:text-5xl md:text-7xl font-bold text-foreground leading-[1.05] md:leading-[0.95] mb-6 break-words", children: text.heroTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body text-base md:text-lg leading-relaxed max-w-2xl mb-8", children: text.heroText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-3 w-full", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://t.me/shpaksn", target: "_blank", rel: "noopener noreferrer", className: "flex-1 inline-flex justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider", children: text.book }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#location", className: "flex-1 inline-flex justify-center items-center gap-2 border border-border hover:border-ember hover:text-ember transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider text-foreground", children: text.directions })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "location", className: "section-padding pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-full bg-ember/10 flex items-center justify-center shrink-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5 text-ember" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-xl md:text-2xl font-bold text-foreground mb-2", children: text.locationTitle }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-muted-foreground leading-relaxed max-w-2xl", children: text.locationText }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.google.com/maps?cid=6512661380146566532", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-1.5 mt-4 text-xs uppercase tracking-wider font-display text-ember hover:underline", children: [
          text.reviewLink,
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ExternalLink, { className: "h-3 w-3" })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "hidden md:block h-6 w-6 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: text.safetyTitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-8 md:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-[0.2em] text-ember mb-3", children: text.gearPoint }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/80 leading-relaxed mb-2", children: text.gearIntro }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid sm:grid-cols-2 gap-x-8 gap-y-4 mt-6", children: text.gear.map((g) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-l-2 border-ember/40 pl-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-xs uppercase tracking-wider text-foreground mb-1", children: g.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground leading-relaxed", children: g.desc })
        ] }, g.title)) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Users, { className: "hidden md:block h-6 w-6 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-[0.2em] text-ember", children: text.accessibilityPoint })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/80 leading-relaxed max-w-3xl mb-8", children: text.accessibilityText }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
        photoCarousel.canLeft && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => photoCarousel.scroll(-1), className: "hidden md:flex absolute -left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background text-foreground border border-border items-center justify-center shadow-lg hover:bg-background/90 transition-colors", "aria-label": text.back, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" }) }),
        photoCarousel.canRight && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => photoCarousel.scroll(1), className: "hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-background text-foreground border border-border items-center justify-center shadow-lg hover:bg-background/90 transition-colors", "aria-label": text.forward, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: photoCarousel.scroller, className: "flex gap-3 overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden", style: {
          touchAction: "pan-x pan-y",
          WebkitOverflowScrolling: "touch"
        }, children: carousel.map((src, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "snap-start shrink-0 w-[260px] lg:w-[320px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src, alt: text.photoAlt(i + 1), loading: "lazy", className: "w-full h-full object-cover" }) }, i)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 h-[3px] max-w-xs mx-auto rounded-full bg-border/70 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-ember transition-[margin] duration-200 ease-out", style: {
        width: `${Math.max(100 / carousel.length, 8)}%`,
        marginLeft: `${photoCarousel.progress * (100 - Math.max(100 / carousel.length, 8))}%`
      } }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding pb-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto rounded-3xl border border-border bg-card p-8 md:p-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Mountain, { className: "hidden md:block h-6 w-6 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm uppercase tracking-[0.2em] text-ember", children: text.experiencePoint })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-sm text-foreground/80 leading-relaxed max-w-3xl mb-8", children: text.experienceText }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: teamCarousel.scroller, className: "lg:hidden flex gap-3 overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth pb-3 [scrollbar-width:thin] [scrollbar-color:var(--ember)_transparent] [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-ember", style: {
        touchAction: "pan-x",
        WebkitOverflowScrolling: "touch"
      }, children: team.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "snap-start shrink-0 w-[260px] aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base uppercase tracking-wider text-white", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-white/70", children: t.role })
        ] })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden lg:grid grid-cols-2 gap-4 max-w-2xl", children: team.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "aspect-[3/4] rounded-2xl overflow-hidden bg-muted relative", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: t.img, alt: t.name, loading: "lazy", className: "w-full h-full object-cover" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-base uppercase tracking-wider text-white", children: t.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-body text-xs text-white/70", children: t.role })
        ] })
      ] }, t.name)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "lg:hidden mt-5 h-[3px] max-w-xs mx-auto rounded-full bg-border/70 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full rounded-full bg-ember transition-[margin] duration-200 ease-out", style: {
        width: `${Math.max(100 / team.length, 8)}%`,
        marginLeft: `${teamCarousel.progress * (100 - Math.max(100 / team.length, 8))}%`
      } }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "schedule", className: "section-padding pb-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Calendar, { className: "hidden md:block h-6 w-6 text-ember" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold text-foreground", children: text.scheduleTitle })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: text.schedule.map((day) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 md:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl font-bold text-ember", children: day.day }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground", children: [
            text.trainingPrice,
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-foreground font-bold", children: day.price })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2 mb-6", children: day.slots.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "px-5 py-3 rounded-xl bg-ember/5 font-display text-sm uppercase tracking-wider text-foreground", children: s }, s)) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://t.me/shpaksn", target: "_blank", rel: "noopener noreferrer", className: "inline-flex w-full justify-center items-center gap-2 bg-ember text-ember-foreground hover:bg-ember/90 transition-colors px-6 py-3 rounded-full font-display text-xs uppercase tracking-wider", children: text.book })
      ] }, day.day)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  ClimbingPage as component
};
