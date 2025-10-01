import { cargarProductosPorCategoria } from "../utilities/cargarCategorias.js";
// Cargar todos los productos al inicio
const categorias = ['laptops', 'smartphones', 'tablets'];
// Cargar productos para cada categoría
for (const cat of categorias) {
  cargarProductosPorCategoria(cat);
}
