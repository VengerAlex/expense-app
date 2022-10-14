import { toastr } from "react-redux-toastr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth.service";
import {
  ILoginProps,
  IRegisterProps,
  IRegisterThunkResponse,
  ITokens,
} from "./auth.interface";
import { toastError } from "../../../utils/helpers";

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
