import { useEffect, useState } from "react"
import Swal from 'sweetalert2'
import Dialog from "../components/Dialog";
import Sidebar from "../components/Sidebar"
import Pagination from "../components/Pagination";
import { useProductContext } from "../context/Product";

const INITFORM = {
    name: "",
    category_id: "",
    price: "",
    description: "",
    image: "",
}
const Dashboard = () => {
    const { products, fetchMyProducts, deleteProduct, addProduct, updateProduct } = useProductContext();
    const [showDialog, setShowDialog] = useState(false)
    const [form, setForm] = useState(INITFORM)

    const handleAdd = () => {
        setForm(INITFORM)
        handleShow()
    }

    const handleEdit = (newForm) => {
        setForm(
            {
                id: newForm.id,
                name: newForm.name,
                category_id: newForm.category_id,
                price: newForm.price,
                description: newForm.description,
            })
        handleShow()
    }

    const handle = () => {
        if (form?.id) {
            updateProduct(form)
        } else {
            addProduct(form)
        }
        setForm(INITFORM)
        handleClose()
    }


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure you want to delete this?',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                deleteProduct(id)
            }
        })
    }

    const handleClose = () => setShowDialog(false)
    const handleShow = () => setShowDialog(true)

    useEffect(() => { fetchMyProducts() }, [])

    return (
        <div className="w-full h-screen">
            <Sidebar />
            <div className="relative sm:ml-72 mt-16 pr-8">
                <div className="w-full p-4 flex justify-end">
                    <button className="text-white bg-green-400  focus:ring-4 focus:outline-none font-medium rounded-md text-sm px-5 py-3 text-center" onClick={() => handleAdd()}>Add new product</button>
                </div>
                <table className="w-full text-sm text-left text-gray-500 p-4 pl-8">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                <span className="sr-only">Image</span>
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Price
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date Added
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            products?.products?.length > 0 ?

                                products?.products?.map((item, i) =>
                                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50">
                                        <td className="w-40 p-4 ">
                                            <img src={`http://localhost:8000/storage/${item.image}`} alt="Apple Watch" />
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 ">
                                            {item.name}
                                        </td>
                                        <td className="px-6 py-4 font-semibold">
                                            {item.category.name}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900 ">
                                            {item.price}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900  text-clip w-96">
                                            {item.description}
                                        </td>
                                        <td className="px-6 py-4 font-semibold text-gray-900  text-clip w-96">
                                            {new Date(item.created_at).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 !w-8">
                                            <button className="font-medium text-blue-600  p-2 w-10 h-10" onClick={() => handleEdit(item)}><svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg></button>
                                            <button className="font-medium text-red-600  p-2 w-10 h-10" onClick={() => handleDelete(item.id)}><svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><path d="M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"></path></svg></button>
                                        </td>
                                    </tr>
                                )
                                :
                                <tr>
                                    <td colSpan="7" className="text-center h-96">
                                        <p className="text-gray-500 text-md font-semibold">No product found</p>
                                    </td>
                                </tr>
                        }
                    </tbody>
                </table>
                <Pagination current_page={products.current_page} per_page={products.per_page} total={products.total} last_page={products.last_page} />
                <Dialog title={"Create New Product"} show={showDialog} close={handleClose} form={form} setForm={setForm} handle={handle} />
            </div>
        </div>
    )
}

export default Dashboard