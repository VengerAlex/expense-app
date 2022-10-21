import { createSlice } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../utils/types";
import { RootState } from "../../index";
import { ICategoryInitialState } from "./category.interface";
import { deleteCategory, getCategories } from "./category.actions";

const initialState: ICategoryInitialState = {
  categories: null,
  loading: LOADING_STATUS.IDLE,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getCategories
      .addCase(getCategories.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = LOADING_STATUS.FULFILLED;
        state.categories = action.payload.content;
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // deleteCategory
      .addCase(deleteCategory.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = LOADING_STATUS.FULFILLED;

        console.log(action);
      })
      .addCase(deleteCategory.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const categorySelector = (state: RootState) => state.category;

export default categorySlice.reducer;
