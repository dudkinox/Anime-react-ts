import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./pages/categories";
import Header from "./components/header";
import Loading from "./components/loading";
import Footer from "./components/footer";

function App() {
  const category = [
    {
      name: "ยาโอย",
      value: 0,
    },
    {
      name: "แฟนตาซี",
      value: 1,
    },
    {
      name: "ดราม่า",
      value: 2,
    },
    {
      name: "ต่อสู้",
      value: 3,
    },
    {
      name: "โรแมนติก",
      value: 4,
    },
    {
      name: "Sci-fi/ไซ-ไฟ",
      value: 5,
    },
    {
      name: "ผจญภัย",
      value: 6,
    },
    {
      name: "ประวัติศาสตร์",
      value: 7,
    },
    {
      name: "ตลก",
      value: 8,
    },
    {
      name: "ชีวิตประจำวัน",
      value: 9,
    },
    {
      name: "ดนตรี",
      value: 10,
    },
    {
      name: "โรงเรียน",
      value: 11,
    },
  ];
  return (
    <div className="main-panel">
      <Loading />
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route
            path="/categories"
            element={<Categories type={category[0].name} />}
          />
          {category.map((item, index) => {
            return (
              <Route
                key={index}
                path={`/categories/${item.value}`}
                element={<Categories type={item.name} />}
              />
            );
          })}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
