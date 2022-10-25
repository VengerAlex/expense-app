import { LOADING_STATUS, STATUS_CODE } from "../../../utils/types";

export interface IAuthInitialState {
  loading: LOADING_STATUS;
  statusCode: STATUS_CODE;
}

export interface ILoginResponse {
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
}

export interface IRegisterData extends IRegisterProps {
  id: number;
  admin: boolean;
}
export interface IRegisterResponse {
  data: IRegisterData;
  status: number;
}

export interface INewTokenResponse {
  accessToken: string;
}
