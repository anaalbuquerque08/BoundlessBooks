import React from "react";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import FoundBooks from "./Pages/FoundBooks";
import BookReaderPage from "./Pages/BookReaderPage";
import FavoriteBooksPage from "./Pages/FavoriteBooksPage"; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livrosEncontrados" element={<FoundBooks />} />
        <Route path="/modoLeitura" element={<BookReaderPage />} />
        <Route path="/favoritos" element={<FavoriteBooksPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
