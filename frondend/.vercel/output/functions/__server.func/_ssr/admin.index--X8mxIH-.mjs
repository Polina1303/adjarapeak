import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-0tcAzMYp.mjs";
import { C as Card, b as CardHeader, c as CardTitle, a as CardContent } from "./card-Btee1iG-.mjs";
import { a as ADMIN_TABLE_LIST } from "./admin-tables-DQn8aHkk.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
function AdminDashboard() {
  const [counts, setCounts] = reactExports.useState({});
  reactExports.useEffect(() => {
    (async () => {
      const out = {};
      for (const t of ADMIN_TABLE_LIST) {
        const {
          count
        } = await supabase.from(t.table).select("*", {
          count: "exact",
          head: true
        });
        out[t.key] = count ?? 0;
      }
      setCounts(out);
    })();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: "Панель управления" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-muted-foreground", children: "Управление каталогом магазина и аренды. Создайте резервную копию перед массовыми изменениями." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-3", children: ADMIN_TABLE_LIST.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/admin/t/$table", params: {
      table: t.key
    }, className: "h-full block", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Card, { className: "hover:border-primary transition-colors h-full flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardHeader, { className: "pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CardTitle, { className: "text-[10px] uppercase text-muted-foreground", children: t.label }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CardContent, { className: "mt-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold", children: counts[t.key] ?? "…" }) })
    ] }) }, t.key)) })
  ] });
}
export {
  AdminDashboard as component
};
