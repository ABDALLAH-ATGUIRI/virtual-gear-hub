import { BiMoon, BiSun } from "react-icons/bi";
import { IconButton } from "@material-tailwind/react";
import useDarkMode from "@/hooks/useDarkMode";

const DarkModeButton = () => {
	// Custom hook to manage dark mode state
	const [isDarkMode, setIsDarkMode] = useDarkMode();

	// Toggle dark mode state
	const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

	return (
		<IconButton
			className="ml-2 cursor-pointer bg-light dark:bg-black shadow-2xl shadow-white drop-shadow-2xl"
			onClick={toggleDarkMode}
		>
			{isDarkMode ? (
				<BiSun size={20} />
			) : (
				<BiMoon size={20} color="gray" />
			)}
		</IconButton>
	);
};

export default DarkModeButton;
