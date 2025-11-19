import "../src/index.css";
import { Provider } from "react-redux";
import { store } from "../src/redux";
import { Footer } from "../src/components/footer";
import { ScrollToTop } from "../src/pages/product-page/ScrollToTop";
import { Header } from "antd/es/layout/layout";
// import dynamic from "next/dynamic";

// const Header = dynamic(
//   () => import("../src/components/header").then((mod) => mod.Header),
//   {
//     ssr: false,
//     loading: () => (
//       <div
//         style={{
//           height: "80px",
//           background: "#f5f5f5",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//         }}
//       >
//         Loading Header...
//       </div>
//     ),
//   }
// );

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
