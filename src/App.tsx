import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Loading from "./components/loading";
import Product from "./components/product";
import HomePage from "./pages/home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
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
