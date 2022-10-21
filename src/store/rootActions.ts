import * as authActions from "./slices/auth/auth.actions";
import * as userActions from "./slices/user/user.actions";

export const allActions = {
  ...authActions,
  ...userActions,
};
