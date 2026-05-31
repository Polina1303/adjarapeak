import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { G as useLanguage, y as resolveCatalogImage } from "./router-iK0vV985.mjs";
import { A as ArrowLeft } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
const TILE_TEXT = {
  RU: {
    back: "Назад",
    empty: "Здесь пока ничего нет."
  },
  EN: {
    back: "Back",
    empty: "Nothing here yet."
  },
  GE: {
    back: "უკან",
    empty: "აქ ჯერ არაფერია."
  }
};
function TilePicker({ title, items, buildHref, breadcrumbs, emptyText }) {
  const { lang } = useLanguage();
  const text = TILE_TEXT[lang];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-20 section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "button",
        {
          type: "button",
          onClick: () => window.history.back(),
          className: "lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
            text.back
          ]
        }
      ),
      breadcrumbs && breadcrumbs.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-2 text-sm font-body text-muted-foreground mb-6 flex-wrap", children: breadcrumbs.map((c, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-2", children: [
        c.to ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: c.to, className: "hover:text-foreground transition-colors", children: c.label }) : /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: c.label }),
        i < breadcrumbs.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "/" })
      ] }, i)) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-8", children: title }),
      items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground font-body", children: emptyText ?? text.empty }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5", children: items.map((item, i) => {
        const href = buildHref(item.slug);
        const tileInner = /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "aspect-square bg-background overflow-hidden flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: resolveCatalogImage(item.image),
              alt: item.title,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-3 py-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground group-hover:text-ember transition-colors", children: item.title }) })
        ] });
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 16 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true },
            transition: { delay: Math.min(i * 0.04, 0.4) },
            children: href.external ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: href.to,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "group flex flex-col bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                children: tileInner
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: href.to,
                params: href.params,
                className: "group flex flex-col bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
                children: tileInner
              }
            )
          },
          item.id
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  TilePicker as T
};
