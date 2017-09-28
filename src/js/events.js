import { todos } from './state';
import { listen } from './lib/events';
import { addTodo, toggleTodoState, addFilter } from './actions';

export function registerEventHandlers() {
    listen('click', '#addTodo', event => {
        const todoInput = document.getElementById('todoInput');
        if (todoInput.value) {
            todos.dispatch(addTodo(todoInput.value));
        }
        event.stopPropagation();
    });

    listen('change', '.filter', event => {
        const value = event.target.getAttribute('value');
        todos.dispatch(addFilter(value));
    });

    listen('click', '.js_toggle_todo', event => {
        const id = Number.parseInt(event.target.getAttribute('data-id'), 10);
        todos.dispatch(toggleTodoState(id));
    });
    listen("keyup", '#todoInput', event => {
        event.preventDefault();
        if (event.keyCode == 13) {
            document.getElementById("addTodo").click();
        }
        document.getElementById("todoInput").focus();
    });
}