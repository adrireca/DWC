import React, { useState } from 'react';
import { generarNumeroAleatorio } from "../biblioteca/biblioteca.js";
import "./css/ejercicio2.css";

export const Ejercicio2 = () => {
    //json vacío por defecto.
    let listadoApuestas = {
        numeros: [],
        estrellas: [],
    };
    let apuestaGanadora = {
        numeros: [5, 45, 21, 34, 27],
        estrellas: [6, 12],
    };
    let mensajePremiado = "No ha sido premiado"; //mensaje por defecto.
    let [apuestas, setApuestas] = useState(listadoApuestas);
    let [mensaje, setMensajePremiado] = useState(mensajePremiado);

    //genero apuesta aleatoria.
    const generarApuesta = () => {
        let numeros = [];
        let estrellas = [];
        let contadorNumeros = 0;
        let contadorEstrellas = 0;

        //recorro el array números situado dentro del json.
        for(let i=0; i<5; i++){
            if(i === 0){
                numeros[i] = generarNumeroAleatorio(1,51);
            }else{
                numeros[i] = generarNumeroAleatorio(1,51);
                for(let j=0; j<i; j++){
                    //si es el mísmo número genero otro aleatorio.
                    while(numeros[i] == numeros[j]){
                        numeros[i] = generarNumeroAleatorio(1,51);
                        j=0;
                    }
                }
            }
            //comparo y cuento en caso de ser el mismo número que en la combinación ganadora.
            if(apuestaGanadora.numeros[i] === numeros[i]){
                contadorNumeros++;
            }
        }

        //almaceno el array números en el json.
        apuestas.numeros = numeros;

        //mismo procedimiento que anters pero con el array estrellas dentro del json.
        for(let i=0; i<2; i++){
            if(i === 0){
                estrellas[i] = generarNumeroAleatorio(1,13);
            }else{
                estrellas[i] = generarNumeroAleatorio(1,13);
                for(let j=0; j<i; j++){
                    while(estrellas[i] == estrellas[j]){
                        estrellas[i] = generarNumeroAleatorio(1,13);
                        j=0;
                    }
                }
            }
            if(apuestaGanadora.estrellas[i] === estrellas[i]){
                contadorEstrellas++;
            }
        }
        apuestas.estrellas = estrellas;
        
        //si se ha acertado mínimo 2 números y 1 estrella con respecto a la combinación ganadora,
        //cambio el estado con un nuevo mensaje y clase.
        if(contadorNumeros >= 2 && contadorEstrellas >= 2){
            mensaje = "Combinación premiada";
            mensaje.classList.toggle('premiado');
            setMensajePremiado(mensaje);
        }

        //finalmente, actualizao el estado.
        setApuestas({...apuestas, numeros, estrellas});
    };

  return (
    <React.Fragment>
        <button onClick={generarApuesta}>Generar</button>
        <h2>Numeros</h2>
        <p>
            {apuestas.numeros.map((num) => {
                return <li key={num}>{num}</li>;
            })}
        </p>
        <h2>Estrellas</h2>
        <p>
            {apuestas.estrellas.map((est) => {
                return <li key={est}>{est}</li>;
            })}
        </p>
        <h1 className='noPremiado'>{mensaje}</h1>
    </React.Fragment>
  )
}
