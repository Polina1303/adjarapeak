import { createFileRoute, Link, notFound, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Check, ArrowLeft, ChevronRight, Maximize2, Minus, Plus, RotateCcw } from "lucide-react";
import { toast } from "sonner";
import { getShopProductBySlug, getRentalItemBySlug } from "@/lib/catalog.functions";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { addToCart, useIsInCart } from "@/lib/cart";
import { ProductCarousel } from "@/components/ProductCarousel";
import { RentalCarousel } from "@/components/RentalCarousel";
import { getDiscountPercent, getDisplayPrice, getSalePrice } from "@/lib/discount";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";

type LoaderData =
  | { kind: "product"; data: Awaited<ReturnType<typeof getShopProductBySlug>> }
  | { kind: "rental"; data: Awaited<ReturnType<typeof getRentalItemBySlug>> };

export const Route = createFileRoute("/app/$slug")({
  loader: async ({ params }): Promise<LoaderData> => {
    const product = await getShopProductBySlug({ data: { slug: params.slug } });
    if (product) return { kind: "product", data: product };
    const rental = await getRentalItemBySlug({ data: { slug: params.slug } });
    if (rental) return { kind: "rental", data: rental };
    throw notFound();
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Не найдено — Adjara Peak" }] };
    if (loaderData.kind === "product") {
      const product = loaderData.data!.product;
      const title = `${product.title} — Adjara Peak`;
      const desc = product.description ?? product.title;
      const img = resolveCatalogImage(product.image);
      return {
        meta: [
          { title },
          { name: "description", content: desc },
          { property: "og:title", content: title },
          { property: "og:description", content: desc },
          { property: "og:image", content: img },
          { property: "og:type", content: "product" },
          { name: "twitter:card", content: "summary_large_image" },
          { name: "twitter:image", content: img },
        ],
      };
    }
    const item = loaderData.data!.item;
    const title = `Аренда ${item.title} — Adjara Peak`;
    const desc = item.shortly ?? item.description ?? item.title;
    const img = resolveCatalogImage(item.image);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:image", content: img },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding section-spacing text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Не найдено</h1>
        <Link to="/sale" className="underline">Назад в магазин</Link>
      </div>
      <Footer />
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding section-spacing text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Что-то пошло не так</h1>
        <p className="text-muted-foreground font-body mb-6">{error.message}</p>
        <Link to="/sale" className="underline">Назад в магазин</Link>
      </div>
      <Footer />
    </div>
  ),
  component: AppPage,
});

function AppPage() {
  const loaderData = Route.useLoaderData();
  if (loaderData.kind === "product") return <ProductView data={loaderData.data!} />;
  return <RentalView data={loaderData.data!} />;
}

function ZoomableCatalogImage({
  src,
  alt,
  badge,
}: {
  src: string;
  alt: string;
  badge?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.button
        type="button"
        aria-label={`Открыть изображение: ${alt}`}
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        onClick={() => setOpen(true)}
        className="group relative aspect-square overflow-hidden rounded-3xl bg-muted text-left cursor-zoom-in focus:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
      >
        <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]" />
        {badge && (
          <span className="absolute top-4 right-4 bg-foreground text-background text-xs uppercase tracking-[0.12em] font-body font-semibold px-3 py-1.5 rounded-full">
            {badge}
          </span>
        )}
        <span className="absolute bottom-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-sm opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
          <Maximize2 className="h-4 w-4" />
        </span>
      </motion.button>
      <ImageZoomDialog open={open} onOpenChange={setOpen} src={src} alt={alt} />
    </>
  );
}

