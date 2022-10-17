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
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export enum STATUS_CODE {
  DEFAULT = 0,
  CREATED = 201,
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
