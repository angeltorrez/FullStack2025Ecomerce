document.addEventListener("DOMContentLoaded", () => {
  const productModal = document.getElementById("productModal");
  const modalProductCard = document.getElementById("modalProductCard");

  // Escuchar el evento `show.bs.modal` del modal
  productModal.addEventListener("show.bs.modal", (event) => {
    const button = event.relatedTarget; // Botón que activó el modal

    // Verificar si el botón tiene los atributos `data-*`
    if (button) {
      const title = button.getAttribute("data-title");
      const description = button.getAttribute("data-description");
      const price = button.getAttribute("data-price");
      const thumbnail = button.getAttribute("data-thumbnail");

      // Crear la tarjeta del producto para el modal
      modalProductCard.innerHTML = `
        <div class="card" style="width: 100%;">
          <img src="${thumbnail}" class="card-img-top" alt="${title}">
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">${description}</p>
            <p class="card-text"><strong>Precio: $${price}</strong></p>
            <a href="#" class="btn btn-success">Confirmar Compra</a>
          </div>
        </div>
      `;
    } else {
      console.error("No se encontraron los atributos `data-*` en el botón.");
    }
  });
});