function ImageZoomDialog({
  open,
  onOpenChange,
  src,
  alt,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  src: string;
  alt: string;
}) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragStart, setDragStart] = useState<{ x: number; y: number; startX: number; startY: number } | null>(null);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setDragStart(null);
  };
  const changeScale = (next: number) => {
    const clamped = Math.min(3, Math.max(1, next));
    setScale(clamped);
    if (clamped === 1) setPosition({ x: 0, y: 0 });
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        onOpenChange(nextOpen);
        if (!nextOpen) resetZoom();
      }}
    >
      <DialogContent className="max-w-[min(94vw,1100px)] h-[88vh] gap-0 border-0 bg-black p-0 text-white shadow-2xl sm:rounded-2xl">
        <DialogTitle className="sr-only">{alt}</DialogTitle>
        <div className="absolute left-4 top-4 z-10 flex items-center gap-2 rounded-full bg-black/55 p-1 backdrop-blur">
          <button
            type="button"
            aria-label="Уменьшить"
            onClick={() => changeScale(scale - 0.5)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-40"
            disabled={scale <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="min-w-12 text-center text-xs font-body font-semibold">{Math.round(scale * 100)}%</span>
          <button
            type="button"
            aria-label="Увеличить"
            onClick={() => changeScale(scale + 0.5)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15 disabled:opacity-40"
            disabled={scale >= 3}
          >
            <Plus className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Сбросить масштаб"
            onClick={resetZoom}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white transition-colors hover:bg-white/15"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>
        <div
          className={`flex h-full w-full items-center justify-center overflow-hidden p-4 ${scale > 1 ? "cursor-grab active:cursor-grabbing" : ""}`}
          onPointerDown={(event) => {
            if (scale <= 1) return;
            event.currentTarget.setPointerCapture(event.pointerId);
            setDragStart({
              x: event.clientX,
              y: event.clientY,
              startX: position.x,
              startY: position.y,
            });
          }}
          onPointerMove={(event) => {
            if (!dragStart) return;
            setPosition({
              x: dragStart.startX + event.clientX - dragStart.x,
              y: dragStart.startY + event.clientY - dragStart.y,
            });
          }}
          onPointerUp={() => setDragStart(null)}
          onPointerCancel={() => setDragStart(null)}
          onDoubleClick={() => changeScale(scale > 1 ? 1 : 2)}
        >
          <img
            src={src}
            alt={alt}
            draggable={false}
            className="max-h-full max-w-full select-none object-contain transition-transform duration-150"
            style={{
              transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
            }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ProductView({ data }: { data: NonNullable<Awaited<ReturnType<typeof getShopProductBySlug>>> }) {
  const { product, category, group, related } = data;
  const navigate = useNavigate();
  const colors = Array.isArray(product.colors) ? product.colors : [];
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const activeColor = colors.find((c) => c.color === selectedColor);
  const mainImage = resolveCatalogImage(activeColor?.image || product.image);

  const inCart = useIsInCart(product.slug);
  const salePrice = getSalePrice(product.price, product.sale_price);
  const displayPrice = getDisplayPrice(product.price, product.sale_price);
  const discountPct = getDiscountPercent(product.price, product.sale_price);
  const hasColors = colors.length > 0;
  const hasSizes = (product.sizes?.length ?? 0) > 0;

  const handleAddToCart = () => {
    if (inCart) {
      navigate({ to: "/checkout" });
      return;
    }
    addToCart(1, product.slug, {
      title: product.title,
      image: product.image,
      price: displayPrice,
      kind: "shop",
      unit: "",
    });
    toast.success(`${product.title} добавлен в корзину`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-8 section-padding">
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
            className="lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </button>
          <nav
            aria-label="Breadcrumb"
            className="hidden lg:flex items-center flex-wrap gap-2 text-sm font-body text-muted-foreground mb-6"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <Link to="/sale" className="hover:text-foreground transition-colors">Магазин</Link>
            {group && (
              <>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link
                  to="/sale"
                                    className="hover:text-foreground transition-colors"
                >
                  {group.title}
                </Link>
              </>
            )}
            {group && category && (
              <>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link
                  to="/sale/$group/$category"
                  params={{ group: group.slug, category: category.slug }}
                  className="hover:text-foreground transition-colors"
                >
                  {category.title}
                </Link>
              </>
            )}
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <span className="text-foreground line-clamp-1">{product.title}</span>
          </nav>
          <div className="lg:hidden">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-1">
              {product.title}
            </h1>
            {product.description && (
              <p className="text-muted-foreground font-body leading-relaxed mb-8 text-sm max-w-3xl">
                {product.description}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-8 items-start">
            <div className="flex flex-col gap-10 lg:gap-16">
              <ZoomableCatalogImage
                src={mainImage}
                alt={product.title}
                badge={!product.in_stock ? "Нет в наличии" : undefined}
              />

              <div className="lg:hidden">
                {hasColors && (
                  <div className="mb-4">
                    <div className="text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">Цвет</div>
                    <div className="flex items-center gap-2">
                      {colors.map((c, i) => (
                        <button
                          key={`m-c-${c.color}-${i}`}
                          type="button"
                          title={c.color}
                          onClick={() => setSelectedColor(c.color)}
                          className={`w-8 h-8 rounded-md border shadow-sm transition-all ${
                            selectedColor === c.color
                              ? "border-ember ring-2 ring-ember"
                              : "border-border hover:ring-2 hover:ring-ember/60"
                          }`}
                          style={{ backgroundColor: c.color }}
                        />
                      ))}
                    </div>
                  </div>
                )}
                {hasSizes && (
                  <div className="mb-4">
                    <div className="text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">Размер</div>
                    <div className="flex items-center gap-2 flex-wrap">
                      {product.sizes.map((s, i) => (
                        <button
                          key={`m-s-${s}-${i}`}
                          type="button"
                          className="min-w-[40px] h-10 px-3 rounded-md border border-border font-body text-sm text-foreground hover:border-ember hover:text-ember transition-colors"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
                <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                  <span className="font-display font-bold text-ember text-4xl">₾{displayPrice}</span>
                  {salePrice && (
                    <span className="font-body text-base text-muted-foreground line-through">
                      ₾{product.price}
                    </span>
                  )}
                  {discountPct !== null && (
                    <span className="bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded">
                      -{discountPct}%
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground font-body">/шт.</span>
                </div>
                <Button
                  className={
                    inCart
                      ? "w-full font-body bg-foreground text-background hover:bg-foreground/90"
                      : "w-full font-body bg-ember text-primary-foreground hover:bg-ember/90"
                  }
                  onClick={handleAddToCart}
                  disabled={!product.in_stock}
                >
                  {inCart ? "Открыть корзину" : "В корзину"}
                </Button>
              </div>

              {product.features.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">Описание</h2>
                  <ul className="space-y-3">
                    {product.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                        <Check className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="hidden lg:block lg:sticky lg:top-28">
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-1">
                {product.title}
              </h1>
              {product.description && (
                <p className="text-muted-foreground font-body leading-relaxed mb-8 text-sm">
                  {product.description}
                </p>
              )}
              <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                <span className="font-display font-bold text-ember text-4xl">₾{displayPrice}</span>
                {salePrice && (
                  <span className="font-body text-base text-muted-foreground line-through">
                    ₾{product.price}
                  </span>
                )}
                {discountPct !== null && (
                  <span className="bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded">
                    -{discountPct}%
                  </span>
                )}
                <span className="text-sm text-muted-foreground font-body">/шт.</span>
              </div>
              {hasColors && (
                <div className="mb-4">
                  <div className="text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">Цвет</div>
                  <div className="flex items-center gap-2">
                    {colors.map((c, i) => (
                      <button
                        key={`${c.color}-${i}`}
                        type="button"
                        title={c.color}
                        onClick={() => setSelectedColor(c.color)}
                        className={`w-8 h-8 rounded-md border shadow-sm transition-all ${
                          selectedColor === c.color
                            ? "border-ember ring-2 ring-ember"
                            : "border-border hover:ring-2 hover:ring-ember/60"
                        }`}
                        style={{ backgroundColor: c.color }}
                      />
                    ))}
                  </div>
                </div>
              )}
              {hasSizes && (
                <div className="mb-6">
                  <div className="text-xs font-body uppercase tracking-[0.12em] text-muted-foreground mb-2">Размер</div>
                  <div className="flex items-center gap-2 flex-wrap">
                    {product.sizes.map((s, i) => (
                      <button
                        key={`${s}-${i}`}
                        type="button"
                        className="min-w-[40px] h-10 px-3 rounded-md border border-border font-body text-sm text-foreground hover:border-ember hover:text-ember transition-colors"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              )}
              <Button
                className={
                  inCart
                    ? "w-full font-body bg-foreground text-background hover:bg-foreground/90"
                    : "w-full font-body bg-ember text-primary-foreground hover:bg-ember/90"
                }
                onClick={handleAddToCart}
                disabled={!product.in_stock}
              >
                {inCart ? "Открыть корзину" : "В корзину"}
              </Button>
            </div>
          </div>

          {related && related.length > 0 && (
            <section>
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                С этим товаром покупают
              </h2>
              <ProductCarousel key={product.slug} products={related} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}

function RentalView({ data }: { data: NonNullable<Awaited<ReturnType<typeof getRentalItemBySlug>>> }) {
  const { item, category, group, related } = data;
  const navigate = useNavigate();
  const img = resolveCatalogImage(item.image);
  const booked = useIsInCart(item.slug);
  const salePrice = getSalePrice(item.price_per_day, item.sale_price_per_day);
  const displayPrice = getDisplayPrice(item.price_per_day, item.sale_price_per_day);
  const discountPct = getDiscountPercent(item.price_per_day, item.sale_price_per_day);

  const handleBook = () => {
    if (booked) {
      navigate({ to: "/checkout" });
      return;
    }
    addToCart(1, item.slug, {
      title: item.title,
      image: item.image,
      price: displayPrice,
      kind: "rental",
      unit: "/сутки",
    });
    toast.success(`Заявка на бронирование отправлена: ${item.title}`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Назад
          </button>
          <nav
            aria-label="Breadcrumb"
            className="hidden lg:flex items-center flex-wrap gap-2 text-sm font-body text-muted-foreground mb-6"
          >
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <Link to="/rent" className="hover:text-foreground transition-colors">Прокат</Link>
            {group && (
              <>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link
                  to="/rent"
                                    className="hover:text-foreground transition-colors"
                >
                  {group.title}
                </Link>
              </>
            )}
            {group && category && (
              <>
                <ChevronRight className="h-3.5 w-3.5 opacity-60" />
                <Link
                  to="/rent/$group/$category"
                  params={{ group: group.slug, category: category.slug }}
                  className="hover:text-foreground transition-colors"
                >
                  {category.title}
                </Link>
              </>
            )}
            <ChevronRight className="h-3.5 w-3.5 opacity-60" />
            <span className="text-foreground line-clamp-1">{item.title}</span>
          </nav>
          <div className="lg:hidden">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">
              {item.title}
            </h1>
            {item.shortly && (
              <p className="text-foreground/90 font-body leading-relaxed mb-4 text-sm">{item.shortly}</p>
            )}
            {item.description && (
              <p className="text-muted-foreground font-body leading-relaxed mb-8 text-xs">{item.description}</p>
            )}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-20 items-start">
            <div className="flex flex-col gap-10 lg:gap-16">
              <ZoomableCatalogImage src={img} alt={item.title} />

              <div className="lg:hidden">
                <div className="flex items-baseline gap-3 mb-4 flex-wrap">
                  <span className="font-display font-bold text-ember text-4xl">₾{displayPrice}</span>
                  {salePrice && (
                    <span className="font-body text-base text-muted-foreground line-through">
                      ₾{item.price_per_day}
                    </span>
                  )}
                  {discountPct !== null && (
                    <span className="bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded">
                      -{discountPct}%
                    </span>
                  )}
                  <span className="text-sm text-muted-foreground font-body">/сутки</span>
                </div>
                <Button
                  size="lg"
                  className={
                    booked
                      ? "w-full font-body h-12 bg-foreground text-background hover:bg-foreground/90"
                      : "w-full font-body h-12 bg-ember text-primary-foreground hover:bg-ember/90"
                  }
                  disabled={!item.available}
                  onClick={handleBook}
                >
                  {!item.available
                    ? "Сейчас занято"
                    : booked
                    ? "Открыть корзину"
                    : "Забронировать"}
                </Button>
              </div>

              {item.features.length > 0 && (
                <div>
                  <h2 className="font-display font-bold text-foreground text-2xl md:text-3xl mb-4">Описание</h2>
                  <ul className="space-y-3">
                    {item.features.map((f: string, i: number) => (
                      <li key={i} className="flex items-start gap-3 text-sm font-body text-foreground/80">
                        <Check className="h-4 w-4 text-ember mt-0.5 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="hidden lg:flex flex-col lg:sticky lg:top-32"
            >
              <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground leading-tight mb-3">
                {item.title}
              </h1>
              {item.shortly && (
                <p className="text-foreground/90 font-body leading-relaxed mb-6 text-sm">{item.shortly}</p>
              )}
              {item.description && (
                <p className="text-muted-foreground font-body leading-relaxed mb-6 text-xs">{item.description}</p>
              )}

              <div className="flex items-baseline gap-3 mb-6 flex-wrap">
                <span className="font-display font-bold text-ember text-4xl">₾{displayPrice}</span>
                {salePrice && (
                  <span className="font-body text-base text-muted-foreground line-through">
                    ₾{item.price_per_day}
                  </span>
                )}
                {discountPct !== null && (
                  <span className="bg-ember text-primary-foreground text-xs font-body font-bold px-2 py-0.5 rounded">
                    -{discountPct}%
                  </span>
                )}
                <span className="text-sm text-muted-foreground font-body">/сутки</span>
              </div>

              <Button
                size="lg"
                className={
                  booked
                    ? "font-body h-12 bg-foreground text-background hover:bg-foreground/90"
                    : "font-body h-12 bg-ember text-primary-foreground hover:bg-ember/90"
                }
                disabled={!item.available}
                onClick={handleBook}
              >
                {!item.available
                  ? "Сейчас занято"
                  : booked
                  ? "Открыть корзину"
                  : "Забронировать"}
              </Button>
            </motion.div>
          </div>

          {related && related.length > 0 && (
            <section className="mb-20">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
                Также арендуют
              </h2>
              <RentalCarousel items={related} />
            </section>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
