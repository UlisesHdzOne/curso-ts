//Cómo Implementar Interfaces en Clases
import { HorrorMovie } from "./classes/HorrorMovie.js";
import { Movie } from "./classes/Movie.js";
import { Series } from "./classes/Series.js";
const director1 = {
    name: "Ulises Gascón",
    age: 28,
    data: "Datos personales"
};
const movie1 = new Movie("El Cid", 120, true, director1);
const movie2 = new Movie("Harry Potter", 100, false, director1);
console.log(movie1, movie2);
//console.log(movie1.getInfo());  
//console.log(movie2.getInfo());  
// Se crea una instancia de HorrorMovie con las propiedades heredadas y la nueva propiedad "hasJumpScares"
const screem = new HorrorMovie("El Cid", 120, true, director1, true);
//console.log('screem', screem.getInfo()); // Llama al método getInfo() sobrescrito en HorrorMovie
//screem.displayAlert(); // Llama al método específico de HorrorMovie
// Creando una instancia de Series
const series1 = new Series("Breaking Bad", 50, director1, 62);
console.log(series1);
