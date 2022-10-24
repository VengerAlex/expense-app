import { reducer as toastrReducer } from "react-redux-toastr";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/user/userSlice";
import authSlice from "./slices/auth/authSlice";
import dashboardSlice from "./slices/dashboard/dashboardSlice";

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
  dashboard: dashboardSlice,
  toastr: toastrReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
