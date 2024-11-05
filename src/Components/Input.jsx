import React from "react";
import { FaSearch } from "react-icons/fa";
import "/src/styles/Input.css";
import { Link } from "react-router-dom";

const Input = ({ onChange, books }) => {  
  return (
    <form className="boxInput">
      <div className="inputIconContainer">
        <FaSearch className="inputIcon" />
        <input
          type="text"
          placeholder="Busque por titulo, autor..."
          onChange={onChange}
        />
      </div>
      <button>
        <Link to={"/livrosEncontrados"} state={{books}}>
          <FaSearch />
        </Link>
      </button>
    </form>
  );
};

export default Input;
