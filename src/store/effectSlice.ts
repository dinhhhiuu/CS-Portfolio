import { createSlice } from "@reduxjs/toolkit";

import type { EffectState } from "@/interfaces";

const initialState: EffectState = {
  effect: true,
};

const effectSlice = createSlice({
  name: "effect",
  initialState,
  reducers: {
    toggleEffect: (state) => {
      state.effect = state.effect === true ? false : true;
    },
  },
});

export const { toggleEffect } = effectSlice.actions;
export default effectSlice.reducer;
