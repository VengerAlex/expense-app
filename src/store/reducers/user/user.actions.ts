import { createAsyncThunk } from "@reduxjs/toolkit";
import { ILoginProps, ITokens } from "./user.interface";
import AuthService from "../../../services/auth.service";

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
