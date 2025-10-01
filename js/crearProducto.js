// Función para crear el componente de producto
export function crearProductoCard(producto) {
  const col = document.createElement('div');
  col.className = 'col-md-4';

  col.innerHTML = `
    <div class="card mb-4 h-100" style="min-height: 400px; display: flex; flex-direction: column;">
      <img src="${producto.thumbnail}" class="card-img-top img-fluid rounded" alt="${producto.title}" style="object-fit: cover; height: 200px;">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${producto.title}</h5>
        <p class="card-text" style="flex-grow: 1;">${producto.description}</p>
        <p class="card-text"><strong>Precio: $${producto.price}</strong></p>
        <button 
          class="btn btn-primary mt-auto" 
          data-bs-toggle="modal" 
          data-bs-target="#productModal" 
          data-title="${producto.title}" 
          data-description="${producto.description}" 
          data-price="${producto.price}" 
          data-thumbnail="${producto.thumbnail}">
          Comprar
        </button>
      </div>
    </div>
  `;

  return col;
}