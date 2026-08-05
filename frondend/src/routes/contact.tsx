import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreSection } from "@/components/StoreSection";
import { canonicalLink } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Спортивный магазин Adjara Peak в Батуми — адрес и контакты" },
      { name: "description", content: "Адрес спортивного магазина Adjara Peak: Батуми, ул. Генерала Аслана Абашидзе, 19. Ежедневно 11:00–20:00, телефон +995 571 208 555." },
      { property: "og:title", content: "Спортивный магазин Adjara Peak в Батуми" },
      { property: "og:description", content: "Адрес, телефон, часы работы и карта магазина спортивных товаров Adjara Peak в Батуми." },
    ],
    links: [canonicalLink("/contact")],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <div className="pt-16 lg:pt-18">
        <StoreSection />
      </div>
      <Footer />
    </div>
  );
}
