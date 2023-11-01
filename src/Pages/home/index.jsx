import FilterSideBar from '../../components/FilterSideBar';
import ProductsSection from '../../components/sections/products.section';
import ProcurementPanel from '../user/ProcurementPanel';
import Hero from './components/Hero';

const Index = () => {
    return (
        <div className="min-h-screen flex flex-col justify-start items-center gap-8">
            <Hero />
            <div id="services" className="w-full flex p-4">
                <FilterSideBar />
                <ProductsSection />
                <ProcurementPanel />
            </div>
        </div>
    )
}

export default Index