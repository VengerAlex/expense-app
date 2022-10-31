import {
  ITransaction,
  ITransactionInitialState,
} from "./transaction.interface";
import { LOADING_STATUS, SORT } from "../../../utils/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../index";
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
} from "./transaction.actions";

const initialState: ITransactionInitialState = {
  loading: LOADING_STATUS.IDLE,
  transactions: null,
  totalReceipt: 0,
  totalExpense: 0,
  sort: [{ date: SORT.ASC }, { id: SORT.ASC }],
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    sortHandler: (state, action: PayloadAction<"date" | "id">) => {
      state.sort.map((elem: any) => {
        if (elem[action.payload]) {
          elem[action.payload] =
            elem[action.payload] === SORT.ASC ? SORT.DESC : SORT.ASC;
        }

        return elem;
      });
    },
  },
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
        state.totalExpense = 0;
        state.totalReceipt = 0;

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
          state.transactions?.push(action.payload);
          if (action.payload.amount > 0) {
            state.totalReceipt += action.payload.amount;
          } else {
            state.totalExpense += action.payload.amount;
          }
        },
      )
      .addCase(createTransaction.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      })

      // deleteTransactions
      .addCase(deleteTransaction.pending, (state) => {
        state.loading = LOADING_STATUS.PENDING;
      })
      .addCase(
        deleteTransaction.fulfilled,
        (state, action: PayloadAction<ITransaction>) => {
          state.loading = LOADING_STATUS.FULFILLED;

          state.transactions =
            state.transactions?.filter(
              (transactionElem) => transactionElem.id !== action.payload.id,
            ) || [];

          if (action.payload.amount > 0) {
            state.totalReceipt -= action.payload.amount;
          } else {
            state.totalExpense -= action.payload.amount;
          }
        },
      )
      .addCase(deleteTransaction.rejected, (state) => {
        state.loading = LOADING_STATUS.REJECTED;
      });
  },
});

export const transactionSelector = (state: RootState) => state.transaction;

export const { sortHandler } = transactionSlice.actions;
export default transactionSlice.reducer;
