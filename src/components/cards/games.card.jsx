import { PlusCircleIcon } from "@heroicons/react/24/outline"
import { Card, CardBody, CardFooter, CardHeader, IconButton, Typography } from "@material-tailwind/react"

export const GamesCard = ({ item }) => {
    return (
        <Card className="relative flex justify-end h-[20rem] w-full max-w-[28rem] items-end overflow-hidden text-center rounded-md shadow-md shadow-gray-800/10 hover:border hover:border-secondary rounded-tl-lg">
            <CardHeader
                className={`absolute -z-2 inset-0 m-0 h-full w-full bg-cover bg-center rounded-none`}
                style={{ backgroundImage: `url(${item.poster})` }}
            >
                <div className="to-bg-black1-0 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50" />
            </CardHeader>
            <CardBody>
                <Typography variant="paragraph" color="white" className="bg-secondary/60 absolute z-20 p-1 px-6 top-0 left-0 rounded-br-xl text-md font-semibold col-row-3" >
                    {item.price} $
                </Typography>
            </CardBody>
            <CardFooter className="w-full absolute self-end py-4 text-start flex items-center justify-between gap-4 bg-gradient-to-t from-black/80 via-black">
                <div >
                    <Typography variant="h5" color="white">
                        {item.name}
                    </Typography>
                    <Typography variant="small" className="font-medium text-xs">
                        {item.category}
                    </Typography>
                </div>
                <IconButton size="md" className="rounded-full"><PlusCircleIcon className="h-10 w-10 text-secondary" /></IconButton>
            </CardFooter>
        </Card>
    )
}
