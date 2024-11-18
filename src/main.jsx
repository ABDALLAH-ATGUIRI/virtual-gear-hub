import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./Pages";

import { Provider } from 'react-redux';
import store from './services/store';

import "./index.css";

// Create root instance
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// Render the app with provider and routing setup
root.render(
  <StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/*" element={<Pages />} />
        </Routes>
      </Router>
    </Provider>
  </StrictMode>
);
