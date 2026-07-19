import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { CatalogPage } from "@/components/CatalogPage";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { getShopGroupView } from "@/lib/catalog.functions";
import { resolveImage } from "@/lib/catalog-image";

const TOURISM_GROUP_SLUG = "tourismCamping";

export const Route = createFileRoute("/tourismCamping/")({
  staleTime: 5 * 60 * 1000,
  loader: async () => {
    const data = await getShopGroupView({
      data: { groupSlug: TOURISM_GROUP_SLUG },
    });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Туризм и кемпинг — Adjara Peak" }] };
    }
    const title = `${loaderData.group.title} — Adjara Peak`;
    return {
      meta: [
        { title },
        {
          name: "description",
          content: `${loaderData.group.title} в магазине Adjara Peak.`,
        },
        { property: "og:title", content: title },
        {
          property: "og:image",
          content: resolveImage(loaderData.group.image),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding text-center">
        <h1 className="font-display text-4xl font-bold mb-4">
          Раздел не найден
        </h1>
        <Link to="/sale" className="underline">
          Назад в магазин
        </Link>
      </div>
      <Footer />
    </div>
  ),
  component: TourismCampingPage,
});

function TourismCampingPage() {
  const data = Route.useLoaderData();
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
