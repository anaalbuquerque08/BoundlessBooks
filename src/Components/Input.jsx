import React from "react";
import { FaSearch } from "react-icons/fa";
import "/src/styles/Input.css";
import { Link, useNavigate } from "react-router-dom";

const Input = ({ onChange, books}) => {  
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (books) {
      navigate("/livrosEncontrados", { state: { books } });
    } else {
      console.log("Nenhum livro encontrado.");
    }
  };

  return (
    <form className="boxInput" onSubmit={handleSearch}>
      <div className="inputIconContainer">
        <FaSearch className="inputIcon" />
        <input
          type="text"
          placeholder="Busque por titulo, autor..."
          onChange={onChange}
        />
      </div>
      <button type="submit">
          <FaSearch />
      </button>
    </form>
  );
};

export default Input;
