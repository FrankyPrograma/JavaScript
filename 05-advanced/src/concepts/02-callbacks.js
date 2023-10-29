import { heroes } from "../data/heroes";

/**
 *
 * @param {HTMLDivElement} element
 */
export const callbacksComponent = (element) => {
  const id1 = "5d86371fd55e2e2a30fe1ccb1";
  const id2 = "5d86371fd55e2e2a30fe1ccb2";

  findHero(id1, (err, hero1) => {
    if (err) {
      element.innerHTML = error;
      return; // Para que no se siga ejecutando
    }

    element.innerHTML = hero1.name;

    findHero(id2, (err, hero2) => {
      if (err) {
        element.innerHTML = error;
        return;
      }

      element.innerHTML = `${hero1.name} / ${hero2.name}`;
    });
  });
};

/**
 *
 * @param {String} id
 * @param {(error: String|null, hero: Object) => void} callback // Una función que no regersa nada y que recibe hero
 */
const findHero = (id, callback) => {
  const hero = heroes.find((hero) => hero.id === id);

  if (!hero) {
    callback(`El heroe con id ${id} no existe`);
    return;
  }

  // No existe error, así que mandamos heroe
  callback(null, hero);
};
