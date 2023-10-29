import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncAwaitComponent2 = async (element) => {
  // Esto sirve cuando las promesas no necesitan del resultado de la anterior para resolverse
  const [value1, value2, value3] = await Promise.all([
    slowPromise(),
    mediumPromise(),
    fastPromise(),
  ]);

  element.innerHTML = `
    value1: ${value1} <br />
    value2: ${value2} <br />
    value3: ${value3} <br />
  `;
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
