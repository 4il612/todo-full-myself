import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardTest from "./pages/cardtest";
import ListTest from "./pages/ListTest";
import FormTest from "./pages/FormTest";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test/cards" element={<CardTest />} />
        <Route path="/test/list" element={<ListTest />} />
        <Route path="/test/form" element={<FormTest />} />
        <Route path="/" element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
