import { Fragment, Suspense } from "react";
import { RequireAuth } from "./features/auth/RequireAuth";
import { Outlet, Route, Routes } from "react-router-dom";
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
