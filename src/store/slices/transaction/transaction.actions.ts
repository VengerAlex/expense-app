import { createAsyncThunk } from "@reduxjs/toolkit";
import TransactionService from "../../../services/transaction.service";
import { ITransactionDto, ITransactionParams } from "./transaction.interface";
import { toastError } from "../../../utils/helpers";
import { toastr } from "react-redux-toastr";

const TRANSACTION = {
  ALL: "transactions",
  POST: "transactions/post",
  DELETE: "transactions/delete",
};

export const getTransactions = createAsyncThunk<any, ITransactionParams>(
  TRANSACTION.ALL,
  async (transactionParams, thunkAPI) => {
    try {
      const { dateOrder, idOrder, searchValue, categoryId } = transactionParams;
      const response = await TransactionService.getAll(
        dateOrder,
        idOrder,
        searchValue,
        categoryId,
      );

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const createTransaction = createAsyncThunk<any, ITransactionDto>(
  TRANSACTION.POST,
  async (dto, thunkAPI) => {
    try {
      const response = await TransactionService.create(dto);

      toastr.success("Created", "Transaction successfully");

      return response;
    } catch (error: any) {
      toastError(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);

export const deleteTransaction = createAsyncThunk<any, number>(
  TRANSACTION.DELETE,
  async (id, thunkAPI) => {
    try {
      const response = await TransactionService.delete(id);

      toastr.success("Deleted", "Transaction successfully");

      return response;
    } catch (error: any) {
      toastError(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
