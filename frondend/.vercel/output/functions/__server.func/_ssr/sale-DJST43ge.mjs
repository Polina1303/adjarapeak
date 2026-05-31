import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useChildMatches, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { T as TilePicker } from "./TilePicker-hhhiXLeU.mjs";
import { u as useCatalogTranslations } from "./catalog-translations-Dcqii-5G.mjs";
import { R as Route$j, G as useLanguage } from "./router-iK0vV985.mjs";
import "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
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
import "./Footer-BfAK2mGB.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/framer-motion.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
function ShopIndex() {
  const childMatches = useChildMatches();
  const groups = Route$j.useLoaderData();
  const {
    lang
  } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  if (childMatches.length > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TilePicker, { title: "Магазин", items: groups.map((g) => ({
    id: g.id,
    slug: g.slug,
    title: catalogTranslations.group("shop", g.slug, g.title),
    image: g.image
  })), buildHref: (slug) => ({
    to: "/sale/$group",
    params: {
      group: slug
    }
  }), emptyText: "Категории пока недоступны." });
}
export {
  ShopIndex as component
};
