import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon
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
        link: "analytics"
      },
      {
        id: 2,
        name: "Reports",
        icon: "",
        link: "reports"
      },
      {
        id: 3,
        name: "Projects",
        icon: "",
        link: "projects"
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
        link: "orders"
      },
      {
        id: 2,
        name: "products",
        icon: "",
        link: "products"
      },
      {
        id: 3,
        name: "categories",
        icon: "",
        link: "categories"
      }
    ]
  },
  {
    id: 5,
    name: "Inbox",
    icon: InboxIcon,
    link: "/inbox"
  },
  {
    id: 3,
    name: "Profile",
    icon: UserCircleIcon,
    link: "/profile"
  },
  {
    id: 4,
    name: "Settings",
    icon: Cog6ToothIcon,
    link: "/settings"
  }
];

export const PROFILEMENUITEMS = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    link: "/profile"
  },
  {
    label: "Dashboard",
    icon: Cog6ToothIcon,
    link: "/dashboard"
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    link: "/inbox"
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    link: "/help"
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    link: "/signout"
  }
];
