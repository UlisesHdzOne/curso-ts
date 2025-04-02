"use strict";
//Interface
// Ejemplo de uso de la interfaz con un tipo específico
// Aquí estamos especificando que 'T' es un string, es decir, 'data' será de tipo string
const director1 = {
    name: "Ulises Gascón",
    age: 28,
    data: "Datos personales" // 'data' es de tipo string
};
console.log(director1);
class Movie {
    constructor(title, duration, hasOscar) {
        this.title = title;
        this.duration = duration;
        this.hasOscar = hasOscar;
    }
    getInfo() {
        return `El título del film es "${this.title}" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar ? "Sí" : "No"}`;
    }
}
// La clase HorrorMovie extiende Movie, heredando sus propiedades y métodos
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscar, hasJumpScares // Nueva propiedad específica de HorrorMovie que indica si tiene "jump scares"
    ) {
        super(title, duration, hasOscar); // Llama al constructor de la clase base (Movie) para inicializar sus propiedades
        this.hasJumpScares = hasJumpScares;
    }
    displayAlert() {
        // Método específico de HorrorMovie que muestra una alerta en consola
        console.log("¡Alerta! El horror es horrendo!");
    }
    getInfo() {
        // Sobrescribe el método getInfo() de Movie para devolver información diferente
        return 'some movie info'; // Este método ahora devuelve un texto fijo en lugar de la información de la película
    }
}
const movie1 = new Movie("El Cid", 120, true);
const movie2 = new Movie("Harry Potter", 100, false);
//console.log(movie1, movie2);  
//console.log(movie1.getInfo());  
//console.log(movie2.getInfo());  
// Se crea una instancia de HorrorMovie con las propiedades heredadas y la nueva propiedad "hasJumpScares"
const screem = new HorrorMovie("El Cid", 120, true, true);
//console.log('screem', screem.getInfo()); // Llama al método getInfo() sobrescrito en HorrorMovie
//screem.displayAlert(); // Llama al método específico de HorrorMovie
