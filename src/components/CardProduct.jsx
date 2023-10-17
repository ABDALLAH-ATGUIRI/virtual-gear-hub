import { useState } from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";

export const CardProduct = ({ item }) => {
    const [colors, setColors] = useState({
        jus: 'text-yellow-500', salad: 'text-green-500', food: 'text-orange-500'
    })
    return (
        <Card className="h-96 overflow-hidden">
            <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 rounded-none p-1 h-56"
            >
                <img
                    src={`http://localhost:8000/storage/${item.image}`}
                    alt="ui/ux review check "
                    className="h-full mx-auto object-cover "
                />
            </CardHeader>
            <CardBody className='h-full'>
                <Typography variant="h4" color="blue-gray">
                    {item.name}
                    {/* <span className={`${colors[item.category.name.toLowerCase()]} font-semibold`}>#{item.category.name}</span> */}
                </Typography>
                <Typography variant="lead" color="gray" className="mt-3 font-normal text-md">
                    {item.description}
                </Typography>
            </CardBody>
            <CardFooter className="pt-0 flex justify-between items-center">
                <Typography variant="h5" color="blue-gray">
                    {item.price} DH
                </Typography>
                <Button className='bg-green-400 px-2 rounded-md'>Order Now</Button>
            </CardFooter>
        </Card>
    );
}