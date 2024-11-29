import { Button, Typography } from "@mui/material";
import "./style.css";
function Logo({ size = "lg" }) {
	return (
		<Button className="p-2" size="small">
			<Typography
				as="a"
				variant="h5"
				className={`logo`}
			>
				<span>ARENA</span>
				<span className="text-deep-purple-600">GAME</span>
			</Typography>
		</Button>
	);
}


export default Logo;
