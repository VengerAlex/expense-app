import { LOADING_STATUS } from "../../../utils/types";

export interface ICategoryInitialState {
  categories: ICategory[] | null;
  loading: LOADING_STATUS;
}

export interface ICategory {
  id: number;
  label: string;
  userId: string;
}
