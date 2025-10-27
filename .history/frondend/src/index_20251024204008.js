import { RouterProvider } from "react-router-dom";
import { ScrollToTop } from "./pages/product-page/ScrollToTop";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { BrowserRouter } from "react-router-dom";
import { router } from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ScrollToTop />
    <RouterProvider router={router} />,
  </Provider>
);
