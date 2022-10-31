import { createAsyncThunk } from "@reduxjs/toolkit";
import CategoryService from "../../../services/category.service";
import { ICategoryDto } from "./category.interface";
import { toastError } from "../../../utils/helpers";
import { toastr } from "react-redux-toastr";

const CATEGORY = {
  ALL: "category",
  POST: "category/post",
  DELETE: "category/delete",
};

export const getCategories = createAsyncThunk<any, string>(
  CATEGORY.ALL,
  async (label, thunkAPI) => {
    try {
      const response = await CategoryService.getAll(label);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const deleteCategory = createAsyncThunk<any, { id: number }>(
  CATEGORY.DELETE,
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
  CATEGORY.POST,
  async (dto, thunkAPI) => {
    try {
      const response = await CategoryService.create(dto);

      toastr.success("Category", "Created successfully");
      return response;
    } catch (error: any) {
      if (error.response) {
        toastError(error);
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

      toastr.success("Category", "Updated successfully");
      return response.data;
    } catch (error: any) {
      if (error.response) {
        toastError(error);
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);
