import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import { contactEvents, trackEvent } from "@/lib/analytics";
export function Analytics() {
  const { pathname } = useLocation();
  useEffect(() => {
    function click(event: MouseEvent) {
      if (event.defaultPrevented || !(event.target instanceof Element)) return;
      const link = event.target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;
      for (const name of contactEvents(link.href, pathname))
        trackEvent(name, { page_path: pathname });
      if (link.dataset.categoryTile)
        trackEvent("click_category_tile", {
          category_name: link.dataset.categoryTile,
          destination: new URL(link.href).pathname,
          page_path: pathname,
        });
      if (link.dataset.skiBanner !== undefined)
        trackEvent("click_ski_banner", {
          destination: new URL(link.href).pathname,
          page_path: pathname,
        });
      if (link.dataset.fitnessBanner !== undefined)
        trackEvent("click_fitness_banner", {
          destination: new URL(link.href).pathname,
          page_path: pathname,
        });
    }
    document.addEventListener("click", click);
    return () => document.removeEventListener("click", click);
  }, [pathname]);
  return null;
}
