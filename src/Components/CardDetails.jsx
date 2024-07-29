import React from "react";

const CardDetails = ({ img, nome, autor, data, paginas, sinopse }) => {
  return (
    <div>
      <img src={img} alt={nome} />
      <section>
        <div>
          <h2>Nome do Livro:</h2>
          <p>{nome}</p>
        </div>

        <div>
          <h2>Autor:</h2>
          <p>{autor}</p>
        </div>

        <div>
          <h2>Data de Publicação:</h2>
          <p>{data}</p>
        </div>

        <div>
          <h2>Total de Páginas:</h2>
          <p>{paginas}</p>
        </div>

        <div>
          <h2>Sinopse:</h2>
          <p>{sinopse}</p>
        </div>
      </section>
    </div>
  );
};

export default CardDetails;
