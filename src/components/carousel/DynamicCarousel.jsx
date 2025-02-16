import { useState, useEffect, memo, Children } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Box } from "@mui/material";

// Memoized HeroNavigation to prevent unnecessary re-renders
const HeroNavigation = memo(({ setActiveIndex, activeIndex, length }) => (
	<div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
		{Array.from({ length }).map((_, i) => (
			<span
				key={i}
				className={`block h-1 cursor-pointer rounded-2xl transition-all ${
					activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
				}`}
				onClick={() => setActiveIndex(i)}
			/>
		))}
	</div>
));

HeroNavigation.displayName = "HeroNavigation"; // Add displayName to avoid ESLint warning

HeroNavigation.propTypes = {
	setActiveIndex: PropTypes.func.isRequired,
	activeIndex: PropTypes.number.isRequired,
	length: PropTypes.number.isRequired,
};

// DynamicCarousel Component that accepts children
const DynamicCarousel = ({ children, interval = 3000 }) => {
	const [activeIndex, setActiveIndex] = useState(0);

	// Auto-transition between slides after a set interval
	useEffect(() => {
		const intervalId = setInterval(() => {
			setActiveIndex(
				(prevIndex) => (prevIndex + 1) % Children.count(children)
			);
		}, interval);

		return () => clearInterval(intervalId); // Cleanup on component unmount
	}, [children, interval]);

	return (
		<Box className="relative h-screen overflow-hidden">
			<motion.div
				className="relative flex w-full h-full"
				animate={{ x: -activeIndex * 100 + "%" }}
				transition={{ duration: 0.5 }}
			>
				{Children.map(children, (child, index) => (
					<motion.div
						key={index}
						className="w-full h-full flex-shrink-0"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.3 }}
					>
						{child}
					</motion.div>
				))}
			</motion.div>

			{/* Navigation dots */}
			<HeroNavigation
				setActiveIndex={setActiveIndex}
				activeIndex={activeIndex}
				length={Children.count(children)}
			/>
		</Box>
	);
};

DynamicCarousel.propTypes = {
	children: PropTypes.node.isRequired, // Children can now be passed instead of slidesData
	interval: PropTypes.number,
};

export default DynamicCarousel;
