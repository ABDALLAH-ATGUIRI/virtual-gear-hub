import { createSlice } from "@reduxjs/toolkit";

const alertSlice = createSlice({
	name: "alert",
	initialState: {
		message: "",
		type: "info", // "success", "error", "warning", "info"
		open: false,
	},
	reducers: {
		showAlert: (state, action) => {
			const { message, type } = action.payload;

			state.open = true;
			state.message = message;
			state.type = type;
		},
		hideAlert: (state) => {
			state.open = false;
			state.message = "";
		},
	},
});

export const { showAlert, hideAlert } = alertSlice.actions;
export default alertSlice.reducer;
