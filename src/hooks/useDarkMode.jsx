import { useEffect, useState } from "react";

export default function useDarkMode() {
	const matchDark = "(prefers-color-scheme: dark)";

	// Initialize state from localStorage or system preference
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		if (savedTheme) {
			return savedTheme === "dark";
		}
		return window.matchMedia(matchDark).matches;
	});

	// Sync changes with system preference
	useEffect(() => {
		const mediaQuery = window.matchMedia(matchDark);
		const handleChange = ({ matches }) => setIsDarkMode(matches);

		mediaQuery.addEventListener("change", handleChange);
		return () => mediaQuery.removeEventListener("change", handleChange);
	}, []);

	// Update localStorage and document body class when `isDarkMode` changes
	useEffect(() => {
		const theme = isDarkMode ? "dark" : "light";
		localStorage.setItem("theme", theme);
		document.body.className = theme;
	}, [isDarkMode]);

	return [isDarkMode, setIsDarkMode];
}
