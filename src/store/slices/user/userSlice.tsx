import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { IUser, LOADING_STATUS, STATUS_CODE } from "../../../utils/types";
import { changeInformation, getMe, logout } from "./user.actions";
import { RootState } from "../../index";

const initialState: IUserInitialState = {
  user: null,
  loading: LOADING_STATUS.IDLE,
  status: STATUS_CODE.DEFAULT,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getMe
      .addCase(getMe.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(getMe.fulfilled, (state, action: PayloadAction<IUser>) => {
        state.loading = LOADING_STATUS.FULFILLED;
        state.user = action.payload;
      })
      .addCase(getMe.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // changeInformation
      .addCase(changeInformation.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(changeInformation.fulfilled, (state, action) => {
        state.loading = LOADING_STATUS.FULFILLED;
        state.user = action.payload.data;
        state.status = action.payload.status;
      })
      .addCase(changeInformation.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // logout
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

export const getUserSelector = (state: RootState) => state.user;

export default userSlice.reducer;
