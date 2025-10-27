import { createSlice } from "@reduxjs/toolkit";

export const CART_KEY = "productInCart";

const initialCartData = JSON.parse(localStorage.getItem(CART_KEY)) || [];

if (initialCartData.length === 0) {
  localStorage.setItem(CART_KEY, JSON.stringify([]));
}

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
    deletItemFromCart: (state, action) => {
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
    clearCart: (state) => {
      state.itemsInCart = []; 
      localStorage.setItem(CART_KEY, JSON.stringify(state.itemsInCart)); 
    },

  },
});

window.addEventListener("beforeunload", () => {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cartSlice.getState().itemsInCart)
  );
});

window.addEventListener("unload", () => {
  localStorage.setItem(
    CART_KEY,
    JSON.stringify(cartSlice.getState().itemsInCart)
  );
});

export const { setItemInCart, deletItemFromCart, minusItem, plusItem,clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
