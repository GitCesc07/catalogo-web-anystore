// import obtenerProductos from "./API.js";

(function () {
  const resultado = document.querySelector(".producto-grid");
  const url = "http://localhost:4000/productos";


  // Obtiene todo los productos que hay en nuestra API
  const obtenerProductos = async () => {
    try {
      const resultado = await fetch(url)
      const productos = await resultado.json();

      return productos;
    }
    catch (error) {
      console.log(error);
    }
  }



  let selectedOption;

  document.addEventListener("DOMContentLoaded", mostrarProductos);

  var select = document.getElementById('select');
  select.addEventListener('change',
    function () {
      selectedOption = this.options[select.selectedIndex];
      mostrarProductos();
    });

  async function mostrarProductos() {

    const productos = await obtenerProductos();

    if (localStorage.getItem("productos")) {
      const resultLocalStorage = JSON.parse(localStorage.getItem("productos"));
      console.log(productos);

      limpiarHtml();

      resultLocalStorage.forEach(producto => {
        const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;


        if (categoria === selectedOption.value) {

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

      });
    }
    else {
      localStorage.setItem("productos", JSON.stringify(productos));
    }





    // limpiarHtml();

    //   productos.forEach(producto => {
    //     const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;


    //     if (categoria === selectedOption.value) {

    //       const divProductos = document.createElement("div")

    //       divProductos.innerHTML += `
    //         <div class="producto">
    //           <img class="img-producto" src="${img}" alt="${nombre}">
    //           <p class="precio">Precio: <span>$${precio}</span></p>
    //           <p class="tallas">Tallas: <span>${tallas}</span></p>
    //           <p class="tonos">Tonos: <span>${descripcion}</span></p>
    //           <div class="border-bottom"></div>
    //         </div>
    //       `;

    //       resultado.appendChild(divProductos);
    //       return;
    //     }

    //   });
  }

  function limpiarHtml() {
    while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild);
    }
  }

})();