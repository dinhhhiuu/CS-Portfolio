import { createSlice } from "@reduxjs/toolkit";

import type { LanguageState } from "@/interfaces";

const initialState: LanguageState = {
  language: "vi",
};

const languageSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      state.language = state.language === "vi" ? "en" : "vi";
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export default languageSlice.reducer;
