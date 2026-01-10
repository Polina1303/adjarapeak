import { Provider, useSelector } from "react-redux";
import { store } from "../src/redux";
import Snow from "../src/components/snow";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { initProductCache } from "../lib/cache";
import "../src/index.css";
import { appWithTranslation } from "next-i18next";
import "../src/i18n.js";

import nextI18NextConfig from "../next-i18next.config.js";

const Header = dynamic(
  () => import("../src/components/header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

function App({ Component, pageProps }) {
  useEffect(() => {
    initProductCache();
  }, []);

  return (
    <Provider store={store}>
      <Header />
      <ScrollToTop />
      <main className="App">
        <Snow />
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}

export default appWithTranslation(App, nextI18NextConfig);
