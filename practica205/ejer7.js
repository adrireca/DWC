"use strict";

let vectorLetras = [];

const pedirDni = (dni) => {

  let letra;
  let arrayLetras = [];
  // let id = setInterval(() => {

    dni = prompt("Introduce un número de DNI sin la letra:");
    if (dni === "-1") {
      return "Hasta luego.";
      // clearInterval(id);
    } else if (dni < 0 || dni > 99999999) {
      return "ERROR. Introduce un dni correcto.";
    } else {
      let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
      let resto = dni % 23;
      letra = letras[resto];
      // arrayLetras += `${[letra]}, `;
      // console.log(arrayLetras);
    }


  // }, 3000);

  return letra;
}

console.log(pedirDni(vectorLetras));















// const pedirDni = (dni) => {

//   if (isNaN(dni)) {
//     alert("Eso no es un número");
//     pedirDni(dni);
//   } else {
//     if (dni < 0 || dni > 99999999) {
//       return "";
//     } else {
//       let letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
//       let resto = dni % 23;
//       let letra = letras[resto];
//       return letra;
//     }
//   }
// }


// let quieresSeguir = true;
// while(quieresSeguir){
//   const num = prompt("Introduce el dni sin la letra:")
//   const letra = pedirDni(num);
//   alert(letra);
//   quieresSeguir = confirm("Quieres seguir?");
// }