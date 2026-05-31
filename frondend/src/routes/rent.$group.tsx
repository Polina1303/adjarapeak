import { createFileRoute, Link, notFound, Outlet, useChildMatches } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogPage } from "@/components/CatalogPage";
import { getRentalGroupView } from "@/lib/catalog.functions";
import { resolveImage } from "@/lib/catalog-image";
import { useLanguage, type Lang } from "@/lib/i18n";

const RENT_NOT_FOUND_TEXT: Record<Lang, { title: string; back: string }> = {
  RU: { title: "Раздел не найден", back: "Назад в прокат" },
  EN: { title: "Section not found", back: "Back to rentals" },
  GE: { title: "სექცია ვერ მოიძებნა", back: "ქირაობაში დაბრუნება" },
};

export const Route = createFileRoute("/rent/$group")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const data = await getRentalGroupView({ data: { groupSlug: params.group } });
    if (!data) throw notFound();
    return data;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Прокат — Adjara Peak" }] };
    const title = `${loaderData.group.title} — Прокат — Adjara Peak`;
    return {
      meta: [
        { title },
        { name: "description", content: `Прокат: ${loaderData.group.title} в Adjara Peak.` },
        { property: "og:title", content: title },
        { property: "og:image", content: resolveImage(loaderData.group.image) },
      ],
    };
  },
  notFoundComponent: RentGroupNotFound,
  component: RentalGroupPage,
});

function RentGroupNotFound() {
  const { lang } = useLanguage();
  const text = RENT_NOT_FOUND_TEXT[lang];
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-32 section-padding text-center">
        <h1 className="font-display text-4xl font-bold mb-4">{text.title}</h1>
        <Link to="/rent" className="underline">{text.back}</Link>
      </div>
      <Footer />
    </div>
  );
}

function RentalGroupPage() {
  const childMatches = useChildMatches();
  const data = Route.useLoaderData();
  if (childMatches.length > 0) return <Outlet />;
  return (
    <CatalogPage
      kind="rentals"
      groups={data.groups}
      group={data.group}
      categories={data.categories}
      subsByCat={data.subsByCat}
      activeCategory={null}
      activeSubcategory={null}
      items={data.items}
    />
  );
}
