import React from 'react';
import BookReader from '../Components/BookReader';

const BookReaderPage = () => {
  return (
    <div>
      <BookReader ebookUrl={"/O-Cortiço-Aluísio-Azevedo.epub"} />
    </div>
  );
};

export default BookReaderPage;
