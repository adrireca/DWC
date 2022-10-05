import React from "react";
import "./App.css";
import Pelicula from "./Ejercicio1/Pelicula.js";

function App() {

  const objeto = {
      titulo: "Interestellar",
      direccion: ["persona1","persona2"],
      cartelera: "https://m.media-amazon.com/images/I/51vlq6EFMVL._SX300_SY300_QL70_ML2_.jpg",
      resumen: "blablabla",
  };

  return (
    
    <React.Fragment>
      <h1>Peliculas</h1>
      <Pelicula datos={objeto}/>
    </React.Fragment>
      
  );
}

export default App;
