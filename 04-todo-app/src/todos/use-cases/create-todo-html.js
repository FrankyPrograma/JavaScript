import { Todo } from "../models/todo.model";

/**
 *
 * @param {Todo} todo
 */
export const createTodoHtml = (todo) => {
  if (!todo) throw new Error("A TODO object is required");

  // * CREAMOS un h1 y lo insertamos en un li que mas tarde sera insertado en el div todo-list
  const html = `
    <div class="view">
        <input class="toggle" type="checkbox" ${todo.done ? "checked" : ""}>
        <label>${todo.desc}</label>
        <button class="destroy"></button>
    </div>
    <input class="edit" value="Create a TodoMVC template">`;

  const liElement = document.createElement("li");
  liElement.innerHTML = html;
  liElement.setAttribute("data-id", todo.id);

  if (todo.done) {
    liElement.classList.add("completed");
  }

  return liElement;
};
