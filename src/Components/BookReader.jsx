import React, { useEffect, useState } from "react";
import ePub from "epubjs";
import "/src/styles/BookReader.css";

const BookReader = ({ ebookUrl }) => {
  const [book, setBook] = useState(null);
  const [rendition, setRendition] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    const newBook = ePub(ebookUrl);
    setBook(newBook);
    const newRendition = newBook.renderTo("viewer", {
      width: "100%",
      height: "100%",
    });
    setRendition(newRendition);

    // newRendition.themes.default({
    //     "p": { "background-color": "white" }
    // });

    newRendition.display().then(() => {
      newBook.locations.generate(1000).then(() => {
        setTotalPages(newBook.locations.total);
        updateCurrentPage(newRendition, newBook);
      });
    });

    return () => {
      if (rendition) {
        rendition.destroy();
      }
      if (newBook) {
        newBook.destroy();
      }
    };
  }, [ebookUrl]);

  const goToPreviousPage = () => {
    if (rendition) {
      rendition.prev().then(() => updateCurrentPage(rendition, book));
    }
  };

  const goToNextPage = () => {
    if (rendition) {
      rendition.next().then(() => updateCurrentPage(rendition, book));
    }
  };

  const updateCurrentPage = (rendition, book) => {
    if (rendition && book) {
      const currentLocation = rendition.currentLocation();
      if (currentLocation && currentLocation.start) {
        const currentPageNumber = book.locations.locationFromCfi(
          currentLocation.start.cfi
        );
        setCurrentPage(currentPageNumber + 1);
      }
    }
  };

  const goToPage = (pageNumber) => {
    if (rendition && book) {
      const cfi = book.locations.cfiFromLocation(pageNumber - 1);
      rendition.display(cfi).then(() => updateCurrentPage(rendition, book));
    }
  };

  return (
    <>
      <div>
        <h1>LIVRO</h1>
      </div>
      <div style={{ width: "100%", height: "100vh" }}>
        <div id="viewer" style={{ width: "100%", height: "100%" }}></div>
        <div
          className="btnPrevNext"
          style={{ position: "absolute", bottom: 20, left: 20 }}
        >
          <button onClick={goToPreviousPage}>Anterior</button>
          <button onClick={goToNextPage}>Próxima</button>
          <input
            type="number"
            placeholder="Ir para a página"
            onChange={(e) => goToPage(parseInt(e.target.value, 10))}
          />
        </div>
        <div style={{ position: "absolute", bottom: 20, right: 20 }}>
          <span>
            Página: {currentPage} de {totalPages}
          </span>
        </div>
      </div>
    </>
  );
};

export default BookReader;
