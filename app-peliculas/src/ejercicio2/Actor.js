import React from "react";

function Actor(props) {

  return (
    <React.Fragment>
      {/* Componente actor. */}
        <div className="actor">
          <p>{props.nombre}</p>
          <p><img src={props.foto} alt="actor"></img></p>
          <p>{props.children}</p> {/* Paso biografía como children. */}
        </div>
    </React.Fragment>
  );
}

export default Actor;
