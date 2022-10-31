export enum ROUTES {
  HOME = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  RESET = "/reset",
  ANALYTICS = "/analytics",
  CATEGORIES = "/categories",
  SETTINGS = "/settings",
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
  SUCCESSFUL = 200,
}
export enum SETTINGS {
  EXTENDED = "EXTENDED",
  PASSWORDS = "PASSWORDS",
  NOTIFICATION = "NOTIFICATION",
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

export interface IUser {
  username: string;
  displayName: string;
  id: number;
  admin: boolean;
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

export interface IExtendedSettingsForm {
  username: string;
  displayName: string;
}

export interface IResetProfileForm {
  oldPassword: string;
  password: string;
  confirmedPassword: string;
}

export interface ICreateCategoryForm {
  label: string;
}

export interface ICreateTransactionForm {
  label: string;
  amount: number;
}

export enum SORT {
  ASC = "asc",
  DESC = "desc",
}
