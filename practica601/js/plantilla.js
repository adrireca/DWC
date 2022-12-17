"use strict";

const header = () => {
  return ` <nav id="navbar" class="navbar bg-light fixed-top">
              <div class="container-fluid">
                <a class="navbar-brand" href="index.html">Technologics</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                  <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Filtrar</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                  </div>
                  <div class="offcanvas-body">
                    <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                      <li class="nav-item filtrarNombre">
                        <a class="nav-link" href="#">Por nombre</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Por precio</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Por peso</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>
        `;
};

const productos = (doc) => {
  return ` <div class="divProducto">
                <img src="${doc.data().imagen}" />
                <h3>${doc.data().nombre}</h3>
                <h3>${doc.data().precio}€</h3>
                <p>Peso: ${doc.data().peso}</p>
                <p>${doc.data().descripcion}</p>
            </div>
        `;
};

export { productos, header };
