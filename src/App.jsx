import { Fragment, Suspense, useEffect, useState } from "react";
import { RequireAuth } from "./features/auth/RequireAuth";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { useRefreshTokenMutation } from "./features/auth/authApiSlice";
import { setCredentials } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/dashboard";
import ProcurementPanel from "./pages/user/ProcurementPanel";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/home";
import Catalogues from "./pages/user/Catalogues";
import Cookies from "js-cookie";
import ErrorPage from "./pages/404";
import Auth from "./pages/auth";

function App() {
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
  const [isLoading, setIsLoading] = useState(true);
  const [refreshToken] = useRefreshTokenMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    if (Cookies.get("token"))
      new Promise((resolve, reject) => {
        dispatch(refreshToken).unwrap().then((result) => {
          dispatch(setCredentials({ ...result }))
          setIsLoading(false)
          resolve(result)
        }).catch((err) => {
          reject(err)
          setIsLoading(false)
        });
      })
  }, [dispatch])

  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <div className="relative w-full h-full duration-300 ease-in-out font-sans bg-gray-900 ">
        <div className="overscroll-auto relative flex flex-col">
          <Header />
          <div className="relative min-h-screen w-full">
            {children}
          </div>
          <Footer />
        </div>
      </div>
      <Auth />
    </Suspense>

  );
}

export default App
