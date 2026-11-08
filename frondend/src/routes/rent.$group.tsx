import { RentalLanding } from "@/components/RentalLanding";
import { rentalSource, rentalLandingKeys, type RentalLandingKey } from "@/lib/rental-booking";
import { getSeasonalHome } from "@/lib/seasonal.functions";
import { RENTAL_TEXT } from "@/lib/rental-text";
import { canonicalLink } from "@/lib/seo";
import { createFileRoute, Link, notFound, Outlet, useChildMatches } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CatalogPage } from "@/components/CatalogPage";
import { listOneProductPerCategorySlug, getRentalGroupView } from "@/lib/catalog.functions";
import { useLanguage, type Lang } from "@/lib/i18n";
import { ADJARA_PEAK_SOCIAL_IMAGE_META } from "@/lib/social-meta";

const RENT_NOT_FOUND_TEXT: Record<Lang, { title: string; back: string }> = {
  RU: { title: "Раздел не найден", back: "Назад в прокат" },
  EN: { title: "Section not found", back: "Back to rentals" },
  GE: { title: "სექცია ვერ მოიძებნა", back: "ქირაობაში დაბრუნება" },
};

export const Route = createFileRoute("/rent/$group")({
  staleTime: 5 * 60 * 1000,
  validateSearch: (search: Record<string, unknown>) => ({ equipment: typeof search.equipment === "string" ? search.equipment : undefined, resort: typeof search.resort === "string" ? search.resort : undefined }),
  loader: async ({ params }) => {
    const source = rentalSource(params.group);
    const data = await getRentalGroupView({ data: source });
    if (!data) throw notFound();
    const landingKey = rentalLandingKeys.includes(params.group as RentalLandingKey) ? params.group as RentalLandingKey : null;
    const related = landingKey === "skiRental" ? (await getSeasonalHome()).ski.slice(0,4) : landingKey ? await listOneProductPerCategorySlug({data:{categorySlugs: landingKey === "tents" ? ["tent","sleepingbag","mat","lantern"] : landingKey === "sup" ? ["supboard","sup_accessories"] : ["helmet","bicycle","pump","bike_accessories"]}}) : [];
    return {...data,landingKey,related};
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Прокат — Adjara Peak" }] };
    const title = loaderData.landingKey ? `${RENTAL_TEXT.RU.titles[loaderData.landingKey]} — Adjara Peak` : `${loaderData.group.title} — Прокат — Adjara Peak`;
    return {
      links: [canonicalLink(`/rent/${loaderData.landingKey ?? loaderData.group.slug}`)],
      meta: [
        { title },
        { name: "description", content: `Прокат: ${loaderData.group.title} в Adjara Peak.` },
        { property: "og:title", content: title },
        { property: "og:description", content: `Прокат: ${loaderData.group.title} в Adjara Peak.` },
        ...ADJARA_PEAK_SOCIAL_IMAGE_META,
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
  const search = Route.useSearch();
  if (childMatches.length > 0) return <Outlet />;
  if (data.landingKey) return <RentalLanding kind={data.landingKey} items={data.items} related={data.related} equipment={search.equipment} />;
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
