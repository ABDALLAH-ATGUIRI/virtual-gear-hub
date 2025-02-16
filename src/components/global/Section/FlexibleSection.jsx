import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Box, Button, IconButton, Stack, Typography } from "@mui/material";
import { FaRegCirclePlay } from "react-icons/fa6";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import "./style.css";

// Animation variants
const animationVariants = {
	fadeIn: (delay = 0) => ({
		initial: { opacity: 0, x: -50 },
		animate: { opacity: 1, x: 0 },
		transition: { duration: 1, delay },
	}),
	scaleIn: (delay = 0) => ({
		initial: { opacity: 0, scale: 0.8 },
		animate: { opacity: 1, scale: 1 },
		transition: { duration: 1, delay },
	}),
};

const FlexibleSection = ({
	id,
	heading,
	subheading,
	buttonText,
	onButtonClick,
	showIconButton,
	decorativeShapes,
	className,
	children,
}) => {
	const { controls, elementRef } = useScrollAnimation(id);

	return (
		<Box id={id} className={`section-screen ${className}`}>
			{/* Left Section (Decorative or Custom Content) */}
			<Box
				ref={elementRef}
				className="left-countent"
				component={motion.div}
				variants={animationVariants.scaleIn(0.4)}
				initial="initial"
				animate={controls}
			>
				{children.leftContent ||
					decorativeShapes.map((shape, index) => (
						<Box
							key={index}
							className={`decorative-shape ${shape.className}`}
						/>
					))}
			</Box>

			{/* Right Section (Text and Actions) */}
			<Box className="right-countent">
				{children.rightContent || (
					<>
						<Typography
							variant="h2"
							component={motion.h2}
							className="section-title"
							variants={animationVariants.fadeIn(0.2)}
							initial="initial"
							animate={controls}
						>
							{heading}
						</Typography>

						{subheading && (
							<Typography
								variant="body1"
								className="section-description"
								component={motion.p}
								variants={animationVariants.fadeIn(0.4)}
								initial="initial"
								animate={controls}
							>
								{subheading}
							</Typography>
						)}

						<Stack
							direction="row"
							spacing={3}
							component={motion.div}
							variants={animationVariants.fadeIn(0.6)}
							initial="initial"
							animate={controls}
						>
							{buttonText && (
								<Button
									variant="contained"
									size="large"
									className="section-button"
									onClick={onButtonClick}
								>
									{buttonText}
								</Button>
							)}
							{showIconButton && (
								<IconButton
									size="large"
									className="section-play-button"
									aria-label="Play video"
								>
									<FaRegCirclePlay size={32} />
								</IconButton>
							)}
						</Stack>
					</>
				)}
			</Box>
		</Box>
	);
};

// PropTypes Validation
FlexibleSection.propTypes = {
	id: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
	subheading: PropTypes.string,
	buttonText: PropTypes.string,
	onButtonClick: PropTypes.func,
	showIconButton: PropTypes.bool,
	decorativeShapes: PropTypes.arrayOf(
		PropTypes.shape({
			className: PropTypes.string.isRequired,
		})
	),
	className: PropTypes.string,
	children: PropTypes.shape({
		leftContent: PropTypes.node,
		rightContent: PropTypes.node,
	}),
};

FlexibleSection.defaultProps = {
	subheading: "",
	buttonText: "",
	onButtonClick: null,
	showIconButton: true,
	decorativeShapes: [],
	className: "",
	children: {},
};

export default FlexibleSection;
