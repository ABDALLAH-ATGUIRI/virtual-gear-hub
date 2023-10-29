import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, setLogout } from "../../features/auth/authSlice";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8000/api",
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = Cookies.get("token")?.replace(/%/g, "|");

    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  if (result?.error?.originalStatus === 403) {
    console.log("sending refresh token");
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
