import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import "/src/styles/BookDetails.css";
import { apiFetch } from "../services/api";

const BookDetails = ({
  id,
  img,
  titulo,
  autor,
  data,
  paginas,
  descricao,
  onClose,
  onRemoveFavorite
}) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isShelf, setIsShelf] = React.useState(false);

  React.useEffect(() => {
    async function verificarFavoritoEShelf() {
      try {
        const user = await apiFetch("/api/v1/users/me", { withCredentials: true });

        const isFav = user.favoriteBooks.some((book) => book.id === id);
        setIsFavorite(isFav);

        const isOnShelf = user.shelfBooks.some((book) => book.id === id);
        setIsShelf(isOnShelf);
      } catch (error) {
        console.error("Erro ao verificar favorito/estante:", error.message);
      }
    }

    verificarFavoritoEShelf();
  }, [id]);


  const toggleFavorite = async () => {
    try {
      if (isFavorite) {
        await apiFetch(`/api/v1/users/books/favorite/${id}`, {
          method: "DELETE",
          withCredentials: true,
        });
        toast("Livro removido dos favoritos! 📕", { icon: "❌" });

        if (onRemoveFavorite) onRemoveFavorite(id);
      } else {
        await apiFetch(`/api/v1/users/books/favorite/${id}`, {
          method: "POST",
          withCredentials: true,
        });
        toast.success("Livro adicionado aos favoritos! ❤️");
      }

      setIsFavorite(!isFavorite);
    } catch (erro) {
       toast.error("Erro ao atualizar favorito. \n Verifique se você está logado.");
      console.error(erro);
    }
  };

  const toggleShelf = async () => {
    try {
      if (isShelf) {
        await apiFetch(`/api/v1/users/books/shelf/${id}`, {
          method: "DELETE",
          withCredentials: true,
        });
        toast("Livro removido da estante! 📚", { icon: "❌" });
      } else {
        await apiFetch(`/api/v1/users/books/shelf/${id}`, {
          method: "POST",
          withCredentials: true,
        });
        toast.success("Livro adicionado à estante! 🛋️");
      }

      setIsShelf(!isShelf);
    } catch (erro) {
      toast.error("Erro ao atualizar estante. \n Verifique se você está logado.");
      console.error(erro);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>
          <button className="modal-close" onClick={onClose}>
            X
          </button>
          <img className="modal-capa" src="\assets\img_modal.png" alt="" />
          <h2 className="modal-title">{titulo}</h2>
        </div>
        <div className="modal-info">
          <img src={img} alt={titulo} className="modal-img" />
          <div>
            <div className="modal-small-info">
              <p id="gratis">Grátis</p>
              <p className="modal-data">{new Date(data).getFullYear()}</p>
              <img
                className="classificacao"
                src="\assets\classificacao_14.png"
                alt=""
              />
              <p className="modal-paginas">{paginas} Páginas</p>
            </div>
            <p id="desc" className="modal-descricao">
              {descricao}
            </p>
          </div>
          <div className="modal-coluna-tres">
            <div className="icons-user-actions">
              <FaHeart
                onClick={toggleFavorite}
                color={isFavorite ? "red" : "whitesmoke"}
              />
              <ImBooks
                size={25}
                onClick={toggleShelf}
                style={{ color: isShelf ? "#a93000" : "whitesmoke" }}
              />
            </div>
            <div className="modal-author">
              <p>Autor: {autor}</p>
              <p>Gênero: Drama, Adulto</p>
            </div>

            <Link to={`/modoLeitura/${id}`}>
              <button id="btn-read">Ler Livro</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
