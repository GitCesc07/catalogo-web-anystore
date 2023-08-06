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


export default obtenerProductos;