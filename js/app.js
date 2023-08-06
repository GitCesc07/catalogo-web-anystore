import obtenerProductos from "./API.js";

(function () {
  const resultado = document.querySelector(".producto-grid");

  document.addEventListener("DOMContentLoaded", mostrarProductos)

  async function mostrarProductos() {

    const productos = await obtenerProductos();

    console.log(productos);

    productos.forEach(producto => {
      const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;

      const divProductos = document.createElement("div")

      divProductos.innerHTML += `
        <div class="producto">
          <img class="img-producto" src="${img}" alt="${nombre}">
          <p class="precio">Precio: <span>$${precio}</span></p>
          <p class="tallas">Tallas: <span>${tallas}</span></p>
          <p class="tonos">Tonos: <span>${descripcion}</span></p>
          <div class="border-bottom"></div>
        </div>
      `;

      resultado.appendChild(divProductos)

    });
  }

})();