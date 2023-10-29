/**
 *
 * @param {HTMLDivElement} element
 */
export const generatorsFunctionComponent = (element) => {
  // const myGenerator = miPrimeraFuncionGeneradora();
  // done: Si es true es que es el último valor, si no es que hay mas elementos
  //   console.log(myGenerator.next());
  //   console.log(myGenerator.next());
  //   console.log(myGenerator.next());
  //   console.log(myGenerator.next());

  const genId = idGenerator();

  const button = document.createElement("button");
  button.innerText = "Click me";
  element.append(button);

  const renderButton = () => {
    const { value } = genId.next(); // Sacamos el value
    button.innerText = `Click ${value}`;
  };

  button.addEventListener("click", renderButton);
};

// Funciones generadoras
// function* miPrimeraFuncionGeneradora() {
//   yield "Primer valor";
//   yield "Segundo valor";
//   yield "Tercer valor";
//   return "Ya no hay valores";

// Después del return ya no se puede hacer nada
// }

// Ejemplo función generadora

function* idGenerator() {
  let currentId = 0;

  // ! Ciclo infinito
  while (true) {
    yield `2023-${++currentId}`;
  }
}
