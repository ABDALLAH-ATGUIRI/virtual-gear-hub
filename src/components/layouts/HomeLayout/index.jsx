import { Box } from "@mui/material";
import "./style.css";

const HomeLayout = ({ children }) => {
	const { Navbar, Content, Footer } = children;

	return (
		<Box className="layout-container">
			{/* Navbar */}
			{Navbar}
			{/* Main Content Area */}
			<Box component="main" className="main-content">
				{/* Content */}
				{Content}
			</Box>
			{/* Footer */}
			{Footer}
		</Box>
	);
};

export default HomeLayout;
