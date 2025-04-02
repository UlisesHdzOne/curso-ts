// Definición de la clase Movie
class Movie {
    // 💡 MODIFICADORES DE ACCESO:
    // - public: la propiedad es accesible desde cualquier parte del código.
    // - private: la propiedad solo puede ser accedida dentro de la clase.
    // - readonly: la propiedad solo se puede leer, no modificar después de inicializarse.
  
    /* 
    🔹 Forma tradicional de declarar propiedades en TypeScript:
    
    title: string; // Pública por defecto.
    private duration: number; // Solo accesible dentro de la clase.
    readonly hasOscar: boolean; // No se puede modificar una vez asignada.
  
    constructor(title: string, duration: number, hasOscar: boolean) {
      this.title = title;
      this.duration = duration;
      this.hasOscar = hasOscar;
    }
    */
  
    // ✅ FORMA MODERNA: Declaración y asignación en el constructor (más concisa y eficiente)
    constructor( 
      public title: string,      // Se puede acceder desde cualquier parte del código
      private duration: number,  // Solo accesible dentro de la clase
      readonly hasOscar: boolean // No se puede modificar después de inicializarse
    ) {}
  
    // Método público que devuelve información sobre la película
    getInfo() {
      return `El título del film es "${this.title}" y dura ${this.duration} minutos. ¿Tiene un Oscar? ${this.hasOscar ? "Sí" : "No"}`;
    }
  }
  
  // Creación de instancias de la clase Movie
  const movie1 = new Movie("El Cid", 120, true);
  const movie2 = new Movie("Harry Potter", 100, false);
  
  console.log(movie1, movie2); // Muestra los objetos movie1 y movie2 en la consola
  
  // Llamando al método getInfo() de cada instancia
  console.log(movie1.getInfo()); // "El título del film es 'El Cid' y dura 120 minutos. ¿Tiene un Oscar? Sí"
  console.log(movie2.getInfo()); // "El título del film es 'Harry Potter' y dura 100 minutos. ¿Tiene un Oscar? No"
  
  // ❌ No se puede acceder a "duration" porque es privado
  // console.log(movie1.duration); // ❌ Error: Property 'duration' is private
  
  // ❌ No se puede modificar "hasOscar" porque es readonly
  // movie1.hasOscar = false; // ❌ Error: Cannot assign to 'hasOscar' because it is a read-only property
  