import {
    Card,
    Checkbox,
    Chip,
    Slider,
    Typography,
} from "@material-tailwind/react";

import { MinusIcon } from '@heroicons/react/24/solid'


function FilterSideBar() {
    return (
        <Card className="w-full max-w-[18rem] p-4 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-700/10 rounded-md">
            <div className="flex flex-col gap-6 py-6 px-4 items-center border-b border-gray-800">
                <div className="w-full flex justify-between">
                    <Typography variant="h6" color="white">
                        Budget
                    </Typography>
                    <MinusIcon className="w-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="w-full">
                    <div className="flex justify-between">
                        <Chip value="10 $" className="w-20 text-center p-2.5" />
                        <Chip value="10000 $" className="w-20 text-center p-2.5" />
                    </div>
                    <Slider size="sm" defaultValue={50} className="text-center mt-6 text-secondary" />
                </div>
            </div>
            <div className="flex flex-col gap-6 py-6 px-4 items-center border-b border-gray-800">
                <div className="w-full flex justify-between">
                    <Typography variant="h6" color="white">
                        Genre
                    </Typography>
                    <MinusIcon className="w-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="w-full flex flex-wrap gap-3 ">
                    <Chip value="RPG" className="text-center p-2.5 rounded-full cursor-pointer" />
                    <Chip value="Shooter" className="text-center p-2.5 rounded-full cursor-pointer" />
                    <Chip value="Strategy" className="text-center p-2.5 rounded-full cursor-pointer" />
                    <Chip value="Suvrival" className="text-center p-2.5 rounded-full cursor-pointer" />
                    <Chip value="Open world" className="text-center p-2.5 rounded-full cursor-pointer" />
                    <Chip value="world" className="text-center p-2.5 rounded-full cursor-pointer" />
                </div>
            </div>
            <div className="flex flex-col gap-6 py-6 px-4 items-center border-b border-gray-800">
                <div className="w-full flex justify-between">
                    <Typography variant="h6" color="white">
                        Progects status
                    </Typography>
                    <MinusIcon className="w-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="w-full flex flex-wrap gap-2 [&_*]:text-gray-500">
                    <Checkbox id="ripple-on" label="New project" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    <Checkbox id="ripple-off" label="Resale projects" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                </div>
            </div>
            <div className="flex flex-col gap-6 py-6 px-4 items-center border-b border-gray-800">
                <div className="w-full flex justify-between">
                    <Typography variant="h6" color="white">
                        Year of issue
                    </Typography>
                    <MinusIcon className="w-5 text-gray-500 cursor-pointer" />
                </div>
                <div className="w-full flex flex-wrap gap-2 [&_*]:text-gray-500 ">
                    <Checkbox id="ripple-on" label="2023" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 " />
                    <Checkbox id="ripple-on" label="2022" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    <Checkbox id="ripple-on" label="2021" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    <Checkbox id="ripple-on" label="2020" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    <Checkbox id="ripple-off" label="2019" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                    <Checkbox id="ripple-off" label="2018" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                </div>
            </div>

        </Card>
    );
}

export default FilterSideBar