import { lazy, Suspense, useEffect, useMemo } from "react";
import propTypes from "prop-types";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { setCredentials } from "@features/auth/authSlice";
import { useAuthUserQuery } from "@features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import GlobalAlert from "@/components/global/Alert/GlobalAlert";
import Auth from "./auth";

// Lazy load components
const Backoffice = lazy(() => import("./Backoffice"));
const Home = lazy(() => import("./home"));
const Catalogues = lazy(() => import("./user/Catalogues"));
const ErrorPage = lazy(() => import("./404"));

function App() {
	const dispatch = useDispatch();
	const { data: authUser } = useAuthUserQuery();

	useEffect(() => {
		if (authUser) {
			dispatch(setCredentials(authUser));
		}
	}, [authUser, dispatch]);

	useEffect(() => {
		const theme = localStorage.getItem("theme");
		if (theme) document.body.className = theme;
	}, []);

	const routes = useMemo(
		() => [
			{ path: "/", element: <Navigate replace to="home" /> },
			{ path: "home", element: <Home /> },
			{ path: "catalogues", element: <Catalogues /> },
			{ path: "backoffice/*", element: <Backoffice /> },
			{ path: "*", element: <ErrorPage /> },
		],
		[]
	);

	return (
		<AppStructure>
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
		</AppStructure>
	);
}

function AppStructure({ children }) {
	return (
		<div className="app">
			<Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
			<Auth />
			<GlobalAlert />
		</div>
	);
}

AppStructure.propTypes = {
	children: propTypes.node,
};	

export default App;
