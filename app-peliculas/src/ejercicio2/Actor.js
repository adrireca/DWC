import React from "react";
import "./App.css";

function Actor() {
  const actor = {
    nombre: "ffff",
    foto: "ggggg",
    biografia: "ddddd",
  }
  return (
    <React.Fragment>
        <div>
            <p>{actor}</p>
        </div>
    </React.Fragment>
  );
}

export default Actor;
