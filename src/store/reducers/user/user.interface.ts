export interface IRegisterResponse {
  username: string;
  displayName: string;
  id: number;
  admin: boolean;
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}

export interface IUserInitialState {
  user: IRegisterResponse | null;
  isLoading: boolean;
  errorSignIn: string;
}

export interface ILoginProps {
  username: string;
  password: string;
}
