import { useState, createElement } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { selectCurrentUser } from '../../features/auth/authSlice';
import { PROFILEMENUITEMS } from '../../utils/menus'

import {
    Navbar,
    Typography,
    Button,
    Menu,
    MenuHandler,
    Avatar,
    MenuList,
    MenuItem,
    Tabs,
    TabsHeader,
    Tab,
} from "@material-tailwind/react";

import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon
} from '@heroicons/react/24/solid';

const MENUS = [
    {
        label: "Home",
        link: "home",
    },
    {
        label: "Payment",
        link: "payment",
    },
    {
        label: "Delivery",
        link: "delivery",
    },
    {
        label: "Catalogue",
        link: "catalogue",
    },
    {
        label: "About us",
        link: "about-us",
    },
];

const ProfileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    const user = useSelector(selectCurrentUser);

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
                        className="border-0 p-0.5 w-12 h-11 rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />
                    <div className='text-start'>
                        <Typography
                            as="span"
                            color='white'
                            className="font-semibold text-xs"
                        >
                            {user.email}
                        </Typography>
                        <Typography
                            as="span"
                            className="font-normal text-xs"
                        >
                            {user.name}
                        </Typography>
                    </div>

                    <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""}`}
                    />
                </Button>
            </MenuHandler>

            <MenuList className="p-3 z-20 w-64 flex flex-col gap-2 right-0">
                {PROFILEMENUITEMS.map(({ label, icon, link }, key) => {
                    const isLastItem = (key === PROFILEMENUITEMS.length - 1);
                    return (
                        <Link to={link} key={label}>
                            <MenuItem
                                onClick={closeMenu}
                                className={`flex items-center py-1 gap-2 rounded 
                                        ${isLastItem ? "hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10" : "hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10"}`}
                            >
                                {createElement(icon, { className: `h-5 w-5 ${isLastItem ? "text-red-500" : ""}`, strokeWidth: 2 })}

                                <Typography
                                    as="span"
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
                    color="white"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? (
                        <XMarkIcon className="w-9" />
                    ) : (
                        <Bars3Icon className="w-9" />
                    )}
                </Button>
            </MenuHandler>
            <NavList />
            <MenuList key={Math.random(1)} className="p-3 z-20 w-48 flex flex-col gap-2 right-0 lg:hidden">
                {user ?
                    <ProfileMenu /> :
                    <>
                        <MenuItem variant="outlined" size="sm" color="white" >
                            <Link to='auth/login'>
                                <Button variant="outlined" size="sm" color="white" fullWidth>
                                    Sign In
                                </Button>
                            </Link>

                        </MenuItem>
                        <MenuItem variant="outlined" size="sm" color="white">
                            <Link to='auth/register'>
                                <Button variant="outlined" size="sm" color="white" fullWidth>
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

function NavList() {
    const [activeTab, setActiveTab] = useState("html");

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none bg-transparent p-0 flex gap-4"
                indicatorProps={{
                    className: "bg-transparent border-b-2 border-tertiary shadow-none rounded-none",
                }}
            >
                {MENUS.map(({ label, link }) => (
                    <Tab
                        key={link}
                        value={link}
                        onClick={() => setActiveTab(link)}
                        className={`w-auto text-sm font-medium pb-2 ${activeTab === link ? "text-tertiary" : "text-gray-200"}`}
                    >
                        <Link to={link}>{label}</Link>
                    </Tab>
                ))}
            </TabsHeader>
        </Tabs>
    );
}

export function Header() {
    const user = useSelector(selectCurrentUser)

    return (
        <Navbar className="!max-w-full px-12 py-1 mx-auto rounded-none border-0 !w-full bg-prmary fixed z-40">
            <div className="flex items-center justify-between text-white w-full">
                <Typography
                    as="a"
                    variant="h5"
                    color="white"
                    className="mr-4 cursor-pointer py-1.5 text-white font-extrabold flex flex-col items-center"
                >
                    <span>ARENA</span> <span className="text-deep-purple-600">GAME</span>
                </Typography>
                <div className="block items-center gap-2 lg:hidden">
                    <MobileMenu />
                </div>
                <div>
                    <NavList />
                </div>
                <div className="hidden lg:flex gap-2">
                    {
                        user ?
                            <ProfileMenu /> :
                            <>
                                <Link to='auth/login'>
                                    <Button variant="text" size="sm" color="white">
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