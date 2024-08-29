import React from "react";
import "/src/styles/CardBook.css";
import { TiArrowSortedDown } from "react-icons/ti";

const CardBook = ({ img, titulo, autor }) => {
  const [isActive, setIsActive] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
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
            <button>Ler Livro</button>
            <button>Saiba Mais</button>
          </div>
        </div>
        <div className="arrow">
          <span>
            <TiArrowSortedDown />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardBook;