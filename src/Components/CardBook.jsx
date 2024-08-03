import React from "react";
import "/src/styles/CardBook.css"; 

const CardBook = ({ img, titulo, autor }) => {
  return (
    <div className="card">
      <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
      <div className="content">
        <span className="title">{titulo}</span>
        <p className="desc">
          {autor}
        </p>
      </div>
      <div className="arrow">
        <span>&#8673;</span>
      </div>
    </div>
  );
};

export default CardBook;
