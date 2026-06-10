function scrollToSection() {
  document.querySelector("#sobre-mi").scrollIntoView({
    behavior: "smooth"
  });
}

function verProyecto(nombreProyecto) {
  alert("Seleccionaste el proyecto: " + nombreProyecto);
}