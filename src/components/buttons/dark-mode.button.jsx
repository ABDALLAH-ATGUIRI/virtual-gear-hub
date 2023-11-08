import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';

const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') || 'light'
    );

    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    useEffect(() => {
        localStorage.setItem('theme', theme);
        document.body.className = theme;
    }, [theme]);

    return (
        <IconButton className='ml-2 cursor-pointer bg-light dark:bg-black shadow-2xl shadow-white drop-shadow-2xl' onClick={toggleTheme}>
            {theme !== 'light' ? < SunIcon className="h-7 w-7" /> : <MoonIcon className="w-6 h-6 text-gray-900" />}
        </IconButton>
    )
}

export default DarkMode