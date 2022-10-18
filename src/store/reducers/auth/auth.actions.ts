import { toastr } from "react-redux-toastr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth.service";
import {
  IChangePassword,
  ILoginProps,
  IRegisterProps,
  IRegisterThunkResponse,
  ITokens,
} from "./auth.interface";
import { toastError } from "../../../utils/helpers";
import { RootState } from "../../index";

export const login = createAsyncThunk<ITokens, ILoginProps>(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);
      toastr.success("Login", "Completed successfully");

      return response.data;
    } catch (error: any) {
      toastError(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const register = createAsyncThunk<
  IRegisterThunkResponse,
  IRegisterProps
>("auth/register", async ({ username, password, displayName }, thunkAPI) => {
  try {
    const response = await AuthService.register(
      username,
      password,
      displayName,
    );
    toastr.success("Registration", "Completed successfully");

    return { status: response.status };
  } catch (error: any) {
    toastError(error);
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});

export const changePassword = createAsyncThunk<any, IChangePassword>(
  "auth/changePassword",
  async ({ oldPassword, newPassword }, thunkAPI) => {
    try {
      const response = await AuthService.changePassword(
        oldPassword,
        newPassword,
      );

      console.log(response);

      toastr.success("Password has been changes", "Completed successfully");
    } catch (error) {
      toastError(error);
    }
  },
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const response = await AuthService.logout();

    return response.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error.response.data.message);
  }
});
