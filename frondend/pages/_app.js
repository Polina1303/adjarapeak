import { Provider, useSelector } from "react-redux";
import { store } from "../src/redux";
import Snow from "../src/components/snow";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
import dynamic from "next/dynamic";
import { useEffect } from "react";
import { initProductCache } from "../lib/cache";
import "../src/index.css";

const Header = dynamic(
  () => import("../src/components/header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }) {
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
