import FilterSideBar from '../../components/FilterSideBar';
import ProductsSection from '../../components/sections/products.section';
import Hero from './components/Hero';
import Offers from './components/Offers';

const index = () => {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center gap-8">
            <Hero />
            <div id="services" className="w-full flex p-4">
                <FilterSideBar />
                <ProductsSection />
            </div>
            <Offers />
        </div>
    )
}

export default index