import { Fragment, Suspense } from "react";
import { RequireAuth } from "./features/auth/RequireAuth";
import { Outlet, Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/dashboard";
import Header from "./components/Header";
import Home from "./Pages/Home";

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
    <div className="w-full h-full duration-300 ease-in-out font-sans text-gray-900 ">
      <div className=" w-full flex-col">
        <div className="overscroll-auto relative">
          <Header />
          {children}
        </div>
      </div>
    </div>
  );
}

export default App
