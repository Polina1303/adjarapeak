import "../src/index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
import dynamic from "next/dynamic";
import styles from "../src/index.css";

const Header = dynamic(
  () => import("../src/components/header").then((mod) => mod.Header),
  {
    ssr: false,
  }
);

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <ScrollToTop />
      <main className={styles["App"]}>
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
