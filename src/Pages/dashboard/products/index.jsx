import { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import store from "../../../app/store";
import Table from "../../../components/Table";
import { openModel } from "../../../features/modelSlice";
import { useFetchMyProductsMutation } from "../../../features/products/productApiSlice";
import { selectCurrentPagination, selectCurrentProducts, setProductsCredentials } from "../../../features/products/productSlice";
import { CreateEdit } from "./components/CreateEdit";

const TABLE_HEAD = ["", "Name", "Description", "Price", "Category", "Created at", "Actions"];

const Products = () => {
    const [fetch] = useFetchMyProductsMutation();
    const products = useSelector(selectCurrentProducts);
    const pagination = useSelector(selectCurrentPagination);

    const [product, setProduct] = useState()

    const [currentPage, setCurrentPage] = useState(pagination || 1)

    const handle = (info) => {
        switch (info?.type) {
            case "create":
                setProduct({})
                store.dispatch(openModel())
                break
            case "update":
                setProduct(info?.data)
                store.dispatch(openModel())
                break
            case "delete":
                break
            default: return
        }
    }

    useEffect(() => {
        new Promise((resolve, reject) => {
            store.dispatch(fetch).unwrap().then((result) => {
                store.dispatch(setProductsCredentials(result))
                resolve(result)
            }).catch((err) => {
                reject(err)
            });
        })
    }, [store.dispatch])

    return (
        <>
            <Table handle={handle} title='Our Products' header={TABLE_HEAD} data={products} pagination={pagination} setCurrentPage={setCurrentPage} />
            <CreateEdit product={product} />
        </>
    )
}

export default Products