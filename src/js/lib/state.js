export function createStore(reducer, initial = {}) {  
    const listeners = [];
    let state = initial;
    if(sessionStorage.todos){ 
        state.todos = JSON.parse(sessionStorage.todos); 
    }
    return {
        dispatch(change) {
            state = reducer(state, change) || state;
            for(let listener of listeners) {
                listener(state);
            }
        },

        getState() {
            return state;
        },

        subscribe(listener) {
            listeners.push(listener);
        }
    };
}
