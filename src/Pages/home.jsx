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
                {
                    products.map((item, i) => <Card key={i} item={item} />)
                }
            </div>

        </div>
    )
}

export default Home