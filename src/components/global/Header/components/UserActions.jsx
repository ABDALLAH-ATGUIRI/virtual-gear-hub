import { Badge, Box, Button, IconButton } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ProfileMenu from "./ProfileMenu";
import { BiBell, BiShoppingBag } from "react-icons/bi";
import DarkModeButton from "@/components/buttons/DarkModeButton";
import { selectCurrentUser } from "@features/auth/authSlice";
import { openDialog } from "@features/dialogsReducer";
import PropTypes from "prop-types";

/** UserActions Component */
const UserActions = ({ children }) => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);

	// Event handler for opening dialog
	const handleDialogOpen = (dialogName) => dispatch(openDialog(dialogName));

	return (
		<Box className="flex items-center gap-4">
			{/* Conditional rendering for user actions */}
			{user ? (
				<>
					<ProfileMenu />
					{/* Notification Bell Icon */}
					<IconButton color="inherit">
						<Badge badgeContent={4} color="error">
							<BiBell size={24} />
						</Badge>
					</IconButton>
					{/* Shopping Bag Icon */}
					<IconButton
						color="inherit"
						onClick={() => handleDialogOpen("shopping-panel")}
					>
						<Badge badgeContent={17} color="error">
							<BiShoppingBag size={24} />
						</Badge>
					</IconButton>
				</>
			) : (
				<Box className="hidden md:flex gap-4">
					{/* Sign In / Sign Up Buttons for non-authenticated users */}
					<Button
						variant="outlined"
						color="primary"
						className="btn-sign-in"
						onClick={() => handleDialogOpen("register-user")}
					>
						Sign In
					</Button>
					<Button
						variant="contained"
						color="secondary"
						className="btn-sign-up"
						onClick={() => handleDialogOpen("login-user")}
					>
						Sign Up
					</Button>
				</Box>
			)}

			{/* Dark Mode Button */}
			<DarkModeButton />

			{/* Additional children passed into the component */}
			{children}
		</Box>
	);
};

UserActions.propTypes = {
	children: PropTypes.node,
};

export default UserActions;
