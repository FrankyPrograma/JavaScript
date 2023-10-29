let a = 10;
let b = a;
a = 30; // Cambia solo a -> Se pasa por valor

let juan = { nombre: "Juan" };
let ana = { ...juan }; // Manera de romper referencia (ya no se cambian los dos)
ana.nombre = "Ana"; // Cambia los dos (Juan y Ana) -> Se pasa por referencia

// Si por parametro ponemos ... es el parametro rest, si queremos pasar el rest tendria que ser entre llaves
const cambiarNombre = (persona) => {
  persona.nombre = "Tony";
  return persona;
};

let peter = { nombre: "Peter" };
let tony = cambiarNombre(peter);
// Se vuelve a cambiar los 2 por que se pasa por referencia

// Arreglos
const frutas = ["Manzana", "Pera", "Piña"];

console.time("slice");
const otrasFrutas = frutas.slice(); // Otra forma de romper la referencia
console.timeEnd("slice");

console.time("spread");
const otrasFrutas2 = [...frutas]; // Copia de frutas (Rompemos referencia)
console.timeEnd("spread");

otrasFrutas.push("Mango");
