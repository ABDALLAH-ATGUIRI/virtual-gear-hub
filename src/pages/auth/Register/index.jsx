import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import "./style.css";

import { useRegisterMutation } from "@features/auth/authApiSlice";
import { setCredentials } from "@features/auth/authSlice";
import { closeDialog } from "@features/dialogsReducer";

import DialogDefault from "@/components/DialogDefault";
import FormData from "@/components/global/FormData";
import { showAlert } from "@/services/features/alertSlice";

const INIT_FORM = [
	{ name: "name", label: "Name", type: "text", required: true },
	{ name: "email", label: "Email", type: "email", required: true },
	{ name: "password", label: "Password", type: "password", required: true },
	{
		name: "password_confirmation",
		label: "Confirm Password",
		type: "password",
		required: true,
	},
];

const RegistrationForm = () => {
	const dispatch = useDispatch();
	const [register, { isLoading }] = useRegisterMutation();

	const handleSubmit = async (formData) => {
		try {
			const response = await register(formData).unwrap();
			dispatch(setCredentials(response));

			dispatch(
				showAlert({
					message: "Successfully registered",
					type: "success",
				})
			);

			setTimeout(() => dispatch(closeDialog("register-user")), 1000);
		} catch (error) {
			const errorMessage =
				error?.data?.message ||
				"Registration failed. Please try again.";

			dispatch(showAlert({ message: errorMessage, type: "error" }));
		}
	};

	return (
		<DialogDefault title="Create Your Account" dialogId="register-user">
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
							Already have an account?{" "}
							<span className="link-footer">Sign In</span>
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

export default RegistrationForm;
