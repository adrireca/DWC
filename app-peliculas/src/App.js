import React from "react";
import "./App.css";
import Pelicula from "./ejercicio1/Pelicula.js";
// import Actor from "./ejercicio2/Actor.js";

function App() {

  const objeto = {
      titulo: "Interestellar",
      direccion: ["Christopher Nolan"],
      cartelera: "https://m.media-amazon.com/images/I/51vlq6EFMVL._SX300_SY300_QL70_ML2_.jpg",
      resumen: "Se trata de una película épica de drama y ciencia ficción británico-estadounidense y canadiense de 2014, "+
      "ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir. "+ 
      "Cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad.",
  };

  return (
    
    <React.Fragment>
      <Pelicula datos={objeto}/>
      {/* <Actor></Actor> */}
    </React.Fragment>
      
  );
}

export default App;
