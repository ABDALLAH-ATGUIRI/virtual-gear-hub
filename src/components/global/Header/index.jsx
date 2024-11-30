import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import "./style.css";

import { useLocation, useNavigate } from "react-router-dom";
import { NAVMENUS } from "@/utils/menus";
import { BiMenu } from "react-icons/bi";
import Logo from "../Logo";
import {
	Box,
	Drawer,
	IconButton,
	List,
	Typography,
} from "@mui/material";
import UserActions from "./components/UserActions";

/** MobileMenu Component */
const MobileMenu = ({ handleTabChange, isActiveMenu }) => {
	const [isDrawerOpen, setDrawerOpen] = useState(false);

	return (
		<>
			<IconButton
				sx={{ display: { xs: "flex", md: "none" } }}
				color="inherit"
				onClick={() => setDrawerOpen(true)}
			>
				<BiMenu size={40} />
			</IconButton>
			<Drawer
				anchor="left"
				className="[&>.MuiPaper-root]:mobile-menu"
				open={isDrawerOpen}
				onClose={() => setDrawerOpen(false)}
			>
				<List>
					{NAVMENUS.map(({ label, link }) => (
						<Typography
							key={link}
							onClick={() => {
								handleTabChange(link);
								setDrawerOpen(false); // Close drawer after navigation
							}}
							className={`menu-tabs ${isActiveMenu(link) && "active-tab"}`}
						>
							{label}
						</Typography>
					))}
				</List>
			</Drawer>
		</>
	);
};

MobileMenu.propTypes = {
	handleTabChange: PropTypes.func.isRequired,
	isActiveMenu: PropTypes.func.isRequired,
};



/** NavigationMenu Component */
const NavigationMenu = ({ handleTabChange, isActiveMenu }) => (
	<Box className="hidden md:flex gap-8">
		{NAVMENUS.map(({ label, link }) => (
			<Typography
				key={link}
				onClick={() => handleTabChange(link)}
				className={` menu-tabs ${isActiveMenu(link) && "active-tab"}`}
			>
				{label}
			</Typography>
		))}
	</Box>
);

NavigationMenu.propTypes = {
	handleTabChange: PropTypes.func.isRequired,
	isActiveMenu: PropTypes.func.isRequired,
};

/** Header Component */
const Header = ({ showLogo = true }) => {
	const navigate = useNavigate();
	const location = useLocation();
	const [activeTab, setActiveTab] = useState(location.pathname);

	useEffect(() => {
		setActiveTab(location.pathname);
	}, [location.pathname]);

	const handleTabChange = (link) => {
		setActiveTab(link);
		navigate(link);
	};

	const isActiveMenu = (link) => link === activeTab;

	return (
		<Box className="header">
			{/* Logo */}
			{showLogo && <Logo size="md" />}

			{/* Navigation Menu */}
			<NavigationMenu
				handleTabChange={handleTabChange}
				isActiveMenu={isActiveMenu}
			/>

			{/* User Actions */}
			<UserActions>
				<MobileMenu
					handleTabChange={handleTabChange}
					isActiveMenu={isActiveMenu}
				/>
			</UserActions>
		</Box>
	);
};

Header.propTypes = {
	showLogo: PropTypes.bool,
};

Header.defaultProps = {
	showLogo: true,
};

Header.displayName = "Header";



export default Header;
