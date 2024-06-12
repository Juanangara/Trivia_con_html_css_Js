class Pregunta {
    constructor(pregunta, opcion1, opcion2, opcion3, opcion4) {
        this.pregunta = pregunta;
        this.opcion1 = opcion1;
        this.opcion2 = opcion2;
        this.opcion3 = opcion3;
        this.opcion4 = opcion4;
    }
}

let preguntas = [
    new Pregunta("¿Cuántas zonas horarias tiene Rusia?", "10", "11", "12", "9"),
    new Pregunta("¿Cuál es la flor nacional de Japón?", "Flor de Cerezo", "Flor de Jamaica", "Flor Amarilla", "Flor Colombiana"),
    new Pregunta("¿Cuántas franjas tiene la bandera de Estados Unidos?", "13", "12", "10", "14"),
    new Pregunta("¿Cuál es el animal nacional de Australia?", "Canguro", "Koala", "Emú", "Tigre de Tasmania"),
    new Pregunta("¿Cuántos días le toma a la tierra dar una vuelta a la órbita del sol?", "365", "366", "360", "364"),
    new Pregunta("¿Cuál de los siguientes imperios no tenía un idioma escrito: Inca, Aztecas, Egipcios, Romanos?", "Inca", "Aztecas", "Egipcios", "Romanos"),
    new Pregunta("¿Cómo se llamaba Istanbul antes de 1923?", "Constantinopla", "Bizancio", "Nueva Roma", "Ankara"),
    new Pregunta("¿Qué país tiene la mayor cantidad de islas en el mundo?", "Suecia", "Indonesia", "Filipinas", "Canadá"),
    new Pregunta("¿Cuál es el país más pequeño del mundo?", "El Vaticano", "Mónaco", "Nauru", "San Marino"),
    new Pregunta("¿Cuál es la capital de Canadá?", "Ottawa", "Toronto", "Vancouver", "Montreal"),
    new Pregunta("Nombra la cordillera más larga (no más alta) del mundo", "Los Andes", "Himalaya", "Montañas Rocosas", "Alpes"),
    new Pregunta("¿Dónde se encuentra la fosa más profunda del océano?", "Fosa de las Marianas", "Fosa de Tonga", "Fosa de Java", "Fosa de Atacama"),
    new Pregunta("¿Cuál es el río más largo del mundo?", "Río Nilo", "Río Amazonas", "Río Yangtsé", "Río Misisipi"),
    new Pregunta("¿Cómo le llaman los locales a la Ciudad de Nueva York?", "Gotham", "Big Apple", "Empire City", "Metropolis"),
    new Pregunta("¿Cuál es la serie de libros mejor vendida del siglo 21?", "Harry Potter", "Crepúsculo", "El Señor de los Anillos", "Juego de Tronos"),
    new Pregunta("¿Cuál es el idioma que tiene más palabras (según su diccionario)?", "Inglés", "Chino", "Español", "Ruso"),
    new Pregunta("¿Qué artista de graffiti famoso nació en Bristol?", "Banksy", "Shepard Fairey", "D*Face", "Invader"),
    new Pregunta("¿Cuál es la obra más famosa de Edvard Munch?", "El grito", "La Madonna", "El baile de la vida", "El día después"),
    new Pregunta("¿Qué artista pintó el techo de la Capilla Sixtina en Roma?", "Miguel Ángel", "Leonardo da Vinci", "Rafael", "Boticelli"),
    new Pregunta("¿Cuándo se inauguró el metro de Londres?", "1863", "1890", "1900", "1920"),
    new Pregunta("¿Quién inventó la World Wide Web, y cuándo?", "Tim Berners-Lee, 1990", "Steve Jobs, 1985", "Bill Gates, 1995", "Mark Zuckerberg, 2004"),
    new Pregunta("¿Quién inventó el icónico Little Black Dress?", "Coco Chanel", "Christian Dior", "Yves Saint Laurent", "Karl Lagerfeld"),
    new Pregunta("¿Qué ocurrió el 20 de Julio de 1969?", "El alunizaje del Apollo 11", "La fundación de la NASA", "El primer vuelo del Concorde", "La invención de Internet"),
    new Pregunta("¿Cuándo se publicó la primera edición de la revista Vogue?", "1892", "1960", "2000", "1920")
];

