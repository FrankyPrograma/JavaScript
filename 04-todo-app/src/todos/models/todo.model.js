import { v4 as uuid } from "uuid";

export class Todo {
  /**
   *
   * @param {String} desc
   */
  constructor(desc) {
    this.id = uuid(); // Creamos un id unico para cada tarea
    this.desc = desc;
    this.done = false;
    this.created = new Date();
  }
}
