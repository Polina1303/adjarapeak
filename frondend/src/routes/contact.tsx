import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { StoreSection } from "@/components/StoreSection";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Контакты — Adjara Peak" },
      { name: "description", content: "Свяжитесь с Adjara Peak в Батуми: адрес, телефоны, время работы." },
      { property: "og:title", content: "Контакты — Adjara Peak" },
      { property: "og:description", content: "Магазин и прокат снаряжения Adjara Peak в Батуми, Грузия." },
    ],
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
