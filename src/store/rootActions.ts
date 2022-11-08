import * as authActions from "./slices/auth/auth.actions";
import * as categoryActions from "./slices/category/category.actions";
import * as transactionActions from "./slices/transaction/transaction.actions";
import * as userActions from "./slices/user/user.actions";

export const allActions = {
  ...authActions,
  ...userActions,
  ...categoryActions,
  ...transactionActions,
};
