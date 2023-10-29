import { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";
import { PlusCircleIcon } from '@heroicons/react/24/outline';

export const CardProduct = ({ item }) => {
    const [colors, setColors] = useState({
        jus: 'text-yellow-500', salad: 'text-green-500', food: 'text-orange-500'
    })
    return (
        <Card className="overflow-hidden rounded-md bg-blue-gray-700/10 shadow-md shadow-blue-gray-800/10">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 h-full max-h-32 "
            >
                <img
                    src={`http://localhost:8000/storage/${item.image}`}
                    alt="ui/ux review check "
                    className="h-full mx-auto object-cover"
                />
            </CardHeader>
            <CardBody className='flex flex-col items-center h-full'>
                <Typography variant="h5" className='text-blue-gray-100/40 text-center'>
                    {item.name}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal text-md">
                    {item.category.name}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex flex-col items-center gap-2">
                <Typography variant="h5" className="text-secondary font-extrabold text-xl">
                    {item.price} $
                </Typography>
                <Button variant="text" className="flex items-center gap-2 text-blue-gray-100">
                    <PlusCircleIcon className="h-8 w-8 text-secondary" />
                    Order Now
                </Button>
            </CardFooter>
        </Card >
    );
}