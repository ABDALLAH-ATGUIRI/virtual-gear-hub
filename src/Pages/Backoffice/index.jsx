import PropTypes from "prop-types";
import { Route, Routes } from "react-router";
import { RequireAuth } from "@features/auth/RequireAuth";
import Products from "./Products";
import Categories from "./Categories";
import Sidebar from "@/components/global/Sidebar";
import Dashboard from "./Dashboard";
import BackofficeLayout from "@/components/layouts/BackofficeLayout";
import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";

const Backoffice = () => {
	return (
		<BackofficeStructure>
			<Routes>
				<Route element={<RequireAuth />}>
					<Route path="dashboard" element={<Dashboard />} />
					<Route path="products" element={<Products />} />
					<Route path="categories" element={<Categories />} />
				</Route>
			</Routes>
		</BackofficeStructure>
	);
};

const BackofficeStructure = ({ children }) => {
	return (
		<BackofficeLayout>
			{{
				Navbar: <Header showLogo={false} />,
				Sidebar: <Sidebar />,
				Content: <>{children}</>,
				Footer: <Footer />,
			}}
		</BackofficeLayout>
	);
};

BackofficeStructure.propTypes = {
	children: PropTypes.node.isRequired,
};

export default Backoffice;
