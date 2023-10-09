import { Fragment, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/Auth';

const Header = () => {
    const [showDropMenu, setShowDropMenu] = useState(false)
    const { auth, logout } = useContext(AuthContext);

    return (
        <Fragment>
            <nav className="bg-primary dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 ">
                <div className="reactive w-5/6  flex flex-wrap items-center justify-between mx-auto p-4 px-4">
                    <Link to="/" className="flex items-center">
                        <span className="self-center text-2xl font-bold text-white whitespace-nowrap">LOGO</span>
                    </Link>
                    <div className="flex md:order-2">
                        {
                            auth?.token != '' ?
                                <>
                                    <button className="flex mx-3 text-sm bg-gray-800 rounded-full md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" type="button" onClick={() => setShowDropMenu(!showDropMenu)}>
                                        <span className="sr-only">Open user menu</span>
                                        <img className="w-8 h-8 rounded-full" src="/docs/images/people/profile-picture-3.jpg" alt="user photo" />
                                    </button>
                                    <div id="dropdownAvatar" className={`${showDropMenu ? 'block' : 'hidden'} absolute top-20 right-10 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-56`}>
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>{auth?.user.name}</div>
                                            <div className="font-medium truncate">{auth?.user.email}</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <Link to="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Profile</Link>
                                            </li>
                                            <li>
                                                <Link to="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
                                            </li>
                                        </ul>
                                        <div className="py-2">
                                            <button className="block px-4 py-2 text-md font-semibold text-red-500 hover:bg-gray-100 w-full" onClick={() => logout()}>Log out</button>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <Link to={'auth/login'} className="text-white bg-primary focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 dark:hover:bg-primary">
                                        Log in <span aria-hidden="true">&rarr;</span>
                                    </Link>
                                </>
                        }
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"></div>
                </div>
            </nav>

        </Fragment >
    )
}

export default Header