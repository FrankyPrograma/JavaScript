const superHeroes = [
  {
    id: 1,
    name: "Batman",
  },
  {
    id: 2,
    name: "Superman",
  },
  {
    id: 3,
    name: "Flash",
  },
  {
    id: 4,
    name: "Aquaman",
  },
];

// Hacer copias literales de un array
const superHeroesCopy = structuredClone(superHeroes); // Aquí se pierde la referencia, util para cuando el array no es de primitivos
