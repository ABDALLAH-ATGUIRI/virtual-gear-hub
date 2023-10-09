import { Fragment, Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home"
import Header from './components/Header'
import Dashboard from "./Pages/dashboard";
import { RequireAuth } from "./context/Auth";

function App() {
  return (
    <Fragment>
      <Suspense fallback={<div>Loading...</div>}>
        <AppWithStore>
          <Routes>
            <Route path="/" element={<Outlet />}>
              <Route path="/" element={<Home />} />
              <Route element={<RequireAuth />}>
                <Route path="/dashboard" element={<Dashboard />} />
              </Route>
            </Route>
          </Routes>
        </AppWithStore>
      </Suspense>
    </Fragment>
  );
}

function AppWithStore({ children }) {
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
