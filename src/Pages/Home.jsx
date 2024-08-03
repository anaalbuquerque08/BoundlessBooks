import React from "react";
import Header from "./Header";
import Input from "../Components/Input"; 
import BookPage from "../Components/BookPage";
import Banner from "../Components/Banner";



const Home = () => {
  return (
    <>
      <Header />
      <Banner/>
      <BookPage />
    </>
  );
};

export default Home;
