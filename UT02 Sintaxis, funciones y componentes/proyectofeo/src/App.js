import React from "react";
import "./App.css";
import Discente from "./Componentes/Discente";
import Discentes from "./Componentes/Discentes.js";

function App() {
  const objeto = {
    nombre: "Juan",
    apellidos: "Berna Fran",
    curso: "2DAW",
    modulos: "DWC, DWS, DIW",
  };
  return (
    <React.Fragment>
      <Discente datos={objeto} />
    </React.Fragment>
  );
}

export default App;
