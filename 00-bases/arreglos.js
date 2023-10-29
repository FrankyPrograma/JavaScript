const arr = new Array(10); // Arr de 10 elementos
const arr2 = []; // Arr sin elementos (forma habitual)

let videoJuegos = ["Mario 3", "Megaman", "Chrono Trigger"];

// El arreglo puede contener varios tipos datos
let arregloCosas = [
  true,
  123,
  "Fernando",
  1 + 2,
  function () {},
  () => {},
  { a: 1 },
  ["X", "Megaman", "Zero", "Dr.Light"],
];

console.log(arregloCosas[7][3]);
