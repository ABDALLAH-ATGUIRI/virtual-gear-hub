import { Alert, Snackbar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { hideAlert } from "@/services/features/alertSlice";
import { selectAlert } from "@/services/features/alertSlice";

const GlobalAlert = () => {
	const dispatch = useDispatch();
	const { message, type, open } = useSelector(selectAlert);

	const closeAlert = () => {
		dispatch(hideAlert());
	};

	return (
		<Snackbar
			open={open}
			autoHideDuration={2000}
			onClose={closeAlert}
			anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
			className="!z-[99999]"
		>
			<Alert
				onClose={closeAlert}
				variant="filled"
				severity={type}
			>
				{message}
			</Alert>
		</Snackbar>
	);
};

export default GlobalAlert;
