import { isEnabled } from './lib/feature';
import ID from 'incremental-dom'

export function render(el, state) {
    ID.patch(document.body, isEnabled('renderBottom') ? renderBottomTodo : rendertopTodo);
    renderApp(state);         
}

function renderBottomTodo() {
    ID.elementOpen('div', null, ['id', 'app'], null);
    ID.elementOpen('div', null, ['class', 'header'], null);
    ID.text('todos')
    ID.elementClose('div');
    (isEnabled('filter') && isEnabled('renderBottom') && isEnabled('filterTop')) &&
    ID.elementOpen('div', null, ['id', 'filter'], null);
    (isEnabled('filter') && isEnabled('renderBottom') && isEnabled('filterTop')) &&
    ID.elementClose('div');
    ID.elementOpen('ul', null, ['id', 'todo', 'class', 'todo-list'], null);
    ID.elementClose('ul');
    ID.elementOpen('div', null, ['id', 'inputContainer'], null);
    ID.elementClose('div');
    isEnabled('filter') && !isEnabled('filterTop') &&
        ID.elementOpen('div', null, ['id', 'filter'], null);
    isEnabled('filter') && !isEnabled('filterTop') && ID.elementClose('div');
    ID.elementClose('div');
}

function rendertopTodo() {
    ID.elementOpen('div', null, ['id', 'app'], null);
    ID.elementOpen('div', null, ['class', 'header'], null);
    ID.text('todos')
    ID.elementClose('div');
    ID.elementOpen('div', null, ['id', 'inputContainer'], null);
    ID.elementClose('div');
    ID.elementOpen('ul', null, ['id', 'todo', 'class', 'todo-list'], null);
    ID.elementClose('ul');
    isEnabled('filter') && ID.elementOpen('div', null, ['id', 'filter'], null);
    isEnabled('filter') && ID.elementClose('div');
    ID.elementClose('div');
}

function renderApp(state) {
    ID.patch(document.getElementById('inputContainer'), renderInput, state)
    ID.patch(document.getElementById('todo'), renderTodoItem, state)
    isEnabled('filter') && ID.patch(document.getElementById('filter'), renderFilter, state)
}

function renderInput(state) {
    ID.elementOpen('div', null, ['class', 'todo__input'], null);
    ID.elementVoid('input', '', ['type', 'text', 'id', 'todoInput', 'placeholder', 'Please Add']);
    ID.elementOpen('button', null, ['id', 'addTodo', 'class', 'addButton'], null);
    ID.text('Add')
    ID.elementClose('button');
    ID.elementClose('div');
}

function renderTodoItem(state) {
    state.todos.forEach(function(item) {
        const todoClass = `todo__item todo__item--${item.done ? 'done' : 'open'}`;
        const checked = item.done ? 'checked' : ''
        ID.elementOpen('li', item.id, ['class', todoClass], null);
        ID.elementVoid('input', '', ['type', 'checkbox', 'class', 'js_toggle_todo',
            'data-id', item.id, item.done ? 'checked' : 'notchecked', item.done
        ]);
        ID.elementOpen('label');
        ID.text(item.text);
        ID.elementClose('label');
        ID.elementClose('li');
    });
}

function renderFilter(state) {
    const checkFilter = !state.CheckedFilter ? 'showAll' : state.CheckedFilter;
    const radioData = [
        { id: "showAll", text: "Show All" },
        { id: "showOpen", text: "Show Open" },
        { id: "showClosed", text: "Show Closed" },
    ];
    ID.elementOpen('ul', null, ['class', 'radio'], null);
    radioData.forEach(function(item) {
        ID.elementOpen('li');
        ID.elementVoid('input', '', ['type', 'radio', 'name', 'show',
            'class', 'filter', 'id', item.id, 'value', item.id,
            checkFilter === item.id ? 'checked' : 'notchecked', ''
        ]);
        ID.elementOpen('label', null, ['for', item.id], null);
        ID.text(item.text);
        ID.elementClose('label');
        ID.elementClose('li');
    });
    ID.elementClose('ul');
}