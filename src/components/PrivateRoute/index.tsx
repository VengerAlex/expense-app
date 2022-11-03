import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/types";
import { localstorageAuthService } from "../../services/localstorage.service";
import { useAppSelector } from "../../hooks/useAppSelector";
import { userSelector } from "../../store/slices/user/userSlice";
import { useActions } from "../../hooks/useActions";
import { useEffect } from "react";

export const PrivateRoute = () => {
  const location = useLocation();
  const { getMe, getCategories } = useActions();

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
