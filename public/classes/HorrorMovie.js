import { Movie } from "./Movie.js";
export class HorrorMovie extends Movie {
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
