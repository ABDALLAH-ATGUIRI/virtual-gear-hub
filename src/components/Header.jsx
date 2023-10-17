import { useState, useEffect, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { selectCurrentUser } from '../features/auth/authSlice';


import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    Avatar,
    MenuList,
    MenuItem,
} from "@material-tailwind/react";

import {
    Bars3Icon,
    XMarkIcon,
    Cog6ToothIcon,
    InboxArrowDownIcon,
    LifebuoyIcon,
    PowerIcon,
    UserCircleIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid';


const profileMenuItems = [
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
    },
];

const ProfileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border-0 p-0.5 w-12 rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                    />
                </Button>
            </MenuHandler>
            <MenuList key={Math.random(1)} className="p-3 z-20 w-48 flex flex-col gap-2 right-0">
                {profileMenuItems.map(({ label, icon, link }, key) => {
                    const isLastItem = (key === profileMenuItems.length - 1);
                    return (
                        <Link
                            to={link}
                            key={label}
                        >
                            <MenuItem
                                onClick={closeMenu}
                                className={`flex items-center py-1 gap-2 rounded 
                                        ${isLastItem ? "hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10" : "hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10"}`}
                            >

                                {createElement(icon, {
                                    className: `h-5 w-5 ${isLastItem ? "text-red-500" : ""}`,
                                    strokeWidth: 2,
                                })}
                                <Typography
                                    as="span"
                                    variant="h1"
                                    className="font-normal"
                                    color={isLastItem ? "red" : "inherit"}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    );
                })}
            </MenuList>
        </Menu>
    )
}


const MobileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const user = useSelector(selectCurrentUser)

    return (
        <Menu
            open={isMenuOpen}
            handler={setIsMenuOpen}
            placement="bottom-end"
        >
            <MenuHandler>
                <Button
                    variant="text"
                    color="blue-gray"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-9" />
                    ) : (
                        <Bars3Icon className="w-9" />
                    )}
                </Button>
            </MenuHandler>
            <MenuList key={Math.random(1)} className="p-3 z-20 w-48 flex flex-col gap-2 right-0 lg:hidden">
                {/* <NavList /> */}
                {user ?
                    <ProfileMenu /> :
                    <>
                        <MenuItem variant="outlined" size="sm" color="blue-gray" >
                            <Link to='auth/login'>
                                <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                                    Sign In
                                </Button>
                            </Link>

                        </MenuItem>
                        <MenuItem variant="outlined" size="sm" color="blue-gray">
                            <Link to='auth/register'>
                                <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
                                    Sign Up
                                </Button>
                            </Link>
                        </MenuItem>
                    </>

                }


            </MenuList>
        </Menu>
    )
}

export function Header() {
    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false)
        );
    }, []);

    const user = useSelector(selectCurrentUser)

    return (
        <Navbar className="px-8 py-3 bg-primary rounded-none border-0">
            <div className="flex items-center justify-between text-blue-gray-900">
                <Typography
                    as="a"
                    variant="h6"
                    className="mr-4 cursor-pointer py-1.5 lg:ml-2"
                >
                    Logo
                </Typography>
                <div className="block items-center gap-2 lg:hidden">
                    <MobileMenu />
                </div>
                <div className="hidden gap-2 lg:flex">
                    {
                        user ?
                            <ProfileMenu /> :
                            <>
                                <Link to='auth/login'>
                                    <Button variant="text" size="sm" color="blue-gray">
                                        Sign In
                                    </Button>
                                </Link>

                                <Button variant="gradient" size="sm">
                                    Sign Up
                                </Button>
                            </>
                    }
                </div>

            </div>
        </Navbar>
    );
}

export default Header