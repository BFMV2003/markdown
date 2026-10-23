// var nombre1 = "Carlos" ;
// let apellido = "Castro" ;
// const apellido2 = "Sanchez"

// var nombre1 = "Andres" ;

// apellido = "Reyes"; 
// console.log(apellido) ;
// Array con 10 elementos
const videojuegos = ["Zelda", "Mario", "Halo", "Minecraft", "GTA", "FIFA", "Pokemon", "Fortnite", "Doom", "Valorant"];
console.log("Array original:", videojuegos);
// Agregamos un nuevo juego al inicio (posición 0)
videojuegos.unshift("Tetris");
console.log("Con nuevo elemento en posición 0:", videojuegos);
// Eliminamos los elementos de la posición 0 y 1
// El 0 indica que empezamos desde el inicio, y el 2 significa que borramos 2 elementos
videojuegos.splice(0, 2);
console.log("Array después de eliminar posiciones 0 y 1:", videojuegos);
// Objeto principal (Estudiante)
const estudiante = {
    nombre: "Carlos",
    edad: 22,
    // 1. Objeto dentro de un objeto
    direccion: {
        ciudad: "Bogotá",
        barrio: "Centro",
        codigoPostal: 110111
    },
    // 2. Array dentro de un objeto
    materias: ["Programación", "Bases de Datos", "Matemáticas", "Diseño Web"]
};

// --- IMPRIMIR DATOS EN CONSOLA ---

// Imprimir un dato del objeto principal
console.log("Nombre del estudiante:", estudiante.nombre);

// Imprimir un dato de un objeto dentro de otro objeto
console.log("Ciudad donde vive:", estudiante.direccion.ciudad);

// Imprimir un dato de un array dentro de un objeto (por ejemplo, la primera materia)
console.log("Primera materia asignada:", estudiante.materias[0]);