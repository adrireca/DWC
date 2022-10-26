import React from "react";
import "./css/titulo.css";

export const Titulo = (props) => {
  return (
    <React.Fragment>
      <h2 className="titulo">{props.nombre}</h2>
    </React.Fragment>
  );
};
