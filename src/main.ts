//Cómo Implementar Interfaces en Clases

interface Director<T> {
    name: string;  
    age: number;   
    data: T;      
}


const director1: Director<string> = {
    name: "Ulises Gascón",
    age: 28,
    data: "Datos personales"  
}
//este es un estandar IVideo
interface IVideo<T>{
    title: string;
    director: Director<T>;
    getDuration(): number;
    play(): void;
}


class Movie implements IVideo <string>{
    constructor( 
      public title: string,
      private duration: number, 
      readonly hasOscar: boolean,
      public director: Director<string>
    ) {}
  
    getInfo() {
      return `El título del film es "${this.title}" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar ? "Sí" : "No"}`;
    }

    getDuration(): number {
      return this.duration;
    }

    play(): void {
        console.log("Playing...");
    }
}

// La clase HorrorMovie extiende Movie, heredando sus propiedades y métodos
class HorrorMovie extends Movie {
    constructor(
        title: string,
        duration: number,
        hasOscar: boolean,
        director: Director<string>,
        public hasJumpScares: boolean // Nueva propiedad específica de HorrorMovie que indica si tiene "jump scares"
    ) {
        super(title, duration, hasOscar,director);
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


const movie1 = new Movie("El Cid", 120, true,director1);
const movie2 = new Movie("Harry Potter", 100, false,director1);

console.log(movie1, movie2);  

//console.log(movie1.getInfo());  
//console.log(movie2.getInfo());  

// Se crea una instancia de HorrorMovie con las propiedades heredadas y la nueva propiedad "hasJumpScares"
const screem = new HorrorMovie("El Cid", 120, true,director1, true);
//console.log('screem', screem.getInfo()); // Llama al método getInfo() sobrescrito en HorrorMovie
//screem.displayAlert(); // Llama al método específico de HorrorMovie


interface IEpisodico {
    episodes: number;
}

class Series implements IVideo<String>,IEpisodico {

    constructor(
    public title: string,
    private duration: number, 
    public director: Director<string>,
    public episodes: number
    ){}

    getDuration(): number {
        return this.duration;
    }

    play(): void {
        console.log("Playing...");
    }

}

// Creando una instancia de Series
const series1 = new Series("Breaking Bad", 50, director1, 62);
console.log(series1);