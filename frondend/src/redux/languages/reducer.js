import { createSlice } from "@reduxjs/toolkit";

// Всегда начинаем с "RU" для избежания проблем с гидратацией
// Данные из localStorage будут загружены после монтирования
const languagesSlice = createSlice({
  name: "languages",
  initialState: { currentLanguages: "RU" },
  reducers: {
    updateCurrentLanguages: (state, action) => {
      state.currentLanguages = action.payload;
      if (typeof window !== "undefined") {
        localStorage.setItem(
          "languages",
          JSON.stringify(state.currentLanguages)
        );
      }
    },
    hydrateLanguages: (state, action) => {
      // Загружаем данные из localStorage после монтирования
      state.currentLanguages = action.payload || "RU";
    },
  },
});

export const { updateCurrentLanguages, hydrateLanguages } = languagesSlice.actions;
export default languagesSlice.reducer;
