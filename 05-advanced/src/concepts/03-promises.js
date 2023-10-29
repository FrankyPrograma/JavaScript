import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const promisesComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1cc3";
  const id2 = "5d86371fd55e2e2a30fe1cc4";

  const renderHero = (hero) => {
    element.innerHTML = hero.name;
  };

  const renderTwoHeroes = (hero1, hero2) => {
    element.innerHTML = `
      <h3>${hero1.name}</h3>
      <h3>${hero2.name}</h3>
    `;
  };

  const renderError = (err) => {
    element.innerHTML = `
      <h1>Error:</h1>
      <h3>${err}</h3>
    `;
  };

  // ! FORMA 1
  //   findHero(id1)
  //     .then((hero1) => {
  //       findHero(id2)
  //         .then((hero2) => {
  //           renderTwoHeroes(hero1, hero2);
  //         })
  //         .catch(renderError);
  //     })
  //     .catch(renderError);
  // };

  // ! FORMA 2
  // let hero1;
  // findHero(hero1)
  //   .then((hero) => {
  //     hero1 = hero;
  //     return findHero(id2);
  //   })
  //   .then((hero2) => {
  //     renderTwoHeroes(hero1, hero2);
  //   })
  //   .catch(renderError);

  Promise.all([findHero(id1), findHero(id2)])
    .then(([hero1, hero2]) => {
      // Si una da error se ejecuta el catch
      renderTwoHeroes(hero1, hero2);
    })
    .catch(renderError);
};
/**
 *
 * @param {String} id
 * @returns {Promise}
 */
const findHero = (id) => {
  return new Promise((resolve, reject) => {
    const hero = heroes.find((hero) => hero.id === id);

    if (hero) {
      resolve(hero);
      return;
    }

    reject(`El heroe con el id ${id} no existe`);
  });
};
