import { createSlice } from "@reduxjs/toolkit";

const categorySlice = createSlice({
  name: "category",
  initialState: {
    categories: [],
    loading: false
  },
  reducers: {
    setCategoriesCredentials: (state, action) => {
      const data = action.payload;
      state.categories = data;
    }
  }
});

export const { setCategoriesCredentials } = categorySlice.actions;

export const selectCurrentCategories = (state) => state.category.categories;

export default categorySlice.reducer;
