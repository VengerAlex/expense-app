import { reducer as toastrReducer } from "react-redux-toastr";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import authSlice from "./slices/auth/authSlice";
import categorySlice from "./slices/category/categorySlice";

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  category: categorySlice,
  toastr: toastrReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
