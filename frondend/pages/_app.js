// import { Provider, useSelector } from "react-redux";
// import Head from "next/head";
// import { store } from "../src/redux";
// import Snow from "../src/components/snow";
// import { Footer } from "../src/components/footer";
// import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
// import dynamic from "next/dynamic";
// import { useEffect } from "react";
// import { initProductCache } from "../lib/cache";
// import i18n from "../src/i18n";
// import "../src/index.css";
// import { I18nextProvider } from "react-i18next";
// import { appWithTranslation } from "next-i18next";

// const Header = dynamic(
//   () => import("../src/components/header").then((mod) => mod.Header),
//   {
//     ssr: false,
//     loading: () => <div style={{ height: 80 }} />,
//   }
// );

// const Snows = dynamic(() => import("../src/components/snow"), { ssr: false });

// function App({ Component, pageProps }) {
//   const title = pageProps?.title || "Adjarapeak - Главная страница";
//   useEffect(() => {
//     initProductCache();
//   }, []);

//   return (
//     <Provider store={store}>
//       <Head>
//         <title>{title}</title>
//       </Head>
//       <I18nextProvider i18n={i18n}>
//         <Header />
//         <ScrollToTop />
//         <main className="App">
//           <Snows />
//           <Component {...pageProps} />
//         </main>
//         <Footer />
//       </I18nextProvider>
//     </Provider>
//   );
// }

// export default appWithTranslation(App);

import { Provider } from "react-redux";
import Head from "next/head";
import { store } from "../src/redux";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { initProductCache } from "../lib/cache";
import i18n from "../src/i18n";
import "../src/index.css";
import { I18nextProvider } from "react-i18next";
import { appWithTranslation } from "next-i18next";

const Header = dynamic(
  () => import("../src/components/header").then((mod) => mod.Header),
  { ssr: false, loading: () => <div style={{ height: 80 }} /> }
);

const Snow = dynamic(() => import("../src/components/snow"), {
  ssr: false,
  loading: () => null,
});

const FooterDynamic = dynamic(
  () => import("../src/components/footer").then((mod) => mod.Footer),
  { ssr: false, loading: () => null }
);

function App({ Component, pageProps }) {
  const title = pageProps?.title || "Adjarapeak - Главная страница";

  useEffect(() => {
    initProductCache();
  }, []);

  return (
    <Provider store={store}>
      <Head>
        <title>{title}</title>
      </Head>
      <I18nextProvider i18n={i18n}>
        <Header />
        <ScrollToTop />
        <main className="App">
          {/* <Snow /> */}
          <Component {...pageProps} />
        </main>
        <FooterDynamic />
      </I18nextProvider>
    </Provider>
  );
}

export default appWithTranslation(App);
