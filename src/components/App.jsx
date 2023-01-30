import "./App.css";
import React from "react";
import { Navbar } from "./Navbar/Navbar";
import { ItemListContainer } from "./ItemListContainer/ItemListContainer";

const App = () => {
  return (
    <>
      <Navbar />
      <ItemListContainer greeting={"¡Bienvenido a BibliOddity!"} />
    </>
  );
};

export default App;
