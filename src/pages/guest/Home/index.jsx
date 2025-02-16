import { Box } from "@mui/material";
import "./style.css";

import Hero from "./components/Hero";
import Features from "./components/Features";
import ContactUs from "./components/ContactUs";
import ServicesShowcase from "./components/ServicesShowcase";
import VirtualExplorer from "./components/VirtualExplorer";
import Education from "./components/Education";
import CoreValuesShowcase from "./components/CoreValuesShowcase";

const Home = () => {
	return (
		<Box>
			<Hero />
			<CoreValuesShowcase />
			<Features />
			<VirtualExplorer />
			<Education />
			<ServicesShowcase />
			<ContactUs />
		</Box>
	);
};

export default Home;
