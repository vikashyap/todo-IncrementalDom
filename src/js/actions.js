/**
 * Created by pgotthardt on 14/01/16.
 */
export function toggleTodoState(id) {
    return {
        type: 'TODO_TOGGLE_DONE',
        id
    };
}

export function addTodo(text) {
	debugger;
    return {
        type: 'ADD_TODO',
        text
    }
}
export function addFilter(text) {
    return {
        type: 'ADD_FILTER',
        text
    }
}
