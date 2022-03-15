import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reducers/authReducer";
import authService from "./Services/authService";
import globalReducer from "./reducers/globalReducer";
import categoryService from "./Services/categoryService";
const Store = configureStore({
  reducer: {
    [authService.reducerPath]: authService.reducer,
    [categoryService.reducerPath]:categoryService.reducer,
    authReducer: authReducer,
    globalReducer: globalReducer
  },
  middleware:(getDefaultMiddleware)=> getDefaultMiddleware().concat([categoryService.middleware])
});
export default Store;
