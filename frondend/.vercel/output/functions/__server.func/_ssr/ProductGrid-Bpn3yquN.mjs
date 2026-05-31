import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { C as CATALOG_UI_TEXT } from "./catalog-ui-text-Dc3UrwST.mjs";
import { G as useLanguage } from "./router-iK0vV985.mjs";
import { P as ProductCard } from "./ProductCard-DM-0-7Nm.mjs";
function ProductGrid({ products }) {
  const { lang } = useLanguage();
  if (products.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-center py-20 text-muted-foreground font-body", children: CATALOG_UI_TEXT[lang].emptyProducts });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5", children: products.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsx(ProductCard, { product: p }, p.id)) });
}
export {
  ProductGrid as P
};
