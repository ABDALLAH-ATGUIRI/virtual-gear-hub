import { useState, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
	Tooltip,
	Button,
	Avatar,
	Typography,
	Menu,
	MenuItem,
	Box,
} from "@mui/material";
import { selectCurrentUser } from "@features/auth/authSlice";
import { PROFILEMENUITEMS } from "@/utils/menus";
import LogoutButton from "@/components/buttons/LogoutButton";

const ProfileMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const user = useSelector(selectCurrentUser);

	// Handlers
	const handleOpenUserMenu = useCallback(
		(event) => setAnchorElUser(event.currentTarget),
		[]
	);

	const handleCloseUserMenu = useCallback(() => setAnchorElUser(null), []);

	// User avatar with fallback image
	const userAvatar = useMemo(
		() =>
			user?.avatar ||
			"https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80",
		[user]
	);

	return (
		<Box className="profile-menu">
			{/* Avatar with Tooltip */}
			<Tooltip title="Open user menu">
				<Button
					aria-label="User menu"
					startIcon={
						<Avatar alt={user?.name || "User"} src={userAvatar} />
					}
					onClick={handleOpenUserMenu}
					className="p-0 focus:outline-none"
				>
					<div className="hidden md:flex flex-col items-start text-left">
						<Typography className="text-sm font-semibold">
							{user?.name || "Guest"}
						</Typography>
						<Typography className="text-xs text-gray-800 dark:!text-gray-300 lowercase">
							{user?.email}
						</Typography>
					</div>
				</Button>
			</Tooltip>

			{/* Dropdown Menu */}
			<Menu
				id="menu-appbar"
				anchorEl={anchorElUser}
				open={Boolean(anchorElUser)}
				onClose={handleCloseUserMenu}
				className="[&>.MuiPaper-root]:dark:!bg-dark mt-2"
			>
				<div className="w-56">
					{/* Profile Menu Items */}
					{PROFILEMENUITEMS.map(
						({ label, icon: Icon, link }, index) => (
							<Link
								to={link}
								key={index}
								className="no-underline"
							>
								<MenuItem
									onClick={handleCloseUserMenu}
									className="profile-menu-tabs"
								>
									<Icon size={20} />
									<Typography>{label}</Typography>
								</MenuItem>
							</Link>
						)
					)}

					{/* Logout Option */}
					<MenuItem>
						<LogoutButton />
					</MenuItem>
				</div>
			</Menu>
		</Box>
	);
};

export default ProfileMenu;
