import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { F as useIsInCart, G as useLanguage, r as getSiteText, y as resolveCatalogImage, m as addToCart } from "./router-iK0vV985.mjs";
import { b as getSalePrice, a as getDisplayPrice, g as getDiscountPercent } from "./discount-DnxRxSbc.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, d as CarouselPrevious, c as CarouselNext, e as CarouselProgress } from "./carousel-D6jC5ouG.mjs";
function CarouselCard({ product: p }) {
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
      className: "group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-square bg-background overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: resolveCatalogImage(p.image),
              alt: p.title,
              loading: "lazy",
              decoding: "async",
              className: "w-full h-full object-contain p-6 transition-transform duration-500 group-hover:scale-105"
            }
          ),
          !p.in_stock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-3 right-3 bg-foreground text-background text-[10px] uppercase tracking-wider font-body font-bold px-2.5 py-1 rounded-full", children: text.outOfStock })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-5 pt-4 pb-3 flex flex-col gap-2 flex-1", children: [
          discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "self-start bg-ember text-primary-foreground text-[11px] font-body font-bold px-2 py-0.5 rounded", children: [
            "-",
            discountPct,
            "%"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-2 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-foreground text-xl", children: [
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
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-5 pb-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
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
function ProductCarousel({ products }) {
  if (products.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", slidesToScroll: "auto" }, className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      CarouselItem,
      {
        className: "pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselCard, { product: p })
      },
      p.id
    )) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden md:flex -left-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden md:flex -right-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselProgress, { className: "mt-6 max-w-xs mx-auto" })
  ] });
}
export {
  ProductCarousel as P
};
