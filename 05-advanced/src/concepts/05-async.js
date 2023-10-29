import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const asyncComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb";

  findHero(id1)
    .then((name) => (element.innerHTML = name))
    .catch((err) => (element.innerHTML = err));
};

/**
 *
 * @param {String} id
 * @returns {Promise<String>}
 */

// Las funciones asincronas no bloquean el proceso y se siguen ejecutando todas las cosas sin bloquear el proceso
const findHero = async (id) => {
  // async transforma la función en una promesa
  const hero = heroes.find((hero) => hero.id === id);

  // Si no existe lanzamos err
  if (!hero) throw new Error(`Heroe con el id ${id} no existe`);

  return hero.name;
};
