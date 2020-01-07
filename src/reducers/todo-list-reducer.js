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
            return {
                ...todoListStore,
                todoCards: [
                    ...todoListStore.todoCards,
                    todoCardReducer(undefined, action, { counters })
                ]
            }
        }


        case 'REMOVE_CARD': {
            const {
                payload
            } = action;

            const {
                todoCards
            } = todoListStore;

            const itemIndex = todoCards.findIndex(({ id }) => id === payload.cardId);

            const newTodoCards = (itemIndex > -1 && itemIndex < todoCards.length) ? (
                [
                    ...todoCards.slice(0, itemIndex),
                    ...todoCards.slice(itemIndex + 1)
                ]
            ) : (
                [...todoCards]
            );

            return {
                ...todoListStore,
                todoCards: newTodoCards
            }
        }


        default: {
            return todoListStore;
        }
    }
};


export default todoListReducer;
