import { createFileRoute, notFound } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";
import { getSaleProducts, listShopGroups } from "@/lib/catalog.functions";

export const Route = createFileRoute("/sale/sale")({
  staleTime: 60 * 1000,
  loader: async () => {
    const groups = await listShopGroups();
    const saleData = await getSaleProducts();
    const group = groups.find((item) => item.slug === "sale");
    if (!group) throw notFound();
    return { groups, group, products: saleData.products };
  },
  head: () => ({
    meta: [
      { title: "Распродажа — Adjara Peak" },
      { name: "description", content: "Outdoor-снаряжение и прокат со скидками в Adjara Peak. Предложения ограничены." },
      { property: "og:title", content: "Распродажа — Adjara Peak" },
      { property: "og:description", content: "Outdoor-снаряжение со скидками в Adjara Peak." },
      { property: "og:image", content: "/img/sale.webp" },
    ],
  }),
  component: SalePage,
});

function SalePage() {
  const { groups, group, products } = Route.useLoaderData();
  return (
    <CatalogPage
      kind="shop"
      groups={groups}
      group={group}
      categories={[]}
      subsByCat={{}}
      activeCategory={null}
      activeSubcategory={null}
      products={products}
    />
  );
}
