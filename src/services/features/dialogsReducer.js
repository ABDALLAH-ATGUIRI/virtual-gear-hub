import { createSlice } from "@reduxjs/toolkit";

const dialogSlice = createSlice({
	name: "dialogs",
	initialState: {
	},
	reducers: {
		openDialog: (state, action) => {
			const dialogId = action.payload;
			state[dialogId] = { isOpen: true };
		},
		closeDialog: (state, action) => {
			const dialogId = action.payload;
			state[dialogId] = { isOpen: false };
		},
	},
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const selectIsOpen = (state) => state?.isOpen || false;

export default dialogSlice.reducer;
