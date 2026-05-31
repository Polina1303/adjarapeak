import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import {
  e as useNavigate,
  L as Link,
} from "../_libs/tanstack__react-router.mjs";
import { B as Button } from "./button-ODMTIVjw.mjs";
import { C as Checkbox, T as Textarea } from "./textarea-CGcGsEyE.mjs";
import { I as Input } from "./input-D3NIEZ4h.mjs";
import { L as Label } from "./label-Cv1UYZ6t.mjs";
import {
  E as useCartLines,
  G as useLanguage,
  q as getCartLineItems,
  x as removeFromCart,
  y as resolveCatalogImage,
  C as setCartQty,
} from "./router-iK0vV985.mjs";
import { g as giftCardCart } from "./gift-card-cart-BwacS75F.mjs";
import { t as toast } from "../_libs/sonner.mjs";
import "./index.mjs";
import "../_libs/seroval.mjs";
import {
  v as ShoppingBag,
  A as ArrowLeft,
  g as ChevronUp,
  d as ChevronDown,
  L as LoaderCircle,
  n as Minus,
  r as Plus,
} from "../_libs/lucide-react.mjs";
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
import "../_libs/radix-ui__react-checkbox.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-use-previous.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/radix-ui__react-label.mjs";
import "../_libs/tanstack__zod-adapter.mjs";
import "../_libs/zod.mjs";
import "./catalog-images.generated-g7c8bOKs.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
const DEFAULT_ORDER_API_URL =
  "https://adjarapeak-api-production.up.railway.app/api/order";
