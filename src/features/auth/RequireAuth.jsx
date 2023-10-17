import { Navigate, Outlet, useLocation } from "react-router";
import Cookies from "js-cookie";

export const RequireAuth = () => {
  const token = Cookies.get("token");
  const location = useLocation();
  return token ? (<Outlet />) : (<Navigate to="/" state={{ from: location }} replace />);
};
