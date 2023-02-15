import { useEffect } from "react";

import { Navigate, Outlet, useLocation } from "react-router-dom";

import { useActions } from "../../hooks/useActions";
import { useAppSelector } from "../../hooks/useAppSelector";
import { localstorageAuthService } from "../../services/localstorage.service";
import { userSelector } from "../../store/slices/user/userSlice";
import { ROUTES } from "../../utils/types";

export const PrivateRoute = () => {
  const location = useLocation();
  const { getMe } = useActions();

  const token = localstorageAuthService.getAccessToken();
  const { user } = useAppSelector(userSelector);

  useEffect(() => {
    if (!user && token) {
      getMe();
    }
  }, [user, token]);

  if (!token)
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;

  return <Outlet />;
};
