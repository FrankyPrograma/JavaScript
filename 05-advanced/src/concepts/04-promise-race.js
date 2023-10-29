/**
 *
 * @param {HTMLDivElement} element
 */
export const promiseRaceComponent = (element) => {
  element.innerHTML = "Cargando...";

  const renderValue = (value) => {
    element.innerHTML = value;
  };

  Promise.race([slowPromise(), mediumPromise(), fastPromise()]).then(
    renderValue
  );
};

const slowPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Slow Promise");
    }, 2000);
  });

const mediumPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("medium Promise");
    }, 1500);
  });

const fastPromise = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("fastPromise");
    }, 1000);
  });
