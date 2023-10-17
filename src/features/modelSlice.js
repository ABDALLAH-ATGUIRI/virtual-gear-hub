import { createSlice } from "@reduxjs/toolkit";

const modelSlice = createSlice({
  name: "model",
  initialState: {
    isOpen: false
  },
  reducers: {
    openModel: (state) => {
      state.isOpen = true;
      return state;
    },
    closeModel: (state) => {
      state.isOpen = false;
      return state;
    }
  }
});

export const { openModel, closeModel } = modelSlice.actions;

export default modelSlice.reducer;
