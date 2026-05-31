import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  Minus,
  Plus,
  Loader2,
  ShoppingBag,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  useCartLines,
  removeFromCart,
  setCartQty,
  type CartLine,
} from "@/lib/cart";
import { getCartLineItems, type CartLineItem } from "@/lib/catalog.functions";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { useLanguage, type Lang } from "@/lib/i18n";
import giftCardCart from "@/assets/gift-card-cart.png";
import { toast } from "sonner";

const DEFAULT_ORDER_API_URL =
  "https://adjarapeak-api-production.up.railway.app/api/order";

function getOrderApiUrl() {
  const raw =
    (import.meta.env.VITE_ORDER_API_URL as string | undefined) ||
    (import.meta.env.VITE_API_URL as string | undefined);
  if (!raw) return DEFAULT_ORDER_API_URL;
  const trimmed = raw.replace(/\/$/, "");
  if (trimmed.endsWith("/api/order") || trimmed.endsWith("/send"))
    return trimmed;
  return `${trimmed}/api/order`;
}

type CheckoutText = {
  cartTitle: string;
  emptyTitle: string;
  emptyText: string;
  goShopping: string;
  back: string;
  selectAll: string;
  removeSelected: string;
  purchase: string;
  rental: string;
  summaryItems: (count: number) => string;
  total: string;
  formTitle: string;
  nameLabel: string;
  namePlaceholder: string;
  phoneLabel: string;
  telegramLabel: string;
  rentalDatesLabel: string;
  commentLabel: string;
  commentPlaceholder: string;
  note: string;
  submitting: string;
  submit: string;
  loading: string;
  rentalPricePerDay: string;
  unavailable: string;
  decrease: string;
  increase: string;
  giftCardTitle: (amount: number) => string;
  itemCount: (count: number) => string;
  groupCount: (count: number) => string;
  staleOne: string;
  staleMany: (count: number) => string;
  selectedRemoved: string;
  selectOneError: string;
  nameError: string;
  phoneError: string;
  rentalDatesError: string;
  prepareError: string;
  sendError: string;
  sent: string;
};

