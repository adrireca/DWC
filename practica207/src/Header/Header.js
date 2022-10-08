import React from "react";
import Nav from "../Nav/Nav";
import "./css/Header.css";

function Header() {
  return (
    <React.Fragment>
      {/* Componente header. */}
      <header className="header">
        <h1>Listado de películas</h1>
        {/* Componente menu dentro de header */}
        <Nav></Nav>
      </header>
    </React.Fragment>
  );
}

export default Header;
