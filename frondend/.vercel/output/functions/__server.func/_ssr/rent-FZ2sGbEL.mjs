import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { u as useChildMatches, O as Outlet } from "../_libs/tanstack__react-router.mjs";
import { T as TilePicker } from "./TilePicker-hhhiXLeU.mjs";
import { u as useCatalogTranslations } from "./catalog-translations-Dcqii-5G.mjs";
import { a as Route$h, G as useLanguage } from "./router-iK0vV985.mjs";
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
const RENT_INDEX_TEXT = {
  RU: {
    title: "Прокат",
    empty: "Категории проката пока недоступны."
  },
  EN: {
    title: "Rental",
    empty: "Rental categories are not available yet."
  },
  GE: {
    title: "ქირაობა",
    empty: "ქირაობის კატეგორიები ჯერ მიუწვდომელია."
  }
};
function RentalsIndex() {
  const childMatches = useChildMatches();
  const groups = Route$h.useLoaderData();
  const {
    lang
  } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = RENT_INDEX_TEXT[lang];
  if (childMatches.length > 0) return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
  const filtered = groups.filter((g) => g.slug !== "sale" && g.title.toLowerCase() !== "распродажа");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(TilePicker, { title: text.title, items: filtered.map((g) => ({
    id: g.id,
    slug: g.slug,
    title: catalogTranslations.group("rentals", g.slug, g.title),
    image: g.image
  })), buildHref: (slug) => ({
    to: "/rent/$group",
    params: {
      group: slug
    }
  }), emptyText: text.empty });
}
export {
  RentalsIndex as component
};
