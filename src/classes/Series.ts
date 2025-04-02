import { IEpisodico } from "../interfaces/IEpisodico";
import { IVideo } from "../interfaces/IVideo";
import { Director } from "../models/Director";

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
