/**
 *
 * @param {HTMLDivElement} element
 */

import { heroes } from "../data/heroes";

export const asyncAwaitComponent = async (element) => {
  // Forma de manejar err en funciones async
  try {
    const id1 = "5d86371f1efebc31def272e2";
    const id2 = "5d86371f2343e37870b91ef1";

    const { name: name1 } = await findHero(id1); // Primero se ejecuta esto
    const { name: name2 } = await findHero(id2); // Luego esto

    element.innerHTML = `${name1} / ${name2}`; // Y cuando ya se ejecutan las dos anteriores esta
  } catch (error) {
    element.innerHTML = error;
  }
};

const findHero = async (id) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) throw new Error(`Heroe con id ${id} no existe`);

  return hero;
};
