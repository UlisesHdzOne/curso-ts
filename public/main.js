"use strict";
//Cómo Implementar Interfaces en Clases
const director1 = {
    name: "Ulises Gascón",
    age: 28,
    data: "Datos personales"
};
class Movie {
    constructor(title, duration, hasOscar, director) {
        this.title = title;
        this.duration = duration;
        this.hasOscar = hasOscar;
        this.director = director;
    }
    getInfo() {
        return `El título del film es "${this.title}" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar ? "Sí" : "No"}`;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log("Playing...");
    }
}
// La clase HorrorMovie extiende Movie, heredando sus propiedades y métodos
class HorrorMovie extends Movie {
    constructor(title, duration, hasOscar, director, hasJumpScares // Nueva propiedad específica de HorrorMovie que indica si tiene "jump scares"
    ) {
        super(title, duration, hasOscar, director);
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
const movie1 = new Movie("El Cid", 120, true, director1);
const movie2 = new Movie("Harry Potter", 100, false, director1);
console.log(movie1, movie2);
//console.log(movie1.getInfo());  
//console.log(movie2.getInfo());  
// Se crea una instancia de HorrorMovie con las propiedades heredadas y la nueva propiedad "hasJumpScares"
const screem = new HorrorMovie("El Cid", 120, true, director1, true);
class Series {
    constructor(title, duration, director, episodes) {
        this.title = title;
        this.duration = duration;
        this.director = director;
        this.episodes = episodes;
    }
    getDuration() {
        return this.duration;
    }
    play() {
        console.log("Playing...");
    }
}
// Creando una instancia de Series
const series1 = new Series("Breaking Bad", 50, director1, 62);
console.log(series1);
