import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth.actions";
import { IAuthInitialState } from "./auth.interface";
import { RootState } from "../../index";

const initialState: IAuthInitialState = {
  isLoading: false,
  errorSignIn: "",
  errorSignUp: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = false;

        state.errorSignIn = "";
        state.errorSignUp = "";
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorSignIn = payload as string;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = false;

        state.errorSignUp = "";
        state.errorSignIn = "";
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.errorSignUp = payload as string;
      });
  },
});

export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
