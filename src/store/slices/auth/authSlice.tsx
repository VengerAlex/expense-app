import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { changePassword, login, register } from "./auth.actions";
import { IAuthInitialState, IRegisterResponse } from "./auth.interface";
import { RootState } from "../../index";
import { LOADING_STATUS, STATUS_CODE } from "../../../utils/types";

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
      // LOGIN
      .addCase(login.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(login.fulfilled, (state) => {
        state.loading = LOADING_STATUS.FULFILLED;
      })
      .addCase(login.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.statusCode = STATUS_CODE.DEFAULT;
      })

      // REGISTER
      .addCase(register.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        register.fulfilled,
        (state, action: PayloadAction<IRegisterResponse>) => {
          state.loading = LOADING_STATUS.FULFILLED;

          state.statusCode = action.payload.status;
        },
      )
      .addCase(register.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.statusCode = STATUS_CODE.DEFAULT;
      })

      // changePassword
      .addCase(changePassword.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(changePassword.fulfilled, (state) => {
        state.loading = LOADING_STATUS.FULFILLED;
      })
      .addCase(changePassword.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.statusCode = STATUS_CODE.DEFAULT;
      });
  },
});

export const authSelector = (state: RootState) => state.auth;

export default authSlice.reducer;
