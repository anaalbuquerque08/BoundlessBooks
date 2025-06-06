import React from "react";
import "/src/styles/BookFiltered.css";
import { Link } from "react-router-dom";

const BookFiltered = ({ books, limit = 2, onCloseSearch }) => {
  const limitedBooks = books.slice(0, limit);

  const truncateText = (text, maxLength) => {
    if (typeof text !== "string") return "";

    if (text.length > maxLength) {
      return (
        <>
          {text.slice(0, maxLength)}
          <span
            style={{ fontWeight: "bold", cursor: "pointer", color: "white" }}
          >
            ... Saiba mais
          </span>
        </>
      );
    }
    return text;
  };

  return (
    <div className="boxFiltered">
      {limitedBooks.map((book, index) => (
        <section key={index} className="bookFiltered">
          <img className="bookImg" src={book.coverImageUrl} alt={book.title} />
          <div className="input-information">
            <div className="first-line">
              <h3 className="titulo">{book.title}</h3>
              <img
                className="classificacao_input"
                src="assets/classificacao_14.png"
                alt="Classificação indicativa"
              />
            </div>

            <p className="autor-input">{book.author}</p>
            <p className="sinopse">{truncateText(book.synopsis, 180)}</p>
            <p className="sinopse-mobile">{truncateText(book.synopsis, 90)}</p>
          </div>
          <p id="gratis">Grátis</p>
        </section>
      ))}
      {books.length > limit && (
        <div className="boxAllBooks">
          <h1>
            <Link
              to={"/livrosEncontrados"}
              state={{ books }}
              onClick={onCloseSearch}
            >
              Ver todos os {books.length} resultados
            </Link>
          </h1>
        </div>
      )}
    </div>
  );
};

export default BookFiltered;
