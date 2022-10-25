import { createAsyncThunk } from "@reduxjs/toolkit";
import TransactionService from "../../../services/transaction.service";

export const getTransactions = createAsyncThunk<any>(
  "categories",
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
