// import { createSlice } from "@reduxjs/toolkit";

// const getLocalCartData = () => {
//   let localCartData = localStorage.getItem("productInCart");
//   if (localCartData === []) {
//     return [];
//   } else {
//     return JSON.parse(localCartData);
//   }
// };

// const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     itemsInCart: getLocalCartData(),
//   },
//   reducers: {
//     setItemInCart: (state, action) => {
//       const findItem =
//         state.itemsInCart &&
//         state.itemsInCart.find((item) => item.id === action.payload.id);
//       if (findItem) {
//         findItem.count++;
//       } else {
//         if (state && state.itemsInCart) {
//           state.itemsInCart.push({ ...action.payload, count: 1 });
//         }
//       }
//     },
//     deletItemFromCart: (state, action) => {
//       if (state && state.itemsInCart) {
//         state.itemsInCart = state.itemsInCart.filter(
//           (item) => item.id !== action.payload
//         );
//       }
//     },
//     plusItem: (state, action) => {
//       const findItem =
//         state.itemsInCart &&
//         state.itemsInCart.find((item) => item.id === action.payload.id);
//       if (findItem) {
//         findItem.count++;
//       }
//     },
//     minusItem: (state, action) => {
//       const findItem =
//         state.itemsInCart &&
//         state.itemsInCart.find((item) => item.id === action.payload.id);
//       if (findItem) {
//         findItem.count--;
//       }
//     },
//   },
// });

// export const { setItemInCart, deletItemFromCart, minusItem, plusItem } =
//   cartSlice.actions;
// export default cartSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

// const getLocalCartData = () => {
//   const localCartData = localStorage.getItem("productInCart");
//   if (localCartData) {
//     return JSON.parse(localCartData);
//   } else {
//     return [];
//   }
// };
const getLocalCartData = () => {
  let localCartData = localStorage.getItem("productInCart");
  if (localCartData === []) {
    return [];
  } else {
    return JSON.parse(localCartData);
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
      localStorage.setItem("productInCart", JSON.stringify(state.itemsInCart));
    },
    deletItemFromCart: (state, action) => {
      if (state && state.itemsInCart) {
        state.itemsInCart = state.itemsInCart.filter(
          (item) => item.id !== action.payload
        );
        localStorage.setItem(
          "productInCart",
          JSON.stringify(state.itemsInCart)
        );
      }
    },
    plusItem: (state, action) => {
      const findItem =
        state.itemsInCart &&
        state.itemsInCart.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 0) {
        findItem.count++;
        localStorage.setItem(
          "productInCart",
          JSON.stringify(state.itemsInCart)
        );
      }
    },
    minusItem: (state, action) => {
      const findItem =
        state.itemsInCart &&
        state.itemsInCart.find((item) => item.id === action.payload.id);
      if (findItem && findItem.count > 1) {
        findItem.count--;
        localStorage.setItem(
          "productInCart",
          JSON.stringify(state.itemsInCart)
        );
      }
    },
  },
});

export const { setItemInCart, deletItemFromCart, minusItem, plusItem } =
  cartSlice.actions;
export default cartSlice.reducer;
