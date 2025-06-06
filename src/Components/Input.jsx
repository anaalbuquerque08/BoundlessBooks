import React from "react";
import { FaSearch } from "react-icons/fa";
import "/src/styles/Input.css";
import { useNavigate } from "react-router-dom";

const Input = ({ onChange, books, onSearchSubmit, value }) => {
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (books) {
      navigate("/livrosEncontrados", { state: { books } });
    } else {
      console.log("Nenhum livro encontrado.");
    }

    if (onSearchSubmit) {
      onSearchSubmit();
    }
  };

  return (
    <form className="boxInput" onSubmit={handleSearch}>
      <div className="inputIconContainer">
        <FaSearch className="inputIcon" />
        <input
          id="buscarLivros"
          type="text"
          placeholder="Busque por titulo, autor..."
          onChange={onChange}
          value={value}
        />
      </div>
      <button onClick={handleSearch}>
        <FaSearch />
      </button>
    </form>
  );
};

export default Input;
