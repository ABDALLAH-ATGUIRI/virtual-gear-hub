import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CardProduct } from '../cards/product.card'
import { useFetchAllProductsMutation } from '../../features/products/productApiSlice';
import { selectCurrentProducts, setProductsCredentials } from '../../features/products/productSlice';

const ProductsSection = () => {
    const [fetch] = useFetchAllProductsMutation();
    const products = useSelector(selectCurrentProducts)
    const dispatch = useDispatch()

    useEffect(() => {
        new Promise((resolve, reject) => {
            dispatch(fetch).unwrap().then((result) => {
                if (result.total !== 0) {
                    dispatch(setProductsCredentials(result))
                }
                resolve(result)
            }).catch((err) => {
                reject(err)
            });
        })
    }, [dispatch])

    return (
        <section className="px-6 w-full grid grid-rows-2 xl:grid-cols-5 lg:grid-cols-3 grid-cols-2 justify-center gap-x-5 gap-y-6">
            {products?.length ?
                products.map((item, i) => <CardProduct key={i} item={item} />) :
                <div colSpan="7" className="text-center w-full col-span-4">
                    <p className="text-gray-500 text-md font-semibold">No product found</p>
                </div>
            }
        </section>
    )
}

export default ProductsSection