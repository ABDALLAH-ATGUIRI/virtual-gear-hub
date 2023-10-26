import { Fragment, Suspense, useEffect } from "react";
import { RequireAuth } from "./features/auth/RequireAuth";
import { Outlet, Route, Routes } from "react-router-dom";
import { useRefreshTokenMutation } from "./features/auth/authApiSlice";
import { setCredentials } from "./features/auth/authSlice";
import { useDispatch } from "react-redux";
import Dashboard from "./pages/dashboard";
import Header from "./components/global/Header";
import Footer from "./components/global/Footer";
import Home from "./pages/home";

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <AppStructure>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="/" element={<Home />} />
              <Route element={<RequireAuth />} >
                <Route path="/dashboard/*" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </AppStructure>
      </Suspense>
    </Fragment>
  );
}

function AppStructure({ children }) {
  const [refreshToken, { isLoading }] = useRefreshTokenMutation()
  const dispatch = useDispatch()

  useEffect(() => {
    new Promise((resolve, reject) => {
      dispatch(refreshToken).unwrap().then((result) => {
        dispatch(setCredentials({ ...result }))
        resolve(result)
      }).catch((err) => {
        reject(err)
      });
    })
  }, [dispatch])

  return (
    <div className="relative w-full h-full duration-300 ease-in-out font-sans bg-gray-900 ">
      <div className="overscroll-auto relative flex flex-col">
        <Header />
        <div className="relative min-h-screen w-full">
          {children}
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App
