import FilterSideBar from '../../../components/FilterSideBar';
import ProductsSection from '../../../components/sections/products.section';

const Index = () => {
    return (
        <div className='relative mt-[5rem] w-full flex '>
            <FilterSideBar />
            <div className='w-full px-6 py-4 max-h-[90vh] overflow-x-auto costume-scrollbar '>
                <ProductsSection />
            </div>
        </div>
    )
}

export default Index