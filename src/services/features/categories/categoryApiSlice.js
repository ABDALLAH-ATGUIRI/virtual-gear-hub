import { apiSlice } from "../../api/apiSlice";

export const categoryApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCategories: builder.mutation({
      query: (credentials) => ({
        url: "/categories",
        method: "GET",
        params: { ...credentials }
      }),
    }),
    createCategory: builder.mutation({
      query: (credentials) => ({
        url: "/categories",
        method: "POST",
        params: { ...credentials }
      })
    }),
    updateCategory: builder.mutation({
      query: (credentials) => ({
        url: "/categories",
        method: "PUT",
        params: { ...credentials }
      })
    }),
  })
});

export const { useFetchCategoriesMutation, useCreateCategoryMutation } = categoryApiSlice;
