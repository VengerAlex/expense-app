import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/category.service";

export const getCategories = createAsyncThunk<any>(
  "categories",
  async (_, thunkAPI) => {
    try {
      const response = await CategoryService.getAll();

      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
