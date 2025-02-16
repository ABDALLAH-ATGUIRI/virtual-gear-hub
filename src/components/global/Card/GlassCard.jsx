import PropTypes from "prop-types";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const GlassCard = ({ image, title, subtitle, price }) => {
	return (
		<Card className="w-full flex items-center max-w-96 flex-row rounded-lg !bg-white/10 shadow-xl backdrop-blur-lg border border-white/20">
			<CardMedia
				component="img"
				className="!w-40 bg-cover bg-center"
				image={`${image}`}
				style={{ height: "100%" }}
			/>
			<CardContent className="flex flex-col justify-center p-4">
				<Typography
					variant="h6"
					className="uppercase text-gray-50 font-extrabold tracking-wide"
				>
					{title}
				</Typography>
				<Typography
					variant="body2"
					className="text-gray-300 text-sm font-medium leading-relaxed"
				>
					{subtitle}
				</Typography>
				<Typography
					variant="h6"
					className="text-tertiary font-bold text-lg tracking-tight"
				>
					{price}
				</Typography>
			</CardContent>
		</Card>
	);
};

GlassCard.propTypes = {
	image: PropTypes.string,
	title: PropTypes.string,
	subtitle: PropTypes.string,
	price: PropTypes.string,
};

export default GlassCard;
