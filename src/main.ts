//Tipos de datos

let movie: string = "La casa de papel";
let duration: number = 200;
let hasOscars: boolean = true;

movie = "La casa de papel 2";
//movie = 123;

duration = 200;
//duration = "200";

hasOscars = true;
//hasOscars = 123;

let myObject : Object = {
    name: "Ulises",
    age: 30,
    movie: "La casa de papel",
    duration: 200,
    hasOscars: true,
};

myObject = {
    name: "Jesus",
}

//myObject=[];

let myArray:number[]=[1,2,3,4,5];
myArray=[10,20,30,40,50];
//myArray=['a','b','c','d','e'];

//evitar usar any no tiene sentido si es typescript
let data:any= 999;
data='hola';

console.log(movie,duration,hasOscars);
