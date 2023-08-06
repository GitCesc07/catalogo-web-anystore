import obtenerProductos from "./API.js";

(function () {
  const resultado = document.querySelector(".producto-grid");

  let selectedOption;

  // document.addEventListener("DOMContentLoaded", mostrarProductos);

  var select = document.getElementById('select');
  select.addEventListener('change',
    function () {
      selectedOption = this.options[select.selectedIndex];
      mostrarProductos();
    });

  async function mostrarProductos() {

    const productos = await obtenerProductos();

    console.log(productos);

    productos.forEach(producto => {
      const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;


      if (categoria == selectedOption.value) {

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

        resultado.appendChild(divProductos);

        return;
      }

      if (categoria == selectedOption.value) {
        const divProductos = document.createElement("div")

        divProductos.innerHTML += `
          <div class="producto">
            <img class="img-producto" src="${img}" alt="${nombre}">
            <p class="precio">Precio: <span>$${precio}</span></p>                  
            <div class="border-bottom"></div>
          </div>
        `;

        resultado.appendChild(divProductos);

        return;
      }

    });
  }

})();