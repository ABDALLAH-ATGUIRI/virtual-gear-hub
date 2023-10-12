import { useEffect, useState } from "react"
import Table from "../../../components/Table";
import { useProductContext } from "../../../context/Product";
import DialogDefault from "../../../components/DialogDefault";

const INITFORM = {
    name: "",
    category_id: "",
    price: "",
    description: "",
    image: "",
}

const TABLE_HEAD = ["", "Nfame", "Description", "Price", "Category", "Created at", "Actions"];

const Products = () => {
    const { products, fetchMyProducts, deleteProduct, addProduct, updateProduct } = useProductContext();
    const [showDialog, setShowDialog] = useState(false)
    const [form, setForm] = useState(INITFORM)

    const handleCreate = () => {
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
        deleteProduct(id)
    }

    const handleClose = () => setShowDialog(false)
    const handleShow = () => setShowDialog(true)

    useEffect(() => { fetchMyProducts() }, [])
    return (
        <div >
            <Table handleCreate={() => handleCreate()} title='Table Of Products' header={TABLE_HEAD} data={products?.products} />
            <DialogDefault title={"Create New Product"} />
        </div >
    )
}

export default Products