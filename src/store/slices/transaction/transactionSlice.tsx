import {
  ITransaction,
  ITransactionInitialState,
} from "./transaction.interface";
import { LOADING_STATUS } from "../../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import { createTransaction, getTransactions } from "./transaction.actions";

const initialState: ITransactionInitialState = {
  loading: LOADING_STATUS.IDLE,
  transactions: null,
  totalReceipt: 0,
  totalExpense: 0,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // getTransactions
      .addCase(getTransactions.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(getTransactions.fulfilled, (state, action) => {
        const allTransactions = action.payload.content;
        state.loading = LOADING_STATUS.FULFILLED;
        state.transactions = allTransactions;

        allTransactions.forEach((transaction: ITransaction) => {
          if (transaction.amount < 0) {
            state.totalExpense += transaction.amount;
          } else {
            state.totalReceipt += transaction.amount;
          }
        });
      })
      .addCase(getTransactions.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // createTransactions
      .addCase(createTransaction.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        createTransaction.fulfilled,
        (state, action: PayloadAction<ITransaction>) => {
          state.loading = LOADING_STATUS.FULFILLED;

          console.log(action.payload, "action.payload");
        },
      )
      .addCase(createTransaction.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const transactionSelector = (state: RootState) => state.transaction;

export default transactionSlice.reducer;
