import { AiOutlineProduct } from "react-icons/ai";
import {
	HiCog6Tooth,
	HiInbox,
	HiInboxArrowDown,
	HiLifebuoy,
	HiMiniCog6Tooth,
	HiMiniUserCircle,
	HiPresentationChartBar,
	HiShoppingBag,
	HiUserCircle,
} from "react-icons/hi2";
import { MdOutlineCategory } from "react-icons/md";

export const SIDEBARMENUS = [
	{
		id: 1,
		name: "Dashboard",
		icon: HiPresentationChartBar,
		link: "dashboard"
	},
	{
		id: 2,
		name: "E-commerce",
		icon: HiShoppingBag,
		link: "e-commerce",
		children: [
			{
				id: 1,
				name: "orders",
				icon: "",
				link: "orders",
			},
		],
	},
	{
		id: 6,
		name: "products",
		icon: AiOutlineProduct,
		link: "products",
	},
	{
		id: 7,
		name: "categories",
		icon: MdOutlineCategory,
		link: "categories",
	},
	{
		id: 5,
		name: "Inbox",
		icon: HiInbox,
		link: "inbox",
	},
	{
		id: 3,
		name: "Profile",
		icon: HiUserCircle,
		link: "profile",
	},
	{
		id: 4,
		name: "Settings",
		icon: HiCog6Tooth,
		link: "settings",
	},
];

export const PROFILEMENUITEMS = [
	{
		label: "My Profile",
		icon: HiMiniUserCircle,
		link: "/profile",
	},
	{
		label: "Backoffice",
		icon: HiMiniCog6Tooth,
		link: "/backoffice",
	},
	{
		label: "Inbox",
		icon: HiInboxArrowDown,
		link: "/inbox",
	},
	{
		label: "Help",
		icon: HiLifebuoy,
		link: "/help",
	},
];

export const NAVMENUS = [
	{
		label: "Home",
		link: "/home",
	},
	{
		label: "Payment",
		link: "/payment",
	},
	{
		label: "Delivery",
		link: "delivery",
	},
	{
		label: "Catalogues",
		link: "/catalogues",
	},
	{
		label: "About us",
		link: "/about-us",
	},
];
