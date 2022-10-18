import { createSlice } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { LOADING_STATUS } from "../../../utils/types";
import { changeInformation, getMe } from "./user.actions";
import { RootState } from "../../index";
import { logout } from "../auth/auth.actions";

const initialState: IUserInitialState = {
  user: null,
  loading: LOADING_STATUS.IDLE,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getMe.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(getMe.fulfilled, (state, { payload }) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.user = payload;
      })
      .addCase(getMe.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      .addCase(changeInformation.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(changeInformation.fulfilled, (state, { payload }) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.user = payload;
      })
      .addCase(changeInformation.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      .addCase(logout.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const getUserState = (state: RootState) => state.user;

export default userSlice.reducer;
