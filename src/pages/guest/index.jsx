import { lazy, useMemo } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";

import Footer from "@/components/global/Footer";
import Header from "@/components/global/Header";
import HomeLayout from "@/components/layouts/HomeLayout";

import { Box } from "@mui/material";
import "./style.css";

// Lazy load components
const Home = lazy(() => import("./Home"));
const AboutUs = lazy(() => import("./AboutUs"));
const Products = lazy(() => import("./Products"));
const ErrorPage = lazy(() => import("@/pages/404"));

function Guest() {
	const routes = useMemo(
		() => [
			{ path: "/", element: <Navigate replace to="home" /> },
			{ path: "home", element: <Home /> },
			{ path: "about-us", element: <AboutUs /> },
			{ path: "our-products", element: <Products /> },
			{ path: "/*", element: <ErrorPage /> },
		],
		[]
	);

	return (
		<HomeLayout>
			{{
				Navbar: <Header />,
				Content: (
					<Box>
						<Routes>
							<Route path="/" element={<Outlet />}>
								{routes.map((route, index) => (
									<Route
										key={index}
										path={route.path}
										element={route.element}
									/>
								))}
							</Route>
						</Routes>
					</Box>
				),
				Footer: <Footer />,
			}}
		</HomeLayout>
	);
}

export default Guest;
