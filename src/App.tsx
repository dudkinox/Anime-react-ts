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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
