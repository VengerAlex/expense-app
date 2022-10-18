import { LOADING_STATUS, STATUS_CODE } from "../../../utils/types";

export interface IAuthInitialState {
  loading: LOADING_STATUS;
  statusCode: STATUS_CODE;
}
export interface IRegisterThunkResponse {
  status: number;
}
export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
export interface ILoginProps {
  username: string;
  password: string;
}
export interface IChangePassword {
  oldPassword: string;
  newPassword: string;
}
export interface IRegisterProps extends ILoginProps {
  displayName: string;
  username: string;
}
