import { Todo } from "../todos/models/todo.model";

export const Filters = {
  All: "all",
  Completed: "Completed",
  Pending: "Pending",
};

const state = {
  todos: [],
  filter: Filters.All,
};

const initStore = () => {
  loadStore();
  console.log("InitiStore 🥑");
};

const loadStore = () => {
  const stateStorage = localStorage.getItem("todos");

  if (!stateStorage) return;

  const { todos = [], filter = Filters.All } = JSON.parse(stateStorage);
  state.todos = todos;
  state.filter = filter;
};

const saveStateToLocalStorage = (state) => {
  localStorage.setItem("todos", JSON.stringify(state));
};

/**
 *
 * @param {Filters} newFilter
 */
const getTodos = (filter = Filters.All) => {
  if (filter == Filters.All) {
    return [...state.todos];
  } else if (filter == Filters.Completed) {
    return state.todos.filter((todo) => todo.done === true);
  } else if (filter == Filters.Pending) {
    return state.todos.filter((todo) => todo.done === false);
  } else {
    throw new Error(`No existe este filtro`);
  }
};

/**
 *
 * @param {String} desc
 */

const addTodo = (desc) => {
  if (!desc) throw new Error("La descripción es necesaria");

  // Si existe descripción añadimos una nueva instancia de todo al array
  state.todos.push(new Todo(desc));
  saveStateToLocalStorage(state);
};

/**
 *
 * @param {String} todoId
 */
const toggleTodo = (todoId) => {
  state.todos = state.todos.map((todo) => {
    if (todo.id === todoId) {
      todo.done = !todo.done;
    }

    return todo;
  });

  saveStateToLocalStorage(state);
};

/**
 *
 * @param {String} todoId
 */
const deleteTodo = (todoId) => {
  // Nos quedamos con los todos que no tengan ese id
  state.todos = state.todos.filter((todo) => todo.id !== todoId);
  saveStateToLocalStorage(state);
};

const deleteCompleted = () => {
  state.todos = state.todos.filter((todo) => todo.done !== true);
  saveStateToLocalStorage(state);
};

/**
 *
 * @param {Filters} newFilter
 */
const setFilter = (newFilter = Filters.All) => {
  state.filter = newFilter;
  saveStateToLocalStorage(state);
};

const getCurrentFilter = () => {
  return state.filter;
};

export default {
  addTodo,
  deleteCompleted,
  deleteTodo,
  getCurrentFilter,
  getTodos,
  initStore,
  loadStore,
  setFilter,
  toggleTodo,
};
