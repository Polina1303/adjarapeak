import App from "./App";
import { RouterProvider } from "react-router-dom";
import React, { Suspense } from "react";
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
    <BrowserRouter>
      <ScrollToTop />
      <RouterProvider router={router} />,
    </BrowserRouter>
  </Provider>
);
