import { IEpisodico } from "../interfaces/IEpisodico.js";
import { IVideo } from "../interfaces/IVideo.js";
import { Director } from "../models/Director.js";

export class Series implements IVideo<String>,IEpisodico {

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
