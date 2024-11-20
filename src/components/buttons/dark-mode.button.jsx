import { useEffect, useState } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi';
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
		<IconButton
			className="ml-2 cursor-pointer bg-light dark:bg-black shadow-2xl shadow-white drop-shadow-2xl"
			onClick={toggleTheme}
		>
			{theme !== "light" ? <BiSun size={18} /> : <BiMoon size={18} />}
		</IconButton>
	);
}

export default DarkMode