function getOrderApiUrl() {
  return DEFAULT_ORDER_API_URL;
}
const CHECKOUT_TEXT = {
  RU: {
    cartTitle: "Корзина",
    emptyTitle: "Корзина пуста",
    emptyText: "Добавьте товары, чтобы оформить заказ.",
    goShopping: "К покупкам",
    back: "Назад",
    selectAll: "Выбрать все",
    removeSelected: "Удалить выбранное",
    purchase: "Покупка",
    rental: "Аренда",
    summaryItems: (count) => `Товары, ${count} шт.`,
    total: "Итого",
    formTitle: "Введите информацию для оформления заказа",
    nameLabel: "Имя*",
    namePlaceholder: "Имя",
    phoneLabel: "Номер телефона*",
    telegramLabel: "Telegram",
    rentalDatesLabel: "Даты аренды*",
    commentLabel: "Комментарий",
    commentPlaceholder: "Комментарий",
    note: "*Укажите, пожалуйста: самовывоз или доставка, адрес доставки и желаемую дату. После оформления заказа с вами свяжутся.",
    submitting: "Отправка…",
    submit: "Оформить заказ",
    loading: "Загрузка…",
    rentalPricePerDay: "Цена за сутки аренды",
    unavailable: "Нет в наличии",
    decrease: "Уменьшить",
    increase: "Увеличить",
    giftCardTitle: (amount) => `Подарочная карта на ₾${amount}`,
    itemCount: (count) => `${count} ${pluralItemsRu(count)}`,
    groupCount: (count) => `${count} шт.`,
    staleOne: "Один товар из корзины больше недоступен и был удалён",
    staleMany: (count) =>
      `${count} товаров из корзины больше недоступны и были удалены`,
    selectedRemoved: "Выбранные товары удалены",
    selectOneError: "Выберите хотя бы один товар",
    nameError: "Укажите имя",
    phoneError: "Укажите номер телефона",
    rentalDatesError: "Укажите даты аренды",
    prepareError: "Не удалось подготовить товары из корзины",
    sendError: "Не удалось отправить заказ",
    sent: "Заказ отправлен! Мы свяжемся с вами в ближайшее время.",
  },
  EN: {
    cartTitle: "Cart",
    emptyTitle: "Your cart is empty",
    emptyText: "Add items to place an order.",
    goShopping: "Go shopping",
    back: "Back",
    selectAll: "Select all",
    removeSelected: "Remove selected",
    purchase: "Purchase",
    rental: "Rental",
    summaryItems: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    total: "Total",
    formTitle: "Enter your order details",
    nameLabel: "Name*",
    namePlaceholder: "Name",
    phoneLabel: "Phone number*",
    telegramLabel: "Telegram",
    rentalDatesLabel: "Rental dates*",
    commentLabel: "Comment",
    commentPlaceholder: "Comment",
    note: "*Please specify: pickup or delivery, delivery address and preferred date. We will contact you after the order is placed.",
    submitting: "Sending…",
    submit: "Place order",
    loading: "Loading…",
    rentalPricePerDay: "Price per rental day",
    unavailable: "Out of stock",
    decrease: "Decrease",
    increase: "Increase",
    giftCardTitle: (amount) => `Gift card for ₾${amount}`,
    itemCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    groupCount: (count) => `${count} ${count === 1 ? "item" : "items"}`,
    staleOne: "One item in your cart is no longer available and was removed",
    staleMany: (count) =>
      `${count} items in your cart are no longer available and were removed`,
    selectedRemoved: "Selected items removed",
    selectOneError: "Select at least one item",
    nameError: "Enter your name",
    phoneError: "Enter your phone number",
    rentalDatesError: "Enter rental dates",
    prepareError: "Could not prepare cart items",
    sendError: "Could not send the order",
    sent: "Order sent! We will contact you shortly.",
  },
  GE: {
    cartTitle: "კალათა",
    emptyTitle: "კალათა ცარიელია",
    emptyText: "დაამატეთ ნივთები შეკვეთის გასაფორმებლად.",
    goShopping: "შოპინგზე გადასვლა",
    back: "უკან",
    selectAll: "ყველას არჩევა",
    removeSelected: "არჩეულის წაშლა",
    purchase: "ყიდვა",
    rental: "ქირაობა",
    summaryItems: (count) => `${count} ნივთი`,
    total: "ჯამი",
    formTitle: "შეიყვანეთ შეკვეთის ინფორმაცია",
    nameLabel: "სახელი*",
    namePlaceholder: "სახელი",
    phoneLabel: "ტელეფონის ნომერი*",
    telegramLabel: "Telegram",
    rentalDatesLabel: "ქირაობის თარიღები*",
    commentLabel: "კომენტარი",
    commentPlaceholder: "კომენტარი",
    note: "*გთხოვთ მიუთითოთ: თვითგატანა თუ მიწოდება, მიწოდების მისამართი და სასურველი თარიღი. შეკვეთის შემდეგ დაგიკავშირდებით.",
    submitting: "იგზავნება…",
    submit: "შეკვეთის გაფორმება",
    loading: "იტვირთება…",
    rentalPricePerDay: "ქირაობის ერთი დღის ფასი",
    unavailable: "არ არის მარაგში",
    decrease: "შემცირება",
    increase: "გაზრდა",
    giftCardTitle: (amount) => `სასაჩუქრე ბარათი ₾${amount}`,
    itemCount: (count) => `${count} ნივთი`,
    groupCount: (count) => `${count} ნივთი`,
    staleOne: "კალათაში ერთი ნივთი აღარ არის ხელმისაწვდომი და წაიშალა",
    staleMany: (count) =>
      `კალათაში ${count} ნივთი აღარ არის ხელმისაწვდომი და წაიშალა`,
    selectedRemoved: "არჩეული ნივთები წაიშალა",
    selectOneError: "აირჩიეთ მინიმუმ ერთი ნივთი",
    nameError: "შეიყვანეთ სახელი",
    phoneError: "შეიყვანეთ ტელეფონის ნომერი",
    rentalDatesError: "შეიყვანეთ ქირაობის თარიღები",
    prepareError: "კალათის ნივთების მომზადება ვერ მოხერხდა",
    sendError: "შეკვეთის გაგზავნა ვერ მოხერხდა",
    sent: "შეკვეთა გაიგზავნა! მალე დაგიკავშირდებით.",
  },
};
function CheckoutPage() {
  const lines = useCartLines();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const text = CHECKOUT_TEXT[lang];
  const [details, setDetails] = reactExports.useState({});
  const [loading, setLoading] = reactExports.useState(false);
  const [selected, setSelected] = reactExports.useState({});
  const [expanded, setExpanded] = reactExports.useState({
    shop: true,
    rental: true,
  });
  const [form, setForm] = reactExports.useState({
    name: "",
    phone: "",
    telegram: "",
    dateFrom: "",
    dateTo: "",
    comment: "",
  });
  const [submitting, setSubmitting] = reactExports.useState(false);
  const slugsKey = lines.map((l) => l.slug).join(",");
  reactExports.useEffect(() => {
    if (lines.length === 0) return;
    const missing = lines.filter((l) => !details[l.slug]).map((l) => l.slug);
    if (missing.length === 0) return;
    setLoading(true);
    getCartLineItems({
      data: {
        slugs: missing,
      },
    })
      .then((items) => {
        setDetails((prev) => {
          const next = {
            ...prev,
          };
          for (const it of items) next[it.slug] = it;
          return next;
        });
        const resolved = new Set(items.map((it) => it.slug));
        const stale = lines.filter(
          (l) => missing.includes(l.slug) && !resolved.has(l.slug) && !l.title
        );
        if (stale.length > 0) {
          for (const l of stale) removeFromCart(l.slug);
          toast.info(
            stale.length === 1 ? text.staleOne : text.staleMany(stale.length)
          );
        }
      })
      .finally(() => setLoading(false));
  }, [slugsKey, text]);
  reactExports.useEffect(() => {
    setSelected((prev) => {
      const next = {
        ...prev,
      };
      let changed = false;
      for (const l of lines) {
        if (!(l.slug in next)) {
          next[l.slug] = true;
          changed = true;
        }
      }
      for (const slug of Object.keys(next)) {
        if (!lines.find((l) => l.slug === slug)) {
          delete next[slug];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [slugsKey]);
  const allSelected = lines.length > 0 && lines.every((l) => selected[l.slug]);
  const selectedLines = lines.filter((l) => selected[l.slug]);
  const totalItems = selectedLines.reduce((s, l) => s + l.qty, 0);
  function effective(line) {
    const d = details[line.slug];
    if (d) return d;
    const giftCardAmount = line.slug.match(/^giftcard-(\d+)$/)?.[1];
    if (giftCardAmount) {
      return {
        slug: line.slug,
        kind: "shop",
        title: line.title ?? text.giftCardTitle(Number(giftCardAmount)),
        image: giftCardCart,
        price: line.price ?? Number(giftCardAmount),
        unit: "",
        available: true,
        description: null,
      };
    }
    if (line.title) {
      return {
        slug: line.slug,
        kind: line.kind ?? "shop",
        title: line.title,
        image: line.image ?? null,
        price: line.price ?? 0,
        unit: line.unit ?? "",
        available: true,
        description: null,
      };
    }
    return void 0;
  }
  const total = selectedLines.reduce((sum, l) => {
    const d = effective(l);
    return d ? sum + d.price * l.qty : sum;
  }, 0);
  const hasRental = selectedLines.some((l) => effective(l)?.kind === "rental");
  const rentalLines = lines.filter((l) => effective(l)?.kind === "rental");
  const shopLines = lines.filter((l) => {
    const e = effective(l);
    return !e || e.kind !== "rental";
  });
  function toggleAll(value) {
    const next = {};
    for (const l of lines) next[l.slug] = value;
    setSelected(next);
  }
  function removeSelected() {
    const toRemove = lines.filter((l) => selected[l.slug]);
    if (toRemove.length === 0) return;
    for (const l of toRemove) removeFromCart(l.slug);
    toast.success(text.selectedRemoved);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    if (selectedLines.length === 0) {
      toast.error(text.selectOneError);
      return;
    }
    if (!form.name.trim()) return toast.error(text.nameError);
    if (!form.phone.trim()) return toast.error(text.phoneError);
    if (hasRental && (!form.dateFrom || !form.dateTo)) {
      return toast.error(text.rentalDatesError);
    }
    const items = selectedLines
      .map((line) => {
        const item = effective(line);
        if (!item) return null;
        return {
          slug: line.slug,
          title: item.title,
          quantity: line.qty,
          price: item.price,
          total: item.price * line.qty,
          kind: item.kind,
          unit: item.unit,
          description: item.description ?? "",
          image: item.image ?? "",
        };
      })
      .filter((item) => Boolean(item));
    if (items.length === 0) {
      toast.error(text.prepareError);
      return;
    }
    setSubmitting(true);
    try {
      const response = await fetch(getOrderApiUrl(), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: {
            name: form.name.trim(),
            phone: form.phone.trim(),
            telegram: form.telegram.trim(),
          },
          rental: {
            dateStart: form.dateFrom,
            dateEnd: form.dateTo,
          },
          comments: form.comment.trim(),
          items,
          summary: {
            totalItems,
            total,
          },
        }),
      });
      const payload = await response.json().catch(() => null);
      if (!response.ok) {
        throw new Error(payload?.msg || payload?.error || text.sendError);
      }
      for (const line of selectedLines) removeFromCart(line.slug);
      setForm({
        name: "",
        phone: "",
        telegram: "",
        dateFrom: "",
        dateTo: "",
        comment: "",
      });
      toast.success(text.sent);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : text.sendError);
    } finally {
      setSubmitting(false);
    }
  }
  if (lines.length === 0) {
    return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
      className:
        "min-h-screen flex items-center justify-center section-padding",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "max-w-3xl mx-auto text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(ShoppingBag, {
            className: "h-12 w-12 text-muted-foreground/50 mx-auto mb-4",
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
            className:
              "font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-3",
            children: text.emptyTitle,
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
            className: "font-body text-muted-foreground mb-6",
            children: text.emptyText,
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
            asChild: true,
            className: "bg-ember text-ember-foreground hover:bg-ember/90",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
              to: "/sale",
              children: text.goShopping,
            }),
          }),
        ],
      }),
    });
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", {
    className: "bg-muted/20 min-h-screen",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "section-padding py-8 md:py-12",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "max-w-7xl mx-auto",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
            type: "button",
            onClick: () => {
              if (typeof window !== "undefined" && window.history.length > 1) {
                window.history.back();
              } else {
                navigate({
                  to: "/sale",
                });
              }
            },
            className:
              "inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, {
                className: "h-4 w-4",
              }),
              text.back,
            ],
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
            className: "flex items-end justify-between gap-4 mb-6 md:mb-10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-baseline gap-4 flex-wrap",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h1", {
                  className:
                    "font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground",
                  children: text.cartTitle,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                  className:
                    "font-body text-sm md:text-base text-muted-foreground",
                  children: text.itemCount(lines.length),
                }),
              ],
            }),
          }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
            className:
              "grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("section", {
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("label", {
                        className:
                          "flex items-center gap-3 cursor-pointer select-none",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {
                            checked: allSelected,
                            onCheckedChange: (v) => toggleAll(Boolean(v)),
                            className:
                              "data-[state=checked]:bg-ember data-[state=checked]:border-ember h-5 w-5",
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className:
                              "font-body text-sm md:text-base text-foreground",
                            children: text.selectAll,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                        type: "button",
                        onClick: removeSelected,
                        className:
                          "font-body text-sm text-muted-foreground hover:text-ember transition-colors",
                        children: text.removeSelected,
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className: "space-y-4",
                    children: [
                      shopLines.length > 0 &&
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckoutGroup, {
                          title: text.purchase,
                          text,
                          accent: "ember",
                          lines: shopLines,
                          resolve: effective,
                          loading,
                          selected,
                          setSelected,
                          expanded: expanded.shop,
                          setExpanded: (v) =>
                            setExpanded((p) => ({
                              ...p,
                              shop: typeof v === "function" ? v(p.shop) : v,
                            })),
                        }),
                      rentalLines.length > 0 &&
                        /* @__PURE__ */ jsxRuntimeExports.jsx(CheckoutGroup, {
                          title: text.rental,
                          text,
                          accent: "moss",
                          lines: rentalLines,
                          resolve: effective,
                          loading,
                          selected,
                          setSelected,
                          expanded: expanded.rental,
                          setExpanded: (v) =>
                            setExpanded((p) => ({
                              ...p,
                              rental: typeof v === "function" ? v(p.rental) : v,
                            })),
                        }),
                    ],
                  }),
                ],
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", {
                className: "lg:sticky lg:top-24 space-y-4",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                    className:
                      "rounded-xl bg-background border border-border p-5",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className:
                          "flex items-center justify-between font-body text-sm md:text-base text-foreground",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            children: text.summaryItems(totalItems),
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            children: formatPrice(total),
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className:
                          "mt-3 pt-3 border-t border-border flex items-center justify-between",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className:
                              "font-display text-base md:text-lg font-bold uppercase tracking-wider text-foreground",
                            children: text.total,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                            className:
                              "font-display text-xl md:text-2xl font-bold text-foreground",
                            children: formatPrice(total),
                          }),
                        ],
                      }),
                    ],
                  }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
                    onSubmit: handleSubmit,
                    className:
                      "rounded-xl bg-background border border-border p-5 space-y-4 [&_input::placeholder]:text-muted-foreground/40 [&_textarea::placeholder]:text-muted-foreground/40",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
                        className:
                          "font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground",
                        children: text.formTitle,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                            htmlFor: "co-name",
                            className:
                              "font-display text-xs uppercase tracking-wider",
                            children: text.nameLabel,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                            id: "co-name",
                            value: form.name,
                            onChange: (e) =>
                              setForm((f) => ({
                                ...f,
                                name: e.target.value,
                              })),
                            placeholder: text.namePlaceholder,
                            maxLength: 100,
                            required: true,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                            htmlFor: "co-phone",
                            className:
                              "font-display text-xs uppercase tracking-wider",
                            children: text.phoneLabel,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                            id: "co-phone",
                            type: "tel",
                            value: form.phone,
                            onChange: (e) =>
                              setForm((f) => ({
                                ...f,
                                phone: e.target.value,
                              })),
                            placeholder: "+995 XXX XX XX XX",
                            maxLength: 32,
                            required: true,
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                            htmlFor: "co-telegram",
                            className:
                              "font-display text-xs uppercase tracking-wider",
                            children: text.telegramLabel,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                            id: "co-telegram",
                            value: form.telegram,
                            onChange: (e) =>
                              setForm((f) => ({
                                ...f,
                                telegram: e.target.value,
                              })),
                            placeholder: "@username",
                            maxLength: 64,
                          }),
                        ],
                      }),
                      hasRental &&
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                          className: "space-y-1.5",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                              className:
                                "font-display text-xs uppercase tracking-wider",
                              children: text.rentalDatesLabel,
                            }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                              className: "grid grid-cols-2 gap-2",
                              children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                                  type: "date",
                                  value: form.dateFrom,
                                  onChange: (e) =>
                                    setForm((f) => ({
                                      ...f,
                                      dateFrom: e.target.value,
                                    })),
                                  required: hasRental,
                                  className: `text-xs md:text-sm ${!form.dateFrom ? "text-muted-foreground/40" : "text-foreground"}`,
                                }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
                                  type: "date",
                                  value: form.dateTo,
                                  onChange: (e) =>
                                    setForm((f) => ({
                                      ...f,
                                      dateTo: e.target.value,
                                    })),
                                  required: hasRental,
                                  min: form.dateFrom || void 0,
                                  className: `text-xs md:text-sm ${!form.dateTo ? "text-muted-foreground/40" : "text-foreground"}`,
                                }),
                              ],
                            }),
                          ],
                        }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
                        className: "space-y-1.5",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Label, {
                            htmlFor: "co-comment",
                            className:
                              "font-display text-xs uppercase tracking-wider",
                            children: text.commentLabel,
                          }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx(Textarea, {
                            id: "co-comment",
                            value: form.comment,
                            onChange: (e) =>
                              setForm((f) => ({
                                ...f,
                                comment: e.target.value,
                              })),
                            placeholder: text.commentPlaceholder,
                            maxLength: 1e3,
                            rows: 3,
                            className: "text-muted-foreground",
                          }),
                        ],
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
                        className:
                          "rounded-md bg-ember/10 border border-ember/30 px-3 py-2.5 font-body text-xs text-foreground/80 leading-relaxed",
                        children: text.note,
                      }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
                        type: "submit",
                        size: "lg",
                        disabled: submitting,
                        className:
                          "w-full bg-ember text-ember-foreground hover:bg-ember/90 uppercase tracking-wider font-display text-sm md:text-base h-12 md:h-14",
                        children: submitting ? text.submitting : text.submit,
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function CheckoutGroup({
  title,
  text,
  accent,
  lines,
  resolve,
  loading,
  selected,
  setSelected,
  expanded,
  setExpanded,
}) {
  const accentBg = accent === "moss" ? "bg-moss/10" : "bg-ember/10";
  const accentText = accent === "moss" ? "text-moss" : "text-ember";
  const accentBorder = accent === "moss" ? "border-moss/30" : "border-ember/30";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: `rounded-xl bg-background border ${accentBorder} overflow-hidden`,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("button", {
        type: "button",
        onClick: () => setExpanded((v) => !v),
        className: `w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 ${accentBg} hover:opacity-90 transition-opacity`,
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", {
            className: "flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className: `font-display text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${accentText} bg-background/70 border ${accentBorder}`,
                children: title,
              }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
                className:
                  "font-display text-sm md:text-base font-semibold uppercase tracking-wider text-foreground",
                children: text.groupCount(lines.length),
              }),
            ],
          }),
          expanded
            ? /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronUp, {
                className: "h-5 w-5 text-muted-foreground",
              })
            : /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, {
                className: "h-5 w-5 text-muted-foreground",
              }),
        ],
      }),
      expanded &&
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", {
          className: "divide-y divide-border",
          children: lines.map((line) =>
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              CheckoutRow,
              {
                line,
                detail: resolve(line),
                loading: loading && !resolve(line),
                selected: !!selected[line.slug],
                text,
                onToggle: (v) =>
                  setSelected((s) => ({
                    ...s,
                    [line.slug]: v,
                  })),
              },
              line.slug
            )
          ),
        }),
    ],
  });
}
function CheckoutRow({ line, detail, loading, selected, text, onToggle }) {
  const img = line.slug.startsWith("giftcard-")
    ? giftCardCart
    : resolveCatalogImage(detail?.image ?? line.slug);
  const linkTo = "/app/$slug";
  const lineTotal = detail ? detail.price * line.qty : 0;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("li", {
    className: "px-4 md:px-5 py-4 md:py-5",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex gap-3 md:gap-5",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
          className: "pt-1",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {
            checked: selected,
            onCheckedChange: (v) => onToggle(Boolean(v)),
            className:
              "data-[state=checked]:bg-ember data-[state=checked]:border-ember h-5 w-5",
          }),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
          to: linkTo,
          params: {
            slug: line.slug,
          },
          className:
            "shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden bg-muted",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", {
            src: img,
            alt: detail?.title ?? line.slug,
            loading: "lazy",
            decoding: "async",
            onError: (e) => {
              const target = e.currentTarget;
              const fallback = resolveCatalogImage(line.slug);
              if (target.src !== fallback) target.src = fallback;
            },
            className: "w-full h-full object-contain bg-background p-2",
          }),
        }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
          className:
            "flex-1 min-w-0 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] md:items-start gap-3 md:gap-6",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "min-w-0",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Link, {
                  to: linkTo,
                  params: {
                    slug: line.slug,
                  },
                  className:
                    "font-display text-sm md:text-base font-semibold text-foreground hover:text-ember transition-colors line-clamp-2",
                  children:
                    detail?.title ?? (loading ? text.loading : line.slug),
                }),
                detail?.description &&
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className:
                      "font-body text-xs text-muted-foreground mt-1 line-clamp-2",
                    children: detail.description,
                  }),
                detail?.kind === "rental" &&
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "font-body text-xs text-muted-foreground mt-1",
                    children: text.rentalPricePerDay,
                  }),
                detail &&
                  !detail.available &&
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                    className: "font-body text-xs text-ember mt-2",
                    children: text.unavailable,
                  }),
              ],
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
              className:
                "flex items-center justify-between md:flex-col md:items-end md:justify-start md:gap-2 md:self-start",
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                className:
                  "font-display text-base md:text-lg font-bold text-foreground whitespace-nowrap",
                children: detail
                  ? formatPrice(lineTotal)
                  : loading
                    ? /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, {
                        className: "h-4 w-4 animate-spin text-muted-foreground",
                      })
                    : "—",
              }),
            }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
              className: "flex items-center gap-2 md:self-start",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                  type: "button",
                  onClick: () => setCartQty(line.slug, line.qty - 1),
                  className:
                    "h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember transition-colors",
                  "aria-label": text.decrease,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Minus, {
                    className: "h-3.5 w-3.5",
                  }),
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
                  className:
                    "h-9 min-w-12 px-3 rounded-md border border-border flex items-center justify-center font-body text-sm font-semibold text-foreground",
                  children: line.qty,
                }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
                  type: "button",
                  onClick: () => setCartQty(line.slug, line.qty + 1),
                  className:
                    "h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember transition-colors",
                  "aria-label": text.increase,
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, {
                    className: "h-3.5 w-3.5",
                  }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function formatPrice(value) {
  return `${value.toFixed(2)} ₾`;
}
function pluralItemsRu(n) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
    return "товара";
  return "товаров";
}
export { CheckoutPage as component };
