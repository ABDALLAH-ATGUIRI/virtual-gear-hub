import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { Grid, Typography } from "@mui/material";
import useScrollAnimation from "@/hooks/useScrollAnimation";
import { blog_stack_1, blog_stack_3, blog_stack_4 } from "@/assets";
import DefaultSection from "@/components/global/Section/DefaultSection";

const items = [
	{ id: 1, image: blog_stack_1, title: "Oculus Rift" },
	{ id: 2, image: blog_stack_4, title: "Meta Quest" },
	{ id: 3, image: blog_stack_3, title: "VR Accessories" },
	{ id: 4, image: blog_stack_1, title: "Immersive Games" },
	{ id: 5, image: blog_stack_4, title: "AR Headsets" },
	{ id: 6, image: blog_stack_3, title: "Virtual Studios" },
];

const determineCardSize = (index, isMobile) => {
	const isCenter = isMobile ? [1, 2, 5].includes(index) : index % 3 === 1;
	return isMobile
		? isCenter
			? "small-card"
			: "large-card"
		: index < 3
		? isCenter
			? "small-card"
			: "large-card"
		: isCenter
		? "large-card"
		: "small-card";
};

const FeatureCard = ({ image, title, cardSize }) => {
	const { controls, elementRef } = useScrollAnimation("core-values-showcase");

	return (
		<Grid
			item
			xs={12}
			sm={6}
			md={4}
			key={title}
			className="flex justify-center"
		>
			<motion.div
				className={`${cardSize} feateres-card-motion`}
				whileInView={{ opacity: 1, y: 0 }}
				initial={{ opacity: 0, y: 50 }}
				transition={{ duration: 0.6 }}
				ref={elementRef}
				variants={controls}
			>
				<div className="feateres-card-header">
					<img src={image} alt={title} />
					<div className="absolute inset-0 bg-black/30 rounded-3xl"></div>
				</div>
				<Typography variant="h5" className="feateres-card-titel">
					{title}
				</Typography>
			</motion.div>
		</Grid>
	);
};

const Features = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 900);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 900);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<DefaultSection id="features" title="Features" className="py-12">
			<Grid
				container
				spacing={4} // Increased spacing for better card separation
				className="justify-center md:!w-11/12"
			>
				{items.map(({ image, title }, index) => {
					return (
						<FeatureCard
							key={index}
							image={image}
							title={title}
							cardSize={determineCardSize(index, isMobile)}
						/>
					);
				})}
			</Grid>
		</DefaultSection>
	);
};

FeatureCard.propTypes = {
	image: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cardSize: PropTypes.string.isRequired,
}
export default Features;
