import { createSlice } from "@reduxjs/toolkit";

const localStorageLanguages = JSON.parse(localStorage.getItem('languages'))||'RU';

console.log('localStorageLanguages',localStorageLanguages)
const getLocalCartData = () => {
  const localCartData = localStorage.getItem('languages');
  if (localCartData===JSON.stringify('ENG')) {
    return 'ENG';
  } else {
  
    return "RU";
  }
};


const languagesSlice = createSlice({
  name: "languages",
  initialState:{currentLanguages:getLocalCartData ()},
  reducers: {
    updateCurrentLanguages: (state, action) => {
      state.currentLanguages = action.payload;
      localStorage.setItem('languages', JSON.stringify(state.currentLanguages));
    },
  },
});

export const { updateCurrentLanguages } = languagesSlice.actions;
export default languagesSlice.reducer;
