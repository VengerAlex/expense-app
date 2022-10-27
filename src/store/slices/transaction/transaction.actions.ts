import { createAsyncThunk } from "@reduxjs/toolkit";
import TransactionService from "../../../services/transaction.service";
import { ITransactionDto } from "./transaction.interface";
import { toastError } from "../../../utils/helpers";
import { toastr } from "react-redux-toastr";

export const getTransactions = createAsyncThunk<any>(
  "transactions",
  async (_, thunkAPI) => {
    try {
      const response = await TransactionService.getAll();

      console.log(response, "RESPONSE");
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
      const response = await TransactionService.getAll();

      toastr.success("Created", "Transaction successfully");
      return response.data;
    } catch (error: any) {
      toastError(error);
      return thunkAPI.rejectWithValue(error.response.data.message);
    }
  },
);
