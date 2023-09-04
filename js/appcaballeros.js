
(function () {
  const resultado = document.querySelector(".producto-grid");

  let selectedOption, categroiaload;

  // document.addEventListener("DOMContentLoaded", cargarAPi);


  cargarAPi();

  function cargarAPi() {
    fetch("../db.json")
      .then(respuesta => respuesta.json())
      .then(resultado => llenarInformacion(resultado.productos))
  }

  var select = document.getElementById('select');
  select.addEventListener('change',
    function () {
      selectedOption = this.options[select.selectedIndex];
      seleccionarCategoria();
    });

  function llenarInformacion(productos) {
    productos.forEach(producto => {
      const { categoria, nombre, img, precio, tallas, descripcion, id } = producto;

      console.log(categoria);

      categroiaload = productos;

      if (categoria === "camisascaballeros") {

        const divProductos = document.createElement("div")

        divProductos.innerHTML += `
              <div class="producto">
                <img class="img-producto" src="${img}" alt="${nombre}">
                <div class="border-bottom"></div>
              </div>
            `;

        resultado.appendChild(divProductos);
        return;
      }
    });
  }


  function seleccionarCategoria() {
    limpiarHtml();
    categroiaload.forEach(categoriaP => {
      const { categoria, nombre, img, precio, tallas, descripcion, id } = categoriaP;


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
    })

  }

  function limpiarHtml() {
    while (resultado.firstChild) {
      resultado.removeChild(resultado.firstChild);
    }
  }

})();