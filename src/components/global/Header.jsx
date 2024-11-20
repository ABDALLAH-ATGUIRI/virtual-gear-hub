import { useEffect , useState, createElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { selectCurrentUser, setLogout } from '@/features/auth/authSlice';
import { useLogoutMutation } from '@/features/auth/authApiSlice';
import { openDialog } from '@/features/dialogsReducer';
import { PROFILEMENUITEMS, NAVMENUS } from '@/utils/menus'
import { BiBell, BiPowerOff, BiShoppingBag } from 'react-icons/bi';
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
	Badge,
} from "@material-tailwind/react";
import DarkMode from '../buttons/dark-mode.button';

const ProfileMenu = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);
    const user = useSelector(selectCurrentUser);
    const navigator = useNavigate()

    const dispatch = useDispatch()
    const [logout] = useLogoutMutation()

    const handleLogout = async () => {
        try {
            const result = await logout().unwrap()
            if (result.success === true) {
                dispatch(setLogout())
                navigator('/home')
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
            <MenuHandler>
                <Button
                    variant="text"
                    className="flex items-center gap-1 rounded-full lg:ml-auto"
                >
                    <Avatar
                        variant="circular"
                        size="sm"
                        alt="tania andrew"
                        className="border-0 p-0.5 w-11 h-11 rounded-full"
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    />

                    <div className='text-start hidden md:block'>
                        <Typography
                            as="span"
                            color='white'
                            className="font-semibold text-xs"
                        >
                            {user.name}
                        </Typography>
                        <Typography
                            as="span"
                            color='white'
                            className="font-normal text-xs lowercase"
                        >
                            {user.email}
                        </Typography>
                    </div>
                </Button>
            </MenuHandler>

            <MenuList className="p-3 z-20 w-64 flex flex-col gap-2 !top-20">
                {PROFILEMENUITEMS.map(({ label, icon, link }, key) => {
                    return (
                        <Link to={link} key={label + key}>
                            <MenuItem
                                onClick={closeMenu}
                                className={`flex items-center py-1 gap-2 rounded hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10`}
                            >
                                {createElement(icon, { className: `h-5 w-5`, strokeWidth: 2 })}

                                <Typography
                                    as="span"
                                    className="font-normal"
                                    color={"inherit"}
                                >
                                    {label}
                                </Typography>
                            </MenuItem>
                        </Link>
                    );
                })}
                <MenuItem
                    onClick={() => handleLogout()}
                    className={`flex items-center py-1 gap-2 rounded hover:bg-gray-500/10 focus:bg-gray-500/10 active:bg-gray-500/10`}
                >
                    <BiPowerOff color='red' size={20}/>
                    <Typography
                        as="span"
                        className="font-normal"
                        color={"red"}
                    >
                        Logout
                    </Typography>
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

function NavList() {
    const location = useLocation();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState(location.pathname);

    useEffect(() => {
        setActiveTab(location.pathname);
    }, [location.pathname]);

    const handleTabChange = (newTab) => {
        setActiveTab(newTab);
        navigate(newTab);  // Navigate to the new route
    };

    return (
        <Tabs value={activeTab}>
            <TabsHeader
                className="rounded-none bg-transparent p-0 flex gap-6"
                indicatorProps={{
                    className: "bg-transparent shadow-none rounded-none border-b-2 border-tertiary",
                }}
            >
                {NAVMENUS.map(({ label, link }) => (
                    <Tab
                        key={label}
                        value={link}
                        onClick={() => handleTabChange(link)}
                        className={`w-auto text-[14px] font-bold pb-2 text-gray-200`}
                        activeClassName='!text-tertiary'
                    >
                        {label}
                    </Tab>
                ))}
            </TabsHeader>
        </Tabs>
    );
}

export function Header() {
    const user = useSelector(selectCurrentUser);
    const dispatch = useDispatch();

    return (
        <Navbar className="!max-w-full py-0 h-16 mx-auto rounded-none border-0 !w-full bg-black/50 fixed z-40">
            <div className="flex items-center justify-between text-white w-full">
                <Typography
                    as="a"
                    variant="h5"
                    color="white"
                    className="mr-4 cursor-pointer py-1.5 text-white font-extrabold flex flex-col items-center"
                >
                    <span>ARENA</span> <span className="text-deep-purple-600">GAME</span>
                </Typography>
                <div className="w-2/3 flex items-center justify-between">
                    <NavList />

                    <div className='flex items-center gap-4'>
                        {
                            user ?
                                <>
                                    <ProfileMenu />
                                    <Badge color="purple" withBorder content="2" className='text-xs p-0 font-bold'>
                                        <BiBell size={20} className="cursor-pointer" />
                                    </Badge>
                                    <Badge color="purple" withBorder content="5" className='text-xs p-0 font-bold'>
                                        <BiShoppingBag size={20} className="cursor-pointer" onClick={() => dispatch(openDialog('shopping-panel'))} />
                                    </Badge>
                                </>
                                :
                                <>
                                    <Button variant="text" size="sm" color="white" onClick={() => dispatch(openDialog('register-user'))}>Sign In</Button>
                                    <Button variant="gradient" size="sm" onClick={() => dispatch(openDialog('login-user'))}>Sign Up</Button>
                                </>
                        }
                        <DarkMode />
                    </div>
                </div>
            </div>
        </Navbar >
    );
}

export default Header