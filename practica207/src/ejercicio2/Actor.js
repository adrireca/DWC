import React from "react";

function Actor(props) {

  return (
    <React.Fragment>
      {/* Componente actor. */}
        <div className="actor">
          <p>{props.nombre}</p>
          <img src={props.foto} alt="actor"></img>
          <p className="biografia">{props.children}</p>
        </div>
    </React.Fragment>
  );
}

export default Actor;
