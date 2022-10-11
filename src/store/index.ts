import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userSlice from "./reducers/user/userSlice";
import authSlice from "./reducers/auth/authSlice";

const rootReducer = combineReducers({
  user: userSlice,
  auth: authSlice,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
