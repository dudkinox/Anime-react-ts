import React from "react";
import "./App.css";
import Footer from "./components/footer";
import Header from "./components/header";
import Loading from "./components/loading";
import Product from "./components/product";
import HomePage from "./pages/home";

function App() {
  return (
    <>
      <Loading />
      <Header />
      <HomePage />
      <Product />
      <Footer />
    </>
  );
}

export default App;
