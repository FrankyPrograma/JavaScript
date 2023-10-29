import { Todo } from "../models/todo.model";
import { createTodoHtml } from "./create-todo-html";

let element;

/**
 *
 * @param {String} elementoId
 * @param {Todo} todo
 */
export const renderTodos = (elementoId, todos = []) => {
  // * Si no existe el elemento se le asignamos
  if (!element) {
    element = document.querySelector(elementoId);
  }

  // ! Si sigue sin existir después de asignarlo le mandamos el err de que no existe
  if (!element) throw new Error(`Elemento ${elementoId} no encontrado`);

  // ! Hay que limpiar el contendido para que no los apile
  element.innerHTML = "";

  todos.forEach((todo) => {
    // * Le pasamos el todo al createElement y de ahí creamos un li
    element.append(createTodoHtml(todo));
  });
};
