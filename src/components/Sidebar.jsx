import { useEffect, useState } from "react";
import { SIDEBARMENUS } from "../utils/api/menus";
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

import {
    PowerIcon,
    ChevronDownIcon
} from "@heroicons/react/24/solid";

import { Bars3BottomLeftIcon, Bars3BottomRightIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

function Sidebar() {
    const [open, setOpen] = useState(0);
    const [openSidebar, setOpenSidebar] = useState(true);

    const handleOpen = (value) => {
        if (openSidebar == true) setOpenSidebar(false)
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => { if (openSidebar === true) setOpen(0) }, [openSidebar])
    return (
        <Card className={`h-[calc(100vh-2rem)] fixed z-40 p-4 shadow-xl shadow-blue-gray-900/5 ${openSidebar ? '!w-24' : '!w-80'}`}>
            <List>
                <ListItem className="flex gap-3">
                    <ListItemPrefix className="!flex flex-1 !items-end !justify-end" onClick={() => setOpenSidebar(!openSidebar)}>
                        {
                            openSidebar ? <Bars3BottomLeftIcon className={`w-7`} /> : <Bars3BottomRightIcon className={`w-7`} />
                        }
                    </ListItemPrefix>
                </ListItem>

                {
                    SIDEBARMENUS.map((item, i) => {
                        if (item.children !== undefined) {
                            return <Accordion
                                open={open === i + 1}
                                key={`parent-${i}`}
                                icon={
                                    <ChevronDownIcon
                                        strokeWidth={2.5}
                                        className={`mx-auto h-4 w-4 transition-transform ${open === i + 1 ? "rotate-180" : ""}`}
                                    />
                                }
                            >
                                <ListItem className="p-0" selected={open === i + 1}>
                                    <AccordionHeader onClick={() => handleOpen(i + 1)} className="border-b-0 p-3 flex gap-2">
                                        <ListItemPrefix>
                                            <item.icon className="w-7" />
                                        </ListItemPrefix>
                                        <Typography color="blue-gray" className={`mr-auto font-semibold text-lg ${!openSidebar ? 'blok' : 'hidden'}`}>
                                            {item.name}
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className={`py-1 pl-8 ${open !== i + 1 ? 'hidden' : 'block'}`}>
                                    <List className="p-0">
                                        {
                                            item.children.map((child, i) => <><Link to={item.link}><ListItem key={`child-${i}`} > {child.name}</ListItem ></Link></>)
                                        }
                                    </List>
                                </AccordionBody>
                            </Accordion >
                        } else {
                            return <ListItem key={`parent-${i}`} className="flex gap-3">
                                <Link to={item.link}>
                                    <ListItemPrefix>
                                        <item.icon className={`w-6`} />
                                    </ListItemPrefix>
                                    <ListItemPrefix className={`${!openSidebar ? 'flex' : 'hidden'}`}>
                                        {item.name}
                                    </ListItemPrefix>
                                </Link>
                            </ListItem>
                        }
                    })
                }

                <hr className="my-2 border-blue-gray-50" />
                
                <ListItem className="flex gap-2 text-red-600 font-semibold">
                    <ListItemPrefix>
                        <PowerIcon className={`w-6`} />
                    </ListItemPrefix>
                    <ListItemPrefix className={`${!openSidebar ? 'blok' : 'hidden'}`}>
                        Log Out
                    </ListItemPrefix>
                </ListItem>
            </List>
        </Card >
    );
}

export default Sidebar;