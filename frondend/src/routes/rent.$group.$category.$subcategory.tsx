import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogPage } from "@/components/CatalogPage";
import { getRentalGroupView } from "@/lib/catalog.functions";
import { resolveImage } from "@/lib/catalog-image";
import { useLanguage, type Lang } from "@/lib/i18n";

const RENT_SUBCATEGORY_NOT_FOUND_TEXT: Record<Lang, { title: string; back: string }> = {
  RU: { title: "Подкатегория не найдена", back: "Назад в прокат" },
  EN: { title: "Subcategory not found", back: "Back to rentals" },
  GE: { title: "ქვეკატეგორია ვერ მოიძებნა", back: "ქირაობაში დაბრუნება" },
};

export const Route = createFileRoute("/rent/$group/$category/$subcategory")({
  staleTime: 5 * 60 * 1000,
  loader: async ({ params }) => {
    const data = await getRentalGroupView({
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
    if (!loaderData) return { meta: [{ title: "Rentals — Adjara Peak" }] };
    const sub = loaderData.activeSubcategory?.title ?? "";
    const cat = loaderData.activeCategory?.title ?? "";
    const title = `${sub} — ${cat} — Adjara Peak`;
    return {
      meta: [
        { title },
        { name: "description", content: `Rent ${sub.toLowerCase()} in ${cat.toLowerCase()}.` },
        { property: "og:title", content: title },
        { property: "og:image", content: resolveImage(loaderData.activeCategory?.image ?? loaderData.group.image) },
      ],
    };
  },
  notFoundComponent: RentalSubcategoryNotFound,
  component: RentalsSubcategoryPage,
});

function RentalSubcategoryNotFound() {
  const { lang } = useLanguage();
  const text = RENT_SUBCATEGORY_NOT_FOUND_TEXT[lang];
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

function RentalsSubcategoryPage() {
  const data = Route.useLoaderData();
  return (
    <CatalogPage
      kind="rentals"
      groups={data.groups}
      group={data.group}
      categories={data.categories}
      subsByCat={data.subsByCat}
      activeCategory={data.activeCategory}
      activeSubcategory={data.activeSubcategory}
      items={data.items}
    />
  );
}
