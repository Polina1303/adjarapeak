import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { e as useNavigate, L as Link } from "../_libs/tanstack__react-router.mjs";
import { H as Header, F as Footer } from "./Footer-BfAK2mGB.mjs";
import { B as Button } from "./button-ODMTIVjw.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { h as Route$7, y as resolveCatalogImage, F as useIsInCart, m as addToCart, G as useLanguage, r as getSiteText } from "./router-iK0vV985.mjs";
import { P as ProductCarousel } from "./ProductCarousel-BB2sXWaQ.mjs";
import { b as getSalePrice, a as getDisplayPrice, g as getDiscountPercent } from "./discount-DnxRxSbc.mjs";
import { C as Carousel, a as CarouselContent, b as CarouselItem, d as CarouselPrevious, c as CarouselNext, e as CarouselProgress } from "./carousel-D6jC5ouG.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { A as ArrowLeft, f as ChevronRight, c as Check } from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/embla-carousel-react.mjs";
import "../_libs/embla-carousel-reactive-utils.mjs";
import "../_libs/embla-carousel.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
function RentalCarousel({ items }) {
  const { lang } = useLanguage();
  const text = getSiteText(lang).common;
  if (items.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Carousel, { opts: { align: "start", slidesToScroll: "auto" }, className: "w-full", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselContent, { className: "-ml-4", children: items.map((item) => {
      const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
      const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
      const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);
      return /* @__PURE__ */ jsxRuntimeExports.jsx(
        CarouselItem,
        {
          className: "pl-4 basis-2/3 sm:basis-1/2 md:basis-1/3 lg:basis-1/4",
          children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/app/$slug",
              params: { slug: item.slug },
              className: "group relative bg-card rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 h-full",
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
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-body text-foreground text-sm leading-snug line-clamp-2", children: item.title })
                ] })
              ]
            }
          )
        },
        item.id
      );
    }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselPrevious, { className: "hidden md:flex -left-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselNext, { className: "hidden md:flex -right-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CarouselProgress, { className: "mt-6 max-w-xs mx-auto" })
  ] });
}
function AppPage() {
  const loaderData = Route$7.useLoaderData();
  if (loaderData.kind === "product") return /* @__PURE__ */ jsxRuntimeExports.jsx(ProductView, { data: loaderData.data });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(RentalView, { data: loaderData.data });
}
function ProductView({
  data
}) {
  const {
    product,
    category,
    group,
    related
  } = data;
  const navigate = useNavigate();
  const mainImage = resolveCatalogImage(product.image);
  const inCart = useIsInCart(product.slug);
  const salePrice = getSalePrice(product.price, product.sale_price);
  const displayPrice = getDisplayPrice(product.price, product.sale_price);
  const discountPct = getDiscountPercent(product.price, product.sale_price);
  const handleAddToCart = () => {
    if (inCart) {
      navigate({
        to: "/checkout"
      });
      return;
    }
    addToCart(1, product.slug, {
      title: product.title,
      image: product.image,
      price: displayPrice,
      kind: "shop",
      unit: ""
    });
    toast.success(`${product.title} добавлен в корзину`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-8 section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => {
        if (typeof window !== "undefined" && window.history.length > 1) {
          window.history.back();
        } else {
          navigate({
            to: "/sale"
          });
        }
      }, className: "lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Назад"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "hidden lg:flex items-center flex-wrap gap-2 text-sm font-body text-muted-foreground mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Главная" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sale", className: "hover:text-foreground transition-colors", children: "Магазин" }),
        group && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sale", className: "hover:text-foreground transition-colors", children: group.title })
        ] }),
        group && category && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/sale/$group/$category", params: {
            group: group.slug,
            category: category.slug
          }, className: "hover:text-foreground transition-colors", children: category.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground line-clamp-1", children: product.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-1", children: product.title }),
        product.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed mb-8 text-sm max-w-3xl", children: product.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-8 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            scale: 0.98
          }, animate: {
            opacity: 1,
            scale: 1
          }, className: "relative aspect-square overflow-hidden rounded-3xl bg-muted", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: mainImage, alt: product.title, className: "w-full h-full object-cover" }),
            !product.in_stock && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute top-4 right-4 bg-foreground text-background text-xs uppercase tracking-[0.12em] font-body font-semibold px-3 py-1.5 rounded-full", children: "Нет в наличии" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-ember text-4xl", children: [
                "₾",
                displayPrice
              ] }),
              salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-base text-muted-foreground line-through", children: [
                "₾",
                product.price
              ] }),
              discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded", children: [
                "-",
                discountPct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: "/шт." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: inCart ? "w-full font-body bg-foreground text-background hover:bg-foreground/90" : "w-full font-body bg-ember text-primary-foreground hover:bg-ember/90", onClick: handleAddToCart, disabled: !product.in_stock, children: inCart ? "Открыть корзину" : "В корзину" })
          ] }),
          product.features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4", children: "Описание" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: product.features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm font-body text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-ember mt-0.5 shrink-0" }),
              f
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden lg:block lg:sticky lg:top-28", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-1", children: product.title }),
          product.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed mb-8 text-sm", children: product.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-4 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-ember text-4xl", children: [
              "₾",
              displayPrice
            ] }),
            salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-base text-muted-foreground line-through", children: [
              "₾",
              product.price
            ] }),
            discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded", children: [
              "-",
              discountPct,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: "/шт." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { className: inCart ? "w-full font-body bg-foreground text-background hover:bg-foreground/90" : "w-full font-body bg-ember text-primary-foreground hover:bg-ember/90", onClick: handleAddToCart, disabled: !product.in_stock, children: inCart ? "Открыть корзину" : "В корзину" })
        ] })
      ] }),
      related && related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-6", children: "С этим товаром покупают" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCarousel, { products: related }, product.slug)
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
function RentalView({
  data
}) {
  const {
    item,
    category,
    group,
    related
  } = data;
  const navigate = useNavigate();
  const img = resolveCatalogImage(item.image);
  const booked = useIsInCart(item.slug);
  const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
  const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
  const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);
  const handleBook = () => {
    if (booked) {
      navigate({
        to: "/checkout"
      });
      return;
    }
    addToCart(1, item.slug, {
      title: item.title,
      image: item.image,
      price: displayPrice,
      kind: "rental",
      unit: "/сутки"
    });
    toast.success(`Заявка на бронирование отправлена: ${item.title}`);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "pt-24 pb-20 section-padding", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => window.history.back(), className: "lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { className: "h-4 w-4" }),
        "Назад"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { "aria-label": "Breadcrumb", className: "hidden lg:flex items-center flex-wrap gap-2 text-sm font-body text-muted-foreground mb-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/", className: "hover:text-foreground transition-colors", children: "Главная" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rent", className: "hover:text-foreground transition-colors", children: "Прокат" }),
        group && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rent", className: "hover:text-foreground transition-colors", children: group.title })
        ] }),
        group && category && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/rent/$group/$category", params: {
            group: group.slug,
            category: category.slug
          }, className: "hover:text-foreground transition-colors", children: category.title })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-3.5 w-3.5 opacity-60" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground line-clamp-1", children: item.title })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3", children: item.title }),
        item.shortly && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 font-body leading-relaxed mb-4 text-sm", children: item.shortly }),
        item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed mb-8 text-xs", children: item.description })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-10 lg:gap-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
            opacity: 0,
            scale: 0.98
          }, animate: {
            opacity: 1,
            scale: 1
          }, className: "relative aspect-square overflow-hidden rounded-3xl bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: img, alt: item.title, className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:hidden", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-4 flex-wrap", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-ember text-4xl", children: [
                "₾",
                displayPrice
              ] }),
              salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-base text-muted-foreground line-through", children: [
                "₾",
                item.price_per_day
              ] }),
              discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded", children: [
                "-",
                discountPct,
                "%"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: "/сутки" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: booked ? "w-full font-body h-12 bg-foreground text-background hover:bg-foreground/90" : "w-full font-body h-12 bg-ember text-primary-foreground hover:bg-ember/90", disabled: !item.available, onClick: handleBook, children: !item.available ? "Сейчас занято" : booked ? "Открыть корзину" : "Забронировать" })
          ] }),
          item.features.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display font-bold text-foreground text-2xl md:text-3xl mb-4", children: "Описание" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: item.features.map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm font-body text-foreground/80", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4 text-ember mt-0.5 shrink-0" }),
              f
            ] }, i)) })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.1
        }, className: "hidden lg:flex flex-col lg:sticky lg:top-32", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3", children: item.title }),
          item.shortly && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground/90 font-body leading-relaxed mb-6 text-sm", children: item.shortly }),
          item.description && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground font-body leading-relaxed mb-6 text-xs", children: item.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-baseline gap-3 mb-6 flex-wrap", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-display font-bold text-ember text-4xl", children: [
              "₾",
              displayPrice
            ] }),
            salePrice && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-body text-base text-muted-foreground line-through", children: [
              "₾",
              item.price_per_day
            ] }),
            discountPct !== null && /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded", children: [
              "-",
              discountPct,
              "%"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground font-body", children: "/сутки" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { size: "lg", className: booked ? "font-body h-12 bg-foreground text-background hover:bg-foreground/90" : "font-body h-12 bg-ember text-primary-foreground hover:bg-ember/90", disabled: !item.available, onClick: handleBook, children: !item.available ? "Сейчас занято" : booked ? "Открыть корзину" : "Забронировать" })
        ] })
      ] }),
      related && related.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mb-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground mb-6", children: "Также арендуют" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(RentalCarousel, { items: related })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  AppPage as component
};
