import { createFileRoute, Outlet, useChildMatches } from "@tanstack/react-router";
import { listRentalGroups } from "@/lib/catalog.functions";
import { TilePicker } from "@/components/TilePicker";
import { useCatalogTranslations } from "@/lib/catalog-translations";
import { useLanguage, type Lang } from "@/lib/i18n";

const RENT_INDEX_TEXT: Record<Lang, { title: string; empty: string }> = {
  RU: {
    title: "Прокат",
    empty: "Категории проката пока недоступны.",
  },
  EN: {
    title: "Rental",
    empty: "Rental categories are not available yet.",
  },
  GE: {
    title: "ქირაობა",
    empty: "ქირაობის კატეგორიები ჯერ მიუწვდომელია.",
  },
};

export const Route = createFileRoute("/rent")({
  staleTime: 5 * 60 * 1000,
  loader: async () => await listRentalGroups(),
  head: () => ({
    meta: [
      { title: "Прокат снаряжения — Adjara Peak" },
      { name: "description", content: "Арендуйте премиальное outdoor-снаряжение в Батуми." },
    ],
  }),
  component: RentalsIndex,
});

function RentalsIndex() {
  const childMatches = useChildMatches();
  const groups = Route.useLoaderData();
  const { lang } = useLanguage();
  const catalogTranslations = useCatalogTranslations(lang);
  const text = RENT_INDEX_TEXT[lang];
  if (childMatches.length > 0) return <Outlet />;
  const filtered = groups.filter(
    (g) => g.slug !== "sale" && g.title.toLowerCase() !== "распродажа",
  );
  return (
    <TilePicker
      title={text.title}
      items={filtered.map((g) => ({
        id: g.id,
        slug: g.slug,
        title: catalogTranslations.group("rentals", g.slug, g.title),
        image: g.image,
      }))}
      buildHref={(slug) => ({ to: "/rent/$group", params: { group: slug } })}
      emptyText={text.empty}
    />
  );
}
