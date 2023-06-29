import { createSlice } from "@reduxjs/toolkit";

// const getCurrentProduct = () => {
//   // const currentProduct = localStorage.getItem("currentProduct");
//   // if (currentProduct) {
//   //   return JSON.parse(currentProduct);
//   // } else {
//   //   return [];
//   // }
//   // currentProduct:[]
// };

const productsSlice = createSlice({
  name: "product",
  initialState: {
    currentProduct: [],
  },
  reducers: {
    setCurrentProduct: (state, action) => {
      state.currentProduct = action.payload;
    },
  },
});

export const { setCurrentProduct } = productsSlice.actions;
export default productsSlice.reducer;
