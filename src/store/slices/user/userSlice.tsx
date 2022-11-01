import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserInitialState } from "./user.interface";
import { IUser, LOADING_STATUS } from "../../../utils/types";
import { changeInformation, getMe, logout } from "./user.actions";
import { RootState } from "../../index";

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
      });
  },
});

export const userSelector = (state: RootState) => state.user;

const userDisplayName = (state: RootState) => state.user.user?.displayName;

export const selectDisplayName = createSelector(
  userDisplayName,
  (displayName) => {
    const INITIALS = displayName
      ?.split(" ")
      .map((value) => value[0])
      .join("");

    return [INITIALS, displayName];
  },
);

export default userSlice.reducer;
