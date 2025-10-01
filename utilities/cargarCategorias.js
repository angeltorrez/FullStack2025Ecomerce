
import { catalogoFetch } from "../utilities/catalogoFetch.js";
import { crearProductoCard } from "../js/crearProducto.js";
// Selecciona el contenedor donde se agregarán los productos
const container = document.getElementById("productos-container");
const urlBase = "https://dummyjson.com/products/category/";

// Función para cargar productos
export async function cargarProductosPorCategoria(categoria) {
  try{
    const res = await catalogoFetch(categoria,urlBase);
    const data = await res.json();
    data.products.forEach(producto => {
      const card = crearProductoCard(producto);
      container.appendChild(card);
    });
  }
  catch(error){
    console.error(`Error al cargar productos de la categoría ${categoria}:`, error);
  }
  return;}