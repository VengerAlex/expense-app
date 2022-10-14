export enum ROUTES {
  Home = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  RESET = "/reset",
  NotFound = "*",
}

export enum LOADING_STATUS {
  PENDING = "PENDING",
  IDLE = "IDLE",
  REJECTED = "REJECTED",
}

export enum RESET_PAGE {
  EMAIL = "EMAIL",
  PASSWORDS = "PASSWORDS",
  NOTIFICATION = "NOTIFICATION",
}

export enum SIGN_UP {
  FORM = "FORM",
  NOTIFICATION = "NOTIFICATION",
}

export interface IResetPassword {
  email: string;
}
export interface IResetForm {
  password: string;
  confirmedPassword: string;
}
export interface ISignUpFormValue {
  fullName: string;
  username: string;
  password: string;
  confirmedPassword: string;
  isConfirmed: boolean;
}
export interface ISignInForm {
  username: string;
  password: string;
  isRememberMe: string;
}
