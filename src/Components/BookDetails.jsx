import React from "react";
import '/src/styles/BookDetails.css';

const BookDetails = ({ img, titulo, autor, data, paginas, descricao, onClose }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>X</button>
        <img src={img} alt={titulo} className="modal-img" />
        <h2 className="modal-title">{titulo}</h2>
        <p className="modal-author">Autor: {autor}</p>
        <p className="modal-data">Data: {data}</p>
        <p className="modal-paginas">Páginas: {paginas}</p>
        <p className="modal-descricao">Descrição: {descricao}</p>
      </div>
    </div>
  );
};

export default BookDetails;
