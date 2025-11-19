// src/redux/cart/reducer.js
import { createSlice } from "@reduxjs/toolkit";

export const CART_KEY = "productInCart";

// Проверка на клиент
const isClient = typeof window !== "undefined";

// Инициализация состояния
const initialCartData = isClient
  ? JSON.parse(localStorage.getItem(CART_KEY)) || []
  : [];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: initialCartData,
  },
  reducers: {
    setItemInCart: (state, action) => {
      const findItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
      } else {
        state.itemsInCart.push({ ...action.payload, count: 1 });
      }
      if (isClient)
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
    },
    deletItemFromCart: (state, action) => {
      state.itemsInCart = state.itemsInCart.filter(
        (item) => item.id !== action.payload
      );
      if (isClient)
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
    },
    plusItem: (state, action) => {
      const findItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (findItem) {
        findItem.count++;
        if (isClient)
          localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
      }
    },
    minusItem: (state, action) => {
      const findItem = state.itemsInCart.find(
        (item) => item.id === action.payload.id
      );
      if (findItem && findItem.count > 1) {
        findItem.count--;
        if (isClient)
          localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
      }
    },
    clearCart: (state) => {
      state.itemsInCart = [];
      if (isClient)
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
    },
  },
});

export const {
  setItemInCart,
  deletItemFromCart,
  minusItem,
  plusItem,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
