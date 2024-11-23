import React from "react";
import { FaHeart } from "react-icons/fa";
import { ImBooks } from "react-icons/im";
import { Link } from "react-router-dom";
import '/src/styles/BookDetails.css';

const BookDetails = ({ img, titulo, autor, data, paginas, descricao, onClose }) => {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isShelf, setIsShelf] = React.useState(false);

  const toggleFavorite = () => {
    const bookFavorite = {img, titulo , autor, data, paginas, descricao}
    let favorites = JSON.parse(localStorage.getItem("favorites")) || []

    if(isFavorite){
      favorites = favorites.filter((favorite) => favorite.titulo != titulo)
    }else{
      favorites.push(bookFavorite)
    }

    localStorage.setItem("favorites", JSON.stringify(favorites))
    setIsFavorite(!isFavorite);
  }


  React.useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || []
    const isAlreadyFavorite = favorites.some((book) => book.titulo === titulo);

    setIsFavorite(isAlreadyFavorite)

  },[titulo])

  const addToShelf = () => {
    const book = { img, titulo, autor, data, paginas, descricao };
    let shelf = JSON.parse(localStorage.getItem("shelf")) || []; 
  
    const isAlreadyInShelf = shelf.some((item) => item.titulo === titulo);
  
    if (!isAlreadyInShelf) {
      shelf.push(book);
      localStorage.setItem("shelf", JSON.stringify(shelf));
      alert("Livro adicionado à estante!");
      setIsShelf(true);
    } else {
      alert("Este livro já está na estante!");
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
          <img className="modal-capa" src="src\assets\imgModal1.jpg" alt="" />
          <h2 className="modal-title">{titulo}</h2>
        </div>
        <div className="modal-info">
          <img src={img} alt={titulo} className="modal-img" />
          <div>
            <div className="modal-small-info">
              <p id="gratis">Grátis</p>
              <p className="modal-data">{data}</p>
              <p className="modal-paginas">{paginas} Páginas</p>
            </div>
            <p id="desc" className="modal-descricao">{descricao}</p>
          </div>
          <div>
            <div className="icons-user-actions">
              <FaHeart onClick={toggleFavorite} color={isFavorite ? "red" : "black"} />
              <ImBooks size={25} onClick={addToShelf} style={{ color: isShelf ? "#a93000" : "black"}} />
            </div>
            <p className="modal-author">Autor: {autor}</p>
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
