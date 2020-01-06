import todoCardReducer from './todo-card-reducer';


const initialTodoListStore = {
    id: null,
    name: null,
    todoCards: []
};


const todoListReducer = (todoListStore = initialTodoListStore, action, { counters }) => {
    switch(action.type) {
        case 'ADD_NEW_LIST': {
            const {
                payload
            } = action;
            return {
                ...todoListStore,
                id: counters.listId,
                name: payload.name
            }
        }


        case 'ADD_NEW_CARD': {
            const {
                payload
            } = action;
            return {
                ...todoListStore,
                todoCards: [
                    ...todoListStore.todoCards,
                    todoCardReducer(undefined, action, { counters })
                ]
            }
        }


        default: {
            return todoListStore;
        }
    }
};


export default todoListReducer;
