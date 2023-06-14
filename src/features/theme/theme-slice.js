import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: "dark",
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggle(state) {
      state.value = state.value === "dark" ? "light" : "dark";
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
