import { createAsyncThunk } from "@reduxjs/toolkit";

import AuthService from "../../../services/auth.service";
import UserService from "../../../services/user.service";
import { toastError } from "../../../utils/helpers";
import { IUser } from "../../../utils/types";

export const getMe = createAsyncThunk<IUser>(
  "user/getMe",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getMe();

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const changeInformation = createAsyncThunk<any, any>(
  "user/changeInformation",
  async ({ username, displayName }, thunkAPI) => {
    try {
      const response = await UserService.changeInformation(
        username,
        displayName,
      );

      return response.data;
    } catch (error: any) {
      toastError(error);

      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const logout = createAsyncThunk("user/logout", async () => {
  AuthService.logout();
});

export const deleteSelf = createAsyncThunk("user/delete", async () => {
  await UserService.deleteSelf();
});
