import React from 'react'
import { MdErrorOutline } from "react-icons/md";
import { useLocation } from 'react-router-dom'
import Header from '../Components/Header';
import Banner from '../Components/Banner';
import "/src/styles/BookPage.css";
import BookCarousel from '../Components/BookCarousel';
import BookDetails from '../Components/BookDetails';


const FoundBooks = () => {
  const location = useLocation();
  const books = location.state.books || [];
  console.log(books);
  

  const [selectedBook, setSelectedBook] = React.useState(null);

  const handleOpenModal = (book) => {
    setSelectedBook(book);
  };

  const handleCloseModal = () => {
    setSelectedBook(null);
  };

  const romanceAdolescenteBooks = [
    {
      img: "src/assets/capa2.png",
      titulo: "A Seleção",
      autor: "Kiera Cass",
      data: "2012",
      paginas: 368,
      sinopse: "Uma competição para conquistar o coração de um príncipe.",
    },

    {
      img: "src/assets/capa_a_culpa_e_das_estrelas.jpg",
      titulo: "Eleanor & Park",
      autor: "Rainbow Rowell",
      data: "2013",
      paginas: 328,
      sinopse: "Uma história de amor entre dois adolescentes outsiders.",
    },
    {
      img: "src/assets/capa_pessoas_normais.png",
      titulo: "Fangirl",
      autor: "Rainbow Rowell",
      data: "2013",
      paginas: 432,
      sinopse: "A vida de uma garota que ama escrever fanfics.",
    },
    {
      img: "src/assets/capa1.jpg",
      titulo: "O Ódio que Você Semeia",
      autor: "Angie Thomas",
      data: "2017",
      paginas: 448,
      sinopse: "Uma jovem testemunha de um crime que muda sua vida.",
    },
    {
      img: "src/assets/capa4.jpg",
      titulo: "O Livro dos Negócios",
      autor: "João S. M.",
      data: "2021",
      paginas: 210,
      sinopse: "Uma reflexão sobre empreendedorismo e suas práticas.",
    },
    {
      img: "src/assets/capa3.jpg",
      titulo: "Extraordinário",
      autor: "R.J. Palacio",
      data: "2012",
      paginas: 320,
      sinopse: "A história de um menino com uma deformidade facial.",
    },
    {
      img: "src/assets/capa1.jpg",
      titulo: "O Jogo do Exterminador",
      autor: "Orson Scott Card",
      data: "1985",
      paginas: 324,
      sinopse: "Um jovem prodígio é treinado para salvar a humanidade.",
    },
    {
      img: "src/assets/capa2.png",
      titulo: "Cinder",
      autor: "Marissa Meyer",
      data: "2012",
      paginas: 387,
      sinopse: "Uma reinterpretação futurística do conto da Cinderela.",
    },
    {
      img: "src/assets/capa_a_culpa_e_das_estrelas.jpg",
      titulo: "A Rainha Vermelha",
      autor: "Victoria Aveyard",
      data: "2015",
      paginas: 383,
      sinopse: "Um mundo dividido entre os de sangue vermelho e prateado.",
    },
    {
      img: "src/assets/capa_pessoas_normais.png",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      data: "1950",
      paginas: 768,
      sinopse: "Quatro irmãos descobrem um mundo mágico.",
    },
  ];

  const ficcaoCientificaBooks = [
    {
      img: "src/assets/capa3.jpg",
      titulo: "Neuromancer",
      autor: "William Gibson",
      data: "1984",
      paginas: 271,
      sinopse: "Um hacker é contratado para realizar um último grande golpe.",
    },
    {
      img: "src/assets/capa_pessoas_normais.png",
      titulo: "Duna",
      autor: "Frank Herbert",
      data: "1965",
      paginas: 412,
      sinopse: "Uma luta pelo controle de um planeta desértico.",
    },
    {
      img: "src/assets/capa1.jpg",
      titulo: "Fahrenheit 451",
      autor: "Ray Bradbury",
      data: "1953",
      paginas: 158,
      sinopse: "Em um futuro onde os livros são proibidos.",
    },
    {
      img: "src/assets/capa4.jpg",
      titulo: "O Guia do Mochileiro das Galáxias",
      autor: "Douglas Adams",
      data: "1979",
      paginas: 224,
      sinopse: "Uma comédia intergaláctica cheia de absurdos.",
    },
    {
      img: "src/assets/capa2.png",
      titulo: "A Máquina do Tempo",
      autor: "H.G. Wells",
      data: "1895",
      paginas: 118,
      sinopse: "Um viajante do tempo explora o futuro distante.",
    },
    {
      img: "src/assets/capa_a_culpa_e_das_estrelas.jpg",
      titulo: "Snow Crash",
      autor: "Neal Stephenson",
      data: "1992",
      paginas: 480,
      sinopse: "Um mergulho em um mundo virtual e perigoso.",
    },
  ];

  const recomendadosBooks = [
    {
      img: "src/assets/capa1.jpg",
      titulo: "O Jogo do Exterminador",
      autor: "Orson Scott Card",
      data: "1985",
      paginas: 324,
      sinopse: "Um jovem prodígio é treinado para salvar a humanidade.",
    },
    {
      img: "src/assets/capa2.png",
      titulo: "Cinder",
      autor: "Marissa Meyer",
      data: "2012",
      paginas: 387,
      sinopse: "Uma reinterpretação futurística do conto da Cinderela.",
    },
    {
      img: "src/assets/capa_a_culpa_e_das_estrelas.jpg",
      titulo: "A Rainha Vermelha",
      autor: "Victoria Aveyard",
      data: "2015",
      paginas: 383,
      sinopse: "Um mundo dividido entre os de sangue vermelho e prateado.",
    },
    {
      img: "src/assets/capa_pessoas_normais.png",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      data: "1950",
      paginas: 768,
      sinopse: "Quatro irmãos descobrem um mundo mágico.",
    },
    {
      img: "src/assets/capa1.jpg",
      titulo: "O Jogo do Exterminador",
      autor: "Orson Scott Card",
      data: "1985",
      paginas: 324,
      sinopse: "Um jovem prodígio é treinado para salvar a humanidade.",
    },
    {
      img: "src/assets/capa2.png",
      titulo: "Cinder",
      autor: "Marissa Meyer",
      data: "2012",
      paginas: 387,
      sinopse: "Uma reinterpretação futurística do conto da Cinderela.",
    },
    {
      img: "src/assets/capa_a_culpa_e_das_estrelas.jpg",
      titulo: "A Rainha Vermelha",
      autor: "Victoria Aveyard",
      data: "2015",
      paginas: 383,
      sinopse: "Um mundo dividido entre os de sangue vermelho e prateado.",
    },
    {
      img: "src/assets/capa_pessoas_normais.png",
      titulo: "As Crônicas de Nárnia",
      autor: "C.S. Lewis",
      data: "1950",
      paginas: 768,
      sinopse: "Quatro irmãos descobrem um mundo mágico.",
    },
  ];

  const allBooks = [
    ...romanceAdolescenteBooks,
    ...ficcaoCientificaBooks,
    ...recomendadosBooks,
  ];

 
  return (
    <div className={`BookPage ${selectedBook ? "modal-open" : ""}`}>
      <Header allBooks={allBooks} />
      <Banner />
      <div className="Categorias">
        <h3>Resultado Da Busca</h3>
        <BookCarousel books={books} onBookClick={handleOpenModal} />
      </div>

      {selectedBook && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseModal}>
              X
            </button>
            <BookDetails {...selectedBook} />
          </div>
        </div>
      )}
    </div>
  );
}

export default FoundBooks

