import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import CardBook from './CardBook';
import '/src/styles/BookCarousel.css';

function BookCarousel({ books }) {
  const carousel = useRef();
  const [width, setWidth] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, [books]);

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div className= "ContainerCarousel">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          className="inner"
          drag={isModalOpen ? false : "x"}
          dragConstraints={{ right: 0, left: -width }} 
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.8 }}
          key={JSON.stringify(books)}
        >
          {books.map((book, index) => (
            <motion.div className="item" key={index}>
              <CardBook
                id={book.id}
                img={book.coverImageUrl}
                titulo={book.title}
                autor={book.author}
                data={book.releaseDate}
                paginas={book.pages}
                descricao={book.descricao || book.synopsis}
                onModalOpen={handleModalOpen}
                onModalClose={handleModalClose}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default BookCarousel;
