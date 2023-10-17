import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pagination: [],
    currentPage: 1,
    loading: false
  },
  reducers: {
    setProductsCredentials: (state, action) => {
      const data = action.payload;
      state.products = data.products;
      state.pagination = {
        currentPage: data.current_page,
        perPage: data.per_page,
        totalPages: data.total,
        lastPage: data.last_page
      };
    }
  }
});

export const { setProductsCredentials } = productSlice.actions;

export const selectCurrentProducts = (state) => state?.product?.products;
export const selectCurrentPagination = (state) => state.product.pagination;

export default productSlice.reducer;
