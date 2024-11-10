import { Fragment, Suspense, useCallback, useEffect } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { RequireAuth } from "@features/auth/RequireAuth";
import { setCredentials } from "@features/auth/authSlice";
import { useAuthUserQuery } from "@features/auth/authApiSlice";
import { useDispatch } from "react-redux";
import Dashboard from "./dashboard";
import ProcurementPanel from "./user/ProcurementPanel";
import Header from "../components/global/Header";
import Footer from "../components/global/Footer";
import Home from "./home";
import Catalogues from "./user/Catalogues";
import ErrorPage from "./404";
import Auth from "./auth";

function Index() {
  return (
    <Fragment>
      <AppStructure>
        <Routes>
          <Route path="/" element={<Outlet />}>
            <Route path="/" element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />
            <Route path="/catalogues" element={< Catalogues />} />
            <Route element={<RequireAuth />} >
              <Route path="/dashboard/*" element={<Dashboard />} />
              <Route path="/payment" element={<ProcurementPanel />} />
            </Route>
            <Route path="*" element={< ErrorPage />} />
          </Route>
        </Routes>
      </AppStructure>
    </Fragment>
  );
}

export function AppStructure({ children }) {
	const dispatch = useDispatch();
	const { data: authUser } = useAuthUserQuery();

	// Memoized handler for setting user credentials
	const handleSetCredentials = useCallback(() => {
		if (authUser) {
			dispatch(setCredentials(authUser));
		}
	}, [authUser, dispatch]);

	useEffect(() => {
		handleSetCredentials();
	}, [handleSetCredentials]);

	return (
		<div className="relative w-full h-full duration-300 ease-in-out font-sans bg-light dark:bg-dark">
			<div className="overscroll-auto relative flex flex-col min-h-screen">
				<Header />
				<Suspense fallback={<div>Loading...</div>}>
					<main className="flex-grow">{children}</main>
				</Suspense>
				<Footer />
			</div>
			<Auth />
		</div>
	);
}
export default Index;
