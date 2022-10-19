import { createAsyncThunk } from "@reduxjs/toolkit";
import UserService from "../../../services/user.service";
import { IUser } from "../../../utils/types";
import AuthService from "../../../services/auth.service";
import { toastError } from "../../../utils/helpers";

export const getMe = createAsyncThunk<IUser>(
  "user/getMe",
  async (_, thunkAPI) => {
    try {
      const response = await UserService.getMe();

      return response.data;
    } catch (error: any) {
      console.log(error);
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

export const logout = createAsyncThunk("auth/logout", async () => {
  await AuthService.logout();
});
