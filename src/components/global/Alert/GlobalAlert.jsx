import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "@/services/features/alertSlice";

const GlobalAlert = () => {
	const dispatch = useDispatch();
	const { message, type, open } = useSelector((state) => state.alert);

	const closeAlert = () => {
		dispatch(hideAlert());
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={2000}
			onClose={closeAlert}
			severity={type}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			sx={{ zIndex: "100000 !important" }}
		>
			<Alert
				onClose={closeAlert}
				variant="filled"
				sx={{ width: "100%" }}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default GlobalAlert;
