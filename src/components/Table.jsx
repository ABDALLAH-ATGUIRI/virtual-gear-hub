import { PencilIcon, TrashIcon, PlusSmallIcon } from "@heroicons/react/24/solid";
import {
    Card,
    Typography,
    Button,
    CardBody,
    CardFooter,
    Avatar,
    CardHeader,
} from "@material-tailwind/react";

function Table({ handleCreate, handleEdit, handleDelete, header, data, pagination, title, setCurrentPage }) {

    const prePage = () => { if (pagination.currentPage > 1) setCurrentPage(pagination.currentPage - 1) }
    const nextPage = () => { if (pagination.currentPage < pagination.lastPage) setCurrentPage(pagination.currentPage + 1) }

    return (
        <Card className="h-full w-full shadow-md rounded-md overflow-x-auto">
            <CardHeader floated={false} shadow={false} className="rounded-none p-4">
                <div>
                    <Typography variant="h5" color="blue-gray">
                        {title}
                    </Typography>
                </div>
                <div className="flex items-center justify-end">
                    <Button className="bg-green-500 flex items-center gap-1 py-2.5 pr-5 pl-3" onClick={() => handleCreate()}>
                        <PlusSmallIcon className="h-6 w-6" />Create
                    </Button>
                </div>
            </CardHeader>
            <CardBody className="px-0">
                <table className="mt-4 w-full min-w-max table-auto text-left">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            {header.map((head) => (
                                <th
                                    key={head}
                                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 font-bold"
                                >
                                    <Typography
                                        variant="small"
                                        color="blue-gray"
                                        className="font-bold leading-none opacity-70"
                                    >
                                        {head}
                                    </Typography>
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data?.length > 0 ? data.map(
                            ({ image, name, category, description, price, created_at, }, index) => {

                                return (
                                    <tr key={name + index}>
                                        <td className="p-2 flex justify-center">
                                            <Avatar src={`http://localhost:8000/storage/${image}`} alt={name} size="xl" className="max-h-24  h-full w-auto" />
                                        </td>
                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {name}
                                            </Typography>
                                        </td>

                                        <td className={`p-4 bg-gray-100/50`}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {description}
                                            </Typography>
                                        </td>

                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {category.name}
                                            </Typography>
                                        </td>

                                        <td className={`p-4 bg-gray-100/50`}>
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {price}
                                            </Typography>
                                        </td>

                                        <td className="p-4">
                                            <Typography
                                                variant="small"
                                                color="blue-gray"
                                                className="font-normal"
                                            >
                                                {new Date(created_at).toLocaleDateString()}
                                            </Typography>
                                        </td>
                                        <td className={`py-8 w-32 bg-gray-100/50`}>
                                            <Button variant="text" onClick={() => handleEdit()}>
                                                <PencilIcon className="h-5 w-5 mx-5 text-blue-600" />
                                            </Button>

                                            <Button variant="text" onClick={() => handleDelete()}>
                                                <TrashIcon className="h-5 w-5 mx-5 text-red-600" />
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
            <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
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