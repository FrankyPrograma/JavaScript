let personaje = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  coords: {
    lat: 34.034,
    lng: -118.7,
  },
  trajes: ["Mark I", "Mark 5", "Hulkbuster"],
  direccion: {
    zip: "10880, 90265",
    ubicacion: "Malibu, california",
  },
  "ultima-pelicula": "infinity war",
};

console.log(personaje);

console.log("Nombre", personaje.nombre);
console.log("Nombre", personaje["nombre"]);
console.log("Edad", personaje.edad);

console.log("Nº Trajes", personaje.trajes.length);
console.log("Último traje", personaje.trajes[personaje.trajes.length - 1]);
console.log("última pelicula", personaje["ultima-pelicula"]);

// Eliminar propiedad
delete personaje.nombre;
console.log(personaje);
const array = [];

// Transformar objeto a array con subArrays (clave, valor)
const entriesPares = Object.entries(personaje);

// Añadir nueva propiedad
personaje.casado = true;

console.log(personaje);

// bloqueo propiedades
Object.freeze(personaje); // No se pueden modificar las propiedades ya
Object.freeze(personaje.direccion);

// Obtiene la clave de las propiedades
const propiedades = Object.getOwnPropertyNames(personajes);
const values = Object.values(personaje); // Obtienes los valores del objeto
