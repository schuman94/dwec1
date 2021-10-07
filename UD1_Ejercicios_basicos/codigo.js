function validar(boton, id_parrafo) {
    const pregunta = document.getElementById(id_parrafo);
    if (boton.className == "verdadero") {
        pregunta.style.color="green";
    } else {
        pregunta.style.color="red";
    }
}
