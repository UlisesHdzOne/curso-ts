//Genericos

/* Función sin genéricos (solo acepta arrays de números) */
// function getFistElement(array: number[]) {
//     return array[0]; 
// }

/* Función genérica que acepta cualquier tipo de array */
function getFistElement<T>(array: T[]) { 
    return array[0]; // Retorna el primer elemento del array, sin importar su tipo
}

// Array de números
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const firstNum = getFistElement(numArr); // Se infiere que T es number
console.log(firstNum); // Imprime: 1

// Array de strings
const strArr = ["Ulises", "Carlos", "Juan"];
const firstStr = getFistElement(strArr); // Se infiere que T es string
console.log(firstStr); // Imprime: "Ulises"

// Selecciona un input con ID "username" y lo trata como un HTMLInputElement
const username = document.querySelector<HTMLInputElement>("#username");
console.log(username?.placeholder); // Muestra el placeholder si el input existe
