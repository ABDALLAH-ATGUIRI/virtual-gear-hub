import { useState } from "react";
import { MagnifyingGlassIcon, MinusIcon } from "@heroicons/react/24/outline";
import {
    Card,
    Typography,
    List,
    ListItem,
    Accordion,
    AccordionHeader,
    AccordionBody,
    Chip,
    Slider,
    Checkbox,
    Input,
} from "@material-tailwind/react";

export function SidebarWithCta() {
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <Card className="w-full max-w-[17rem] p-2 shadow-xl shadow-blue-gray-900/5 bg-blue-gray-700/10 rounded-sm [&_*]:dark:text-white">
            <div className="p-2">
                <Input icon={<MagnifyingGlassIcon className="h-5 w-5" />} label="Search" color="purple" className="" />
            </div>
            <List>
                <Accordion
                    open={open === 1}
                    icon={<MinusIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform  ${open === 1 ? "rotate-180" : ""}`} />}
                >
                    <ListItem className="p-0" selected={open === 1}>
                        <AccordionHeader onClick={() => handleOpen(1)} className="border-b-2 p-2 dark:hover:bg-black/60">
                            <Typography className="mr-auto font-normal">Budget</Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <div className="flex flex-col px-2 py-6 items-center">
                            <div className="w-full flex justify-between">
                                <span className="w-16 p-1 text-center bg-black/40 rounded-full">10 <span className="!text-secondary">$</span></span>
                                <span className="w-16 p-1 text-center bg-black/40 rounded-full">10000 <span className="!text-secondary">$</span></span>
                            </div>
                            <Slider size="sm" defaultValue={50} className="text-center mt-6 text-secondary" />
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 2}
                    icon={<MinusIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
                >
                    <ListItem className="p-0" selected={open === 2}>
                        <AccordionHeader onClick={() => handleOpen(2)} className="border-b-2 p-2 dark:hover:bg-black/60">
                            <Typography className="mr-auto font-normal">Genre</Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <div className="w-full flex flex-wrap gap-3 [&>*]:text-xs py-4 px-2 ">
                            <Chip value="RPG" className="text-center p-2 rounded-full cursor-pointer" />
                            <Chip value="Shooter" className="text-center p-2 rounded-full cursor-pointer" />
                            <Chip value="Strategy" className="text-center p-2 rounded-full cursor-pointer" />
                            <Chip value="Suvrival" className="text-center p-2 rounded-full cursor-pointer" />
                            <Chip value="Open world" className="text-center p-2 rounded-full cursor-pointer" />
                            <Chip value="world" className="text-center p-2 rounded-full cursor-pointer" />
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 3}
                    icon={<MinusIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
                >
                    <ListItem className="p-0" selected={open === 3}>
                        <AccordionHeader onClick={() => handleOpen(3)} className="border-b-2 p-2 dark:hover:bg-black/60">
                            <Typography className="mr-auto font-normal">Progects status</Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <div className="w-full flex flex-wrap gap-2 [&_*]:text-gray-500">
                            <Checkbox id="ripple-on" label="New project" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                            <Checkbox id="ripple-off" label="Resale projects" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                        </div>
                    </AccordionBody>
                </Accordion>
                <Accordion
                    open={open === 4}
                    icon={<MinusIcon strokeWidth={2.5} className={`mx-auto h-4 w-4 transition-transform ${open === 1 ? "rotate-180" : ""}`} />}
                >
                    <ListItem className="p-0" selected={open === 4}>
                        <AccordionHeader onClick={() => handleOpen(4)} className="border-b-2 p-2 dark:hover:bg-black/60">
                            <Typography className="mr-auto font-normal">Year of issue</Typography>
                        </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                        <div className="w-full flex flex-wrap gap-2 [&_*]:text-gray-500 ">
                            <Checkbox id="ripple-on" label="2023" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0 " />
                            <Checkbox id="ripple-on" label="2022" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                            <Checkbox id="ripple-on" label="2021" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                            <Checkbox id="ripple-on" label="2020" ripple={true} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                            <Checkbox id="ripple-off" label="2019" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                            <Checkbox id="ripple-off" label="2018" ripple={false} className="h-4 w-4 rounded-none border-gray-500 bg-gray-900/10 transition-all hover:scale-105 hover:before:opacity-0" />
                        </div>
                    </AccordionBody>
                </Accordion>
            </List>
        </Card>
    );
}

export default SidebarWithCta