import { LOADING_STATUS } from "../../../utils/types";

export interface ITransactionInitialState {
  transactions: ITransaction[] | null;
  loading: LOADING_STATUS;
}

export interface ITransaction {
  id: number;
  label: string;
  date: string;
  amount: number;
  categoryId: number;
  userId: number;
}

export type ITransactionDto = Omit<ITransaction, "id">;
