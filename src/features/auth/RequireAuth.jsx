import { Navigate, Outlet, useLocation } from "react-router";
import { selectCurrentToken } from "./authSlice";

export const RequireAuth = () => {
  const token = selectCurrentToken()
  const location = useLocation();
  
  return token ? (<Outlet />) : (<Navigate to="/" state={{ from: location }} replace />);
};
