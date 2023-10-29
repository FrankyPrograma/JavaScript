const heroes = ["Batman", "Superman", "Mujer Maravilla", "Aquaman"];

for (let i = 0; i < heroes.length; i++) {
  console.log(heroes[i]);
}

// For in
console.log("\n For in \n");

// El for in te saca la i de forma mas sencilla
for (let i in heroes) {
  console.log(heroes[i]);
}

console.log("\n For of \n");

// El for of extra el elemento en la posición que este en vez de tener que extraerlo tu
for (let heroe of heroes) {
  console.log(heroe);
}
