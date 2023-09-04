

(function () {
  const resultado = document.querySelector(".producto-grid");

  let selectedOption, categroiaload;



  cargarAPi();

  function cargarAPi() {
    fetch("../db.json")
      .then(respuesta => respuesta.json())
      .then(resultado => llenarInformacion(resultado.productos))
  }


  function llenarInformacion(productos) {
    productos.forEach(producto => {
      const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;

      console.log(categoria);

      categroiaload = productos;

      if (categoria === "productosdisponibles") {

        const divProductos = document.createElement("div")

        divProductos.innerHTML += `
              <div class="producto">
                <img class="img-producto" src="${img}" alt="${nombre}">
                <p class="precio">Precio: <span>$${precio}</span></p>
                <p class="tallas">Tallas: <span>${tallas}</span></p>
                <div class="border-bottom"></div>
              </div>
            `;

        resultado.appendChild(divProductos);
        return;
      }
    });
  }

  function limpiarHtml() {
    while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild);
    }
  }

})();