import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { showAlert } from "@/services/features/alertSlice";
import { useLogoutMutation } from "@features/auth/authApiSlice";
import { setLogout } from "@features/auth/authSlice";
import { useCallback } from "react";
import { BiPowerOff } from "react-icons/bi";

const LogoutButton = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [logout] = useLogoutMutation();

	const handleLogout = useCallback(async () => {
		try {
			const result = await logout().unwrap();
			if (result.success) {
				dispatch(setLogout());
				navigate("/home");
				dispatch(
					showAlert({ message: "Logout successful", type: "success" })
				);
			}
		} catch (error) {
			dispatch(showAlert({ message: "Logout failed", type: "error" }));
		}
	}, [logout, dispatch, navigate]);

	return (
		<Button
			startIcon={<BiPowerOff size={20} className="[&>*]:!text-white" />}
            className="w-full !font-bold"
            color="error"
            variant="contained"
            onClick={handleLogout}
		>
			Logout
		</Button>
	);
};

export default LogoutButton;
