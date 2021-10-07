function validar(boton, p1) {
    const pregunta = document.getElementById(p1);
    if (boton.className == "verdadero") {
        pregunta.style.color="green";
    } else {
        pregunta.style.color="red";
    }
}
