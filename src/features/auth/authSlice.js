import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    accessToken: null,
    user: null
  },
  reducers: {
    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.token = token;
      state.user = user;
    },
    logOut: (state) => {
      state.token = null;
      state.user = null;
    }
  }
});

export const { setCredentials, logOut } = authSlice.actions;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.Token;

export default authSlice.reducer;
