import todoStore, { Filters } from "../store/todo.store";
import html from "./app.html?raw"; // Para importar el html
import { renderTodos, renderPending } from "./use-cases";

const ElementId = {
  TodoList: ".todo-list",
  NewTodoInput: "#new-todo-input",
  ClearCompleted: ".clear-completed",
  TodoFilters: ".filtro",
  PendingCountLabel: "#pending-count",
};

/**
 *
 * @param {String} elementId
 */

export const App = (elementId) => {
  const displayTodos = () => {
    const todos = todoStore.getTodos(todoStore.getCurrentFilter()); // Obtenemos los todos con el filtro actual
    renderTodos(ElementId.TodoList, todos);
    updatePendingCount();
  };

  const updatePendingCount = () => {
    renderPending(ElementId.PendingCountLabel);
  };

  // Esto se ejecuta cuando se llama App()
  (() => {
    const app = document.createElement("div");
    app.innerHTML = html;
    document.querySelector(elementId).append(app);
    displayTodos();
  })();

  // Referencias HTML
  const newDescriptionInput = document.querySelector(ElementId.NewTodoInput);
  const todoListUl = document.querySelector(ElementId.TodoList);
  const clearBtn = document.querySelector(ElementId.ClearCompleted);
  const filtersUl = document.querySelectorAll(ElementId.TodoFilters);

  newDescriptionInput.addEventListener("keyup", (event) => {
    if (event.keyCode !== 13) return;
    if (event.target.value.trim().length === 0) return;

    todoStore.addTodo(event.target.value);
    displayTodos();
    event.target.value = ""; // Limpiamos el input
  });

  todoListUl.addEventListener("click", (event) => {
    const element = event.target.closest("[data-id]"); // Busca el elemento mas cercano que tiene data-id
    const id = element.getAttribute("data-id"); // Obtenemos el id
    todoStore.toggleTodo(id);
    displayTodos();
  });

  todoListUl.addEventListener("click", (event) => {
    const isDestroy = event.target.className === "destroy";
    if (!isDestroy) return;

    const element = event.target.closest("[data-id]");
    const id = element.getAttribute("data-id");
    todoStore.deleteTodo(id);
    displayTodos();
  });

  clearBtn.addEventListener("click", () => {
    todoStore.deleteCompleted();
    displayTodos();
  });

  filtersUl.forEach((element) => {
    element.addEventListener("click", (element) => {
      // Eliminamos todos
      filtersUl.forEach((el) => {
        el.classList.remove("selected");
      });

      // Añadimos el que queremos
      element.target.classList.add("selected");

      if (element.target.text === "Todos") {
        todoStore.setFilter(Filters.All);
      } else if (element.target.text === "Pendientes") {
        todoStore.setFilter(Filters.Pending);
      } else if (element.target.text === "Completados") {
        todoStore.setFilter(Filters.Completed);
      }

      displayTodos();
    });
  });
};
