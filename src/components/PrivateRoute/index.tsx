import { Navigate, Outlet, useLocation } from "react-router-dom";
import localstorageService from "../../services/localstorage.service";
import { ROUTES } from "../../utils/types";

const ProtectedRoute = () => {
  const location = useLocation();
  const token = localstorageService.get("accessToken");

  if (!token)
    return <Navigate to={ROUTES.SIGN_IN} state={{ from: location }} replace />;

  return <Outlet />;
};

export default ProtectedRoute;
