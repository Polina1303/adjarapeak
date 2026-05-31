import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { f as useParams, N as Navigate } from "../_libs/tanstack__react-router.mjs";
import { s as supabase } from "./client-0tcAzMYp.mjs";
import { B as Button, b as buttonVariants } from "./button-ODMTIVjw.mjs";
import { I as Input } from "./input-D3NIEZ4h.mjs";
import { c as cn } from "./utils-H80jjgLf.mjs";
import { R as Root2, P as Portal2, a as Content2, T as Title2, D as Description2, C as Cancel, A as Action, O as Overlay2 } from "../_libs/radix-ui__react-alert-dialog.mjs";
import { A as ADMIN_TABLES } from "./admin-tables-DQn8aHkk.mjs";
import { s as sortShopGroups, g as getShopGroupOrderIndex } from "./shop-group-order-BMA7MIrt.mjs";
import { T as Textarea, C as Checkbox } from "./textarea-CGcGsEyE.mjs";
import { L as Label } from "./label-Cv1UYZ6t.mjs";
import { R as Root, P as Portal, a as Content, C as Close, T as Title, O as Overlay, D as Description } from "../_libs/radix-ui__react-dialog.mjs";
import { R as Root2$1, V as Value, T as Trigger, I as Icon, P as Portal$1, C as Content2$1, f as Viewport, a as Item, b as ItemIndicator, c as ItemText, d as ScrollUpButton, S as ScrollDownButton, L as Label$1, e as Separator } from "../_libs/radix-ui__react-select.mjs";
import { y as resolveCatalogImage } from "./router-iK0vV985.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { d as downloadBlob, t as toCSV } from "./csv-D4bTSb2u.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { D as Download, r as Plus, l as GripVertical, k as EyeOff, j as Eye, p as Pencil, B as Trash2, X, d as ChevronDown, c as Check, U as Upload, g as ChevronUp } from "../_libs/lucide-react.mjs";
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
import "../_libs/supabase__supabase-js.mjs";
import "../_libs/supabase__postgrest-js.mjs";
import "../_libs/supabase__realtime-js.mjs";
import "../_libs/supabase__phoenix.mjs";
import "../_libs/supabase__storage-js.mjs";
import "../_libs/iceberg-js.mjs";
import "../_libs/supabase__auth-js.mjs";
import "../_libs/tslib.mjs";
import "../_libs/supabase__functions-js.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/react-remove-scroll.mjs";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/radix-ui__number.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/@radix-ui/react-visually-hidden+[...].mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const Table = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  "table",
  {
    ref,
    className: cn("w-full caption-bottom text-sm", className),
    ...props
  }
) }));
Table.displayName = "Table";
const TableHeader = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { ref, className: cn("[&_tr]:border-b", className), ...props }));
TableHeader.displayName = "TableHeader";
const TableBody = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tbody",
  {
    ref,
    className: cn("[&_tr:last-child]:border-0", className),
    ...props
  }
));
TableBody.displayName = "TableBody";
const TableFooter = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tfoot",
  {
    ref,
    className: cn(
      "border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",
      className
    ),
    ...props
  }
));
TableFooter.displayName = "TableFooter";
const TableRow = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "tr",
  {
    ref,
    className: cn(
      "border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",
      className
    ),
    ...props
  }
));
TableRow.displayName = "TableRow";
const TableHead = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "th",
  {
    ref,
    className: cn(
      "h-10 px-2 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableHead.displayName = "TableHead";
const TableCell = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "td",
  {
    ref,
    className: cn(
      "p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
      className
    ),
    ...props
  }
));
TableCell.displayName = "TableCell";
const TableCaption = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "caption",
  {
    ref,
    className: cn("mt-4 text-sm text-muted-foreground", className),
    ...props
  }
));
TableCaption.displayName = "TableCaption";
const AlertDialog = Root2;
const AlertDialogPortal = Portal2;
const AlertDialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay2,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
AlertDialogOverlay.displayName = Overlay2.displayName;
const AlertDialogContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsx(
    Content2,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props
    }
  )
] }));
AlertDialogContent.displayName = Content2.displayName;
const AlertDialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    ),
    ...props
  }
);
AlertDialogHeader.displayName = "AlertDialogHeader";
const AlertDialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
const AlertDialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title2,
  {
    ref,
    className: cn("text-lg font-semibold", className),
    ...props
  }
));
AlertDialogTitle.displayName = Title2.displayName;
const AlertDialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description2,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
AlertDialogDescription.displayName = Description2.displayName;
const AlertDialogAction = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Action,
  {
    ref,
    className: cn(buttonVariants(), className),
    ...props
  }
));
AlertDialogAction.displayName = Action.displayName;
const AlertDialogCancel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Cancel,
  {
    ref,
    className: cn(
      buttonVariants({ variant: "outline" }),
      "mt-2 sm:mt-0",
      className
    ),
    ...props
  }
));
AlertDialogCancel.displayName = Cancel.displayName;
const VIRTUAL_BOARDS_CATEGORY_SLUG = "balance_board";
const VIRTUAL_BOARDS_GROUP_SLUG = "boards";
function byText(a, b) {
  return String(a ?? "").localeCompare(String(b ?? ""), "ru");
}
function byNumber(a, b) {
  return Number(a ?? 0) - Number(b ?? 0);
}
function shopGroupIndex(group, categorySlug) {
  if (categorySlug === VIRTUAL_BOARDS_CATEGORY_SLUG) {
    return getShopGroupOrderIndex(VIRTUAL_BOARDS_GROUP_SLUG) ?? Number.MAX_SAFE_INTEGER;
  }
  return getShopGroupOrderIndex(group?.slug) ?? Number.MAX_SAFE_INTEGER;
}
function shopGroupFallback(group) {
  return Number(group?.sort_order ?? Number.MAX_SAFE_INTEGER);
}
function rentalGroupOrder(group) {
  return Number(group?.sort_order ?? Number.MAX_SAFE_INTEGER);
}
function compareByCategory(a, b, refs, kind) {
  const groups = kind === "shop" ? refs.shopGroups : refs.rentalGroups;
  const groupById = new Map((groups ?? []).map((group) => [group.id, group]));
  const aGroup = groupById.get(a.group_id);
  const bGroup = groupById.get(b.group_id);
  if (kind === "shop") {
    const byGroupIndex = shopGroupIndex(aGroup, a.slug) - shopGroupIndex(bGroup, b.slug);
    if (byGroupIndex !== 0) return byGroupIndex;
    const byGroupSort = shopGroupFallback(aGroup) - shopGroupFallback(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  } else {
    const byGroupSort = rentalGroupOrder(aGroup) - rentalGroupOrder(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  }
  const bySort = byNumber(a.sort_order, b.sort_order);
  if (bySort !== 0) return bySort;
  return byText(a.title, b.title);
}
function compareBySubcategory(a, b, refs, kind) {
  const categories = kind === "shop" ? refs.shopCategories : refs.rentalCategories;
  const groups = kind === "shop" ? refs.shopGroups : refs.rentalGroups;
  const categoryById = new Map((categories ?? []).map((category) => [category.id, category]));
  const groupById = new Map((groups ?? []).map((group) => [group.id, group]));
  const aCategory = categoryById.get(a.category_id);
  const bCategory = categoryById.get(b.category_id);
  const aGroup = aCategory?.group_id ? groupById.get(aCategory.group_id) : void 0;
  const bGroup = bCategory?.group_id ? groupById.get(bCategory.group_id) : void 0;
  if (kind === "shop") {
    const byGroupIndex = shopGroupIndex(aGroup, aCategory?.slug) - shopGroupIndex(bGroup, bCategory?.slug);
    if (byGroupIndex !== 0) return byGroupIndex;
    const byGroupSort = shopGroupFallback(aGroup) - shopGroupFallback(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  } else {
    const byGroupSort = rentalGroupOrder(aGroup) - rentalGroupOrder(bGroup);
    if (byGroupSort !== 0) return byGroupSort;
  }
  const byCategorySort = byNumber(aCategory?.sort_order, bCategory?.sort_order);
  if (byCategorySort !== 0) return byCategorySort;
  const byCategoryTitle = byText(aCategory?.title, bCategory?.title);
  if (byCategoryTitle !== 0) return byCategoryTitle;
  const bySort = byNumber(a.sort_order, b.sort_order);
  if (bySort !== 0) return bySort;
  return byText(a.title, b.title);
}
function sortAdminRows(table, rows, refs = {}) {
  if (table === "shop_groups") return sortShopGroups(rows);
  if (table === "shop_categories") {
    return [...rows].sort((a, b) => compareByCategory(a, b, refs, "shop"));
  }
  if (table === "shop_subcategories") {
    return [...rows].sort((a, b) => compareBySubcategory(a, b, refs, "shop"));
  }
  if (table === "rental_categories") {
    return [...rows].sort((a, b) => compareByCategory(a, b, refs, "rental"));
  }
  if (table === "rental_subcategories") {
    return [...rows].sort((a, b) => compareBySubcategory(a, b, refs, "rental"));
  }
  return rows;
}
async function loadAdminSortRefs(table, client) {
  if (table === "shop_categories" || table === "shop_subcategories") {
    const [groups, categories] = await Promise.all([
      client.from("shop_groups").select("id,slug,title,sort_order"),
      table === "shop_subcategories" ? client.from("shop_categories").select("id,group_id,slug,title,sort_order") : Promise.resolve({ data: [] })
    ]);
    return {
      shopGroups: groups.data ?? [],
      shopCategories: categories.data ?? []
    };
  }
  if (table === "rental_categories" || table === "rental_subcategories") {
    const [groups, categories] = await Promise.all([
      client.from("rental_groups").select("id,slug,title,sort_order"),
      table === "rental_subcategories" ? client.from("rental_categories").select("id,group_id,slug,title,sort_order") : Promise.resolve({ data: [] })
    ]);
    return {
      rentalGroups: groups.data ?? [],
      rentalCategories: categories.data ?? []
    };
  }
  return {};
}
const Dialog = Root;
const DialogPortal = Portal;
const DialogOverlay = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = Overlay.displayName;
const DialogContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsxRuntimeExports.jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxRuntimeExports.jsxs(
    Content,
    {
      ref,
      className: cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] }));
DialogContent.displayName = Content.displayName;
const DialogHeader = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    ),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
const DialogFooter = ({
  className,
  ...props
}) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  "div",
  {
    className: cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    ),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
