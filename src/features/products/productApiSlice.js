import { apiSlice } from "../../app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchAllProducts: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    createProduct: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "POST",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    updateProduct: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "PUT",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    deleteProduct: builder.mutation({
      query: (credentials) => ({
        url: "/products",
        method: "DELETE",
        withCredentials: true,
        params: { ...credentials }
      })
    }),
    fetchMyProducts: builder.mutation({
      query: (credentials) => ({
        url: "/products/my-products",
        method: "GET",
        withCredentials: true,
        params: { ...credentials }
      })
    })
  })
});

export const {
  useFetchAllProductsMutation,
  useUpdateProductMutation,
  useCreateProductMutation,
  useDeleteProductMutation,
  useFetchMyProductsMutation
} = productApiSlice;
