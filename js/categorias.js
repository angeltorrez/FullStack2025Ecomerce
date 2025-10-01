import { cargarProductosPorCategoria } from "../utilities/cargarCategorias.js";
const dropdownItems = document.querySelectorAll(".dropdown-item");
const container = document.getElementById("productos-container");


// Agregar evento a cada dropdown-item
dropdownItems.forEach(item => {
  item.addEventListener("click", event => {
    event.preventDefault();
    const categoria = item.textContent.toLowerCase();
    container.innerHTML = ""; // Limpiar el contenedor antes de cargar nuevos productos
    cargarProductosPorCategoria(categoria);
  });
});