const DialogTitle = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Title,
  {
    ref,
    className: cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    ),
    ...props
  }
));
DialogTitle.displayName = Title.displayName;
const DialogDescription = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
DialogDescription.displayName = Description.displayName;
const Select = Root2$1;
const SelectValue = Value;
const SelectTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { asChild: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = Trigger.displayName;
const SelectScrollUpButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollUpButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = ScrollUpButton.displayName;
const SelectScrollDownButton = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  ScrollDownButton,
  {
    ref,
    className: cn(
      "flex cursor-default items-center justify-center py-1",
      className
    ),
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = ScrollDownButton.displayName;
const SelectContent = reactExports.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Content2$1,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = Content2$1.displayName;
const SelectLabel = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label$1,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = Label$1.displayName;
const SelectItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ItemText, { children })
    ]
  }
));
SelectItem.displayName = Item.displayName;
const SelectSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = Separator.displayName;
function ImageUploadField({ value, onChange }) {
  const inputRef = reactExports.useRef(null);
  const [uploading, setUploading] = reactExports.useState(false);
  const handleFile = async (file) => {
    setUploading(true);
    try {
      const ext = file.name.split(".").pop() || "jpg";
      const path = `${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
      const { error } = await supabase.storage.from("catalog-images").upload(path, file, { cacheControl: "3600", upsert: false });
      if (error) throw error;
      const { data } = supabase.storage.from("catalog-images").getPublicUrl(path);
      onChange(data.publicUrl);
      toast.success("Изображение загружено");
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Не удалось загрузить";
      toast.error(msg);
    } finally {
      setUploading(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-2", children: [
    value && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative inline-block", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: resolveCatalogImage(value),
          alt: "",
          className: "h-32 w-32 object-cover rounded border"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          type: "button",
          onClick: () => onChange(null),
          className: "absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full p-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-3 w-3" })
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "https://… или загрузите файл",
          value: value ?? "",
          onChange: (e) => onChange(e.target.value || null)
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        Button,
        {
          type: "button",
          variant: "outline",
          size: "sm",
          onClick: () => inputRef.current?.click(),
          disabled: uploading,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Upload, { className: "h-4 w-4 mr-1" }),
            uploading ? "..." : "Загрузить"
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        ref: inputRef,
        type: "file",
        accept: "image/*",
        className: "hidden",
        onChange: (e) => {
          const f = e.target.files?.[0];
          if (f) handleFile(f);
          e.target.value = "";
        }
      }
    )
  ] });
}
function isOptionalManualSaleField(key) {
  return key === "sale_price" || key === "sale_price_per_day";
}
function isMoneyField(key) {
  return key === "price" || key === "sale_price" || key === "price_per_day" || key === "sale_price_per_day";
}
function readErrorField(error, key) {
  if (!error || typeof error !== "object" || !(key in error)) return "";
  const value = error[key];
  return typeof value === "string" ? value : "";
}
function getErrorMessage(error) {
  const message = error instanceof Error ? error.message : readErrorField(error, "message") || "Не удалось сохранить";
  const details = readErrorField(error, "details");
  const hint = readErrorField(error, "hint");
  const fullMessage = [message, details, hint].filter(Boolean).join(" ");
  if (/sale_price|sale_price_per_day/i.test(fullMessage) && /column|schema cache|does not exist|could not find/i.test(fullMessage)) {
    return "В базе ещё нет поля для цены со скидкой. Примените миграцию Supabase и попробуйте снова.";
  }
  return message;
}
function validateManualSalePrice(basePrice, salePrice, saleLabel, baseLabel) {
  if (salePrice === null || salePrice === void 0 || salePrice === "") return null;
  const base = Number(basePrice);
  const sale = Number(salePrice);
  if (!Number.isFinite(base) || base <= 0) {
    return `Сначала укажите поле «${baseLabel}»`;
  }
  if (!Number.isFinite(sale) || sale <= 0) {
    return `Поле «${saleLabel}» должно быть больше 0`;
  }
  if (sale >= base) {
    return `Поле «${saleLabel}» должно быть меньше обычной цены`;
  }
  return null;
}
function validatePayload(config, payload) {
  if (config.table === "shop_products") {
    return validateManualSalePrice(payload.price, payload.sale_price, "Цена со скидкой", "Цена");
  }
  if (config.table === "rental_items") {
    return validateManualSalePrice(
      payload.price_per_day,
      payload.sale_price_per_day,
      "Цена / день со скидкой",
      "Цена / день"
    );
  }
  return null;
}
function RecordForm({ config, record, open, onClose, onSaved }) {
  const [form, setForm] = reactExports.useState({});
  const [fkOptions, setFkOptions] = reactExports.useState({});
  const [saving, setSaving] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (!open) return;
    const initial = {};
    for (const f of config.fields) {
      if (record) {
        initial[f.key] = record[f.key] ?? (f.type === "boolean" ? false : "");
        if (f.type === "json") {
          initial[f.key] = JSON.stringify(record[f.key] ?? [], null, 2);
        }
      } else {
        initial[f.key] = f.type === "boolean" ? false : f.type === "number" && f.required ? 0 : f.type === "json" ? "[]" : "";
      }
    }
    setForm(initial);
  }, [open, record, config]);
  reactExports.useEffect(() => {
    if (!open) return;
    const loadFk = async () => {
      const opts = {};
      for (const f of config.fields) {
        if (f.type === "fk" && f.fkTable) {
          const [{ data }, refs] = await Promise.all([
            supabase.from(f.fkTable).select("*").order("title", { ascending: true }),
            loadAdminSortRefs(f.fkTable, supabase)
          ]);
          const rows = sortAdminRows(f.fkTable, data ?? [], refs);
          opts[f.key] = rows.map((r) => ({
            id: r.id,
            title: r.title,
            parent: f.fkParentField ? r[f.fkParentField] : null
          }));
        }
      }
      setFkOptions(opts);
    };
    loadFk();
  }, [open, config]);
  const setVal = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  const submit = async () => {
    setSaving(true);
    try {
      const payload = {};
      for (const f of config.fields) {
        let v = form[f.key];
        if (f.type === "number") {
          if (v === "" || v === null || v === void 0) {
            v = null;
          } else {
            const numericValue = Number(String(v).trim().replace(",", "."));
            if (!Number.isFinite(numericValue)) {
              toast.error(`Поле «${f.label}» должно быть числом`);
              setSaving(false);
              return;
            }
            v = numericValue;
          }
        }
        if (f.type === "json") {
          try {
            v = v ? JSON.parse(v) : [];
          } catch {
            toast.error(`Неверный JSON в поле «${f.label}»`);
            setSaving(false);
            return;
          }
        }
        if (f.type === "fk" && (!v || v === "")) v = null;
        if (f.type === "text" || f.type === "textarea") {
          if (v === "") v = null;
        }
        if (f.required && (v === null || v === void 0 || v === "")) {
          toast.error(`Поле «${f.label}» обязательно`);
          setSaving(false);
          return;
        }
        if (isOptionalManualSaleField(f.key) && v === null && record?.[f.key] == null) {
          continue;
        }
        payload[f.key] = v;
      }
      const validationError = validatePayload(config, payload);
      if (validationError) {
        toast.error(validationError);
        setSaving(false);
        return;
      }
      let error;
      if (config.hasSortOrder && payload.sort_order !== null && payload.sort_order !== void 0) {
        const newOrder = Number(payload.sort_order);
        const prevOrder = record?.sort_order ?? null;
        if (prevOrder !== newOrder) {
          let q = supabase.from(config.table).select("id, sort_order").gte("sort_order", newOrder).order("sort_order", { ascending: false });
          if (config.sortScopeField && payload[config.sortScopeField]) {
            q = q.eq(config.sortScopeField, payload[config.sortScopeField]);
          }
          if (record?.id) q = q.neq("id", record.id);
          const { data: conflicts, error: cErr } = await q;
          if (cErr) throw cErr;
          const hasConflict = (conflicts ?? []).some(
            (r) => Number(r.sort_order) === newOrder
          );
          if (hasConflict) {
            for (const r of conflicts) {
              const { error: uErr } = await supabase.from(config.table).update({ sort_order: Number(r.sort_order) + 1 }).eq("id", r.id);
              if (uErr) throw uErr;
            }
          }
        }
      }
      if (record?.id) {
        ({ error } = await supabase.from(config.table).update(payload).eq("id", record.id));
      } else {
        ({ error } = await supabase.from(config.table).insert(payload));
      }
      if (error) throw error;
      toast.success(record ? "Обновлено" : "Создано");
      onSaved();
      onClose();
    } catch (e) {
      toast.error(getErrorMessage(e));
    } finally {
      setSaving(false);
    }
  };
  const renderField = (f) => {
    const v = form[f.key];
    switch (f.type) {
      case "text":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { value: v ?? "", onChange: (e) => setVal(f.key, e.target.value) });
      case "textarea":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: v ?? "",
            onChange: (e) => setVal(f.key, e.target.value),
            rows: 4
          }
        );
      case "number":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Input,
          {
            type: isMoneyField(f.key) ? "text" : "number",
            inputMode: isMoneyField(f.key) ? "decimal" : void 0,
            step: isMoneyField(f.key) ? void 0 : "any",
            value: v ?? "",
            onChange: (e) => setVal(f.key, e.target.value)
          }
        );
      case "boolean":
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            Checkbox,
            {
              checked: !!v,
              onCheckedChange: (c) => setVal(f.key, !!c)
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: f.label })
        ] });
      case "image":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(ImageUploadField, { value: v || null, onChange: (nv) => setVal(f.key, nv) });
      case "json":
        return /* @__PURE__ */ jsxRuntimeExports.jsx(
          Textarea,
          {
            value: v ?? "",
            onChange: (e) => setVal(f.key, e.target.value),
            rows: 6,
            className: "font-mono text-xs"
          }
        );
      case "fk": {
        const all = fkOptions[f.key] ?? [];
        const parentId = f.fkParentSource ? form[f.fkParentSource] : null;
        const filtered = f.fkParentField && parentId ? all.filter((o) => o.parent === parentId) : all;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          Select,
          {
            value: v || "",
            onValueChange: (val) => setVal(f.key, val === "__none__" ? null : val),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(SelectTrigger, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(SelectValue, { placeholder: "Выберите…" }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(SelectContent, { children: [
                !f.required && /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: "__none__", children: "— Не выбрано —" }),
                filtered.map((o) => /* @__PURE__ */ jsxRuntimeExports.jsx(SelectItem, { value: o.id, children: o.title }, o.id))
              ] })
            ]
          }
        );
      }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Dialog, { open, onOpenChange: (o) => !o && onClose(), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogContent, { className: "max-w-2xl max-h-[90vh] overflow-y-auto", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(DialogHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogTitle, { children: [
      record ? "Редактирование" : "Создание",
      " · ",
      config.label
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4 py-2", children: config.fields.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
      f.type !== "boolean" && /* @__PURE__ */ jsxRuntimeExports.jsxs(Label, { children: [
        f.label,
        " ",
        f.required && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-destructive", children: "*" })
      ] }),
      renderField(f)
    ] }, f.key)) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DialogFooter, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "outline", onClick: onClose, disabled: saving, children: "Отмена" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { onClick: submit, disabled: saving, children: saving ? "Сохранение…" : "Сохранить" })
    ] })
  ] }) });
}
const FETCH_PAGE_SIZE = 1e3;
const COLUMN_LABELS = {
  sort_order: "Порядок",
  title: "Название",
  slug: "Слаг",
  price: "Цена",
  sale_price: "Цена со скидкой",
  price_per_day: "Цена / день",
  sale_price_per_day: "Цена / день со скидкой",
  in_stock: "В наличии",
  available: "Доступно",
  hidden: "Скрыто",
  image: "Изображение",
  description: "Описание"
};
function normalizeSearchValue(value) {
  return String(value ?? "").normalize("NFKD").replace(/[\u0300-\u036f]/g, "").replace(/ё/g, "е").replace(/Ё/g, "е").toLowerCase().replace(/[^\p{L}\p{N}]+/gu, " ").trim();
}
function getSearchableValue(value) {
  if (value === null || value === void 0) return "";
  if (Array.isArray(value)) return value.map(getSearchableValue).join(" ");
  if (typeof value === "object") return JSON.stringify(value);
  return String(value);
}
function matchesSearch(row, tokens) {
  const haystack = normalizeSearchValue(
    Object.values(row).map(getSearchableValue).join(" ")
  );
  return tokens.every((token) => haystack.includes(token));
}
async function fetchAllAdminRows(table, orderCol) {
  const all = [];
  for (let from = 0; ; from += FETCH_PAGE_SIZE) {
    const to = from + FETCH_PAGE_SIZE - 1;
    let query = supabase.from(table).select("*").order(orderCol, { ascending: true });
    if (orderCol !== "id") {
      query = query.order("id", { ascending: true });
    }
    const { data, error } = await query.range(from, to);
    if (error) throw error;
    const chunk = data ?? [];
    all.push(...chunk);
    if (chunk.length < FETCH_PAGE_SIZE) break;
  }
  return all;
}
function DataTable({ config }) {
  const [rows, setRows] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const [search, setSearch] = reactExports.useState("");
  const [page, setPage] = reactExports.useState(0);
  const [editing, setEditing] = reactExports.useState(null);
  const [creating, setCreating] = reactExports.useState(false);
  const [deleteTarget, setDeleteTarget] = reactExports.useState(null);
  const [fkLabels, setFkLabels] = reactExports.useState({});
  const [dragIndex, setDragIndex] = reactExports.useState(null);
  const [overIndex, setOverIndex] = reactExports.useState(null);
  const PAGE_SIZE = 50;
  const load = async () => {
    setLoading(true);
    const orderCol = config.hasSortOrder ? "sort_order" : "title";
    try {
      const [loadedRows, refs] = await Promise.all([
        fetchAllAdminRows(config.table, orderCol),
        loadAdminSortRefs(config.table, supabase)
      ]);
      setRows(sortAdminRows(config.table, loadedRows, refs));
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Не удалось загрузить записи");
    } finally {
      setLoading(false);
    }
  };
  reactExports.useEffect(() => {
    load();
    setPage(0);
    setSearch("");
  }, [config.table]);
  reactExports.useEffect(() => {
    const fkFields = config.fields.filter((f) => f.type === "fk" && f.fkTable);
    if (!fkFields.length) {
      setFkLabels({});
      return;
    }
    (async () => {
      const map = {};
      for (const f of fkFields) {
        const refConfig = f.fkTable ? ADMIN_TABLES[f.fkTable] : null;
        if (!refConfig) continue;
        const { data } = await supabase.from(refConfig.table).select("id,title");
        const m = {};
        (data ?? []).forEach((r) => m[r.id] = r.title);
        map[f.key] = m;
      }
      setFkLabels(map);
    })();
  }, [config.table]);
  const filtered = reactExports.useMemo(() => {
    const tokens = normalizeSearchValue(search).split(/\s+/).filter(Boolean);
    if (!tokens.length) return rows;
    return rows.filter((r) => matchesSearch(r, tokens));
  }, [rows, search]);
  const pageRows = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);
  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const deleteRow = async (r) => {
    const { error } = await supabase.from(config.table).delete().eq("id", r.id);
    if (error) toast.error(error.message);
    else {
      toast.success("Удалено");
      load();
    }
    setDeleteTarget(null);
  };
  const toggleHidden = async (r) => {
    const { error } = await supabase.from(config.table).update({ hidden: !r.hidden }).eq("id", r.id);
    if (error) toast.error(error.message);
    else load();
  };
  const reorder = async (from, to) => {
    if (from === to || from < 0 || to < 0 || from >= rows.length || to >= rows.length) return;
    const scopeField = config.sortScopeField;
    if (scopeField && rows[from]?.[scopeField] !== rows[to]?.[scopeField]) {
      toast.error("Сортировка доступна только внутри одной группы/категории");
      return;
    }
    const next = [...rows];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    setRows(next);
    const orderedScopeRows = scopeField ? next.filter((row) => row[scopeField] === moved[scopeField]) : next;
    const updates = [];
    for (let k = 0; k < orderedScopeRows.length; k++) {
      const newOrder = k + 1;
      if ((orderedScopeRows[k].sort_order ?? null) !== newOrder) {
        updates.push(
          supabase.from(config.table).update({ sort_order: newOrder }).eq("id", orderedScopeRows[k].id)
        );
      }
    }
    const results = await Promise.all(updates);
    const err = results.find((r) => r.error);
    if (err) {
      toast.error(err.error.message);
      load();
    } else {
      load();
    }
  };
  const exportCSV = () => {
    downloadBlob(toCSV(rows), `${config.table}-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.csv`);
  };
  const renderCell = (r, col) => {
    const v = r[col];
    if (col === "image" && v) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: resolveCatalogImage(v), alt: "", className: "h-10 w-10 object-cover rounded" });
    }
    if (typeof v === "boolean") {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: v ? "text-emerald-600" : "text-muted-foreground", children: v ? "Да" : "Нет" });
    }
    if (col.endsWith("_id") && fkLabels[col]?.[v]) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs", children: fkLabels[col][v] });
    }
    if (typeof v === "object" && v !== null) {
      return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: "[obj]" });
    }
    return /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm", children: v === null || v === void 0 ? "—" : String(v) });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        Input,
        {
          placeholder: "Поиск по названию / слагу / описанию…",
          value: search,
          onChange: (e) => {
            setSearch(e.target.value);
            setPage(0);
          },
          className: "max-w-sm"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { variant: "outline", size: "sm", onClick: exportCSV, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Download, { className: "h-4 w-4 mr-1" }),
          " CSV"
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Button, { size: "sm", onClick: () => setCreating(true), children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-4 w-4 mr-1" }),
          " Добавить"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded border bg-card", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Table, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableHeader, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(TableRow, { children: [
        config.hasSortOrder && /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-20", children: "Сорт." }),
        config.listColumns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { children: COLUMN_LABELS[c] ?? c }, c)),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TableHead, { className: "w-32 text-right", children: "Действия" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(TableBody, { children: loading ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: config.listColumns.length + 2, children: "Загрузка…" }) }) : pageRows.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx(TableRow, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { colSpan: config.listColumns.length + 2, className: "text-muted-foreground", children: "Нет записей" }) }) : pageRows.map((r, i) => {
        const rowsIdx = rows.findIndex((x) => x.id === r.id);
        const draggable = config.hasSortOrder && !search.trim();
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(
          TableRow,
          {
            onDragOver: (e) => {
              if (dragIndex === null) return;
              e.preventDefault();
              if (overIndex !== rowsIdx) setOverIndex(rowsIdx);
            },
            onDrop: (e) => {
              if (dragIndex === null) return;
              e.preventDefault();
              const from = dragIndex;
              const to = rowsIdx;
              setDragIndex(null);
              setOverIndex(null);
              reorder(from, to);
            },
            onDragLeave: () => {
              if (overIndex === rowsIdx) setOverIndex(null);
            },
            className: [
              dragIndex === rowsIdx ? "opacity-40 bg-muted" : "",
              overIndex === rowsIdx && dragIndex !== null && dragIndex !== rowsIdx ? "bg-ember/5 border-t-2 border-ember" : ""
            ].filter(Boolean).join(" "),
            children: [
              config.hasSortOrder && /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  draggable,
                  onDragStart: (e) => {
                    if (!draggable) return;
                    setDragIndex(rowsIdx);
                    e.dataTransfer.effectAllowed = "move";
                  },
                  onDragEnd: () => {
                    setDragIndex(null);
                    setOverIndex(null);
                  },
                  title: draggable ? "Перетащите для изменения порядка" : "Отключите поиск для сортировки",
                  className: "flex items-center justify-center text-muted-foreground hover:text-ember cursor-grab active:cursor-grabbing disabled:opacity-30 disabled:cursor-not-allowed transition-colors",
                  disabled: !draggable,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(GripVertical, { className: "h-4 w-4" })
                }
              ) }),
              config.listColumns.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { children: renderCell(r, c) }, c)),
              /* @__PURE__ */ jsxRuntimeExports.jsx(TableCell, { className: "text-right", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex justify-end gap-1", children: [
                config.hasHidden && /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => toggleHidden(r),
                    title: r.hidden ? "Показать" : "Скрыть",
                    children: r.hidden ? /* @__PURE__ */ jsxRuntimeExports.jsx(EyeOff, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Eye, { className: "h-4 w-4" })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", size: "icon", onClick: () => setEditing(r), className: "hover:bg-muted hover:text-foreground transition-colors", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Pencil, { className: "h-4 w-4" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    variant: "ghost",
                    size: "icon",
                    onClick: () => setDeleteTarget(r),
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { className: "h-4 w-4 text-destructive" })
                  }
                )
              ] }) })
            ]
          },
          r.id
        );
      }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "Записей: ",
        filtered.length
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: page === 0,
            onClick: () => {
              setPage((p) => p - 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            children: "Назад"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
          page + 1,
          " / ",
          totalPages
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          Button,
          {
            variant: "outline",
            size: "sm",
            disabled: page + 1 >= totalPages,
            onClick: () => {
              setPage((p) => p + 1);
              window.scrollTo({ top: 0, behavior: "smooth" });
            },
            children: "Вперёд"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RecordForm,
      {
        config,
        record: editing,
        open: !!editing,
        onClose: () => setEditing(null),
        onSaved: load
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      RecordForm,
      {
        config,
        record: null,
        open: creating,
        onClose: () => setCreating(false),
        onSaved: load
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialog, { open: !!deleteTarget, onOpenChange: (o) => !o && setDeleteTarget(null), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogContent, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogHeader, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogTitle, { children: "Удалить запись?" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogDescription, { children: [
          "Запись «",
          deleteTarget?.title,
          "» будет удалена безвозвратно. Это действие нельзя отменить."
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(AlertDialogFooter, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(AlertDialogCancel, { children: "Отмена" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          AlertDialogAction,
          {
            onClick: () => deleteTarget && deleteRow(deleteTarget),
            className: "bg-destructive text-destructive-foreground",
            children: "Удалить"
          }
        )
      ] })
    ] }) })
  ] });
}
function TablePage() {
  const {
    table
  } = useParams({
    strict: false
  });
  const config = ADMIN_TABLES[table];
  if (!config) return /* @__PURE__ */ jsxRuntimeExports.jsx(Navigate, { to: "/admin" });
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-semibold", children: config.label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DataTable, { config })
  ] });
}
export {
  TablePage as component
};
