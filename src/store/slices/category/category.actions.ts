import { createAsyncThunk } from "@reduxjs/toolkit";
import { toastr } from "react-redux-toastr";

import CategoryService from "../../../services/category.service";
import { toastError } from "../../../utils/helpers";
import { ICategoryDto } from "./category.interface";

const CATEGORY = {
  ALL: "category",
  POST: "category/post",
  DELETE: "category/delete",
  UPDATE: "category/update",
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

export const deleteCategory = createAsyncThunk<
  any,
  number,
  { rejectValue: string }
>(CATEGORY.DELETE, async (id, thunkAPI) => {
  try {
    const response = await CategoryService.deleteOne(id);
    toastr.success("Category", "Deleted successfully");

    return response.id;
  } catch (error: any) {
    toastError(error);
    if (error.response) {
      return thunkAPI.rejectWithValue("sasas");
    }
  }
});

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

export const updateCategory = createAsyncThunk<
  any,
  { id: number; label: string }
>(CATEGORY.UPDATE, async ({ id, label }, thunkAPI) => {
  try {
    const response = await CategoryService.update(id, label);

    toastr.success("Category", "Updated successfully");
    return response;
  } catch (error: any) {
    if (error.response) {
      toastError(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  }
});
