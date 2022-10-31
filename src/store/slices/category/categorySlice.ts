import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LOADING_STATUS } from "../../../utils/types";
import { RootState } from "../../index";
import { ICategory, ICategoryInitialState } from "./category.interface";
import {
  deleteCategory,
  getCategories,
  postCategory,
} from "./category.actions";

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
        state.categories = action.payload.content.filter(
          (category: ICategory) => category.id !== -1,
        );
      })
      .addCase(getCategories.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // postCategory
      .addCase(postCategory.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(postCategory.fulfilled, (state) => {
        state.loading = LOADING_STATUS.FULFILLED;
      })
      .addCase(postCategory.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // deleteCategory
      .addCase(deleteCategory.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        deleteCategory.fulfilled,
        (state, action: PayloadAction<number>) => {
          state.loading = LOADING_STATUS.FULFILLED;

          if (state.categories) {
            state.categories = state?.categories.filter(
              (category) => category.id !== action.payload,
            );
          }
        },
      )
      .addCase(deleteCategory.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const categorySelector = (state: RootState) => state.category;

export default categorySlice.reducer;
