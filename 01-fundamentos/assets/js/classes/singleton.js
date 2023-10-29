// Un singleton es tener una instancia unica de mi clase
class Singleton {
  static instancia; // undefined
  nombre = "";

  // Si !!Singleton.instancia es false entonces regresa la nueva instancia
  constructor(nombre = "") {
    if (!!Singleton.instancia) {
      return Singleton.instancia;
    }

    Singleton.instancia = this; // Hace referenca a esta instancia de la clase
    this.nombre = nombre;
  }
}

const instancia1 = new Singleton("Ironman");
const instancia2 = new Singleton("Spiderman"); // Esto debería regresa Ironman
console.log(`Nombre en la instancia1 es ${instancia1.nombre}`);
console.log(`Nombre de la instancia2 es ${instancia2.nombre}`);
