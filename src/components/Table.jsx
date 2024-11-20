import { HiPencil, HiPlusSmall, HiTrash } from "react-icons/hi2";
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    CardHeader,
} from "@material-tailwind/react";

function Table({ handle, header, data, pagination, title, setCurrentPage }) {

    const prePage = () => { if (pagination.currentPage > 1) setCurrentPage(pagination.currentPage - 1) }
    const nextPage = () => { if (pagination.currentPage < pagination.lastPage) setCurrentPage(pagination.currentPage + 1) }

    return (
        <Card className="h-full shadow-md overflow-x-auto  bg-white-700/10">
            <CardHeader floated={false} shadow={false} className="rounded-none bg-transparent p-4">
                <div>
                    <Typography variant="h5" color="white">
                        {title}
                    </Typography>
                </div>
                <div className="flex item-center justify-end">
                    <Button className="bg-green-500 flex item-center gap-1 py-2.5 pr-5 pl-3" onClick={() => handle({ type: 'create' })}>
                        <HiPlusSmall size={20} />
                        Create
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead className="text-xs text-white uppercase">
                        <tr>
                            {header.map((head) => (
                                <th
                                    key={head}
                                    className="border-y p-4 font-bold"
                                >
                                    <Typography
                                        variant="small"
                                        color="white"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody >
                        {data?.length > 0 ? data.map(
                            (item, index) => {
                                return (
                                    <tr key={name + index} className={index % 2 ? 'bg-gray-100/20' : ''}>
                                        <td className="p-4 flex justify-center">
                                            <Avatar src={`http://localhost:8000/storage/${item.image}`} alt={name} size="xl" className="max-h-24  h-full w-auto" />
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal"
                                            >
                                                {item.name}
                                            </Typography>
                                        </td>

                                        <td className={`p-4`}>
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal"
                                            >
                                                {item.description}
                                            </Typography>
                                        </td>

                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal"
                                            >
                                                {item.category.name}
                                            </Typography>
                                        </td>

                                        <td className={`p-4`}>
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal"
                                            >
                                                {item.price}
                                            </Typography>
                                        </td>

                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="white"
                                                className="font-normal"
                                            >
                                                {new Date(item.created_at).toLocaleDateString()}
                                            </Typography>
                                        </td>
                                        <td className={`py-4 w-32`}>
                                            <Button variant="text" onClick={() => handle({ type: 'update', data: item })}>
                                                <HiPencil size={20} className="mx-5 text-blue-600" />
                                            </Button>

                                            <Button variant="text" onClick={() => handle({ type: 'update', id: item.id })}>
                                                <HiTrash size={20} className="mx-5 text-red-600" />
                                            </Button>
                                        </td>
                                    </tr>
                                );
                            },
                        ) :
                            <tr>
                                <td colSpan="7" className="text-center h-96">
                                    <p className="text-gray-500 text-md font-semibold">No product found</p>
                                </td>
                            </tr>}
                    </tbody>
                </table>
            </CardBody>
            <CardFooter className="flex item-center justify-between border-t border-white-50 p-4">
                <Typography variant="small" color="white" className="font-normal">
                    Page {pagination.currentPage} of {pagination.lastPage}
                </Typography>
                <div className="flex gap-2">
                    <Button variant="outlined" size="sm" onClick={() => prePage()}>
                        Previous
                    </Button>
                    <Button variant="outlined" size="sm" onClick={() => nextPage()}>
                        Next
                    </Button>
                </div>
            </CardFooter>
        </Card>
    );
}

export default Table