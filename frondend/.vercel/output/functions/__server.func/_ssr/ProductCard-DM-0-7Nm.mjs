import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { F as useIsInCart, G as useLanguage, r as getSiteText, y as resolveCatalogImage, m as addToCart } from "./router-iK0vV985.mjs";
import { b as getSalePrice, a as getDisplayPrice, g as getDiscountPercent } from "./discount-DnxRxSbc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
function ProductCard({ product: p, bordered = false }) {
  const salePrice = getSalePrice(p.price, p.sale_price);
  const displayPrice = getDisplayPrice(p.price, p.sale_price);
  const discountPct = getDiscountPercent(p.price, p.sale_price);
  const inCart = useIsInCart(p.slug);
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) {
      return;
    }
    addToCart(1, p.slug, {
      title: p.title,
      image: p.image,
      price: displayPrice,
      kind: "shop",
      unit: ""
    });
    toast.success(text.addedToCart(p.title));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/app/$slug",
      params: { slug: p.slug },
      className: `group relative bg-card rounded-xl overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${bordered ? "border border-border hover:border-transparent" : ""}`,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-background overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: resolveCatalogImage(p.image),
              alt: p.title,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
            }
          ),
          !p.in_stock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-2 right-2 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2 py-0.5 rounded-full", children: text.outOfStock })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-4 pt-4 pb-4 flex flex-col gap-2", children: [
          discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded", children: [
            "-",
            discountPct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground text-lg", children: [
              "₾",
              displayPrice
            ] }),
            salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground line-through", children: [
              "₾",
              p.price
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body text-foreground text-sm leading-snug line-clamp-2", children: p.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pb-4 mt-auto opacity-100 translate-y-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAdd,
            disabled: !p.in_stock,
            className: `flex items-center justify-center w-full h-10 rounded-full font-body text-[10px] sm:text-xs uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${inCart ? "bg-foreground text-background hover:bg-foreground/90" : "bg-ember text-primary-foreground hover:bg-ember/90"}`,
            children: !p.in_stock ? text.outOfStock : inCart ? text.inCart : text.addToCart
          }
        ) })
      ]
    }
  );
}
export {
  ProductCard as P
};
