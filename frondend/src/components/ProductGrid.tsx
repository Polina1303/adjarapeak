import type { ShopProduct } from "@/lib/catalog.functions";
import { CATALOG_UI_TEXT } from "@/lib/catalog-ui-text";
import { useLanguage } from "@/lib/i18n";
import { ProductCard } from "./ProductCard";

export function ProductGrid({ products }: { products: ShopProduct[] }) {
  const { lang } = useLanguage();
  if (products.length === 0) {
    return (
      <p className="text-center py-20 text-muted-foreground font-body">
        {CATALOG_UI_TEXT[lang].emptyProducts}
      </p>
    );
  }
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
}
