import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import type { ReactNode } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { resolveCatalogImage } from "@/lib/catalog-image";
import { useLanguage } from "@/lib/i18n";

const TILE_TEXT = {
  RU: {
    back: "Назад",
    empty: "Здесь пока ничего нет.",
  },
  EN: {
    back: "Back",
    empty: "Nothing here yet.",
  },
  GE: {
    back: "უკან",
    empty: "აქ ჯერ არაფერია.",
  },
} as const;

export type TileItem = {
  id: string;
  slug: string;
  title: string;
  image: string | null;
};

type Crumb = { label: string; to?: string };

type Props = {
  title: string;
  items: TileItem[];
  buildHref: (slug: string) => { to: string; params?: Record<string, string>; external?: boolean };
  breadcrumbs?: Crumb[];
  emptyText?: string;
  children?: ReactNode;
};

export function TilePicker({ title, items, buildHref, breadcrumbs, emptyText, children }: Props) {
  const { lang } = useLanguage();
  const text = TILE_TEXT[lang];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-24 pb-20 section-padding">
        <div className="max-w-7xl mx-auto">
          <button
            type="button"
            onClick={() => window.history.back()}
            className="lg:hidden inline-flex items-center gap-2 text-sm font-body text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            {text.back}
          </button>
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav className="hidden lg:flex items-center gap-2 text-sm font-body text-muted-foreground mb-6 flex-wrap">
              {breadcrumbs.map((c, i) => (
                <span key={i} className="flex items-center gap-2">
                  {c.to ? (
                    <Link to={c.to} className="hover:text-foreground transition-colors">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-foreground">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 && <span>/</span>}
                </span>
              ))}
            </nav>
          )}

          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground uppercase tracking-wide mb-8">
            {title}
          </h1>

          {children}

          {items.length === 0 ? (
            <p className="text-center py-20 text-muted-foreground font-body">
              {emptyText ?? text.empty}
            </p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
              {items.map((item, i) => {
                const href = buildHref(item.slug);
                const tileInner = (
                  <>
                    <div className="aspect-square bg-background overflow-hidden flex items-center justify-center">
                      <img
                        src={resolveCatalogImage(item.image)}
                        alt={item.title}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="px-3 py-4 text-center">
                      <h3 className="font-display text-sm md:text-base font-bold uppercase tracking-wider text-foreground group-hover:text-ember transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </>
                );
                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: Math.min(i * 0.04, 0.4) }}
                  >
                    {href.external ? (
                      <a
                        href={href.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex flex-col bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                      >
                        {tileInner}
                      </a>
                    ) : (
                      <Link
                        to={href.to}
                        params={href.params as never}
                        className="group flex flex-col bg-card rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
                      >
                        {tileInner}
                      </Link>
                    )}
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
