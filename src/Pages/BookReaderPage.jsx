import React from 'react';
import BookReader from '../Components/BookReader';
import { apiFetch } from "../services/api";
import { useParams } from "react-router-dom";


const BookReaderPage = () => {
  const { id } = useParams();
  const [book, setBook] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    async function carregarLivro() {
      try {
        const dados = await apiFetch(`/api/v1/books/${id}`);
        setBook(dados);
      } catch (erro) {
        setError("Erro ao carregar o livro");
      } finally {
        setLoading(false);
      }
    }

    carregarLivro();
  }, []);

  if (loading) return <p>Carregando livro...</p>;
  if (error) return <p>{error}</p>;
  if (!book) return <p>Livro não encontrado.</p>;

  return (
    <div>
      <BookReader ebookUrl={book.epubUrl} />
    </div>
  );
};

export default BookReaderPage;
