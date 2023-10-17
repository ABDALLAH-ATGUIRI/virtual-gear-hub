import { apiSlice } from "../../app/api/apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCategories: builder.mutation({
      query: (credentials) => ({
        url: "/categories",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: "/categories",
        method: "POST",
        withCredentials: true,
        params: { ...credentials }
      })
    })
  })
});

export const { useFetchCategoriesMutation, useCreateCategoryMutation } = categoryApiSlice;
