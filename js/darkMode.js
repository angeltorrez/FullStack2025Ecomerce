const temaOscuro = ()=>{
  document.documentElement.setAttribute("data-bs-theme","dark");
  document.getElementById("moonIco").setAttribute("class","d-block");
  document.getElementById("sunIco").setAttribute("class","d-none");
}
const temaClaro= ()=>{
  document.documentElement.setAttribute("data-bs-theme","light");
  document.getElementById("moonIco").setAttribute("class","d-none");
  document.getElementById("sunIco").setAttribute("class","d-block");
}
const toggleTema = () =>{
  if (document.documentElement.getAttribute("data-bs-theme")=== "light") {
    temaOscuro();
    localStorage.setItem("theme","dark");
  }
  else{
    temaClaro();
    localStorage.setItem("theme","light");
  }
}

/*let getTheme = () =>{
  return localStorage.getItem("theme") ||
  (window.matchMedia("(prefers-color-scheme:dark)").matches ? "dark" : "light");
}
document.getElementById("temaToggle").addEventListener("click", () =>{
  const theme = getTheme();
  const newTheme = theme === "dark" ? "light" : "dark";

  document.documentElement.setAttribute("data-bs-theme",newTheme);
  localStorage.setItem("theme",newTheme);

})
document.documentElement.setAttribute("data-bs-theme",getTheme());*/