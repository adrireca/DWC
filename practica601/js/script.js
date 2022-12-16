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
    let container = document.querySelector('.container');
    let divProductos = document.querySelector('.divProductos');
    const db = getFirestore(app);
    const productosColeccion = collection(db, "productos");

    const listarProductos = async () => {
        const productosDocumentos = await getDocs(productosColeccion);
        productosDocumentos.docs.map((doc) => {
            divProductos.innerHTML += plantillas.productos(doc);
        });
    }
    listarProductos();
}