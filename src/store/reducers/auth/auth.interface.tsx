import { LOADING_STATUS } from "../../../utils/types";

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
  isLoading: LOADING_STATUS;
  isFullFilled: boolean;
  statusCode: number;
}

export interface ILoginProps {
  username: string;
  password: string;
}

export interface IRegisterProps extends ILoginProps {
  displayName: string;
  username: string;
}
