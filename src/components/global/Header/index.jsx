import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { selectCurrentUser, setLogout } from "@features/auth/authSlice";
import { useLogoutMutation } from "@features/auth/authApiSlice";
import { openDialog } from "@features/dialogsReducer";
import { PROFILEMENUITEMS, NAVMENUS } from "@/utils/menus";
import { BiBell, BiPowerOff, BiShoppingBag } from "react-icons/bi";
import DarkModeButton from "@/components/buttons/DarkModeButton";
import "./style.css";
import Logo from "../Logo";
import {
	Typography,
	Button,
	Menu,
	Avatar,
	MenuItem,
	Box,
	IconButton,
	List,
	Tooltip,
	Badge,
} from "@mui/material";

const ProfileMenu = () => {
	const [anchorElUser, setAnchorElUser] = useState(null);
	const user = useSelector(selectCurrentUser);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const [logout] = useLogoutMutation();

	// Handlers
	const handleOpenUserMenu = (event) => setAnchorElUser(event.currentTarget);
	const handleCloseUserMenu = () => setAnchorElUser(null);
	const handleLogout = async () => {
		try {
			const result = await logout().unwrap();
			if (result.success) {
				dispatch(setLogout());
				navigate("/home");
			}
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<div className="flex items-center space-x-4">
			{/* Avatar with Tooltip */}
			<Tooltip title="Open settings">
				<Button
					startIcon={
						<Avatar
							alt={user.name || "User"}
							src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?auto=format&fit=crop&w=1480&q=80"
						/>
					}
					onClick={handleOpenUserMenu}
					className="p-0"
				>
					{/* User Info (Hidden on smaller screens) */}

					<div className="hidden md:block text-left">
						<Typography className="text-sm font-semibold text-white">
							{user.name}
						</Typography>
						<Typography className="text-xs text-gray-300 lowercase">
							{user.email}
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
				anchorOrigin={{ vertical: "top", horizontal: "right" }}
				transformOrigin={{ vertical: "top", horizontal: "right" }}
				className="mt-2"
			>
				{/* Profile Menu Items */}
				{PROFILEMENUITEMS.map(({ label, icon: Icon, link }, index) => (
					<Link
						to={link}
						key={index}
						className="no-underline text-black w-full block"
					>
						<MenuItem
							onClick={handleCloseUserMenu}
							className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100"
						>
							<Icon size={20} />
							<Typography>{label}</Typography>
						</MenuItem>
					</Link>
				))}

				{/* Logout Option */}
				<MenuItem
					onClick={handleLogout}
					className="flex items-center gap-2 px-3 py-2 rounded hover:bg-gray-100 text-red-500"
				>
					<BiPowerOff size={20} />
					<Typography>Logout</Typography>
				</MenuItem>
			</Menu>
		</div>
	);
};

export function Header({ showLogo = true }) {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const user = useSelector(selectCurrentUser);
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(location.pathname);

	// Update activeTab on location change
	useEffect(() => {
		setActiveTab(location.pathname);
	}, [location.pathname]);

	// Handle tab change and navigation
	const handleTabChange = (link) => {
		setActiveTab(link);
		navigate(link);
	};
	return (
		<Box className="!max-w-full flex justify-between py-0 h-16 mx-auto rounded-none border-0 !w-full bg-black/50 z-40 px-10">
			{
				/* Logo */
				showLogo ? <Logo size="md" /> : <div className="w-24"></div>
			}

			{/* Nav Menu */}
			<List className="flex items-center justify-between gap-6 p-0 bg-transparent">
				{NAVMENUS.map(({ label, link }) => (
					<li
						key={link}
						onClick={() => handleTabChange(link)}
						className={`cursor-pointer text-sm font-bold text-gray-200 pb-2 border-b-2 ${
							activeTab === link
								? "border-tertiary text-tertiary"
								: "border-transparent"
						} hover:text-tertiary transition-all`}
					>
						<Typography className="text-center">{label}</Typography>
					</li>
				))}
			</List>

			{/* Actions */}
			<div className="flex items-center gap-4">
				{user ? (
					<Box sx={{ display: { xs: "none", md: "flex" } }}>
						<ProfileMenu />
						<IconButton
							size="large"
							aria-label="show 4 new mails"
							color="inherit"
						>
							<Badge badgeContent={4} color="error">
								<BiBell size={24} className="cursor-pointer" />
							</Badge>
						</IconButton>
						<IconButton
							size="large"
							aria-label="show 17 new notifications"
							color="inherit"
						>
							<Badge badgeContent={17} color="error">
								<BiShoppingBag
									size={24}
									className="cursor-pointer"
									onClick={() =>
										dispatch(openDialog("shopping-panel"))
									}
								/>
							</Badge>
						</IconButton>
					</Box>
				) : (
					<Box sx={{ display: { xs: "none", md: "flex", gap: 8 } }}>
						<Button
							color="white"
							size="sm"
							className="btn-sign-in"
							onClick={() =>
								dispatch(openDialog("register-user"))
							}
						>
							Sign In
						</Button>
						<Button
							size="sm"
							color="white"
							className="btn-sign-up"
							onClick={() => dispatch(openDialog("login-user"))}
						>
							Sign Up
						</Button>
					</Box>
				)}
				<DarkModeButton />
			</div>
		</Box>
	);
}

export default Header;
