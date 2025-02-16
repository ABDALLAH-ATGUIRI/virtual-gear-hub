import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import DefaultSection from "@/components/global/Section/DefaultSection";

// Animation Variants
const animationVariants = {
	fadeIn: (delay = 0) => ({
		initial: { opacity: 0, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 1, delay },
	}),
	zoomIn: (delay = 0) => ({
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 1, delay },
	}),
};

const Values = () => {
	return (
		<DefaultSection id="values" title="Our Core Values">
			<Stack
				direction={{ xs: "column", md: "row" }}
				spacing={6}
				className="mt-10 justify-center"
			>
				{[
					{
						title: "Innovation",
						description: "Driving the future of VR technology.",
					},
					{
						title: "Inclusion",
						description: "Making VR accessible to everyone.",
					},
					{
						title: "Quality",
						description: "Delivering the best VR products.",
					},
				].map((value, index) => (
					<Box
						key={index}
						className="flex-1 bg-gray-800 rounded-lg p-6 shadow-lg text-center"
						component={motion.div}
						variants={animationVariants.fadeIn(0.2 + index * 0.2)}
						initial="initial"
						animate="animate"
					>
						<Typography
							variant="h4"
							className="text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text font-bold"
						>
							{value.title}
						</Typography>
						<Typography
							variant="body2"
							className="mt-2 text-gray-300 text-lg"
						>
							{value.description}
						</Typography>
					</Box>
				))}
			</Stack>
		</DefaultSection>
	);
};

export default Values;
