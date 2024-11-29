import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
	CardHeader,
} from "@material-tailwind/react";
import { BiPlusCircle } from "react-icons/bi";
import { PRODUCTSIMG } from "@/assets";

export const ProductCard = ({ item }) => {
	return (
		<Card
			color="transparent"
			className="relative flex flex-col justify-end h-[20rem] w-full max-w-[28rem] overflow-hidden shadow-md shadow-black/20 dark:shadow-white/20 dark:[&>*]:text-gray-200 [&>*]:text-gray-900 text-center rounded-md  hover:border hover:border-secondary rounded-tl-lg"
		>
			<CardHeader
				color="blue-gray"
				className="relative m-0 w-full h-32 rounded-sm shadow-lg shadow-white dark:shadow-gray-900 bg-transparent"
			>
				<img
					src={`${PRODUCTSIMG.glassvr_1}`}
					alt="ui/ux review check "
					className="absolute m-2 w-full h-full"
				/>
				<Typography
					variant="paragraph"
					color="white"
					className="bg-secondary/80 absolute z-20 p-1 px-6 top-0 left-0 rounded-br-xl text-md font-semibold col-row-3"
				>
					{item.price} $
				</Typography>
			</CardHeader>
			<CardBody className="p-0 pt-3 h-36">
				<Typography variant="h4"> {item.name} </Typography>
				<Typography color="gray" className="mt-1 font-normal text-xs">
					{" "}
					{item.category.name}{" "}
				</Typography>
				<Typography className="mt-3 text-sm h-14">
					{" "}
					{item.description}{" "}
				</Typography>
			</CardBody>
			<CardFooter className="p-0">
				<Button
					fullWidth
					variant="text"
					className="flex items-center justify-center gap-2 dark:text-gray-200 text-gray-900 hover:bg-secondary/10 rounded-none"
				>
					<BiPlusCircle size={20} />
					Order Now
				</Button>
			</CardFooter>
		</Card>
	);
};
