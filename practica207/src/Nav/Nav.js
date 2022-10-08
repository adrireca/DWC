import React from "react";
import "./css/Nav.css";

function Nav() {
  return (
    <React.Fragment>
      {/* Componente menú. */}
      <nav className="nav">
        <ul>
            <li>About</li>
            <li>Services</li>
            <li>Projects</li>
            <li>Contact</li>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default Nav;
