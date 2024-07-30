import React from "react";
import { Link } from "react-router-dom";
import "/src/styles/CardBook.css";

const CardBook = ({ img, titulo, autor }) => {
  return (
    <div className="bookCardContainer">
      <img src={img} alt={titulo} />
      <h1>{titulo}</h1>
      <p>{autor}</p>
      <nav>
        <button>Ler Livro</button>
        <button><Link to="/SaibaMais">Saiba Mais</Link></button>
      </nav>
    </div>
  );
};

export default CardBook;
