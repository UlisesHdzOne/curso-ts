import { Director } from "../models/Director.js";

export interface IVideo<T>{
    title: string;
    director: Director<T>;
    getDuration(): number;
    play(): void;
}