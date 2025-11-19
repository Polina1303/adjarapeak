import { createSlice } from "@reduxjs/toolkit";

const isClient = typeof window !== "undefined";

// Получение данных из localStorage безопасно
const getLocalLanguagesData = () => {
  if (!isClient) return "RU"; // дефолтное значение на сервере

  const localCartData = localStorage.getItem("languages");
  if (localCartData) {
    try {
      const parsed = JSON.parse(localCartData);
      return parsed === "ENG" ? "ENG" : "RU";
    } catch (e) {
      return "RU";
    }
  }
  return "RU";
};

const languagesSlice = createSlice({
  name: "languages",
  initialState: { currentLanguages: getLocalLanguagesData() },
  reducers: {
    updateCurrentLanguages: (state, action) => {
      state.currentLanguages = action.payload;
      if (isClient) {
        localStorage.setItem(
          "languages",
          JSON.stringify(state.currentLanguages)
        );
      }
    },
  },
});

export const { updateCurrentLanguages } = languagesSlice.actions;
export default languagesSlice.reducer;
