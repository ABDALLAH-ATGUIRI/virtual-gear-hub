import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { motion } from "framer-motion";

// Animation Variants
const animationVariants = {
	fadeInUp: {
		initial: { opacity: 0, y: 50 },
		animate: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.8, ease: "easeOut" },
		},
	},
};

// Default Section Component
const DefaultSection = ({ title, children, id, className }) => {
	return (
		<Box
			id={id}
			component="section"
			className={`flex flex-col justify-center items-center gap-20 w-full px-4 lg:px-12 py-12 min-h-screen ${className}`}
		>
			{/* Title */}
			<motion.div
				className="text-center"
				initial="initial"
				animate="animate"
				variants={animationVariants.fadeInUp}
			>
				<Typography
					variant="h4"
					className="!font-extrabold text-2xl lg:text-4xl"
				>
					{title}
				</Typography>
			</motion.div>

			{/* Children (Content) */}
			<motion.div
				className="flex flex-col gap-6 w-full justify-center items-center"
				initial="initial"
				animate="animate"
				variants={animationVariants.fadeInUp}
			>
				{children}
			</motion.div>
		</Box>
	);
};

DefaultSection.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.node.isRequired,
	id: PropTypes.string.isRequired,
	className: PropTypes.string,
};

export default DefaultSection;
