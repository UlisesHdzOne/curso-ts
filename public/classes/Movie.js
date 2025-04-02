export class Movie {
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
