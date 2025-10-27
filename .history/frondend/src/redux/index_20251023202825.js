import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cart/reducer";
import productsReducer from "./product/reducer";
import languagesReducer from "./languages/reducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productsReducer,
    languages: languagesReducer,
  },
});
