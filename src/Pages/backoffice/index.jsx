import { Route, Routes } from "react-router"
import Sidebar from "../../components/global/Sidebar"
import Products from "./products"

const Dashboard = () => {
    return (
        <DashboardStructure>
            <Routes>
                <Route path="/products" element={<Products />} />
            </Routes>
        </DashboardStructure>
    )
}

const DashboardStructure = ({ children }) => {
    return (
        <div className="w-full h-screen">
            <Sidebar />
            <div className="relative ml-20 p-1 pt-20">
                {/* <CurrentLocation /> */}
                {children}
            </div>
        </div>
    )
}

export default Dashboard;