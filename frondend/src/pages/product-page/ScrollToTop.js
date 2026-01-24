// "use client";
// import { useEffect } from "react";
// import { useRouter } from "next/router";

// export const ScrollToTop = () => {
//   const router = useRouter();

//   useEffect(() => {
//     const handleRouteChange = () => {
//       window.scrollTo(0, 0);
//     };

//     router.events.on("routeChangeComplete", handleRouteChange);

//     return () => {
//       router.events.off("routeChangeComplete", handleRouteChange);
//     };
//   }, [router.events]);

//   return null;
// };

import { useRouter } from "next/router";
import { useEffect } from "react";

export const ScrollToTop = () => {
  // Используем условный рендеринг для избежания ошибки
  if (typeof window === "undefined") {
    return null; // На сервере ничего не рендерим
  }

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      window.scrollTo(0, 0);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router]);

  return null;
};
