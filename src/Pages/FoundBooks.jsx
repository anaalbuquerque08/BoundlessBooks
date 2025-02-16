import React from "react";
import { MdErrorOutline } from "react-icons/md";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import "/src/styles/BookPage.css";
import BookCarousel from "../Components/BookCarousel";
import BookDetails from "../Components/BookDetails";

const FoundBooks = () => {
  const location = useLocation();
  const { booksData, loading, error } = useFetch("/books.json");
  const books = location.state.books || [];

  const [selectedBook, setSelectedBook] = React.useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const allBooks = booksData || [];

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
        <h3>Resultado Da Busca</h3>
        {books.length > 0 ? (
          <BookCarousel books={books} onBookClick={handleOpenModal} />
        ) : (
          <div className="boxError">
            <h1> <span> <MdErrorOutline /> </span> Livro Não Encontrado.</h1>
            <p>Verifique se escreveu corretamente, ou experimente fazer uma nova busca</p>
          </div>
        )}
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

export default FoundBooks;
