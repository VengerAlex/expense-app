import { toastr } from "react-redux-toastr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth.service";
import {
  IChangePassword,
  ILoginProps,
  ILoginResponse,
  IRegisterProps,
} from "./auth.interface";
import { toastError } from "../../../utils/helpers";

export const login = createAsyncThunk<ILoginResponse, ILoginProps>(
  "auth/login",
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const response = await AuthService.login(username, password);
      toastr.success("Login", "Completed successfully");

      return response.data;
    } catch (error: any) {
      toastError(error);
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const register = createAsyncThunk<any, IRegisterProps>(
  "auth/register",
  async ({ username, password, displayName }, { rejectWithValue }) => {
    try {
      const response = await AuthService.register(
        username,
        password,
        displayName,
      );
      toastr.success("Registration", "Completed successfully");

      return response;
    } catch (error: any) {
      toastError(error);
      return rejectWithValue(error.response.data.message);
    }
  },
);

export const changePassword = createAsyncThunk<any, IChangePassword>(
  "auth/changePassword",
  async ({ oldPassword, newPassword }, { rejectWithValue }) => {
    try {
      await AuthService.changePassword(oldPassword, newPassword);

      toastr.success("Password has been changes", "Completed successfully");
    } catch (error: any) {
      toastError(error);
      return rejectWithValue(error.response.data.message);
    }
  },
);
