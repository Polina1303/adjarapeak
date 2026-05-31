import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { G as useLanguage, F as useIsInCart, r as getSiteText, y as resolveCatalogImage, m as addToCart } from "./router-iK0vV985.mjs";
import { C as CATALOG_UI_TEXT } from "./catalog-ui-text-Dc3UrwST.mjs";
import { b as getSalePrice, a as getDisplayPrice, g as getDiscountPercent } from "./discount-DnxRxSbc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
function RentalGrid({ items }) {
  const { lang } = useLanguage();
  if (items.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground font-body", children: CATALOG_UI_TEXT[lang].emptyRentals });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5", children: items.map((item) => {
    const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
    const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
    const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      RentalCard,
      {
        item,
        salePrice,
        displayPrice,
        discountPct
      },
      item.id
    );
  }) });
}
function RentalCard({
  item,
  salePrice,
  displayPrice,
  discountPct
}) {
  const inCart = useIsInCart(item.slug);
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (inCart) return;
    addToCart(1, item.slug, {
      title: item.title,
      image: item.image,
      price: displayPrice,
      kind: "rental",
      unit: text.perDay
    });
    toast.success(text.addedToCart(item.title));
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Link,
    {
      to: "/app/$slug",
      params: { slug: item.slug },
      className: "group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-background overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: resolveCatalogImage(item.image),
              alt: item.title,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            }
          ),
          !item.available && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2.5 py-1 rounded-full", children: text.occupied })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-4 pb-5 flex flex-col gap-2", children: [
          discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded", children: [
            "-",
            discountPct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground text-xl", children: [
              "₾",
              displayPrice,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-body font-normal text-muted-foreground", children: text.perDay })
            ] }),
            salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-sm text-muted-foreground line-through", children: [
              "₾",
              item.price_per_day
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body text-foreground text-sm leading-snug line-clamp-2", children: item.title }),
          item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-body text-xs text-muted-foreground uppercase tracking-wide line-clamp-2", children: item.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5 mt-auto opacity-100 translate-y-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            type: "button",
            onClick: handleAdd,
            disabled: !item.available,
            className: `flex items-center justify-center w-full h-11 rounded-full font-body text-sm uppercase tracking-wider disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${inCart ? "bg-foreground text-background hover:bg-foreground/90" : "bg-ember text-primary-foreground hover:bg-ember/90"}`,
            children: !item.available ? text.occupied : inCart ? text.inCart : text.addToCart
          }
        ) })
      ]
    }
  );
}
export {
  RentalGrid as R
};
