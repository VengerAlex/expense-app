import * as authActions from "./slices/auth/auth.actions";
import * as userActions from "./slices/user/user.actions";
import * as categoryActions from "./slices/category/category.actions";
import * as transactionActions from "./slices/transaction/transaction.actions";

export const allActions = {
  ...authActions,
  ...userActions,
  ...categoryActions,
  ...transactionActions,
};
