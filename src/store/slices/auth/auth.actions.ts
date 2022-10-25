import { toastr } from "react-redux-toastr";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../../../services/auth.service";
import {
  IChangePassword,
  ILoginProps,
  ILoginResponse,
  IRegisterProps,
  IRegisterResponse,
} from "./auth.interface";
import { toastError } from "../../../utils/helpers";

export const login = createAsyncThunk<
  ILoginResponse,
  ILoginProps,
  { rejectValue: string }
>("auth/login", async (dto, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(dto);
    toastr.success("Login", "Completed successfully");

    return response;
  } catch (error: any) {
    toastError(error);
    return rejectWithValue(error.response.data.message);
  }
});

export const register = createAsyncThunk<
  IRegisterResponse,
  IRegisterProps,
  { rejectValue: string }
>("auth/register", async (dto, { rejectWithValue }) => {
  try {
    const response = await AuthService.register(dto);
    toastr.success("Registration", "Completed successfully");

    return response;
  } catch (error: any) {
    toastError(error);
    return rejectWithValue(error.response.data.message);
  }
});

export const changePassword = createAsyncThunk<
  void,
  IChangePassword,
  { rejectValue: string }
>("auth/changePassword", async (dto, { rejectWithValue }) => {
  try {
    await AuthService.changePassword(dto);
  } catch (error: any) {
    toastError(error);
    return rejectWithValue(error.response.data.message);
  }
});
