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
  addDoc,
  updateDoc,
  deleteDoc,
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
  let btnInsertarProducto = document.querySelector(".btnInsertarProducto");
  let informacion = document.querySelector(".informacion");
  let formularioRegistro = document.querySelector(".search-form");
  let cerrarFormularioRegistro = document.getElementById("close-search");
  let guardarProducto = document.querySelector(".guardarProducto");
  let formValorNombre = document.querySelector(".formValorNombre");
  let formValorPrecio = document.querySelector(".formValorPrecio");
  let formValorPeso = document.querySelector(".formValorPeso");
  let formValorImagen = document.querySelector(".formValorImagen");
  let formValorDescripcion = document.querySelector(".formValorDescripcion");
  let divResumen = document.querySelector(".divResumen");
  let subir = document.getElementById("subir");
  let suma = 0;
  let media = 0;

  const db = getFirestore(app);
  const productosColeccion = collection(db, "productos");

  //Pinto los productos.
  const listarProductos = async () => {
    const productosDocumentos = await getDocs(productosColeccion);
    divProductos.innerHTML = "";
    productosDocumentos.docs.map((doc) => {
      divProductos.innerHTML += plantillas.productos(doc);
      suma += doc.data().precio;
    });
    let totalProductos = productosDocumentos.size;
    media = Math.round(suma / totalProductos);
    divResumen.innerHTML = plantillas.cuadroResumen(totalProductos,media); //Cuadro resumen.
    console.log(media);
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
  btnFiltrarPrecio.addEventListener("click", async (e) => {
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
  btnFiltrarPeso.addEventListener("click", async (e) => {
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
  ordenarNombre.addEventListener("click", async (e) => {
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
  ordenarPrecio.addEventListener("click", async (e) => {
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
  ordenarPeso.addEventListener("click", async (e) => {
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

  //Recogo los valores del formulario y creo un objeto con esos datos para insertarlo.
  guardarProducto.addEventListener("click", () => {
    let nombre = formValorNombre.value;
    let precio = parseFloat(formValorPrecio.value);
    let peso = parseFloat(formValorPeso.value);
    let imagen = formValorImagen.value;
    let descripcion = formValorDescripcion.value;
    let objeto = {
      nombre: nombre,
      precio: precio,
      peso: peso,
      imagen: imagen,
      descripcion: descripcion,
    };
    if (guardarProducto.innerText === "Guardar") {
      insertarProducto(objeto);
    }
  });

  //Insertar producto.
  const insertarProducto = async (obj) => {
    const productoGuardado = await addDoc(productosColeccion, obj);
    //limpiar formulario aquí
    informacion.innerHTML = `<p class='bien'>Producto guardado correctamente con el id ${productoGuardado.id}</p>`;
    plantillas.borrar(informacion);
  };

  //Mostrar formulario para insertar producto.
  btnInsertarProducto.addEventListener("click", () => {
    if (formularioRegistro.classList.value === "mostrarFormulario") {
      formularioRegistro.classList.add("ocultarFormulario");
    } else {
      formularioRegistro.classList.add("mostrarFormulario");
      formularioRegistro.classList.remove("ocultarFormulario");
    }
    guardarProducto.innerText = "Guardar";
  });

  //Ocultar formulario de insertar producto.
  cerrarFormularioRegistro.addEventListener("click", () => {
    if (formularioRegistro.classList.value === "ocultarFormulario") {
      formularioRegistro.classList.add("mostrarFormulario");
    } else {
      formularioRegistro.classList.add("ocultarFormulario");
      formularioRegistro.classList.remove("mostrarFormulario");
    }
  });

  //Modificar producto.
  divProductos.addEventListener('click', async (e) => {
    let ref = e.target.id;
    if (e.target.classList.contains('btnEditar')) {
      if (formularioRegistro.classList.value === "mostrarFormulario") {
        formularioRegistro.classList.add("ocultarFormulario");
      } else {
        formularioRegistro.classList.add("mostrarFormulario");
        formularioRegistro.classList.remove("ocultarFormulario");
      }
        guardarProducto.innerText = "Actualizar";

        //Recogo los valores del formulario y creo un objeto con esos datos para modificarlo.
        guardarProducto.addEventListener("click", () => {
          let nombre = formValorNombre.value;
          let precio = parseFloat(formValorPrecio.value);
          let peso = parseFloat(formValorPeso.value);
          let imagen = formValorImagen.value;
          let descripcion = formValorDescripcion.value;
          let objeto = {
            nombre: nombre,
            precio: precio,
            peso: peso,
            imagen: imagen,
            descripcion: descripcion,
          };
          if (guardarProducto.innerText === "Actualizar") {
            modificarProducto(objeto, ref);
          }
        });
    }
  });

  const modificarProducto = async (obj, id) => {
    const refer = await doc(productosColeccion, id);
    await updateDoc(refer, obj);
    informacion.innerHTML = `<p class='bien'>Producto modificado correctamente.</p>`;
    plantillas.borrar(informacion);
  };

  //Eliminar producto.
  divProductos.addEventListener('click', async (e) => {
    let ref = e.target.id;
    if (e.target.classList.contains('btnEliminar')) {
      borrarProducto(ref);
    }
  });

  const borrarProducto = async (id) => {
    const resultado = await deleteDoc(doc(productosColeccion, id));
    informacion.innerHTML = `<p class='bien'>Producto borrado con éxito.</p>`;
    plantillas.borrar(informacion);
  };

  //Scroll al inicio.
  subir.addEventListener("click", (e) => {
    scroll({
      top: 0,
      behavior: "smooth",
    });
  });
};
