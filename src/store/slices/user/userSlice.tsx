import { PayloadAction, createSelector, createSlice } from "@reduxjs/toolkit";

import { IUser, LOADING_STATUS } from "../../../utils/types";
import { RootState } from "../../index";
import { changeInformation, deleteSelf, getMe, logout } from "./user.actions";
import { IUserInitialState } from "./user.interface";

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
      })
      .addCase(changeInformation.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // logout
      .addCase(logout.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(logout.fulfilled, (state) => {
        state.loading = LOADING_STATUS.FULFILLED;
        state.user = null;
      })
      .addCase(logout.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // delete
      .addCase(deleteSelf.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(deleteSelf.fulfilled, (state) => {
        state.loading = LOADING_STATUS.FULFILLED;
      })
      .addCase(deleteSelf.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const userSelector = (state: RootState) => state.user;

const userDisplayName = (state: RootState) => state.user.user?.displayName;

export const selectDisplayName = createSelector(
  userDisplayName,
  (displayName) => {
    const initials = displayName
      ?.split(" ")
      .map((value) => value[0])
      .join("");

    return [initials, displayName];
  },
);

export default userSlice.reducer;
