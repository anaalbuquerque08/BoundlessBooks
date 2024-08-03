import React from "react";
import BookCarousel from "./BookCarousel";
import '/src/styles/BookPage.css'; 

const BookPage = () => {
  const romanceAdolescenteBooks = [
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
  ];

  const ficcaoCientificaBooks = [
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
   
  
  ];

  const recomendadosBooks = [
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
   
  ];

  const porqueVoceLeuBooks = [
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
    { img: "src/assets/capa2.png", titulo: "COMO VENCER GIGANTES", autor: "William Douglas" },
    { img: "src/assets/capa_a_culpa_e_das_estrelas.jpg", titulo: "A Culpa é das Estrelas", autor: "Jhon Green" },
    { img: "src/assets/capa_pessoas_normais.png", titulo: "Pessoas Normais", autor: "Sally Ronney" },
    { img: "src/assets/capa1.jpg", titulo: "ALÉM DO INSTINTO", autor: "BARBARA ABEL" },
    { img: "src/assets/capa4.jpg", titulo: "CAMINHANDO JUNTOS", autor: "João Álvaro de Moraes" },
    { img: "src/assets/capa3.jpg", titulo: "VIDAS SECAS", autor: "Graciliano Ramos" },
    
  ];

  return (
    <div className="BookPage">
         <div className="Categorias">
        <h3>Recomendados para Você</h3>
        <BookCarousel books={recomendadosBooks} />
      </div>
      
      <div className="Categorias">
        <h3>Romance Adolescente</h3>
        <BookCarousel books={romanceAdolescenteBooks} />
      </div>
      <div className="Categorias">
        <h3>Ficção Científica</h3>
        <BookCarousel books={ficcaoCientificaBooks} />
      </div>
      <div className="Categorias">
        <h3>Porque Você Leu 'A Culpa é das Estrelas'</h3>
        <BookCarousel books={porqueVoceLeuBooks} />
      </div>
    </div>
  );
};

export default BookPage;
