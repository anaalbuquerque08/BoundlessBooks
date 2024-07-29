import React from 'react'
import CardBook from '../Components/CardBook'

const BooksList = () => {
  return (
    <section className="gridCard">
      <CardBook img="src\assets\capa2.png" titulo="COMO VENCER GIGANTES" autor="William Douglas"/>
      <CardBook img="src\assets\capa3.jpg" titulo="VIDAS SECAS" autor="Graciliano Ramos"/>
      <CardBook img="src\assets\capa1.jpg" titulo="ALÉM DO INSTINTO" autor="BARBARA ABEL"/>
      <CardBook img="src\assets\capa4.jpg" titulo="CAMINHANDO JUNTOS" autor="João Álvaro de Moraes"/>
      <CardBook img="src\assets\capa2.png" titulo="COMO VENCER GIGANTES" autor="William Douglas"/>
      <CardBook img="src\assets\capa3.jpg" titulo="VIDAS SECAS" autor="Graciliano Ramos"/>
      <CardBook img="src\assets\capa1.jpg" titulo="ALÉM DO INSTINTO" autor="BARBARA ABEL"/>
      <CardBook img="src\assets\capa4.jpg" titulo="CAMINHANDO JUNTOS" autor="João Álvaro de Moraes"/>
    </section>
  )
}

export default BooksList;