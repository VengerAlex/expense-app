import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { LOADING_STATUS } from "../../../utils/types";
import { RootState } from "../../index";
import {
  deleteCategory,
  getCategories,
  postCategory,
  updateCategory,
} from "./category.actions";
import { ICategory, ICategoryInitialState } from "./category.interface";

const initialState: ICategoryInitialState = {
  categories: [],
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

      // postCategory
      .addCase(postCategory.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        postCategory.fulfilled,
        (state, action: PayloadAction<ICategory>) => {
          state.loading = LOADING_STATUS.FULFILLED;
          state.categories?.push(action.payload);
        },
      )
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
      })

      // updateCategory
      .addCase(updateCategory.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        updateCategory.fulfilled,
        (state, action: PayloadAction<ICategory>) => {
          state.loading = LOADING_STATUS.FULFILLED;

          state.categories?.map((category: ICategory) => {
            if (category.id === action.payload.id) {
              category["label"] = action.payload.label;

              return category;
            }

            return category;
          });
        },
      )
      .addCase(updateCategory.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const categorySelector = (state: RootState) => state.category;
export const selectFirstCategory = (state: RootState) =>
  state.category.categories?.[0];

export default categorySlice.reducer;
