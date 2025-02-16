import { Box } from "@mui/material";
import FlexibleSection from "@/components/global/Section/FlexibleSection";

const Hero = () => (
	<Box className="relative h-screen bg-black bg-hero-bg-4 bg-fill bg-no-repeat bg-right px-40">
		<FlexibleSection
			id="section5"
			heading="Explore the Metaverse"
			subheading="Dive into multisensory virtual worlds that redefine
						what's possible. Experience the future of immersive
						creativity!."
			buttonText="Get Started"
		/>
	</Box>
);

export default Hero;
