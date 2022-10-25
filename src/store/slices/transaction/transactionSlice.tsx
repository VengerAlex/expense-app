import { ITransactionInitialState } from "./transaction.interface";
import { LOADING_STATUS } from "../../../utils/types";
import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { getTransactions } from "./transaction.actions";

const initialState: ITransactionInitialState = {
  loading: LOADING_STATUS.IDLE,
  transactions: null,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getCategories
      .addCase(getTransactions.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        state.loading = LOADING_STATUS.FULFILLED;

        console.log(action, "ACTION");
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const transactionSelector = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
