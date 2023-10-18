import { Fragment } from "react"
import CurrentLocation from "../../components/CurrentLocation"
import Sidebar from "../../components/Sidebar"
import { Route, Routes } from "react-router"
import Products from "./products"


const Dashboard = () => {
    return (
        <Fragment>
            <DashboardStructure>
                <Routes>
                        <Route path="/products" element={<Products />} />
                </Routes>
            </DashboardStructure>
        </Fragment>
    )
}

const DashboardStructure = ({ children }) => {
    return (
        <div className="w-full h-screen">
            <Sidebar />
            <div className="relative ml-20 pt-20 p-6">
                <CurrentLocation />
                {children}
            </div>
        </div>
    )
}

export default Dashboard
