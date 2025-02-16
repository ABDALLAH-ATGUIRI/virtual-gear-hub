import PropTypes from "prop-types";
import {
	Box,
	Typography,
	Avatar,
	Card,
	CardContent,
	Rating,
} from "@mui/material";
import { motion } from "framer-motion";
import useScrollAnimation from "@/hooks/useScrollAnimation";

// Framer Motion Animation Variants
const animationVariants = {
	hover: {
		scale: 1.05,
		boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.15)",
		transition: { duration: 0.3 },
	},
	initial: {
		opacity: 0,
		y: 30,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6 },
	},
};

const TestimonialCard = ({ id, name, role, text, avatar, rating }) => {
	const { controls } = useScrollAnimation(id); // Use unique ID for animation control

	return (
		<Card
			component={motion.div}
			id={id} // Unique ID for each card
			variants={animationVariants}
			initial="initial"
			animate={controls}
			whileHover="hover"
			className="max-w-xs w-full h-96 rounded-lg border border-gray-300 shadow-md !bg-white/10 p-6 dark:border-gray-700 transition-transform"
		>
			{/* Header */}
			<Box className="text-center">
				<Box className="flex flex-col items-center gap-3 mb-4">
					<Avatar
						alt={name}
						src={avatar}
						className="!w-20 !h-20 shadow-lg border border-gray-200 dark:border-gray-700"
					/>
					<Typography
						variant="h6"
						className="font-semibold text-gray-800 dark:text-white"
					>
						{name}
					</Typography>
					<Typography
						variant="body2"
						className="text-sm text-gray-500 dark:text-gray-400"
					>
						{role}
					</Typography>
				</Box>
				<Rating
					name={`rating-feedback-${id}`}
					value={rating}
					readOnly
					precision={0.5}
					sx={{
						"& .MuiRating-iconFilled": { color: "#FACC15" },
						"& .MuiRating-iconEmpty": { color: "#E4E4E7" },
					}}
				/>
			</Box>

			{/* Testimonial Text */}
			<CardContent className="text-center">
				<Typography
					variant="body1"
					className="text-gray-600 dark:text-gray-300 font-serif italic leading-relaxed"
				>
					“{text}”
				</Typography>
			</CardContent>
		</Card>
	);
};

TestimonialCard.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	role: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	avatar: PropTypes.string,
	rating: PropTypes.number.isRequired,
};

TestimonialCard.defaultProps = {
	avatar: "",
};

export default TestimonialCard;
