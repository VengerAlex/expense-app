import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/category.service";
import { ICategoryDto } from "./category.interface";

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

      return response.data.id;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const postCategory = createAsyncThunk<any, ICategoryDto>(
  "categories/create",
  async (dto, thunkAPI) => {
    try {
      const response = await CategoryService.create(dto);

      return response;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const updateCategory = createAsyncThunk<any, { id: number }>(
  "categories/delete",
  async ({ id }, thunkAPI) => {
    try {
      const response = await CategoryService.update(id);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);
