import { Box, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import DefaultSection from "@/components/global/Section/DefaultSection";
import PropTypes from "prop-types";

// Centralized Animation Variants
const animationVariants = {
	fadeIn: (delay = 0) => ({
		initial: { opacity: 1, y: 50 },
		animate: { opacity: 1, y: 0 },
		transition: { duration: 1, delay },
	}),
	container: {
		initial: { opacity: 1 },
		animate: {
			opacity: 1,
			transition: { staggerChildren: 0.3 },
		},
	},
};

const coreValues = [
	{ icon: "🌟", description: "Experiencing the future of VR." },
	{ icon: "🌍", description: "View all your surroundings with 360°." },
	{ icon: "🎮", description: "Incredible gaming experience." },
	{ icon: "🏢", description: "Making meetings and tours easier." },
];

// Core Value Card Component
const CoreValueCard = ({ icon, description }) => {
	const { controls, elementRef } = useScrollAnimation("core-values-showcase");

	return (
		<motion.div
			className="relative w-full max-w-[20rem] h-[20rem] bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600 p-1 rounded-3xl"
			whileInView={{ opacity: 1, y: 0 }}
			initial={{ opacity: 0, y: 50 }}
			transition={{ duration: 0.6 }}
			ref={elementRef}
			variants={controls}
		>
			<Box className="flex flex-col justify-center items-center w-full h-full border border-dark/80 rounded-3xl p-4 shadow-md bg-light dark:bg-dark transition-shadow duration-300 ease-in-out text-center hover:shadow-lg">
				{/* Icon */}
				<Typography variant="h4">{icon}</Typography>

				{/* Description */}
				<Typography
					variant="body1"
					className="!mt-4 !font-extrabold !text-xl"
				>
					{description}
				</Typography>
			</Box>
		</motion.div>
	);
};

const CoreValuesShowcase = () => {
	const { controls, elementRef } = useScrollAnimation("core-values-showcase");

	return (
		<DefaultSection
			id="core-values-showcase"
			title="Take a Look Around"
			className="bg-gradient-to-b from-black to-transparent shadow-inner p-8"
		>
			{/* Core Values Showcase */}
			<Stack
				direction={{ xs: "column", md: "row" }}
				spacing={6}
				className="justify-center items-center gap-8"
				component={motion.div}
				variants={animationVariants.container}
				initial="initial"
				animate={controls}
				ref={elementRef}
			>
				{coreValues.map(({ icon, description }, index) => (
					<CoreValueCard
						key={index}
						icon={icon}
						description={description}
						index={index}
					/>
				))}
			</Stack>
		</DefaultSection>
	);
};

CoreValueCard.propTypes = {
	icon: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	index: PropTypes.number.isRequired,
};

export default CoreValuesShowcase;
