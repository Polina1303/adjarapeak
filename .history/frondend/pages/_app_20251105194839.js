import "../src/index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { Header } from "../src/components/header";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Header />
      <ScrollToTop />
      <main className="App">
        <Component {...pageProps} />
      </main>
      <Footer />
    </Provider>
  );
}
