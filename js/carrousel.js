const carrouselPath = "../public/carrousel";
const carouselInner = document.querySelector(".carousel-inner");

// Función para cargar las imágenes del carrusel
function cargarImagenesCarrousel() {
  const imagenes = [
    { nombre: 'laptop', url: `${carrouselPath}/laptop.jpg` },
    { nombre: 'laptop', url: `${carrouselPath}/laptop2.jpg` },
    { nombre: 'smartphone', url: `${carrouselPath}/smartphone.jpg` },
    { nombre: 'tablet', url: `${carrouselPath}/tablet.jpg` },
  ];

  // Limpiar el carrusel antes de agregar nuevas imágenes
  carouselInner.innerHTML = "";

  imagenes.forEach((img, idx) => {
    const item = document.createElement("div");
    item.className = `carousel-item${idx === 0 ? " active" : ""}`;
    item.innerHTML = `
      <img src="${img.url}" class="d-block w-100 carousel-img" alt="Imagen de ${img.nombre}">
    `;
    carouselInner.appendChild(item);
  });
}
// Llamar a la función para cargar las imágenes
cargarImagenesCarrousel();