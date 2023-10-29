import { Navigate, Outlet, useLocation } from "react-router";
import { selectCurrentToken } from "./authSlice";
import { useSelector } from "react-redux";

export const RequireAuth = () => {
  const token = useSelector(selectCurrentToken);
  const location = useLocation();

  return token ? (<Outlet />) : (<Navigate to="/home" state={{ from: location }} replace />);
};
