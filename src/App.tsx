import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./pages/categories";
import Header from "./components/header";
import Loading from "./components/loading";
import Footer from "./components/footer";

function App() {
  return (
    <div className="main-panel">
      {/* <Loading />
      <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path={"/categories/:id"} element={<Categories />} />
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
