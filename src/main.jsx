import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/Product.jsx";
import Auth from "./Pages/auth";
import AuthProvider from "./context/Auth.jsx";
import ErrorPage from "./components/404.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <AuthProvider>
        <ProductProvider>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path='/auth/*' element={<Auth />} />
            {/* <Route path="/*" element={<ErrorPage />} /> */}
          </Routes>
        </ProductProvider>
      </AuthProvider>
    </Router>
  </StrictMode>
);
