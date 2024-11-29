import { Input, Button, Typography, Alert } from "@material-tailwind/react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useRegisterMutation } from "@features/auth/authApiSlice";
import { setCredentials } from "@features/auth/authSlice";
import { closeDialog } from "@features/dialogsReducer";
import DialogDefault from "../../components/DialogDefault";

const INITFORM = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
}

const RegistrationForm = () => {
    const [formData, setFormData] = useState(INITFORM);
    const [response, setResponse] = useState(null);
    const dispatch = useDispatch();
    const [register, { isLoading }] = useRegisterMutation();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await register(formData).unwrap();
            dispatch(setCredentials({ ...response }));
            setResponse({
                message: "Successfully registered",
                type: "success",
            });
            setTimeout(() => {
                dispatch(closeDialog("register-user"));
                setFormData(INITFORM);
            }, 1000);
        } catch (error) {
            console.log(error);
            handleError(error);
        } finally {
            setTimeout(() => {
                setResponse(null);
            }, 3000);
        }
    };

    const handleError = (error) => {
        let errorMessage = "Registration Failed";

			switch (error.response?.status) {
				case 400:
					errorMessage = "Unauthorized";
					break;
				case 401:
					errorMessage = "Invalid Email or Password";
					break;
				case 402:
					errorMessage = "User already exists";
					break;
				default:
					errorMessage =
						"Registration Failed, please try again later";
					break;
			}

        setResponse({ message: errorMessage, type: "error" });
    };

    return (
        <DialogDefault title="Create your account" dialogId="register-user">
            {{
                body: (
                    <>
                        <Alert
                            variant="ghost"
                            open={response !== null}
                            color={response?.type === "error" ? "red" : "green"}
                            className={`rounded-none border-current border-l-4 mb-4 font-medium`}
                        >
                            {response?.message}{" "}
                        </Alert>
                        <form
                            className="py-6 flex flex-col gap-10"
                            onSubmit={handleSubmit}
                        >
                            <CustomInput
                                label="Name"
                                name="name"
                                type="text"
                                value={formData.name}
                                error={response?.type === "error"}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                error={response?.type === "error"}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                label="Password"
                                name="password"
                                type="password"
                                value={formData.password}
                                error={response?.type === "error"}
                                onChange={handleInputChange}
                            />
                            <CustomInput
                                label="Confirm Password"
                                name="password_confirmation"
                                type="password"
                                value={formData.password_confirmation}
                                error={response?.type === "error"}
                                onChange={handleInputChange}
                            />
                            <Button
                                type="submit"
                                color="deep-purple"
                                fullWidth
                                disabled={isLoading}
                            >
                                {isLoading ? "Registering..." : "Register"}
                            </Button>
                        </form>
                    </>
                ),
                footer: (
                    <div className="w-full flex justify-between px-2 font-normal">
                        <Typography color="gray">
                            Already have an account?{" "}
                            <span className="font-medium text-primary hover:underline">
                                Sign In
                            </span>
                        </Typography>
                        <Typography color="gray">
                            Go to home{" "}
                            <span className="font-medium text-primary hover:underline">
                                Home <span aria-hidden="true">&rarr;</span>
                            </span>
                        </Typography>
                    </div>
                ),
            }}
        </DialogDefault>
    );
};

const CustomInput = ({ label, name, type, ...props }) => (
    <Input
        size="lg"
        label={label}
        name={name}
        type={type}
        color="deep-purple"
        variant="outlined"
        className="dark:text-white"
        required
        {...props}
    />
);

export default RegistrationForm;
