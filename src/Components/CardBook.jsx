import React from "react";
import ReactDOM from "react-dom";
import BookDetails from "./BookDetails";
import { TiArrowSortedDown } from "react-icons/ti";
import "/src/styles/CardBook.css";
import { Link } from "react-router-dom";

const CardBook = ({
  img,
  titulo,
  autor,
  descricao,
  data,
  paginas,
  onModalOpen,
  onModalClose,
}) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [showMore, setShowMore] = React.useState(false);
  const timeoutIdRef = React.useRef(null);

  React.useEffect(() => {
    if (isHovered) {
      timeoutIdRef.current = setTimeout(() => {
        setIsActive(true);
      }, 1000);
    } else {
      clearTimeout(timeoutIdRef.current);
      setIsActive(false);
    }

    return () => clearTimeout(timeoutIdRef.current);
  }, [isHovered]);

  const handleSaibaMaisClick = () => {
    setShowMore(true);
    onModalOpen();
  };

  const handleCloseModal = () => {
    setShowMore(false);
    onModalClose();
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="card-wrapper"
    >
      <div className="card">
        <div className="img" style={{ backgroundImage: `url(${img})` }}></div>
        <div className={`content ${isActive ? "active" : ""}`}>
          <span className="title">{titulo}</span>
          <p className="desc">{autor}</p>
          <div className="actions">
            <Link to={"/modoLeitura"}>
              <button>Ler Livro</button>
            </Link>
            <button onClick={handleSaibaMaisClick}>Saiba Mais</button>
          </div>
        </div>
        <div className="arrow">
          <span>
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
      {showMore &&
        ReactDOM.createPortal(
          <BookDetails
            img={img}
            titulo={titulo}
            autor={autor}
            data={data}
            paginas={paginas}
            descricao={descricao}
            onClose={handleCloseModal}
          />,
          document.body
        )}
    </div>
  );
};

export default CardBook;
