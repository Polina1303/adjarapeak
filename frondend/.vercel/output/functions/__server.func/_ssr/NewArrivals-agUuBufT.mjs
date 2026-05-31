import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { G as useLanguage, r as getSiteText, v as listLatestProducts } from "./router-iK0vV985.mjs";
import { P as ProductCarousel } from "./ProductCarousel-BB2sXWaQ.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
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
import "../_libs/lucide-react.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
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
function NewArrivals() {
  const [products, setProducts] = reactExports.useState([]);
  const { lang } = useLanguage();
  const text = getSiteText(lang).home;
  reactExports.useEffect(() => {
    listLatestProducts({ data: { limit: 12 } }).then(setProducts).catch(() => setProducts([]));
  }, []);
  if (products.length === 0) return null;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding py-12 md:py-16", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-7xl mx-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-8", children: /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-2xl md:text-3xl font-bold text-foreground", children: text.newArrivals }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCarousel, { products })
  ] }) });
}
export {
  NewArrivals
};
