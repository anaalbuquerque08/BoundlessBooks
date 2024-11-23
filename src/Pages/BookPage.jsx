import React from "react";
import useFetch from "../hooks/useFetch";
import BookCarousel from "../Components/BookCarousel";
import BookDetails from "../Components/BookDetails";
import "/src/styles/BookPage.css";
import Header from "../Components/Header";
import Banner from "../Components/Banner";

const BookPage = () => {
  const [selectedBook, setSelectedBook] = React.useState(null);
  const { booksData, loading, error } = useFetch("/books.json");

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };


  const romanceAdolescenteBooks = booksData?.romanceAdolescenteBooks || [];

  const ficcaoCientificaBooks = booksData?.ficcaoCientificaBooks || [];

  const recomendadosBooks = booksData?.recomendadosBooks || [];

  const allBooks = [
    ...romanceAdolescenteBooks,
    ...ficcaoCientificaBooks,
    ...recomendadosBooks,
  ];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Carregando...</p>
      </div>
    );
}

  if (error) {
    return <p>Erro: {error}</p>;
  }


  return (
    <div className={`BookPage ${selectedBook ? "modal-open" : ""}`}>
      <Header allBooks={allBooks} />
      <Banner />
      <div className="Categorias">
        <h3>Recomendados para Você</h3>
        <BookCarousel books={recomendadosBooks} onBookClick={handleOpenModal} />
      </div>

      <div className="Categorias">
        <h3>Romance Adolescente</h3>
        <BookCarousel
          books={romanceAdolescenteBooks}
          onBookClick={handleOpenModal}
        />
      </div>

      <div className="Categorias">
        <h3>Ficção Científica</h3>
        <BookCarousel
          books={ficcaoCientificaBooks}
          onBookClick={handleOpenModal}
        />
      </div>

      {selectedBook && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              X
            </button>
            <BookDetails {...selectedBook} />
          </div>
        </div>
      )}
    </div>
  );
};

export default BookPage;
