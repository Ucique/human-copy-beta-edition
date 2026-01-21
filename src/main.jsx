import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HumanCopyBetaLanding from "./App.jsx";
import Thanks from "./Thanks.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter basename="/human-copy-beta-edition">
      <Routes>
        <Route path="/" element={<HumanCopyBetaLanding />} />
        <Route path="/thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
