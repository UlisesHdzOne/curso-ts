import { Director } from "../models/Director";

export interface IVideo<T>{
    title: string;
    director: Director<T>;
    getDuration(): number;
    play(): void;
}