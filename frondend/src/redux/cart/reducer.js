// src/redux/cart/reducer.js
import { createSlice } from "@reduxjs/toolkit";

export const CART_KEY = "productInCart";

const isClient = typeof window !== "undefined";

// Всегда начинаем с пустого массива для избежания проблем с гидратацией
// Данные из localStorage будут загружены после монтирования
const initialCartData = [];

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
    hydrateCart: (state, action) => {
      // Загружаем данные из localStorage после монтирования
      state.itemsInCart = action.payload || [];
    },
  },
});

export const {
  setItemInCart,
  deletItemFromCart,
  minusItem,
  plusItem,
  clearCart,
  hydrateCart,
} = cartSlice.actions;
export default cartSlice.reducer;
