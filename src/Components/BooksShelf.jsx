import React from "react";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import "/src/styles/BooksShelf.css";

const BooksShelf = ({ onClose }) => {
  const [booksShelf, setBooksShelf] = React.useState([]);

  React.useEffect(() => {
    const booksInShelf = JSON.parse(localStorage.getItem("shelf")) || [];
    setBooksShelf(booksInShelf);
  }, []);

  const handleDelete = (bookToDelete) => {
    const updatedShelf = booksShelf.filter((book) => book.titulo !== bookToDelete.titulo);
    setBooksShelf(updatedShelf);
    localStorage.setItem("shelf", JSON.stringify(updatedShelf));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content-shelf">
        <button className="modal-close" onClick={onClose}>
          X
        </button>
        <div className="modal-title-shelf">
          <ImBooks size={60} color="#fff" />
          <h2>Minha Estante</h2>
        </div>
        <p id="desc-shelf">
          Salvos para ler depois! Não se procupe, você pode remover e adicionar
          livros quando quiser.
        </p>
        <div className="box-shelf">
          {booksShelf.map((book) => (
            <div key={book.titulo}>
              <img id="book-cover" src={book.img} alt="capa do livro" />
              <div className="box-actions">
                <Link to={"/modoLeitura"}>
                  <button id="read-btn">Ler Agora</button>
                </Link>
                <button id="delete-btn" onClick={() => handleDelete(book)} >
                  <FaTrashAlt />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksShelf;
