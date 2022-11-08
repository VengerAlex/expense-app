import { Dayjs } from "dayjs";

import { LOADING_STATUS, SORT } from "../../../utils/types";

export interface ITransactionInitialState {
  transactions: ITransaction[] | null;
  loading: LOADING_STATUS;
  totalReceipt: number;
  totalExpense: number;
  sort: Record<sortKeys, SORT>;
}

export type sortKeys = "date" | "id";

export interface ITransaction {
  id: number;
  label: string;
  date: Dayjs | Date;
  amount: number;
  categoryId: number;
  userId: number;
}

export type ITransactionDto = Omit<ITransaction, "id">;

export type ITransactionParams = {
  dateOrder: SORT;
  idOrder: SORT;
  searchValue: string | null;
  categoryId: string | null;
};
