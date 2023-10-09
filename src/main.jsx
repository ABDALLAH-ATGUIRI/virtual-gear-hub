import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import { ProductProvider } from "./context/Product.jsx";
import Auth from "./Pages/auth";
import AuthProvider from "./context/Auth.jsx";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <AuthProvider>
          <Routes>
            <Route path="/*" element={<App />} />
            <Route path="/auth/*" element={<Auth />} />
          </Routes>
        </AuthProvider>
      </ProductProvider>
    </Router>
  </StrictMode>
);
