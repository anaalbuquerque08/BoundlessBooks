import React from "react";
import useFetch from "../hooks/useFetch";
import BookCarousel from "../Components/BookCarousel";
import BookDetails from "../Components/BookDetails";
import "/src/styles/BookPage.css";
import Header from "../Components/Header";
import Banner from "../Components/Banner";
import { apiFetch } from "../services/api";

const BookPage = () => {
  const [selectedBook, setSelectedBook] = React.useState(null);
  const { booksData, loading, error } = useFetch("/books.json");
  const [books, setBooks] = React.useState([]);

  React.useEffect(() => {
    async function carregarLivros() {
      try {
        const dados = await apiFetch("/api/v1/books");
        setBooks(dados);
        console.log("Livros recebidos:", dados);
      } catch (erro) {
        console.error("Erro ao carregar livros:", erro.message);
      }
    }

    carregarLivros();
  }, []);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const allBooks = booksData || [];

  const recomendadosBooks = books.filter(book => book.category === "Recomendados para Você");
  const fantasiaBooks = books.filter(book => book.category === "Fantasia");
  const romanceBooks = books.filter(book => book.category === "Romance");
  const ficcaoCientificaBooks = books.filter(book => book.category === "Ficção");

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
      <div className="categorys">
        <h3>Recomendados para Você</h3>
        <BookCarousel books={recomendadosBooks} onBookClick={handleOpenModal} />
      </div>

      <div className="categorys">
        <h3>Fantasia</h3>
        <BookCarousel
          books={fantasiaBooks}
          onBookClick={handleOpenModal}
        />
      </div>

      <div className="categorys">
        <h3>Romance</h3>
        <BookCarousel
          books={romanceBooks}
          onBookClick={handleOpenModal}
        />
      </div>

      <div className="categorys">
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
