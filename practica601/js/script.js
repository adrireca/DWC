"use strict";

import { app } from "./conexionFirebase.js";
import * as plantillas from "./plantilla.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  onSnapshot,
  doc,
  query,
  where,
  orderBy,
  limit,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js";

window.onload = () => {
  let container = document.querySelector(".container");
  let divProductos = document.querySelector(".divProductos");
  let btnFiltrarNombre = document.querySelector(".btnFiltrarNombre");
  let valorNombre = document.querySelector(".valorNombre");
  let btnFiltrarPrecio = document.querySelector(".btnFiltrarPrecio");
  let valorPrecio = document.querySelector(".valorPrecio");
  let btnFiltrarPeso = document.querySelector(".btnFiltrarPeso");
  let valorPeso = document.querySelector(".valorPeso");
  let ordenarNombre = document.querySelector(".ordenarNombre");
  let ordenarPrecio = document.querySelector(".ordenarPrecio");
  let ordenarPeso = document.querySelector(".ordenarPeso");
  let subir = document.getElementById("subir");

  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos");

  //Pinto los productos.
  const listarProductos = async () => {
    const productosDocumentos = await getDocs(productosColeccion);
    productosDocumentos.docs.map((doc) => {
      divProductos.innerHTML += plantillas.productos(doc);
    });
  };
  //Ejecuto la función.
  listarProductos();

  //Filtro por nombre.
  btnFiltrarNombre.addEventListener("click", async (e) => {
    //Anulo el refresco.
    e.preventDefault();

    const filtrarPorNombre = async (campo) => {
      //Consulta donde comparo el campo nombre con el valor del input.
      let consulta = query(
        productosColeccion,
        where(campo, "==", valorNombre.value)
      );
      const nombreFiltrados = await getDocs(consulta);
      divProductos.innerHTML = "";
      if (nombreFiltrados.docs.length) {
        nombreFiltrados.docs.map((doc) => {
          divProductos.innerHTML += plantillas.productos(doc);
        });
      } else {
        divProductos.innerHTML = `<p class='error'>No se han encontrado productos.</p>`;
      }
    };
    //Ejecuto la función y, a continuación, limpio el input.
    filtrarPorNombre("nombre");
    valorNombre.value = "";
  });

  //Filtro por precio.
  btnFiltrarPrecio.addEventListener("click", (e) => {
    //Anulo el refresco.
    e.preventDefault();

    let valor = parseFloat(valorPrecio.value);

    const filtrarPorPrecio = async (campo) => {
      //Consulta donde comparo el campo precio con el valor del input.
      let consulta = query(productosColeccion, where(campo, "<=", valor));
      const precioFiltrados = await getDocs(consulta);
      divProductos.innerHTML = "";
      if (precioFiltrados.docs.length) {
        precioFiltrados.docs.map((doc) => {
          divProductos.innerHTML += plantillas.productos(doc);
        });
      } else {
        divProductos.innerHTML = `<p class='error'>No se han encontrado productos.</p>`;
      }
    };
    //Ejecuto la función y, a continuación, limpio el input.
    filtrarPorPrecio("precio");
    valorPrecio.value = "";
  });

  //Filtro por peso.
  btnFiltrarPeso.addEventListener("click", (e) => {
    //Anulo el refresco.
    e.preventDefault();

    let valor = parseFloat(valorPeso.value);

    const filtrarPorPeso = async (campo) => {
      //Consulta donde comparo el campo peso con el valor del input.
      let consulta = query(productosColeccion, where(campo, "<=", valor));
      const pesoFiltrados = await getDocs(consulta);
      divProductos.innerHTML = "";
      if (pesoFiltrados.docs.length) {
        pesoFiltrados.docs.map((doc) => {
          divProductos.innerHTML += plantillas.productos(doc);
        });
      } else {
        divProductos.innerHTML = `<p class='error'>No se han encontrado productos.</p>`;
      }
    };
    //Ejecuto la función y, a continuación, limpio el input.
    filtrarPorPeso("peso");
    valorPeso.value = "";
  });

  //Ordeno por nombre de forma ascendente.
  ordenarNombre.addEventListener("click", (e) => {
    const ordenarPorNombre = async (campo) => {
      //Consulta donde ordeno por nombre.
      let consulta = query(productosColeccion, orderBy(campo, "asc"));
      const nombreOrdenados = await getDocs(consulta);
      divProductos.innerHTML = "";
      nombreOrdenados.docs.map((doc) => {
        divProductos.innerHTML += plantillas.productos(doc);
      });
    };
    //Ejecuto la función.
    ordenarPorNombre("nombre");
  });

  //Ordeno por precio de forma ascendente.
  ordenarPrecio.addEventListener("click", (e) => {
    const ordenarPorPrecio = async (campo) => {
      //Consulta donde ordeno por precio.
      let consulta = query(productosColeccion, orderBy(campo, "asc"));
      const precioOrdenados = await getDocs(consulta);
      divProductos.innerHTML = "";
      precioOrdenados.docs.map((doc) => {
        divProductos.innerHTML += plantillas.productos(doc);
      });
    };
    //Ejecuto la función.
    ordenarPorPrecio("precio");
  });

  //Ordeno por peso de forma ascendente.
  ordenarPeso.addEventListener("click", (e) => {
    const ordenarPorPeso = async (campo) => {
      //Consulta donde ordeno por peso.
      let consulta = query(productosColeccion, orderBy(campo, "asc"));
      const pesoOrdenados = await getDocs(consulta);
      divProductos.innerHTML = "";
      pesoOrdenados.docs.map((doc) => {
        divProductos.innerHTML += plantillas.productos(doc);
      });
    };
    //Ejecuto la función.
    ordenarPorPeso("peso");
  });

  //Scroll al inicio.
  subir.addEventListener("click", (e) => {
    scroll({
      top: 0,
      behavior: "smooth"
    });
  
  });

};
