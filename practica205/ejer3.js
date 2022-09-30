"use strict";

var vectorLetras = [];

//funcion que solicita dni sin letra.
const pedirDni = () => {

  let id = setInterval(() => {

    let dni = prompt("Introduce un número de DNI sin la letra:");

    if (dni === "-1") {
      clearInterval(id);

      //recorro las letras obtenidas.
      for(let i=0; i<vectorLetras.length; i++){
        console.log(`${vectorLetras[i]}`);
      }

    } else if (dni < 0 || dni > 99999999 || isNaN(dni)) {
      return "ERROR. Introduce un dni correcto.";
    } else {
      let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
      let resto = dni % 23;
      vectorLetras.push(letras[resto]);
    }


  }, 10000);

}

pedirDni();