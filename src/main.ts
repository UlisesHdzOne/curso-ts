// TypeScript 04 - Tipos de datos avanzados

//union
let myid: number | string = 1;
myid = "hola";

type id = number | string;

let userId: id = "hola2";

let myarra:(number | string | boolean)[] = [1, "hola", true];

myarra = [1,2,7,6,5, "hola", true];

//Litera;
type stateLoading = "loading";
type stateError = "error";

let loading: stateLoading = "loading";
let error: stateError = "error";

type state = stateLoading | stateError;

let state: state = "loading";

type movie = {
  title: string;
  duration: number;
  hasOscar: boolean;
};

const esdla: movie = {
  title: "El secreto de la muerte",
  duration: 120,
  hasOscar: true,
};

//Intersección
type book = {
  title: string;
  pages: number;
};

type bookAdaptation = movie & book;

const book1: bookAdaptation = {
  title: "El secreto de la muerte",
  pages: 120,
  duration: 120,
  hasOscar: true,
};

type numString = number & string;
//let numString: numString = 1;

console.log(book1,esdla);