const CHECKOUT_TEXT: Record<Lang, CheckoutText> = {
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

export const Route = createFileRoute("/checkout")({
  component: CheckoutPage,
  head: () => ({
    meta: [
      { title: "Корзина — Adjara Peak" },
      {
        name: "description",
        content: "Оформление заказа в магазине Adjara Peak.",
      },
    ],
  }),
});

function CheckoutPage() {
  const lines = useCartLines();
  const navigate = useNavigate();
  const { lang } = useLanguage();
  const text = CHECKOUT_TEXT[lang];
  const [details, setDetails] = useState<Record<string, CartLineItem>>({});
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState<Record<string, boolean>>({});
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    shop: true,
    rental: true,
  });
  const [form, setForm] = useState({
    name: "",
    phone: "",
    telegram: "",
    dateFrom: "",
    dateTo: "",
    comment: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const slugsKey = lines.map((l) => l.slug).join(",");

  useEffect(() => {
    if (lines.length === 0) return;
    const missing = lines.filter((l) => !details[l.slug]).map((l) => l.slug);
    if (missing.length === 0) return;
    setLoading(true);
    getCartLineItems({ data: { slugs: missing } })
      .then((items) => {
        setDetails((prev) => {
          const next = { ...prev };
          for (const it of items) next[it.slug] = it;
          return next;
        });
        // Auto-remove cart lines that no longer resolve in the catalog
        // AND have no stored metadata (legacy entries from before product
        // URLs were changed). This prevents broken rows with no title/price.
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
  }, [slugsKey, text]); // eslint-disable-line react-hooks/exhaustive-deps

  // Default-select all lines as they arrive
  useEffect(() => {
    setSelected((prev) => {
      const next = { ...prev };
      let changed = false;
      for (const l of lines) {
        if (!(l.slug in next)) {
          next[l.slug] = true;
          changed = true;
        }
      }
      // Remove entries no longer in cart
      for (const slug of Object.keys(next)) {
        if (!lines.find((l) => l.slug === slug)) {
          delete next[slug];
          changed = true;
        }
      }
      return changed ? next : prev;
    });
  }, [slugsKey]); // eslint-disable-line react-hooks/exhaustive-deps

  const allSelected = lines.length > 0 && lines.every((l) => selected[l.slug]);
  const selectedLines = lines.filter((l) => selected[l.slug]);
  const totalItems = selectedLines.reduce((s, l) => s + l.qty, 0);

  // Prefer fresh server detail; fall back to metadata captured at add-to-cart
  // time. This keeps titles/images/prices correct even when the cart slug
  // can no longer be resolved against the catalog (e.g. stale slug).
  function effective(line: CartLine): CartLineItem | undefined {
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
    return undefined;
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

  function toggleAll(value: boolean) {
    const next: Record<string, boolean> = {};
    for (const l of lines) next[l.slug] = value;
    setSelected(next);
  }

  function removeSelected() {
    const toRemove = lines.filter((l) => selected[l.slug]);
    if (toRemove.length === 0) return;
    for (const l of toRemove) removeFromCart(l.slug);
    toast.success(text.selectedRemoved);
  }

  async function handleSubmit(e: React.FormEvent) {
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
      .filter((item): item is NonNullable<typeof item> => Boolean(item));

    if (items.length === 0) {
      toast.error(text.prepareError);
      return;
    }

    setSubmitting(true);
    try {
      const response = await fetch(getOrderApiUrl(), {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    return (
      <main className="min-h-screen flex items-center justify-center section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <ShoppingBag className="h-12 w-12 text-muted-foreground/50 mx-auto mb-4" />
          <h1 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tight text-foreground mb-3">
            {text.emptyTitle}
          </h1>
          <p className="font-body text-muted-foreground mb-6">
            {text.emptyText}
          </p>
          <Button
            asChild
            className="bg-ember text-ember-foreground hover:bg-ember/90"
          >
            <Link to="/sale">{text.goShopping}</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-muted/20 min-h-screen">
      <div className="section-padding py-8 md:py-12">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => {
              if (typeof window !== "undefined" && window.history.length > 1) {
                window.history.back();
              } else {
                navigate({ to: "/sale" });
              }
            }}
            className="inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {text.back}
          </button>
          <div className="flex items-end justify-between gap-4 mb-6 md:mb-10">
            <div className="flex items-baseline gap-4 flex-wrap">
              <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-foreground">
                {text.cartTitle}
              </h1>
              <span className="font-body text-sm md:text-base text-muted-foreground">
                {text.itemCount(lines.length)}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6 lg:gap-8 items-start">
            {/* Items column */}
            <section>
              <div className="flex items-center justify-between mb-4">
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <Checkbox
                    checked={allSelected}
                    onCheckedChange={(v) => toggleAll(Boolean(v))}
                    className="data-[state=checked]:bg-ember data-[state=checked]:border-ember h-5 w-5"
                  />
                  <span className="font-body text-sm md:text-base text-foreground">
                    {text.selectAll}
                  </span>
                </label>
                <button
                  type="button"
                  onClick={removeSelected}
                  className="font-body text-sm text-muted-foreground hover:text-ember transition-colors"
                >
                  {text.removeSelected}
                </button>
              </div>

              <div className="space-y-4">
                {shopLines.length > 0 && (
                  <CheckoutGroup
                    title={text.purchase}
                    text={text}
                    accent="ember"
                    lines={shopLines}
                    resolve={effective}
                    loading={loading}
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded.shop}
                    setExpanded={(v) =>
                      setExpanded((p) => ({
                        ...p,
                        shop: typeof v === "function" ? v(p.shop) : v,
                      }))
                    }
                  />
                )}
                {rentalLines.length > 0 && (
                  <CheckoutGroup
                    title={text.rental}
                    text={text}
                    accent="moss"
                    lines={rentalLines}
                    resolve={effective}
                    loading={loading}
                    selected={selected}
                    setSelected={setSelected}
                    expanded={expanded.rental}
                    setExpanded={(v) =>
                      setExpanded((p) => ({
                        ...p,
                        rental: typeof v === "function" ? v(p.rental) : v,
                      }))
                    }
                  />
                )}
              </div>
            </section>

            {/* Summary column */}
            <aside className="lg:sticky lg:top-24 space-y-4">
              <div className="rounded-xl bg-background border border-border p-5">
                <div className="flex items-center justify-between font-body text-sm md:text-base text-foreground">
                  <span>{text.summaryItems(totalItems)}</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="mt-3 pt-3 border-t border-border flex items-center justify-between">
                  <span className="font-display text-base md:text-lg font-bold uppercase tracking-wider text-foreground">
                    {text.total}
                  </span>
                  <span className="font-display text-xl md:text-2xl font-bold text-foreground">
                    {formatPrice(total)}
                  </span>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="rounded-xl bg-background border border-border p-5 space-y-4 [&_input::placeholder]:text-muted-foreground/40 [&_textarea::placeholder]:text-muted-foreground/40"
              >
                <h3 className="font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground">
                  {text.formTitle}
                </h3>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="co-name"
                    className="font-display text-xs uppercase tracking-wider"
                  >
                    {text.nameLabel}
                  </Label>
                  <Input
                    id="co-name"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    placeholder={text.namePlaceholder}
                    maxLength={100}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="co-phone"
                    className="font-display text-xs uppercase tracking-wider"
                  >
                    {text.phoneLabel}
                  </Label>
                  <Input
                    id="co-phone"
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    placeholder="+995 XXX XX XX XX"
                    maxLength={32}
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <Label
                    htmlFor="co-telegram"
                    className="font-display text-xs uppercase tracking-wider"
                  >
                    {text.telegramLabel}
                  </Label>
                  <Input
                    id="co-telegram"
                    value={form.telegram}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, telegram: e.target.value }))
                    }
                    placeholder="@username"
                    maxLength={64}
                  />
                </div>

                {hasRental && (
                  <div className="space-y-1.5">
                    <Label className="font-display text-xs uppercase tracking-wider">
                      {text.rentalDatesLabel}
                    </Label>
                    <div className="grid grid-cols-2 gap-2">
                      <Input
                        type="date"
                        value={form.dateFrom}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, dateFrom: e.target.value }))
                        }
                        required={hasRental}
                        className={`text-xs md:text-sm ${!form.dateFrom ? "text-muted-foreground/40" : "text-foreground"}`}
                      />
                      <Input
                        type="date"
                        value={form.dateTo}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, dateTo: e.target.value }))
                        }
                        required={hasRental}
                        min={form.dateFrom || undefined}
                        className={`text-xs md:text-sm ${!form.dateTo ? "text-muted-foreground/40" : "text-foreground"}`}
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-1.5">
                  <Label
                    htmlFor="co-comment"
                    className="font-display text-xs uppercase tracking-wider"
                  >
                    {text.commentLabel}
                  </Label>
                  <Textarea
                    id="co-comment"
                    value={form.comment}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, comment: e.target.value }))
                    }
                    placeholder={text.commentPlaceholder}
                    maxLength={1000}
                    rows={3}
                    className="text-muted-foreground"
                  />
                </div>

                <p className="rounded-md bg-ember/10 border border-ember/30 px-3 py-2.5 font-body text-xs text-foreground/80 leading-relaxed">
                  {text.note}
                </p>

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="w-full bg-ember text-ember-foreground hover:bg-ember/90 uppercase tracking-wider font-display text-sm md:text-base h-12 md:h-14"
                >
                  {submitting ? text.submitting : text.submit}
                </Button>
              </form>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
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
}: {
  title: string;
  text: CheckoutText;
  accent: "ember" | "moss";
  lines: CartLine[];
  resolve: (line: CartLine) => CartLineItem | undefined;
  loading: boolean;
  selected: Record<string, boolean>;
  setSelected: React.Dispatch<React.SetStateAction<Record<string, boolean>>>;
  expanded: boolean;
  setExpanded: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const accentBg = accent === "moss" ? "bg-moss/10" : "bg-ember/10";
  const accentText = accent === "moss" ? "text-moss" : "text-ember";
  const accentBorder = accent === "moss" ? "border-moss/30" : "border-ember/30";
  return (
    <div
      className={`rounded-xl bg-background border ${accentBorder} overflow-hidden`}
    >
      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className={`w-full flex items-center justify-between px-4 md:px-5 py-3 md:py-4 ${accentBg} hover:opacity-90 transition-opacity`}
      >
        <span className="flex items-center gap-3">
          <span
            className={`font-display text-[10px] md:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${accentText} bg-background/70 border ${accentBorder}`}
          >
            {title}
          </span>
          <span className="font-display text-sm md:text-base font-semibold uppercase tracking-wider text-foreground">
            {text.groupCount(lines.length)}
          </span>
        </span>
        {expanded ? (
          <ChevronUp className="h-5 w-5 text-muted-foreground" />
        ) : (
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        )}
      </button>
      {expanded && (
        <ul className="divide-y divide-border">
          {lines.map((line) => (
            <CheckoutRow
              key={line.slug}
              line={line}
              detail={resolve(line)}
              loading={loading && !resolve(line)}
              selected={!!selected[line.slug]}
              text={text}
              onToggle={(v) => setSelected((s) => ({ ...s, [line.slug]: v }))}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

function CheckoutRow({
  line,
  detail,
  loading,
  selected,
  text,
  onToggle,
}: {
  line: CartLine;
  detail: CartLineItem | undefined;
  loading: boolean;
  selected: boolean;
  text: CheckoutText;
  onToggle: (v: boolean) => void;
}) {
  const img = line.slug.startsWith("giftcard-")
    ? giftCardCart
    : resolveCatalogImage(detail?.image ?? line.slug);
  const linkTo = "/app/$slug" as const;
  const lineTotal = detail ? detail.price * line.qty : 0;

  return (
    <li className="px-4 md:px-5 py-4 md:py-5">
      <div className="flex gap-3 md:gap-5">
        <div className="pt-1">
          <Checkbox
            checked={selected}
            onCheckedChange={(v) => onToggle(Boolean(v))}
            className="data-[state=checked]:bg-ember data-[state=checked]:border-ember h-5 w-5"
          />
        </div>

        <Link
          to={linkTo}
          params={{ slug: line.slug }}
          className="shrink-0 w-20 h-20 md:w-28 md:h-28 rounded-lg overflow-hidden bg-muted"
        >
          <img
            src={img}
            alt={detail?.title ?? line.slug}
            loading="lazy"
            decoding="async"
            onError={(e) => {
              const target = e.currentTarget;
              const fallback = resolveCatalogImage(line.slug);
              if (target.src !== fallback) target.src = fallback;
            }}
            className="w-full h-full object-contain bg-background p-2"
          />
        </Link>

        <div className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-[1fr_auto_auto] md:items-start gap-3 md:gap-6">
          <div className="min-w-0">
            <Link
              to={linkTo}
              params={{ slug: line.slug }}
              className="font-display text-sm md:text-base font-semibold text-foreground hover:text-ember transition-colors line-clamp-2"
            >
              {detail?.title ?? (loading ? text.loading : line.slug)}
            </Link>
            {detail?.description && (
              <div className="font-body text-xs text-muted-foreground mt-1 line-clamp-2">
                {detail.description}
              </div>
            )}
            {detail?.kind === "rental" && (
              <div className="font-body text-xs text-muted-foreground mt-1">
                {text.rentalPricePerDay}
              </div>
            )}
            {detail && !detail.available && (
              <div className="font-body text-xs text-ember mt-2">
                {text.unavailable}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between md:flex-col md:items-end md:justify-start md:gap-2 md:self-start">
            <div className="font-display text-base md:text-lg font-bold text-foreground whitespace-nowrap">
              {detail ? (
                formatPrice(lineTotal)
              ) : loading ? (
                <Loader2 className="h-4 w-4 animate-spin text-muted-foreground" />
              ) : (
                "—"
              )}
            </div>
          </div>

          <div className="flex items-center gap-2 md:self-start">
            <button
              type="button"
              onClick={() => setCartQty(line.slug, line.qty - 1)}
              className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember transition-colors"
              aria-label={text.decrease}
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <div className="h-9 min-w-12 px-3 rounded-md border border-border flex items-center justify-center font-body text-sm font-semibold text-foreground">
              {line.qty}
            </div>
            <button
              type="button"
              onClick={() => setCartQty(line.slug, line.qty + 1)}
              className="h-9 w-9 rounded-md border border-border flex items-center justify-center text-muted-foreground hover:text-ember hover:border-ember transition-colors"
              aria-label={text.increase}
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

function formatPrice(value: number) {
  return `${value.toFixed(2)} ₾`;
}

function pluralItemsRu(n: number) {
  const mod10 = n % 10;
  const mod100 = n % 100;
  if (mod10 === 1 && mod100 !== 11) return "товар";
  if (mod10 >= 2 && mod10 <= 4 && (mod100 < 10 || mod100 >= 20))
    return "товара";
  return "товаров";
}
