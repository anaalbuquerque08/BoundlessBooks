import React from "react";
import Header from "../Components/Header";
import useFetch from "../hooks/useFetch";
import Banner from "../Components/Banner";
import BookCarousel from "../Components/BookCarousel";
import BookDetails from "../Components/BookDetails";
import "/src/styles/BookPage.css";
import { MdErrorOutline } from 'react-icons/md';
import { useNavigate } from "react-router-dom";

const FavoriteBooksPage = () => {
  const [favorites, setFavorites] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState(null);
  const { booksData, loading, error } = useFetch("/books.json");
  const navigate = useNavigate();

  const allBooks = booksData || [];

  // EU TENHO QUE USAR A ROTA PARA PUXAR OS FAVORITOS

  React.useEffect(() => {
    const bookFavorite = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(bookFavorite);
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = "visible";
  }, [navigate]);  


  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  return (
    <div>
      <Header allBooks={allBooks} />
      <Banner />
      <div className="categorys">
        <h3>Lista de Favoritos</h3>
        {favorites.length === 0 ? (
          <div className="boxError">
            <h1><span><MdErrorOutline /></span> Nenhum livro favoritado.</h1>
            <p>Adicione livros aos seus favoritos para vê-los aqui.</p>
          </div>
        ) : (
          <BookCarousel books={favorites} onBookClick={handleOpenModal} />
        )}
      </div>

      {selectedBook && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>X</button>
            <BookDetails {...selectedBook} onClose={handleCloseModal} />
          </div>
        </div>
      )}
    </div>
  );
};

export default FavoriteBooksPage;
