import { createSlice } from "@reduxjs/toolkit";
import { changePassword, login, logout, register } from "./auth.actions";
import { IAuthInitialState } from "./auth.interface";
import { RootState } from "../../index";
import { LOADING_STATUS, STATUS_CODE } from "../../../utils/types";
import { changeInformation } from "../user/user.actions";

const initialState: IAuthInitialState = {
  loading: LOADING_STATUS.IDLE,
  statusCode: STATUS_CODE.DEFAULT,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })
      .addCase(login.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      .addCase(register.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = LOADING_STATUS.FULFILLED;

        state.statusCode = payload.status;
      })
      .addCase(register.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.statusCode = STATUS_CODE.DEFAULT;
      })

      .addCase(changePassword.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(changePassword.fulfilled, (state, { payload }) => {
        state.loading = LOADING_STATUS.FULFILLED;

        console.log(payload, "payload");
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.statusCode = STATUS_CODE.DEFAULT;
      });
  },
});

export const getAuthState = (state: RootState) => state.auth;

export default authSlice.reducer;
