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
		},
	},
});

export const { showAlert, hideAlert } = alertSlice.actions;
export const selectAlert = (state) => state.alert;
export default alertSlice.reducer;
