import { createAsyncThunk } from "@reduxjs/toolkit";
import TransactionService from "../../../services/transaction.service";
import { ITransactionDto, ITransactionParams } from "./transaction.interface";
import { toastError } from "../../../utils/helpers";
import { toastr } from "react-redux-toastr";

export const getTransactions = createAsyncThunk<any, ITransactionParams>(
  "transactions",
  async (transactionParams, thunkAPI) => {
    try {
      const { dateOrder, idOrder } = transactionParams;
      const response = await TransactionService.getAll(dateOrder, idOrder);

      return response.data;
    } catch (error: any) {
      if (error.response) {
        return thunkAPI.rejectWithValue(error.response.data.message);
      }
    }
  },
);

export const createTransaction = createAsyncThunk<any, ITransactionDto>(
  "transactions/create",
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
