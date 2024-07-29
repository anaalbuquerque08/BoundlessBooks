import React from 'react'
import { FaSearch } from "react-icons/fa";
import "/src/styles/Input.css"


const Input = () => {
  return (
    <form className='boxInput container'>
      <input type='text' placeholder='Buscar Livro...' />
      <button><FaSearch /></button>
    </form>
  )
}

export default Input