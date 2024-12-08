import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";
import '/src/styles/BookDetails.css'; 

const BookDetails = ({ img, titulo, autor, data, paginas, descricao, onClose }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isShelf, setIsShelf] = React.useState(false);

  const toggleFavorite = () => {
    const bookFavorite = {img, titulo , autor, data, paginas, descricao}
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []

    if(isFavorite){
      favorites = favorites.filter((favorite) => favorite.titulo != titulo)
      toast("Livro removido dos favoritos! 📕", { icon: "❌" });
    }else{
      favorites.push(bookFavorite)
      toast.success("Livro adicionado aos favoritos! ❤️");
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    setIsFavorite(!isFavorite);
  }


  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const isAlreadyFavorite = favorites.some((book) => book.titulo === titulo);

    setIsFavorite(isAlreadyFavorite)

  },[titulo])

  const toggleShelf = () => {
    const book = { img, titulo, autor, data, paginas, descricao };
    let shelf = JSON.parse(localStorage.getItem("shelf")) || []; 
  
    const isAlreadyInShelf = shelf.some((item) => item.titulo === titulo);
  
    if (isAlreadyInShelf) {
      shelf = shelf.filter((item) => item.titulo !== titulo);
      localStorage.setItem("shelf", JSON.stringify(shelf));
      toast("Livro removido da estante! 📚", { icon: "❌" });
      setIsShelf(false); 
    } else {
      shelf.push(book);
      localStorage.setItem("shelf", JSON.stringify(shelf));
      toast.success("Livro adicionado à estante! 🛋️");
      setIsShelf(true);
    }
  };

  React.useEffect(() => {
    const shelf = JSON.parse(localStorage.getItem("shelf")) || [];
    const isAlreadyInShelf = shelf.some((item) => item.titulo === titulo);
    setIsShelf(isAlreadyInShelf);
  }, [titulo]);

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div>
          <button className="modal-close" onClick={onClose}>X</button>
          <img className="modal-capa" src="\assets\img_modal.png" alt="" />
          <h2 className="modal-title">{titulo}</h2>
        </div>
        <div className="modal-info">
          <img src={img} alt={titulo} className="modal-img" />
          <div>
            <div className="modal-small-info">
              <p id="gratis">Grátis</p>
              <p className="modal-data">{data}</p>
              <img className="classificacao" src='\assets\classificacao_14.png' alt="" />
              <p className="modal-paginas">{paginas} Páginas</p>
            </div>
            <p id="desc" className="modal-descricao">{descricao}</p>
          </div>
          <div className="modal-coluna-tres">
            <div className="icons-user-actions">
              <FaHeart onClick={toggleFavorite} color={isFavorite ? "red" : "whitesmoke"} />
              <ImBooks size={25} onClick={toggleShelf} style={{ color: isShelf ? "#a93000" : "whitesmoke"}} />
            </div>
            <div className="modal-author">
            <p >Autor: {autor}</p>
            <p >Gênero: Drama, Adulto</p>
            </div>
            
            <Link to={"/modoLeitura"}>
              <button id="btn-read">Ler Livro</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
