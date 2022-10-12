export enum ROUTES {
  Home = "/",
  SIGN_IN = "/sign-in",
  SIGN_UP = "/sign-up",
  RESET = "/reset",
  NotFound = "*",
}

export enum LOADING_STATUS {
  PENDING = "PENDING",
  FULFILLED = "FULFILLED",
  REJECTED = "REJECTED",
}

export enum RESET_PAGE {
  EMAIL = "EMAIL",
  PASSWORDS = "PASSWORDS",
  NOTIFICATION = "NOTIFICATION",
}

export const showErrorText = (errors: any, value: string) => {
  return errors[value]?.message ? errors[value]?.message : " ";
};
