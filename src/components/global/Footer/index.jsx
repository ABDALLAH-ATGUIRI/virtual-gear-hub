import "./style.css";
import { SOCIAL } from "@/utils/data";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="footer">
			{/* Logo */}
			<Typography as="a" variant="h5" color="white" className="logo">
				<span>ARENA</span>{" "}
				<span className="text-deep-purple-600">GAME</span>
			</Typography>

			{/* Copyright */}
			<Typography variant="paragraph" color="current" className="copyright">
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
