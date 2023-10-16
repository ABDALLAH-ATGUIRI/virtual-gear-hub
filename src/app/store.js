import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "../features/auth/authSlice";
import modelReducer from "../features/modelSlice";
import productReducer from "../features/products/productSlice";
import categoryReducer from "../features/categories/categorySlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    model: modelReducer,
    product: productReducer,
    category: categoryReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;
