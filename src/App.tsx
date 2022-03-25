import React from "react";
import "./App.css";
import HomePage from "./pages/home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="main-panel">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
