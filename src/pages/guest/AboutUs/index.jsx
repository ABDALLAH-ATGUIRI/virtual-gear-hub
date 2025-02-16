import { Box } from "@mui/material";
import { Suspense, lazy } from "react";
import "./style.css";
const Hero = lazy(() => import("./components/Hero"));
const Testimonials = lazy(() => import("./components/Testimonials"));
const Mission = lazy(() => import("./components/Mission"));
const Values = lazy(() => import("./components/Values"));
const Questions = lazy(() => import("./components/Questions"));

const AboutUs = () => {
	return (
		<Box className="w-full h-full px-6 md:px-20 py-10">
			<Suspense fallback={<div>Loading...</div>}>
				<Hero />
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Testimonials />
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Mission />
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Values />
			</Suspense>

			<Suspense fallback={<div>Loading...</div>}>
				<Questions />
			</Suspense>
		</Box>
	);
};

export default AboutUs;
