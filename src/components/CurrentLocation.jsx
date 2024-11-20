import { HiChevronDoubleRight, HiHome } from "react-icons/hi2";
import { Breadcrumbs } from "@material-tailwind/react";
import { Link, useLocation } from "react-router-dom";

const CurrentLocation = () => {
	const paths = useLocation()
		.pathname.split("/")
		.filter((path) => path);
	return (
		<Breadcrumbs
			fullWidth
			separator={
				<HiChevronDoubleRight size={20} />
			}
		>
			{paths.map((item, i) => {
				if (i === 0) {
					return (
						<Link
							to={`/${item}`}
							key={i}
							className="opacity-60 font-semibold"
						>
							<HiHome size={20} />
						</Link>
					);
				} else {
					return (
						<Link
							to={item}
							key={i}
							className={`${
								i === paths.length - 1
									? "opacity-60"
									: "opacity-0"
							} font-semibold`}
						>
							{item}
						</Link>
					);
				}
			})}
		</Breadcrumbs>
	);
};

export default CurrentLocation;
