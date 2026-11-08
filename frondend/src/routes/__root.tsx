import { useEffect, useState } from "react";
import {
  Outlet,
  Link,
  createRootRoute,
  HeadContent,
  Scripts,
  useLocation,
  useRouterState,
} from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { ScrollToTop } from "@/components/ScrollToTop";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { LanguageProvider } from "@/lib/i18n";
import { ADJARA_PEAK_SOCIAL_IMAGE_META } from "@/lib/social-meta";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">
          Страница не найдена
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Страница, которую вы ищете, не существует или была перемещена.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            На главную
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Adjara Peak — снаряжение и туры в Аджарии" },
      { name: "description", content: "Снаряжение, прокат и горные туры в Батуми и Аджарии." },
      { name: "author", content: "Adjara Peak" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
      { property: "og:title", content: "Adjara Peak" },
      { property: "og:description", content: "Снаряжение, прокат и горные туры в Аджарии." },
      { property: "og:type", content: "website" },
      ...ADJARA_PEAK_SOCIAL_IMAGE_META,
      { name: "twitter:site", content: "@AdjaraPeak" },
      { name: "twitter:title", content: "Adjara Peak" },
      { name: "twitter:description", content: "Снаряжение, прокат и горные туры в Аджарии." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
    scripts: [
      {
        children:
          "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-M6PTBQG6');",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <HeadContent />
      </head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-M6PTBQG6"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { pathname } = useLocation();
  const isAdmin = pathname.startsWith("/admin");

  return (
    <LanguageProvider>
      <NavigationProgress />
      <Outlet />
      <Toaster />
      <ScrollToTop />
      {!isAdmin && (
        <>
          <MobileBottomNav />
          <div aria-hidden className="lg:hidden h-16" />
        </>
      )}
    </LanguageProvider>
  );
}

function NavigationProgress() {
  const isLoading = useRouterState({ select: (state) => state.isLoading });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!isLoading) {
      setVisible(false);
      return;
    }

    const timeout = window.setTimeout(() => setVisible(true), 160);
    return () => window.clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div
      role="progressbar"
      aria-label="Загрузка страницы"
      className={`pointer-events-none fixed inset-x-0 top-0 z-[100] h-[3px] overflow-hidden transition-opacity duration-150 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span className="navigation-progress-bar block h-full bg-ember shadow-[0_0_10px_color-mix(in_oklab,var(--ember)_70%,transparent)]" />
    </div>
  );
}
