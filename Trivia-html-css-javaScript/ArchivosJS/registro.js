class Usuario {
    constructor(nombre, nacionalidad) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.respuestasCorrectas = 0;
    }

    toString(){
        return "Nombre: " + this.nombre + ", Nacionalidad: " + this.nacionalidad + ", Respuestas Correctas: " + this.respuestasCorrectas;
    }
}

function agregarParticipante(event) {

    event.preventDefault();

    let nombre = document.getElementById("nombreParticipante").value;
    let nacionalidad = document.getElementById("nacionalidadParticipante").value;
    let participante = new Usuario(nombre, nacionalidad);

    sessionStorage.setItem('usuario', JSON.stringify(participante));

    window.location.href = 'trivia.html';
}
