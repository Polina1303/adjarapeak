import { RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./redux/index";
import { router } from "./routes";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("Ширина:", window.innerWidth, "Высота:", window.innerHeight);
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />,
  </Provider>
);
