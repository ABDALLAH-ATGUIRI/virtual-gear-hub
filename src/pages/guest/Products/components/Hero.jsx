import { memo } from "react";
import PropTypes from "prop-types";
import { Button, Typography, Box } from "@mui/material";
import { blog_hero_3 } from "@/assets";
import DynamicCarousel from "@/components/carousel/DynamicCarousel";

// Memoize SlideContent to prevent unnecessary re-renders
const SlideContent = memo(
	({
		title,
		subtitle,
		description,
		buttonText,
		buttonProps,
		children,
		contentClass = "",
	}) => (
		<Box
			className={`flex flex-col items-center text-center gap-6 ${contentClass}`}
		>
			{title && (
				<Typography variant="h5" className="uppercase">
					{title}
				</Typography>
			)}
			{subtitle && (
				<Typography
					variant="h2"
					className="!font-bold text-5xl lg:text-6xl"
				>
					{subtitle}
				</Typography>
			)}
			{description && (
				<Typography className="md:text-xl">{description}</Typography>
			)}
			{buttonText && (
				<Button variant="contained" {...buttonProps}>
					{buttonText}
				</Button>
			)}
			{children}
		</Box>
	)
);

SlideContent.displayName = "SlideContent";
SlideContent.propTypes = {
	title: PropTypes.string,
	subtitle: PropTypes.string,
	description: PropTypes.string,
	buttonText: PropTypes.string,
	buttonProps: PropTypes.object,
	children: PropTypes.node,
	contentClass: PropTypes.string,
};

const FirstSlide = () => (
	<Box className="bg-hero-bg-2 bg-cover bg-center flex justify-end h-full">
		<Box className="w-full bg-black/30 flex items-center justify-center h-full">
			<SlideContent
				title="New Reality"
				subtitle={
					<>
						New impre
						<span className="text-tertiary">ssions</span>
					</>
				}
				description="Wear VR helmet and start new battles"
				buttonText="Get Catalog"
				buttonProps={{
					className:
						"!rounded-full !bg-tertiary !py-3 !px-36 !text-lg !font-bold !text-white",
				}}
			/>
		</Box>
	</Box>
);

const SecondSlide = () => (
	<Box className="relative w-full h-full">
		<Box className="relative w-3/4 clip-custom-shape h-full bg-secondary/80">
			<img
				src={blog_hero_3}
				alt="Hero banner"
				className="w-[55rem] absolute bottom-0 left-40"
			/>
		</Box>
		<Box className="absolute top-0 right-0 flex flex-col gap-6 items-center justify-center h-full text-center px-16 w-6/12">
			<SlideContent
				subtitle="Bonus"
				title="Get a bonus on all products"
				description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquet, libero non mattis lacinia, erat felis accumsan tortor, nec eleifend velit justo quis dui. Ut euismod sapien vitae tristique posuere."
				buttonText="Get Catalog"
				buttonProps={{
					variant: "outlined",
					className:
						"!rounded-full !bg-secondary !py-3 !px-36 !text-lg !font-bold !border-8 !border-light dark:!border-dark",
				}}
				contentClass="font-extrabold text-[10rem]"
			/>
		</Box>
	</Box>
);

const Hero = () => (
	<div>
		<DynamicCarousel interval={10000}>
			<FirstSlide />
			<SecondSlide />
		</DynamicCarousel>
	</div>
);

export default Hero;
