import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice";
import authReducer from "@features/auth/authSlice";
import dialogsReducer from "@features/dialogsReducer";
import productReducer from "@features/products/productSlice";
import categoryReducer from "@features/categories/categorySlice";
import alertReducer from "@features/alertSlice";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    dialogs: dialogsReducer,
    product: productReducer,
    category: categoryReducer,
    alert: alertReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true
});

export default store;
