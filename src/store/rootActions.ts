import * as authActions from "./reducers/auth/auth.actions";
import * as userActions from "./reducers/user/user.actions";

export const allActions = {
  ...authActions,
  ...userActions,
};
