import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/login",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    register: builder.mutation({
      query: (credentials) => ({
        url: "/register",
        method: "POST",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    logout: builder.mutation({
      query: (credentials) => ({
        url: "/logout",
        method: "POST",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    refreshToken: builder.mutation({
      query: (credentials) => ({
        url: "/refresh-token",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    })
  })
});

export const { useLoginMutation , useRegisterMutation , useLogoutMutation, useRefreshTokenMutation } = authApiSlice;
