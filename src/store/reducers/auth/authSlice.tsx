import { createSlice } from "@reduxjs/toolkit";
import { login, register } from "./auth.actions";
import { IAuthInitialState } from "./auth.interface";
import { RootState } from "../../index";
import { LOADING_STATUS } from "../../../utils/types";

const initialState: IAuthInitialState = {
  isLoading: LOADING_STATUS.IDLE,
  isFullFilled: false,
  statusCode: 0,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = LOADING_STATUS.PENDING;
      })
      .addCase(login.fulfilled, (state) => {
        state.isLoading = LOADING_STATUS.REJECTED;
      })
      .addCase(login.rejected, (state) => {
        state.isLoading = LOADING_STATUS.REJECTED;
      })
      .addCase(register.pending, (state) => {
        state.isLoading = LOADING_STATUS.PENDING;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoading = LOADING_STATUS.REJECTED;

        state.isFullFilled = true;
        state.statusCode = payload.status;
      })
      .addCase(register.rejected, (state) => {
        state.isLoading = LOADING_STATUS.REJECTED;
        state.statusCode = 0;
        state.isFullFilled = false;
      });
  },
});

export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
