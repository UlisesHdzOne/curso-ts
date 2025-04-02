import { IVideo } from "../interfaces/IVideo";
import { Director } from "../models/Director";

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

    getHoursMinutes(): string {
      const hours = Math.floor(this.duration / 60);
      const minutes = this.duration % 60;
      return `${hours}h ${minutes}m`;
    }
}