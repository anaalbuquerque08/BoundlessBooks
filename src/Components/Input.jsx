import React from 'react';
import { FaSearch } from 'react-icons/fa';
import "/src/styles/Input.css";

const Input = () => {
  return (
      <form className='boxInput'>
        <div className='inputIconContainer'>
          <FaSearch className='inputIcon' />
          <input type='text' placeholder='Buscar Livro...' />
        </div>
        <button><FaSearch /></button>
      </form>

  );
};

export default Input;