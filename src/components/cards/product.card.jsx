import { Card, CardBody, CardFooter, Typography, Button } from "@material-tailwind/react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';
import { PRODUCTSIMG } from "../../assets";

export const ProductCard = ({ item }) => {
    return (
        <Card color="transparent" className="relative flex flex-col justify-end h-[20rem] w-full max-w-[28rem] overflow-hidden shadow-md shadow-gray-800/10 [&>*]:bg-gray-700/10 text-center rounded-md  hover:border hover:border-secondary rounded-tl-lg">
            <CardBody className='relative w-full flex flex-col items-center p-0'>
                <img
                    src={`${PRODUCTSIMG.glassvr_1}`}
                    alt="ui/ux review check "
                    className="absolute z-10 left-0 -top-20 h-full w-full object-fit"
                />
                <div className="h-full px-4 mt-14">
                    <Typography variant="h4" color="white"> {item.name} </Typography>
                    <Typography color="gray" className="mt-1 font-normal text-xs" > {item.category.name} </Typography>
                    <Typography color="white" className="mt-3 text-sm h-14" > {item.description} </Typography>
                </div>
            </CardBody>
            <CardFooter className="p-0">
                <Typography
                    variant="paragraph"
                    color="white"
                    className="bg-secondary/60 absolute z-20 p-1 px-6 top-0 left-0 rounded-br-xl text-md font-semibold col-row-3"
                >
                    {item.price} $
                </Typography>
                <Button
                    fullWidth
                    variant="text"
                    className="flex items-center justify-center gap-2 text-blue-gray-100"
                >
                    <PlusCircleIcon className="h-10 w-10 text-secondary" />
                    Order Now
                </Button>
            </CardFooter>
        </Card >
    );
}