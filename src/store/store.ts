import { configureStore } from "@reduxjs/toolkit";

import languageReducer from "./languageSlice";
import effectReducer from "./effectSlice";
import themeReducer from "./ThemeSlice";

export const store = configureStore({
  reducer: {
    language: languageReducer,
    effect: effectReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
