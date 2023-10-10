import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon
} from "@heroicons/react/24/solid";

export const SIDEBARMENUS = [
  {
    id: 1,
    name: "Dashboard",
    icon: PresentationChartBarIcon,
    children: [
      {
        id: 1,
        name: "Analytics",
        icon: "",
        link: "/Analytics"
      },
      {
        id: 2,
        name: "Reports",
        icon: "",
        link: "/Reports"
      },
      {
        id: 3,
        name: "Projects",
        icon: "",
        link: "/Projects"
      }
    ]
  },
  {
    id: 2,
    name: "E-commerce",
    icon: ShoppingBagIcon,
    children: [
      {
        id: 1,
        name: "orders",
        icon: "",
        link: "/orders"
      },
      {
        id: 2,
        name: "products",
        icon: "products",
        link: "/products"
      },
      {
        id: 3,
        name: "categories",
        icon: "categories",
        link: "/categories"
      }
    ]
  },
  {
    id: 5,
    name: "Inbox",
    icon: InboxIcon,
    link: "/Inbox"
  },
  {
    id: 3,
    name: "Profile",
    icon: UserCircleIcon,
    link: "/Profile"
  },
  {
    id: 4,
    name: "Settings",
    icon: Cog6ToothIcon,
    link: "/Settings"
  }
];
