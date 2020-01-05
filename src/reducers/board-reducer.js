import todoListReducer from './todo-list-reducer';

const initialBoardStore = {
    id: null,
    name: null,
    todoLists: []
};


const boardReducer = (boardStore = initialBoardStore, action, { counters }) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            const {
                payload
            } = action;
            return {
                ...boardStore,
                id: counters.boardId,
                name: payload.name
            }
        }


        case 'ADD_NEW_LIST': {
            const {
                payload
            } = action;
            return {
                ...boardStore,
                todoLists: [
                    ...boardStore.todoLists,
                    todoListReducer(undefined, action, { counters })
                ]
            }
        }


        default: {
            return boardStore;
        }
    }
};


export default boardReducer;
