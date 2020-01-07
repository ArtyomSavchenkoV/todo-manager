const initialTodoCardStore = {
    id: null,
    name: null,
    description: null,
    state: null,
    date: null
};


const todoCardReducer = (todoCardStore = initialTodoCardStore, action, { counters }) => {
    switch(action.type) {
        case 'ADD_NEW_CARD': {
            const {
                payload
            } = action;
            return {
                ...todoCardStore,
                id: counters.cardId,
                name: payload.name,
                description: payload.description,
                state: payload.state,
                date: payload.date
            };
        }

        
        default: {
            return todoCardStore
        }
    }
};


export default todoCardReducer;