let respuestasCorrectas = [
    "11",
    "Flor de Cerezo",
    "13",
    "Canguro",
    "365",
    "Inca",
    "Constantinopla",
    "Suecia",
    "El Vaticano",
    "Ottawa",
    "Los Andes",
    "Fosa de las Marianas",
    "Río Nilo",
    "Gotham",
    "Harry Potter",
    "Inglés",
    "Banksy",
    "El grito",
    "Miguel Ángel",
    "1863",
    "Tim Berners-Lee, 1990",
    "Coco Chanel",
    "El alunizaje del Apollo 11",
    "1892"
];


let indiceActual = 0;
let indiceUsuario = 0;

let usuarios = [];

window.onload = function() {
    let usuarioGuardado = JSON.parse(sessionStorage.getItem('usuario'));
    if (usuarioGuardado) {
        usuarios.push(usuarioGuardado);
        cambiarPregunta();
    } else {
        console.error("No se encontró información del participante.");
    }
};


function cambiarPregunta() {
    if (indiceActual < preguntas.length) {
        let objP = preguntas[indiceActual];
        document.getElementById("botonIncioTrivia").innerHTML = "Siguiente pregunta";
        document.getElementById('preguntaencabezado').innerText = objP.pregunta;
        document.getElementById("opcion1").innerHTML = "<div class = 'botonOpcion' id = 'botonOP1' onclick = 'verificarRespuesta(this)'>" + objP.opcion1 + "</div><br/>";
        document.getElementById("opcion2").innerHTML = "<div class = 'botonOpcion' id = 'botonOP2' onclick = 'verificarRespuesta(this)'>" + objP.opcion2 + "</div><br/>";
        document.getElementById("opcion3").innerHTML = "<div class = 'botonOpcion' id = 'botonOP3' onclick = 'verificarRespuesta(this)'>" + objP.opcion3 + "</div><br/>";
        document.getElementById("opcion4").innerHTML = "<div class = 'botonOpcion' id = 'botonOP4' onclick = 'verificarRespuesta(this)'>" + objP.opcion4 + "</div><br/>";
        indiceActual++;
    } else {
        document.getElementById("TotalPreguntas").innerHTML = "<div class = 'ContenedorFinalPregunta'>Muchas Gracias por participar</div><br/>"+"<div id = 'puntajeUsuario'></div>";
        finalizarTrivia();
        indiceUsuario++;
    }
}


function verificarRespuesta(op){

    let respuesta = op.innerText; 
    if(respuesta === respuestasCorrectas[indiceActual-1]){
        usuarios[indiceUsuario].respuestasCorrectas++;
    }
    cambiarPregunta();
}

function finalizarTrivia() {
    // Asegurarse que el índice del usuario está dentro del rango del array
    if (indiceUsuario < 0 || indiceUsuario >= usuarios.length) {
        console.error("Índice de usuario fuera de rango");
        return;
    }

    // Obtener los datos del usuario actual
    const usuario = usuarios[indiceUsuario];
    const nombreUsuario = usuario.nombre;
    const nacionalidadUsuario = usuario.nacionalidad;
    const respuestasCorrectas = usuario.respuestasCorrectas;

    // Formatear la cadena de resultado
    const totalPreguntas = preguntas.length;
    const cadenaFinal = `El usuario ${nombreUsuario} de ${nacionalidadUsuario} obtuvo ${respuestasCorrectas} respuestas correctas de ${totalPreguntas} preguntas.`;

    // Actualizar el contenido del elemento HTML
    document.getElementById("TotalPreguntas").innerHTML = `
        <div>Muchas gracias por participar</div><br/>
        <div>${cadenaFinal}</div><br/>
        <button onclick='location.href="index.html"'>Volver a iniciar</button>`;
}
