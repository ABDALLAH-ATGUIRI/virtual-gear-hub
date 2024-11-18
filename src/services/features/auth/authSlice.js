import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: {
		user: null,
	},
	reducers: {
		setCredentials: (state, action) => {
			state.user = action.payload.user;
		},
		setLogout: (state) => {
			state.user = null;
		},
	},
});

export const { setCredentials, setLogout } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;

export default authSlice.reducer;
