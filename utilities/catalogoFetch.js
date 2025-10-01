export async function catalogoFetch(categoria,urlBase){
  return fetch(`${urlBase}${categoria}`);
}
//cargar el fetch con la categoria correspondiente al hacer click en el dropdown del navbar