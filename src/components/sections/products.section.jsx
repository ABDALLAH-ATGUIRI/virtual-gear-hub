import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ProductCard } from '../cards/product.card'
import { useFetchAllProductsMutation } from '@features/products/productApiSlice';
import { selectCurrentProducts, setProductsCredentials } from '@features/products/productSlice';
import { GamesCard } from '../cards/games.card';
import { PRODUCTSIMG } from '../../assets';

const GAMES = [
    {
        name: 'Product1',
        category: 'Category1',
        color: 'blue',
        quantity: 2,
        price: 100,
        poster: PRODUCTSIMG.game_01
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'green',
        quantity: 4,
        price: 200,
        poster: PRODUCTSIMG.game_02
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'red',
        quantity: 6,
        price: 300,
        poster: PRODUCTSIMG.game_03
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'blue',
        quantity: 8,
        price: 400,
        poster: PRODUCTSIMG.game_04
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'green',
        quantity: 4,
        price: 200,
        poster: PRODUCTSIMG.game_05
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'red',
        quantity: 6,
        price: 300,
        poster: PRODUCTSIMG.game_06
    },
    {
        name: 'Product2',
        category: 'Category2',
        color: 'blue',
        quantity: 8,
        price: 400,
        poster: PRODUCTSIMG.game_07
    },
]
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
        <section className="w-full grid grid-rows-4 2xl:grid-cols-6 xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 justify-center gap-x-6 gap-y-10">
            {products?.length ?
                products.map((item, i) => <ProductCard key={i} item={item} />) :
                <div colSpan="7" className="text-center w-full col-span-4">
                    <p className="text-gray-500 text-md font-semibold">No product found</p>
                </div>
            }
            {GAMES?.length ?
                GAMES.map((item, i) => <GamesCard key={i} item={item} />) :
                <div colSpan="7" className="text-center w-full col-span-4">
                    <p className="text-gray-500 text-md font-semibold">No product found</p>
                </div>
            }
        </section>
    )
}

export default ProductsSection