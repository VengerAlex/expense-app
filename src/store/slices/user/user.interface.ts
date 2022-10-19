import { IUser, LOADING_STATUS, STATUS_CODE } from "../../../utils/types";

export interface IUserInitialState {
  user: IUser | null;
  loading: LOADING_STATUS;
  status: STATUS_CODE;
}
