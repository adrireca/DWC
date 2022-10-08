import React from "react";
import Peliculas from "../Ejercicio2.json"; /* Importo el json de películas. */
import "./css/Main.css";

/* Importo los dos componentes de la práctica206. */
import Pelicula from "../ejercicio1/Pelicula";
import Actor from "../ejercicio2/Actor";

function Main() {
  //Declaro las películas procedente de Ejercicio2.json.
  const pelis = Peliculas.peliculas;

  //Declaro la película y los actores de la práctica206.
  const objeto = {
    titulo: "Interestellar",
    direccion: ["Christopher Nolan"],
    cartelera:
      "https://m.media-amazon.com/images/I/51vlq6EFMVL._SX300_SY300_QL70_ML2_.jpg",
    resumen:
      "Se trata de una película épica de drama y ciencia ficción británico-estadounidense y canadiense de 2014, " +
      "ambientada en un futuro distópico donde la humanidad está luchando por sobrevivir. " +
      "Cuenta la historia de un grupo de astronautas que viajan a través de un agujero de gusano cerca de Saturno en busca de un nuevo hogar para la humanidad.",
  };

  const actor1 = {
    nombre: "Matthew McConaughey",
    foto: "https://thedreamfactory.us/wp-content/uploads/2021/11/Matthew-McConaughey-300x300.png",
    biografia: "Aliquam erat volutpat. Morbi in aliquet ex. Ut blandit rhoncus mi. Sed feugiat, dui ac scelerisque vulputate, tellus justo volutpat sem, quis mollis velit mauris ut sem. Mauris ac lacinia erat. Duis luctus massa ligula, id gravida sapien laoreet in. Etiam gravida, est eget interdum volutpat, turpis urna efficitur metus, vitae gravida tellus lorem sit amet arcu. Curabitur semper purus scelerisque odio porttitor, nec consectetur mauris fermentum. Morbi vitae mi vel sapien tempor maximus sit amet eu neque. Vestibulum ultrices rhoncus arcu ac consectetur. Ut quis fermentum arcu. Aenean nec diam ut nulla consequat mollis et id purus. Morbi luctus maximus elit eget posuere.",
  };

  const actor2 = {
    nombre: "Jessica Michelle Chastain",
    foto: "https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTg3NzI3MjM1NzI0MDkzMzI3/jessica-chastain-gettyimages-492294551.jpg",
    biografia: "Aliquam erat volutpat. Morbi in aliquet ex. Ut blandit rhoncus mi. Sed feugiat, dui ac scelerisque vulputate, tellus justo volutpat sem, quis mollis velit mauris ut sem. Mauris ac lacinia erat. Duis luctus massa ligula, id gravida sapien laoreet in. Etiam gravida, est eget interdum volutpat, turpis urna efficitur metus, vitae gravida tellus lorem sit amet arcu. Curabitur semper purus scelerisque odio porttitor, nec consectetur mauris fermentum. Morbi vitae mi vel sapien tempor maximus sit amet eu neque. Vestibulum ultrices rhoncus arcu ac consectetur. Ut quis fermentum arcu. Aenean nec diam ut nulla consequat mollis et id purus. Morbi luctus maximus elit eget posuere.",
  };

  return (
    <React.Fragment>
      {/* Componente main */}
      <main className="main">
        <div className="peliculas">

          {pelis.map((peli, i) => {
            //Almaceno en asteriscosNota la cantidad de asteriscos por cada nota.
            let asteriscosNota = "";
            for(let n=0; n<peli.nota; n++){
              asteriscosNota += '*';
            }

            return (
              //Devuelvo un div con todos los datos de cada peli, además de añadir su propia key en cada uno de ellos.
              <div className="peli" key={i}>
                <h2>{peli.nombre}</h2>
                <h4>{peli.director}</h4>
                <p>{peli.clasificacion}</p>
                <img src={peli.cartelera} alt="Imagen película"></img>
                <h3>Nota: {asteriscosNota}</h3>
                <p className="resumen">{peli.resumen}</p>
              </div>
            );
          })}
        </div>

        {/* Muestro el bloque de la película de la práctica206. */}
        <div className="div_peli_destacada">
          <div className="peli_destacada">
            <Pelicula
              titulo={objeto.titulo}
              direccion={[objeto.direccion]}
              cartelera={objeto.cartelera}>
              {objeto.resumen}
            </Pelicula>

            <h2>Actores</h2>

            <div className="actores">
              <Actor nombre={actor1.nombre} foto={actor1.foto}>
                {actor1.biografia}
              </Actor>

              <Actor nombre={actor2.nombre} foto={actor2.foto}>
                {actor2.biografia}
              </Actor>
            </div>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Main;
