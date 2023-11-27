const heroes = ["Batman", "Superman", "Flash", "Aquaman"];
// heroes.sort();

const newState = heroes.toSpliced(0, 1, "Green Lantern"); // Eliminamos el primero y le cambiamos por Green Lantern
// const sortedHeroes = heroes.toSorted();
// const heroesReverse = heroes.toReversed();

console.log(newState);
console.log(heroes);
