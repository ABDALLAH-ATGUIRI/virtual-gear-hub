import { StrictMode } from "react";
import { createRoot } from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Pages from "./Pages";

import { Provider } from 'react-redux'
import store from './app/store';

import "./index.css";

const root = createRoot(document.getElementById("root"));

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
