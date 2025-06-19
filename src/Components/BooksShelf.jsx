import React from "react";
import { Link } from "react-router-dom";
import { ImBooks } from "react-icons/im";
import { FaTrashAlt } from "react-icons/fa";
import { motion } from 'framer-motion';
import "/src/styles/BooksShelf.css";
import { toast } from "react-hot-toast";
import { apiFetch } from "../services/api";

const BooksShelf = ({ onClose }) => {
  const [booksShelf, setBooksShelf] = React.useState([]);

  React.useEffect(() => {
    async function carregarEstante() {
      try {
        const dados = await apiFetch("/api/v1/users/me", { withCredentials: true})
        setBooksShelf(dados.shelfBooks);
      } catch (erro) {
        console.error("Erro ao carregar favoritos:", erro.message);
      }
    }

      carregarEstante();
  }, []);

  const handleDelete = async (bookToDelete) => {
    try {
      await apiFetch(`/api/v1/users/books/shelf/${bookToDelete.id}`, {
        method: "DELETE",
        withCredentials: true,
      });

      const updatedShelf = booksShelf.filter((book) => book.id !== bookToDelete.id);
      setBooksShelf(updatedShelf);

      toast("Livro removido da estante! 📚", { icon: "❌" });

    } catch (error) {
      console.error("Erro ao remover livro da estante:", error.message);
      toast.error("Erro ao remover livro da estante.");
    }
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
            <div key={book.id}>
              <img id="book-cover" src={book.coverImageUrl} alt="capa do livro" />
              <div className="box-actions">
                <Link to={`/modoLeitura/${book.id}`}>
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
