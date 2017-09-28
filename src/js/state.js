import {createStore} from './lib/state';

const initialState = {
    todos: [
        {
            id: 0,
            text: 'Take a look at the application',
            done: true
        },
        {
            id: 1,
            text: 'Add ability to filter todos',
            done: false
        },
        {
            id: 2,
            text: 'Filter todos by status',
            done: false
        },
        {
            id: 3,
            text: 'Filter todos by text',
            done: false
        }
    ]

};

function todoChangeHandler(state, change) {
    switch(change.type) {
        case 'ADD_TODO':
            state.todos.push({
                id: state.todos.length,
                text: change.text,
                done: false
            });
            sessionStorage.setItem('todos', JSON.stringify(state.todos));
            break;
        case 'TODO_TOGGLE_DONE':
            for(let todo of state.todos) {
                if(todo.id === change.id) {
                    todo.done = !todo.done;
                    break;
                }
            }
            break;
        case 'ADD_FILTER':
              const tempState = {};
              Object.assign(tempState,initialState);
              tempState.CheckedFilter = change.text;              
              if(change.text !=='showAll'){
                const changeFilter = change.text ==='showOpen'? false : true;
                  tempState.todos = tempState.todos.filter(item => {
                    return item.done === changeFilter;
                 });
              }
              return tempState;
            break;    
    }
}

export const todos = createStore(todoChangeHandler, initialState);
