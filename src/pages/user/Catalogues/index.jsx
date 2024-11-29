import FilterSideBar from '@/components/FilterSideBar';
import ProductsLayout from '@/components/layouts/ProductsLayout';

const Index = () => {
    return (
        <div className='relative mt-[5rem] w-full flex '>
            <FilterSideBar />
            <div className='w-full px-6 py-4 max-h-[90vh] overflow-x-auto costume-scrollbar '>
                <ProductsLayout />
            </div>
        </div>
    )
}

export default Index