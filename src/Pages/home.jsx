import Card from '../components/Card'
import SearchBar from '../components/SearchBar'
import { useProductContext } from '../context/Product';

const Home = () => {
    const { products } = useProductContext();

    return (
        <div className="h-screen flex flex-col justify-start items-center gap-8 mt-16">
            <div className='fixed p-6 w-full'>
                <SearchBar />
            </div>
            <div className="flex justify-center items-center gap-8 mt-24 p-8">
                {products?.length ?
                    products.map((item, i) => <Card key={i} item={item} />)
                    : <div colSpan="7" className="text-center h-96 w-full">
                        <p className="text-gray-500 text-md font-semibold">No product found</p>
                    </div>
                }
            </div>

        </div>
    )
}

export default Home