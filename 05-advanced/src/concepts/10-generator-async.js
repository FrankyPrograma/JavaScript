import { heroes } from "../data/heroes";
/**
 *
 * @param {HTMLDivElement} element
 */

export const geneartorsAsyncComponent = async (element) => {
  const heroeGenerator = getHeroGenerator();
  let isFinished = false;

  do {
    const { value, done } = await heroeGenerator.next();
    isFinished = done;

    if (isFinished) break; // Así no imprime el ultimo return

    element.innerHTML += `${value} <br />`;
  } while (!isFinished);
};

async function* getHeroGenerator() {
  for (const hero of heroes) {
    await sleep();
    yield hero.name;
  }

  // Tenemos que poner el return para que el done sea true y no haya undefined
  return "No hay mas heroes";
}

const sleep = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 500);
  });
};
