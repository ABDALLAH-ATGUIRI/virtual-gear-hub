import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, setLogout } from "@features/auth/authSlice";

// Base API configuration
const baseQuery = fetchBaseQuery({
	// eslint-disable-next-line no-undef
	baseUrl: "api",
	jsonContentType: "application/json",
	credentials: "include",
});

// Reauthentication logic
const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  // If token is expired or invalid, try refreshing
  if (result?.error?.status === 403) {
    const refreshResult = api.useRefreshTokenMutation().unwrap();

    if (refreshResult?.data) {
      const { accessToken } = refreshResult.data;
      const user = api.getState().auth?.user;

      // Update token in the store
      api.dispatch(setCredentials({ accessToken, user }));

      // Retry the original request with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      // Logout if refresh token is invalid
      api.dispatch(setLogout());
    }
  }

  return result;
};

// API slice configuration
export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
});
