import { Navigate, Outlet, useLocation } from "react-router-dom";
import { ROUTES } from "../../utils/types";
import { localstorageAuthService } from "../../services/localstorage.service";

export const PublicRoute = () => {
  const { state } = useLocation();
  const token = localstorageAuthService.getAccessToken();

  const pathGoBack = state?.from.path || ROUTES.HOME;

  if (token) return <Navigate to={pathGoBack} />;

  return <Outlet />;
};
