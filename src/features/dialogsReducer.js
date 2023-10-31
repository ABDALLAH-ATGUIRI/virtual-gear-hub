import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const dialogSlice = createSlice({
  name: "dialogs",
  initialState,
  reducers: {
    openDialog: (state, action) => {
      const dialogId = action.payload;

      if (state[dialogId]) {
        state[dialogId].isOpen = true;
      } else {
        state[dialogId] = { isOpen: true };
      }
    },
    closeDialog: (state, action) => {
      const dialogId = action.payload;
      if (state[dialogId]) {
        state[dialogId].isOpen = false;
      }
    }
  }
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export default dialogSlice.reducer;
