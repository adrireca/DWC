import React from "react";
import "./App.css";
import Pelicula from "./ejercicio1/Pelicula";
import Actor from "./ejercicio2/Actor";

function App() {

  const objeto = {
    titulo: "Interestellar",
    direccion: ["Christopher Nolan"],
    cartelera:"https://m.media-amazon.com/images/I/51vlq6EFMVL._SX300_SY300_QL70_ML2_.jpg",
    resumen:"Se trata de una película épica de drama y ciencia ficción británico-estadounidense y canadiense de 2014, " +
    "ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir. " +
    "Cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad.",
  };

  const actor1 = {
      nombre: "Matthew McConaughey",
      foto: "https://cdn.guacamouly.com/wp-content/uploads/2022/09/portada-MATTHEW-150x150.png",
      biografia: "Su madre Mary Kathleen Kay McCabe es una exprofesora de infantil y su padre James Donald Jim McConaughey, ya fallecido, era jugador profesional de fútbol americano."+
      "Tras acabar el instituto, Matthew fue a vivir a Australia durante un año como estudiante de intercambio, trabajando en diversos empleos. A su regreso a los Estados Unidos se matriculó en Derecho en la Universidad de Texas en Austin. "+
      "Antes de uno de sus exámenes descubrió un libro titulado The Greatest Salesman in the World y decidió cambiar su vocación de abogado a actor. "
  };

  const actor2 = {
    nombre: "Jessica Michelle Chastain",
    foto: "http://www.silence-action.com/wp-content/uploads/2013/11/01-Jessica-Chastain.jpg",
    biografia: "Chastain nació el 24 de marzo de 1977 en California,1​ hija de Jerri Renee Hastey (apellido de soltera Chastain)"+
    " y del músico de rock Michael Monasterio.2​3​ Sus padres eran adolescentes cuando ella nació. Sus abuelos paternos eran españoles,"+
    " Antonio Astoreka, de Vizcaya (Lequeitio), y Ramona Egurrola, de Navarra, pero no tuvo mucha relación con ellos por su tensa relación"+
    " con su padre"
};

  return (

    <React.Fragment>
      <Pelicula
      titulo={objeto.titulo}
      direccion={[objeto.direccion]}
      cartelera={objeto.cartelera}>
        {objeto.resumen}
      </Pelicula>
      <Actor
      nombre={actor1.nombre}
      foto={actor1.foto}>
        {actor1.biografia} 
      </Actor>
      <Actor
      nombre={actor2.nombre}
      foto={actor2.foto}>
        {actor2.biografia} 
      </Actor>
    </React.Fragment>
      
  );
}

export default App;
