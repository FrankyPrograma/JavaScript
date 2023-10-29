let juegos = ["Zelda", "Mario", "Metroid", "Chrono", 123];

console.log("Longitud: ", juegos.length);
console.log("Último elemento", juegos[juegos.length - 1]);

juegos.forEach((elemento, indice, arr) => {
  console.log({ elemento, indice, arr });
});

juegos.push("F-Zero");

juegos.unshift("Fire Emblem"); // Añade elemento al principio del arreglo

let juegoBorrado = juegos.pop(); // Eliminar último elemento del arreglo
console.log({ juegoBorrado, juegos });

let pos = 1;

let juegosBorrados = juegos.splice(pos, 1); // Posición que quieres borrar y cuantos quieres eliminar

juegos.indexOf("Metroid"); // Sacar el indice de un elemento que quieras (-1 no se encontro)
