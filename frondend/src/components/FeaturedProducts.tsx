import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { listRecommendedProducts, type ShopProduct } from "@/lib/catalog.functions";
import { ProductCard } from "./ProductCard";

export function FeaturedProducts() {
  const [products, setProducts] = useState<ShopProduct[]>([]);

  useEffect(() => {
    listRecommendedProducts({ data: { limit: 8 } })
      .then((arr) => setProducts(arr))
      .catch(() => setProducts([]));
  }, []);

  if (products.length === 0) return null;

  return (
    <section className="section-padding py-12 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-xs font-body font-semibold text-ember uppercase tracking-widest mb-1">
              Выбор команды
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Рекомендуемые товары
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {products.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <ProductCard product={p} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
