import { LOADING_STATUS, SORT } from "../../../utils/types";
import { Dayjs } from "dayjs";

export interface ITransactionInitialState {
  transactions: ITransaction[] | null;
  loading: LOADING_STATUS;
  totalReceipt: number;
  totalExpense: number;
  sort: [{ date: SORT }, { id: SORT }];
}

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
  searchValue: string;
};
