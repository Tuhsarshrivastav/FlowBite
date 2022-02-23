import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import authService from "./Services/authService";
import categoryService from "./Services/categoryService";
const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [categoryService.reducerPath]:categoryService.reducer,
    authReducer: authReducer,
  },
});
export default Store;
