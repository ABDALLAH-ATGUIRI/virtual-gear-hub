import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, setLogout } from "@features/auth/authSlice";

const baseQuery = fetchBaseQuery({
  // eslint-disable-next-line no-undef
  baseUrl: env.REACT_APP_API_KEY,
  withCredentials: true,
  credentials: "include",
  jsonContentType: "application/json",
  prepareHeaders: (headers) => {
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    // send the refresh token to the server
    const refreshResult = await baseQuery(args, "/refresh-token", extraOptions);
    if (refreshResult?.data) {
      const user = api.getState().auth.user;
      // store the new token
      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      // retry the original query with the new token
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(setLogout());
    }
  }

  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({})
});
