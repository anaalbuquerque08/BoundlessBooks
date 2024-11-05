import React from "react";
import "/src/styles/BookFiltered.css";
import { Link } from "react-router-dom";

const BookFiltered = ({ books, limit = 2, onCloseSearch}) => {
  const limitedBooks = books.slice(0, limit);

  return (
    <div className="boxFiltered">
      {limitedBooks.map((book, index) => (
        <section key={index} className="bookFiltered">
          <img src={book.img} alt={book.titulo} />
          <p className="titulo" style={{ color: "white" }}>
            {book.titulo}
          </p>
          <p className="autor" style={{ color: "white" }}>
            {book.autor}
          </p>
        </section>
      ))}
      {books.length > limit && (
        <div className="boxAllBooks">
          <h1>
            <Link to={"/livrosEncontrados"} state={{books}} onClick={onCloseSearch}>
              Ver todos os {books.length} resultados
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default BookFiltered;
