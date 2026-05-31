import { createFileRoute, Link, notFound, Outlet, useChildMatches } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogPage } from "@/components/CatalogPage";
import { getShopGroupView } from "@/lib/catalog.functions";
import { resolveImage } from "@/lib/catalog-image";

export const Route = createFileRoute("/sale/$group")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const data = await getShopGroupView({ data: { groupSlug: params.group } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Магазин — Adjara Peak" }] };
    const title = `${loaderData.group.title} — Adjara Peak`;
    return {
      meta: [
        { title },
        { name: "description", content: `${loaderData.group.title} в магазине Adjara Peak.` },
        { property: "og:title", content: title },
        { property: "og:image", content: resolveImage(loaderData.group.image) },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding text-center">
        <h1 className="font-display text-4xl font-bold mb-4">Раздел не найден</h1>
        <Link to="/sale" className="underline">Назад в магазин</Link>
      </div>
      <Footer />
    </div>
  ),
  component: ShopGroupPage,
});

function ShopGroupPage() {
  const childMatches = useChildMatches();
  const data = Route.useLoaderData();
  if (childMatches.length > 0) return <Outlet />;
  return (
    <CatalogPage
      kind="shop"
      groups={data.groups}
      group={data.group}
      categories={data.categories}
      subsByCat={data.subsByCat}
      activeCategory={null}
      activeSubcategory={null}
      products={data.products}
    />
  );
}
