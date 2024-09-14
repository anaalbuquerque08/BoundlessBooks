import React from "react";
import CardDetails from "./CardDetails";

const BookCarousel = ({ books }) => {
  return (
    <div className="book-carousel">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <img src={book.img} alt={book.titulo} />
          <h4>{book.titulo}</h4>
          <p>{book.autor}</p>
          <CardDetails
            img={book.img}
            nome={book.titulo}
            autor={book.autor}
            data={book.data}
            paginas={book.paginas}
            sinopse={book.sinopse}
          />
        </div>
      ))}
    </div>
  );
};

export default BookCarousel;
