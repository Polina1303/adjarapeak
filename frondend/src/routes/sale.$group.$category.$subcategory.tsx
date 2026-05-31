import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogPage } from "@/components/CatalogPage";
import { getShopGroupView } from "@/lib/catalog.functions";
import { resolveImage } from "@/lib/catalog-image";

export const Route = createFileRoute("/sale/$group/$category/$subcategory")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const data = await getShopGroupView({
      data: {
        groupSlug: params.group,
        categorySlug: params.category,
        subcategorySlug: params.subcategory,
      },
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Shop — Adjara Peak" }] };
    const sub = loaderData.activeSubcategory?.title ?? "";
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${sub} — ${cat} — Adjara Peak`;
    return {
      meta: [
        { title },
        { name: "description", content: `Shop ${sub.toLowerCase()} in ${cat.toLowerCase()}.` },
        { property: "og:title", content: title },
        { property: "og:image", content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Subcategory not found</h1>
        <Link to="/sale" className="underline">Back to shop</Link>
      </div>
      <Footer />
    </div>
  ),
  component: ShopSubcategoryPage,
});

function ShopSubcategoryPage() {
  const data = Route.useLoaderData();
  return (
    <CatalogPage
      kind="shop"
      groups={data.groups}
      group={data.group}
      categories={data.categories}
      subsByCat={data.subsByCat}
      activeCategory={data.activeCategory}
      activeSubcategory={data.activeSubcategory}
      products={data.products}
    />
  );
}