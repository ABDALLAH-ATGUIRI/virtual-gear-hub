import DefaultSection from "@/components/global/Section/DefaultSection";
import { Typography } from "@mui/material";

const OurMission = () => {
	return (
		<DefaultSection id="mission" title="Our Mission">
			<Typography
				variant="body1"
				className="!text-lg !leading-relaxed text-gray-300"
			>
				At our company, we are committed to delivering exceptional
				service and products that exceed customer expectations. We
				believe in building lasting relationships based on trust,
				transparency, and a passion for innovation. Our mission is to
				make a positive impact in the lives of our customers by
				providing solutions that enhance their daily lives and drive
				success.
			</Typography>
		</DefaultSection>
	);
};

export default OurMission;
