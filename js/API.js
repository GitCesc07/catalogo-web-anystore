// const url = "../db.json.js";
const url = "http://localhost:4000";

// Obtiene todo los clientes que hay en nuestra API
const obtenerProductos = async () => {
  try {
    const resultado = await fetch(url)
    const productos = await resultado.json();
    return productos;
  }
  catch (error) {
    console.log(error.message);
  }
}

export default obtenerProductos;