import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth.service";
import {
  ILoginProps,
  IRegisterProps,
  IRegisterResponse,
  ITokens,
} from "./auth.interface";

export const login = createAsyncThunk<ITokens, ILoginProps>(
  "auth/login",
  async ({ username, password }, thunkAPI) => {
    try {
      const response = await AuthService.login(username, password);

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const register = createAsyncThunk<IRegisterResponse, IRegisterProps>(
  "auth/register",
  async ({ username, password, displayName }, thunkAPI) => {
    try {
      const response = await AuthService.register(
        username,
        password,
        displayName,
      );

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
