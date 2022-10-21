import { IUser, LOADING_STATUS } from "../../../utils/types";

export interface IUserInitialState {
  user: IUser | null;
  loading: LOADING_STATUS;
}
