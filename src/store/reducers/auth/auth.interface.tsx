import { LOADING_STATUS, STATUS_CODE } from "../../../utils/types";

export interface IRegisterResponse {
  username: string;
  displayName: string;
  id: number;
  admin: boolean;
}

export interface IRegisterThunkResponse {
  status: number;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IAuthInitialState {
  loading: LOADING_STATUS;
  statusCode: STATUS_CODE;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface IRegisterProps extends ILoginProps {
  displayName: string;
  username: string;
}
