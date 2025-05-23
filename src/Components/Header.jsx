import "/src/styles/Header.css";
import React from "react";
import ReactDOM from "react-dom";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import styled from "styled-components";
import Input from "./Input";
import BookFiltered from "./BookFiltered";
import debounce from "lodash/debounce";
import { Link } from "react-router-dom";
import { IoLogInOutline } from "react-icons/io5";
import BooksShelf from "./BooksShelf";
import { apiFetch } from "../services/api";

const Drawer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ open }) => (open ? "0" : "-250px")};
  width: 250px;
  height: 100vh;
  background-color: #00002f;
  color: black;
  transition: right 0.3s ease;
  z-index: 1010;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;

const DrawerContainer = styled.div`
  font-size: 14px;
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  padding: 12px;
`;

const ItemDrawer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 16px;
  gap: 14px;
`;

const Backdrop = styled.div`
  position: fixed;
  width: 100vw;
  top: 0px;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: ${({ open }) => (open ? "block" : "none")};
`;

const BackdropApp = styled.div`
  position: fixed;
`;

export default function Header({ allBooks }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const [filteredBooks, setFilteredBooks] = React.useState(allBooks);
  const [showFiltered, setShowFiltered] = React.useState(false);
  const [isEstanteModalOpen, setIsEstanteModalOpen] = React.useState(false);
  const containerRef = React.useRef(null);

  const [dados, setDados] = React.useState([]);

  React.useEffect(() => {
    async function carregarUser() {
      try {
        const userDados = await apiFetch("/api/v1/users/me", {
          withCredentials: true,
        });
        setDados(userDados);
      } catch (erro) {
        console.error("Erro ao carregar informações do usuário:", erro.message);
      }
    }

    carregarUser();
  }, []);

  React.useEffect(() => {
    console.log(dados);
  }, [dados]);

  const openEstanteModal = () => {
    setIsEstanteModalOpen(true);
    if (drawerOpen) setDrawerOpen(false);
  };
  const closeEstanteModal = () => {
    setIsEstanteModalOpen(false);
    document.body.style.overflow = "visible";
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setShowFiltered(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  React.useEffect(() => {
    if (search) {
      const filtered = allBooks.filter(
        (book) =>
          book.titulo.toLowerCase().includes(search.toLowerCase()) ||
          book.autor.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredBooks(filtered);
    } else {
      setFilteredBooks(allBooks);
    }
  }, [search, allBooks]);

  const debouncedSearch = debounce((value) => {
    setSearch(value);
    setShowFiltered(true);
  }, 300);

  const handleCloseSearch = () => {
    setShowFiltered(false);
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
    if (!drawerOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  };

  return (
    <>
      <Drawer open={drawerOpen}>
        <DrawerContainer>
          <ItemDrawer>
            <span>
              {dados && dados.googleUser && (
                <FaUserAlt size={20} color="#D04848" />
              )}
            </span>
            {dados && dados.googleUser && (
              <a>{dados.googleUser.name.split(" ")[0]}</a>
            )}
          </ItemDrawer>

          <ItemDrawer>
            <span>
              <IoLogInOutline size={24} color="#D04848" />
            </span>
            <button>
              <a href="http://localhost:8080/oauth2/authorization/google">
                Login
              </a>
            </button>
          </ItemDrawer>

          <ItemDrawer id="pointer" onClick={openEstanteModal}>
            <span>
              <FaBookOpen size={24} color="#D04848" />
            </span>
            <a>Estante</a>
          </ItemDrawer>

          <Link to={"/favoritos"}>
            <ItemDrawer>
              <span>
                <MdOutlineFavorite size={24} color="#D04848" />
              </span>

              <p>Favoritos</p>
            </ItemDrawer>
          </Link>

          <ItemDrawer>
            <span>
              <TbCategoryFilled size={24} color="#D04848" />
            </span>
            <a>Categorias</a>
          </ItemDrawer>

          {dados && dados.googleUser && (
            <ItemDrawer>
              <span>
                <CiLogout size={24} color="#D04848" />
              </span>
              <button>
                <a href="http://localhost:8080/logout">Sair</a>
              </button>
            </ItemDrawer>
          )}
        </DrawerContainer>
      </Drawer>

      <header className="boxHeader">
        <div>
          <Link to={"/"}>
            <img src="\assets\logoMobile.png" alt="Logo" />
          </Link>
        </div>

        <div className="searchHeader" ref={containerRef}>
          <Input
            onChange={({ target }) => debouncedSearch(target.value)}
            books={filteredBooks}
          />

          {search && filteredBooks.length > 0 && showFiltered && (
            <div className="bookFilteredBox">
              <BookFiltered
                books={filteredBooks}
                onCloseSearch={handleCloseSearch}
              />
            </div>
          )}
        </div>

        <div className="menuHeader">
          <IoIosMenu size={30} onClick={toggleDrawer} />
        </div>
        <BackdropApp open={drawerOpen} onClick={toggleDrawer} />

        <div className="menuHeaderDesktop">
          {dados && dados.googleUser && (
            <p>{dados.googleUser.name.split(" ")[0]}</p>
          )}
          <p id="pointer" onClick={openEstanteModal}>
            Estante
          </p>
          <Link to={"/favoritos"}>
            <p>Favoritos</p>
          </Link>
          <p>Categorias</p>
          <button>
            {dados.googleUser ? (
              <a href="http://localhost:8080/logout">Sair</a>
            ) : (
              <a href="http://localhost:8080/oauth2/authorization/google">
                Login
              </a>
            )}
          </button>
        </div>
        {isEstanteModalOpen &&
          ReactDOM.createPortal(
            <BooksShelf onClose={closeEstanteModal} />,
            document.body
          )}
      </header>
      <Backdrop open={drawerOpen} onClick={toggleDrawer} />
    </>
  );
}
