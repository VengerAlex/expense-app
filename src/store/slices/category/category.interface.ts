import { LOADING_STATUS } from "../../../utils/types";

export interface ICategoryInitialState {
  categories: ICategory[] | null;
  loading: LOADING_STATUS;
}

export interface ICategory {
  id: number;
  label: string;
  userId: number | undefined;
  color?: string;
}

export type ICategoryDto = Omit<ICategory, "id">;
