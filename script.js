function scrollToSection() {
    const aboutSection = document.querySelector("#sobre-mi");

    aboutSection.scrollIntoView({
        behavior: "smooth"
    });
}

function verProyecto(nombreProyecto) {
    alert("Seleccionaste el proyecto: " + nombreProyecto);
}