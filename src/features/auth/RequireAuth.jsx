import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuthUserQuery } from "@features/auth/authApiSlice";

export const RequireAuth = () => {
	const { data: user, isLoading } = useAuthUserQuery();
	const location = useLocation();

	if (isLoading) {
		return <div>Loading...</div>;
	}

	return user ? (
		<Outlet />
	) : (
		<Navigate to="/home" state={{ from: location }} replace />
	);
};
