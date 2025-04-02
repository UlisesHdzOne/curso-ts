//elementos del DOM

// Selecciona el primer elemento <h1> que encuentre en el documento
const h1 = document.querySelector('h1');

// Verifica si el elemento h1 existe antes de acceder a su contenido
console.log(h1?.textContent); // Muestra el texto dentro del <h1> en la consola

// Selecciona el primer elemento que tenga la clase "title" y lo trata como un elemento de encabezado (HTMLHeadingElement)
const title = document.querySelector('.title') as HTMLHeadingElement;

// Muestra el contenido de texto del elemento con la clase "title"
console.log(title.textContent);

// Selecciona el elemento que tenga el id "username" y lo trata como un campo de entrada de texto (HTMLInputElement)
const username = document.querySelector('#username') as HTMLInputElement;

// Muestra el placeholder (texto de ayuda) del input con id "username"
console.log(username.placeholder);
