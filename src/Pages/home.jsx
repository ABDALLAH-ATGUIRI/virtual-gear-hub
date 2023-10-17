import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useFetchMutation } from '../features/products/productApiSlice';
import { selectCurrentProducts, setProductsCredentials } from '../features/products/productSlice';

import { CardProduct } from '../components/CardProduct'
import SearchBar from '../components/SearchBar'

const Home = () => {
    const [fetch, { isLoading }] = useFetchMutation();
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
        <div className="h-screen flex flex-col justify-start items-center gap-8">
            <div className='fixed p-6 w-full'>
                <SearchBar />
            </div>
            <div className="grid grid-cols-5 justify-center items-center gap-8 mt-24 p-8">
                {products?.length ?
                    products.map((item, i) => <CardProduct key={i} item={item} />)
                    : <div colSpan="7" className="text-center h-96 w-full">
                        <p className="text-gray-500 text-md font-semibold">No product found</p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Home