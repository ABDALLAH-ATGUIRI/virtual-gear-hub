import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { ProductProvider } from "./context/Product.jsx";
import AuthProvider from "./context/Auth.jsx";

// import ErrorPage from "./components/404.jsx";
import Auth from "./Pages/auth";
import App from "./App.jsx";

import { Provider } from 'react-redux'
import store from './app/store';

import "./index.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Provider store={store}>
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
    </Provider>
  </StrictMode>
);
