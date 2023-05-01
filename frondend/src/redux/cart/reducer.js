import { createSlice } from "@reduxjs/toolkit";

const CART_KEY = "productInCart";

localStorage.setItem(CART_KEY, JSON.stringify([]));

const getLocalCartData = () => {
  const localCartData = localStorage.getItem(CART_KEY);
  if (localCartData) {
    return JSON.parse(localCartData);
  } else {
    return [];
  }
};

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsInCart: getLocalCartData(),
  },
  reducers: {
    setItemInCart: (state, action) => {
      const findItem =
        state.itemsInCart &&
        state.itemsInCart.find((item) => item.id === action.payload.id);
      if (findItem) {
        findItem.count++;
      } else {
        if (state && state.itemsInCart) {
          state.itemsInCart.push({ ...action.payload, count: 1 });
        }
      }
      localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
    },
    deleteItemFromCart: (state, action) => {
      if (state && state.itemsInCart) {
        state.itemsInCart = state.itemsInCart.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
      }
    },
    plusItem: (state, action) => {
      const findItem =
        state.itemsInCart &&
        state.itemsInCart.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 0) {
        findItem.count++;
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
      }
    },
    minusItem: (state, action) => {
      const findItem =
        state.itemsInCart &&
        state.itemsInCart.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
        localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart));
      }
    },
  },
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem(CART_KEY, JSON.stringify(getLocalCartData()));
});

window.addEventListener("unload", () => {
  localStorage.setItem(CART_KEY, JSON.stringify(getLocalCartData()));
});

export const { setItemInCart, deleteItemFromCart, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
