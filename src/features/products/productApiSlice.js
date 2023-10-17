import { apiSlice } from "../../app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetch: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    create: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "POST",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    update: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "PUT",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    delete: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "DELETE",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    fetchByUser: builder.mutation({
      query: (credentials) => ({
        url: "/products/user-products",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    })
  })
});

export const {
  useFetchMutation,
  useFetchByUserMutation,
  useCreateMutation,
  useUpdateMutation,
  useDeleteMutation
} = productApiSlice;
