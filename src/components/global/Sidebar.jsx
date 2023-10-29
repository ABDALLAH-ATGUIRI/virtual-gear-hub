import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { SIDEBARMENUS } from "../../utils/menus";
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

import { ChevronDownIcon, Bars3BottomLeftIcon, Bars3BottomRightIcon } from "@heroicons/react/24/solid";

function Sidebar() {
    const [open, setOpen] = useState(0);
    const [openSidebar, setOpenSidebar] = useState(true);

    const handleOpen = (value) => {
        if (openSidebar == true) setOpenSidebar(false)
        setOpen(open === value ? 0 : value);
    };

    useEffect(() => { if (openSidebar === true) setOpen(0) }, [openSidebar])
    return (
        <Card className={`!h-full fixed z-30 px-1 shadow-xl shadow-blue-gray-900/5 mt-16 rounded-none bg-primary/80 ${openSidebar ? '!w-20' : '!w-64'}`}>
            <List>
                <ListItem className={`flex mt-4 ${openSidebar ? 'w-14' : ''}`}>
                    <ListItemPrefix className={`!flex flex-1 !items-end !justify-end`} onClick={() => setOpenSidebar(!openSidebar)}>
                        {
                            openSidebar ? <Bars3BottomLeftIcon color="white" className={`w-7`} /> : <Bars3BottomRightIcon color="white" className={`w-7`} />
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
                                        color="white"
                                        className={`mx-auto h-4 w-4 transition-transform ${open === i + 1 ? "rotate-180" : ""}`}
                                    />
                                }
                                className={`${openSidebar ? '!w-16' : ''}`}
                            >
                                <ListItem className="p-0" selected={open === i + 1}>
                                    <AccordionHeader onClick={() => handleOpen(i + 1)} className="border-b-0 p-3 flex gap-2">
                                        <ListItemPrefix>
                                            <item.icon color="white" className="w-6" />
                                        </ListItemPrefix>
                                        <Typography color="white" className={`mr-auto font-semibold text-[16px] ${!openSidebar ? 'blok' : 'hidden'}`}>
                                            {item.name}
                                        </Typography>
                                    </AccordionHeader>
                                </ListItem>

                                <AccordionBody className={`py-1 pl-8 ${open !== i + 1 ? 'hidden' : 'block'}`}>
                                    <List className="p-0 text-white">
                                        {
                                            item.children.map((child, i) => <Link to={child.link} key={`child-${i}`}><ListItem > {child.name}</ListItem ></Link>)
                                        }
                                    </List>
                                </AccordionBody>
                            </Accordion >
                        } else {
                            return <ListItem key={`parent-${i}`} className={`hover:bg-none ${openSidebar ? '!w-16' : ''}`}>
                                <Link to={item.link} className="flex gap-3">
                                    <ListItemPrefix>
                                        <item.icon color="gray-blue" className={`w-6`} />
                                    </ListItemPrefix>
                                    <ListItemPrefix className={`text-gray-blue-50 ${!openSidebar ? 'flex' : 'hidden'}`}>
                                        {item.name}
                                    </ListItemPrefix>
                                </Link>
                            </ListItem>
                        }
                    })
                }
            </List>
        </Card >
    );
}

export default Sidebar;