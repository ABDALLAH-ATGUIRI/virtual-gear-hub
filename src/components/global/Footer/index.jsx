import "./style.css";
import { SOCIAL } from "@/utils/data";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";
import Logo from "../Logo";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			{/* Logo */}
			<Logo size="sm" />

			{/* Copyright */}
			<Typography
				variant="paragraph"
				color="current"
				className="copyright"
			>
				All rights reserved {currentYear} &copy;
			</Typography>

			{/* Social Icons */}
			<div className="social">
				{SOCIAL.map(({ link, icon: Icon }, index) => (
					<Link href={link} key={index}>
						<Icon size={22} />
					</Link>
				))}
			</div>
		</footer>
	);
};

export default Footer;
