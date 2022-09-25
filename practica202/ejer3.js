"use strict";

const vector1 = new Array(100);
const vector2 = new Array(100);
const vectorSuma = new Array(100);



//función rellenar arrays
const rellenarArrays = ((array1, array2) => {

    //rellenar vector1
    for (let i = 0; i < array1.length; i++) {
        array1[i] = Math.floor(Math.random() * 101);
    }

    //rellenar vector 2
    for (let i = 0; i < array2.length; i++) {
        array2[i] = Math.floor(Math.random() * 101);
    }


    //devuelvo objeto con dos arrays
    return {
        v1: array1,
        v2: array2,
    };
});


//El objeto que devuelve la función lo meto en una variable
const vectoresRellenos = rellenarArrays(vector1,vector2);

console.log(vectoresRellenos.v1, vectoresRellenos.v2)






//sumar los arrays
function sumarArrays (arraysRellenos,arraySuma) {
    for(let i=0; i<arraySuma.length; i++){
        arraySuma[i] = arraysRellenos.v1[i] + arraysRellenos.v2[i];
    }
    return arraySuma;
};

console.log(sumarArrays(vectoresRellenos,vectorSuma));

//Meto el array sumado en una variable
const vectorSumado = sumarArrays(vectoresRellenos,vectorSuma);





//Mostrar arrays
function imprimirArrays(arraySumado,arraysRellenos){

    //recorro array1
    let array1 = "";
    for(let i in arraysRellenos){
        array1 = `${arraysRellenos.v1}, `;
    }

    //recorro array2
    let array2 = "";
    for(let i in arraysRellenos){
        array2 = `${arraysRellenos.v2}, `;
    }

    //recorro array sumado
    let array3 = "";
    for(let i in arraySumado){
        array3 += `${arraySumado[i]}, `;
    }

    console.log(`Array 1 --> ${array1}`);
    console.log(`Array 2 --> ${array2}`);
    console.log(`Array sumado --> ${array3}`);
    
}

imprimirArrays(vectorSumado,vectoresRellenos);