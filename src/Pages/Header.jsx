import "/src/styles/Header.css";
import React from "react";
import { IoIosMenu } from "react-icons/io";
import { MdOutlineFavorite } from "react-icons/md";
import { TbCategoryFilled } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa";
import styled from "styled-components";

export default function Header() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);

  const Drawer = styled.div`
    position: fixed;
    top: 0;
    right: ${({ open }) => (open ? "0" : "-250px")};
    width: 250px;
    height: 100vh;
    background-color: #00002F;
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
    gap:14px;
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
              <FaBookOpen size={24} color="#D04848" />
            </span>
            <a>Recentes</a>
          </ItemDrawer>

          <ItemDrawer>
            <span>
              <MdOutlineFavorite size={24} color="#D04848" />
            </span>
            <a>Favoritos</a>
          </ItemDrawer>

          <ItemDrawer>
            <span>
              <TbCategoryFilled size={24} color="#D04848" />
            </span>
            <a>Categorias</a>
          </ItemDrawer>
        </DrawerContainer>
      </Drawer>

      <header className="boxHeader">
        <div>
          <img src="src\assets\logoMobile.png" alt="Logo" />
        </div>
        <div className="menuHeader">
          <IoIosMenu size={30} onClick={toggleDrawer} /> 
        </div>
        <BackdropApp open={drawerOpen} onClick={toggleDrawer} />

        <div className="menuHeaderDesktop">
          <p>Recentes</p>
          <p>Favoritos</p>
          <p>Categorias</p>
        </div>
      </header>
      <Backdrop open={drawerOpen} onClick={toggleDrawer} />
    </>
  );
}
