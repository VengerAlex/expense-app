import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/types";
import { localstorageAuthService } from "../../services/localstorage.service";

export const PrivateRoute = () => {
  const location = useLocation();
  const token = localstorageAuthService.getAccessToken();

  if (!token)
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;

  return <Outlet />;
};
