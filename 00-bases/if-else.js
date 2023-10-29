const diasDeLaSemana = {
  0: "Domingo",
  1: "Lunes",
  2: "Martes",
  3: "Miércoles",
  4: "Jueves",
  5: "Viernes",
  6: "Sábado",
};

const diasDeLaSemanaArr = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

let dia = 6;

console.log(diasDeLaSemana[dia] || "Día no definido");
console.log(diasDeLaSemanaArr[dia]);
