import { IVideo } from "../interfaces/IVideo.js";
import { Director } from "../models/Director.js";

export class Movie implements IVideo <string>{
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