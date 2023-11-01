import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import Table from "../../../components/Table";
import { openDialog } from "../../../features/dialogsReducer";
import { useFetchMyProductsMutation } from "../../../features/products/productApiSlice";
import { selectCurrentPagination, selectCurrentProducts, setProductsCredentials } from "../../../features/products/productSlice";
import { CreateEdit } from "./components/CreateEdit";

const TABLE_HEAD = ["", "Name", "Description", "Price", "Category", "Created at", "Actions"];

const Products = () => {
    const dispatch = useDispatch()
    const [fetch] = useFetchMyProductsMutation();
    const products = useSelector(selectCurrentProducts);
    const pagination = useSelector(selectCurrentPagination);

    const [product, setProduct] = useState()

    const [currentPage, setCurrentPage] = useState(pagination || 1)

    const handle = (info) => {
        switch (info?.type) {
            case "create":
                setProduct({})
                dispatch(openDialog('create-edit-product'))
                break
            case "update":
                setProduct(info?.data)
                dispatch(openDialog('create-edit-product'))
                break
            case "delete":
                break
            default: return
        }
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetch).unwrap().then((result) => {
                dispatch(setProductsCredentials(result))
                resolve(result)
            }).catch((err) => {
                reject(err)
            });
        })
    }, [dispatch])

    return (
        <>
            <Table handle={handle} title='Our Products' header={TABLE_HEAD} data={products} pagination={pagination} setCurrentPage={setCurrentPage} />
            <CreateEdit product={product} />
        </>
    )
}

export default Products