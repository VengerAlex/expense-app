import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/category.service";

export const getCategories = createAsyncThunk<any>(
  "categories",
  async (_, thunkAPI) => {
    try {
      const response = await CategoryService.getAll();

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const deleteCategory = createAsyncThunk<any, { id: number }>(
  "categories/delete",
  async ({ id }, thunkAPI) => {
    try {
      const response = await CategoryService.deleteOne(id);

      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);
