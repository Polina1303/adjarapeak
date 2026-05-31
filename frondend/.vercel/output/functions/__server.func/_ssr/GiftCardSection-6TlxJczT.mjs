import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import { B as Button } from "./button-ODMTIVjw.mjs";
import { I as Input } from "./input-D3NIEZ4h.mjs";
import { G as useLanguage, r as getSiteText, m as addToCart } from "./router-iK0vV985.mjs";
import { g as giftCardCart } from "./gift-card-cart-BwacS75F.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { G as Gift } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/class-variance-authority.mjs";
import "../_libs/clsx.mjs";
import "./utils-H80jjgLf.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const giftCard = "/assets/gift-card-DMTFhAPi.png";
const giftCardMobile = "/assets/gift-card-mobile-CxUmds9R.png";
const PRESETS = [50, 100, 200, 500];
const MIN_AMOUNT = 20;
const MAX_AMOUNT = 5e3;
function GiftCardSection() {
  const [selected, setSelected] = reactExports.useState(100);
  const [custom, setCustom] = reactExports.useState("");
  const { lang } = useLanguage();
  const text = getSiteText(lang).home.giftCard;
  const resolvedAmount = selected === "custom" ? Math.floor(Number(custom)) : selected;
  const isValid = Number.isFinite(resolvedAmount) && resolvedAmount >= MIN_AMOUNT && resolvedAmount <= MAX_AMOUNT;
  const handleAdd = () => {
    if (!isValid) {
      toast.error(text.invalidAmount(MIN_AMOUNT, MAX_AMOUNT));
      return false;
    }
    addToCart(1, `giftcard-${resolvedAmount}`, {
      title: text.cartTitle(resolvedAmount),
      image: giftCardCart,
      price: resolvedAmount,
      kind: "shop",
      unit: ""
    });
    toast.success(text.added(resolvedAmount));
    return true;
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-padding py-12 md:py-16 bg-background", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-7xl mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-2 gap-0 lg:gap-10 items-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: -20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        className: "lg:order-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "font-display text-3xl md:text-4xl font-bold mb-4 text-foreground", children: text.title.split("\n").map((line, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
            index > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            line
          ] }, line)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 text-muted-foreground text-sm font-body mb-6", children: text.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: line }, line)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-body uppercase tracking-wider text-muted-foreground mb-2", children: text.chooseAmount }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
              PRESETS.map((amount) => {
                const active = selected === amount;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => setSelected(amount),
                    className: `px-4 py-2 rounded-lg font-body text-sm font-semibold border transition-colors ${active ? "bg-background text-ember border-ember" : "bg-background text-foreground border-border hover:border-ember"}`,
                    children: [
                      "₾",
                      amount
                    ]
                  },
                  amount
                );
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => setSelected("custom"),
                  className: `px-4 py-2 rounded-lg font-body text-sm font-semibold border transition-colors ${selected === "custom" ? "bg-background text-ember border-ember" : "bg-background text-foreground border-border hover:border-ember"}`,
                  children: text.customAmount
                }
              )
            ] })
          ] }),
          selected === "custom" && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-6 max-w-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-xs font-body uppercase tracking-wider text-muted-foreground mb-2", children: text.enterAmount }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Input,
              {
                type: "number",
                inputMode: "numeric",
                min: MIN_AMOUNT,
                max: MAX_AMOUNT,
                step: 10,
                placeholder: text.amountPlaceholder(MIN_AMOUNT, MAX_AMOUNT),
                value: custom,
                onChange: (e) => setCustom(e.target.value),
                className: "text-muted-foreground"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col sm:flex-row gap-3", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Button,
            {
              size: "lg",
              onClick: handleAdd,
              disabled: !isValid,
              className: "gap-2 bg-ember text-ember-foreground hover:bg-ember/90 w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Gift, { className: "h-4 w-4" }),
                isValid ? text.addToCartAmount(resolvedAmount) : text.addToCart
              ]
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 20 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: true },
        transition: { delay: 0.15 },
        className: "lg:order-2",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: giftCardMobile,
              alt: text.imageAlt,
              loading: "lazy",
              className: "rounded-2xl w-full h-auto object-contain lg:hidden"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: giftCard,
              alt: text.imageAlt,
              loading: "lazy",
              className: "rounded-2xl w-full h-80 object-contain hidden lg:block"
            }
          )
        ]
      }
    )
  ] }) }) });
}
export {
  GiftCardSection
};
