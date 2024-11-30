import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography } from "@mui/material";
import "./style.css";

import { showAlert } from "@/services/features/alertSlice";
import DialogDefault from "@/components/DialogDefault";
import FormData from "@/components/global/FormData";

import { useLoginMutation } from "@features/auth/authApiSlice";
import { setCredentials } from "@features/auth/authSlice";
import { closeDialog } from "@features/dialogsReducer";

const INIT_FORM = [
	{ name: "email", label: "Email", type: "email", required: true },
	{ name: "password", label: "Password", type: "password", required: true },
	{ name: "remember_me", label: "Remember me", type: "checkbox" },
];

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [login, { isLoading }] = useLoginMutation();

	const handleSubmit = async (formData) => {
		try {
			const userData = await login(formData).unwrap();
			dispatch(setCredentials(userData));

			dispatch(
				showAlert({
					message: "Successfully logged in!",
					type: "success",
				})
			);

			// Close dialog and navigate after a short delay
			setTimeout(() => {
				dispatch(closeDialog("login-user"));
				navigate("/home");
			}, 1000);
		} catch (error) {
			const errorMessage =
				error?.data?.message || "Login Failed . Please try again.";

			dispatch(showAlert({ message: errorMessage, type: "error" }));
		}
	};

	return (
		<DialogDefault title="Create your account" dialogId="login-user">
			{{
				body: (
					<FormData
						formConfig={INIT_FORM}
						isLoading={isLoading}
						onSubmit={handleSubmit}
					/>
				),
				footer: (
					<Box className="auth-footer">
						<Typography color="gray">
							Don’t have an account yet?{" "}
							<span className="link-footer">Sign up</span>
						</Typography>
						<Typography color="gray">
							Go to{" "}
							<Link to={"/home"} className="link-footer">
								Home &rarr;
							</Link>
						</Typography>
					</Box>
				),
			}}
		</DialogDefault>
	);
};

export default Login;
