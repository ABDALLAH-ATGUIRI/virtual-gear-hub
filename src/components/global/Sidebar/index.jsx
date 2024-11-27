import { useCallback, useEffect, useMemo, useState } from "react";
import "./index.css";

import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import { HiChevronDoubleRight } from "react-icons/hi2";
import { SIDEBARMENUS } from "@/utils/menus";
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Accordion,
	AccordionHeader,
	AccordionBody,
	IconButton,
} from "@material-tailwind/react";

function Sidebar() {
	const [sidebarState, setSidebarState] = useState({
		isCollapsed: true,
		isManualToggle: false,
	});

	const toggleSidebar = useCallback(() => {
		setSidebarState((prevState) => ({
			...prevState,
			isCollapsed: prevState.isCollapsed,
			isManualToggle: !prevState.isManualToggle, // Manual toggle overrides hover
		}));
	}, []);

	const handleMouseInteraction = useCallback(
		(isHovering) => {
			if (!sidebarState.isManualToggle) {
				const timer = setTimeout(() => {
					setSidebarState((prevState) => ({
						...prevState,
						isCollapsed: !isHovering,
					}));
				}, 100);

				return () => clearTimeout(timer); // Cancel previous timeout
			}
		},
		[sidebarState.isManualToggle]
	);

	const isCollapsed = sidebarState.isCollapsed;
	const isManualToggle = sidebarState.isManualToggle;

	return (
		<div className="flex items-center justify-center h-screen">
			<Card
				className={`card ${isCollapsed && "!w-16"}`}
				onMouseEnter={() => handleMouseInteraction(true)}
				onMouseLeave={() => handleMouseInteraction(false)}
			>
				<IconButton
					onClick={toggleSidebar}
					className={`torgle-btn ${isManualToggle && "rotate-180"}`}
				>
					<HiChevronDoubleRight size={20} />
				</IconButton>
				<List className="list-menus">
					{SIDEBARMENUS.map((menu, index) => (
						<MenuItem
							key={menu.name}
							menu={menu}
							isCollapsed={isCollapsed}
							index={index}
						/>
					))}
				</List>
			</Card>
		</div>
	);
}

function MenuItem({
	menu: { children, name, link, icon: Icon },
	isCollapsed,
	index,
}) {
	const [openAccordion, setOpenAccordion] = useState(null);
	const location = window.location.pathname;

	const toggleAccordion = () =>
		setOpenAccordion((prev) => (prev === index ? null : index));

	// Derived state for active menu
	const isActiveMenu = useMemo(
		() => location.includes(link),
		[location, link]
	);

	// Close accordions when the sidebar collapses
	useEffect(() => {
		if (isCollapsed) setOpenAccordion(null);
	}, [isCollapsed]);

	const isOpen = !isCollapsed && openAccordion === index;

	return children ? (
		<Accordion open={isOpen}>
			<li className="list-none">
				<AccordionHeader
					onClick={toggleAccordion}
					className={`tab-btn ${isActiveMenu ? "active-tab" : ""}`}
				>
					<MenuTap
						name={name}
						Icon={Icon}
						isCollapsed={isCollapsed}
					/>
				</AccordionHeader>
			</li>
			<AccordionBody className="py-0 pl-5">
				<List className="min-w-0 text-sm bg-white/45">
					{children.map((subMenu) => (
						<Link to={`${link}/${subMenu.link}`} key={subMenu.name}>
							<ListItem>{subMenu.name}</ListItem>
						</Link>
					))}
				</List>
			</AccordionBody>
		</Accordion>
	) : (
		<ListItem className={`tab-btn ${isActiveMenu ? "active-tab" : ""}`}>
			<Link to={link} className="flex items-center">
				<MenuTap name={name} Icon={Icon} isCollapsed={isCollapsed} />
			</Link>
		</ListItem>
	);
}

function MenuTap({ name, Icon, isCollapsed }) {
	const [showText, setShowText] = useState(false);

	// Handle text visibility with delay when sidebar collapses
	useEffect(() => {
		let timer;
		if (!isCollapsed) {
			timer = setTimeout(() => setShowText(true), 200);
		} else {
			setShowText(false);
		}

		return () => clearTimeout(timer); // Clean up timer on unmount or dependency change
	}, [isCollapsed]);

	return (
		<span className="flex items-center">
			<ListItemPrefix className="bg-gray-800/20 p-2 rounded-full">
				<Icon size={22} />
			</ListItemPrefix>
			{showText && <Typography className="text-sm">{name}</Typography>}
		</span>
	);
}

MenuItem.propTypes = {
	menu: PropTypes.object,
	isCollapsed: PropTypes.bool,
	index: PropTypes.number,
	isSidebarCollapsed: PropTypes.bool,
};

MenuTap.propTypes = {
	name: PropTypes.string,
	Icon: PropTypes.func,
	isCollapsed: PropTypes.bool,
};

export default Sidebar;
