import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./pages/categories";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
