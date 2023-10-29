const crearPersona = (nombre, apellido) => {
  {
    nombre, apellido;
  }
};

const persona = crearPersona("Francisco", "Bueno");

function imprimeArgumentos() {
  console.log(arguments);
}

imprimeArgumentos(true, "Fran", 23, false);

imprimeArgumentos();

// Hay que crear un arreglo con todos los args que se pasan (no funcionan como las funciones convencionales)
const imprimeArgumentos2 = (...args) => {
  // ...args crea una copia en un arreglo de todos los argumentos pasados por parametro
  return args;
};

// Variable explicita mediante la cual puedes acceder a todos los elementos pasados por parametro

// Desestructurar arrays
const [casado, nombre, edad, vivo] = imprimeArgumentos2(
  true,
  "Fran",
  123,
  false
);

console.log({ casado, nombre, edad, vivo });

// Puedes desestructurar obj y ponerles un nombre o dejarlos tal cual vienen en el obj
const { nombre: nombre2, apellido } = crearPersona("Fran", "Bueno");

console.log(nombre2, apellido);

let tony = {
  nombre: "Tony Stark",
  codeName: "Ironman",
  vivo: false,
  edad: 40,
  trajes: ["Mark I", "Mark 5", "Hulkbuster"],
};

const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {
  console.log(nombre);
  console.log(codeName);
  console.log(vivo);
  console.log(edad);
  console.log(trajes);
};

imprimePropiedades(tony);
