import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import ReadMore from "./Pages/ReadMore";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SaibaMais" element={<ReadMore />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
