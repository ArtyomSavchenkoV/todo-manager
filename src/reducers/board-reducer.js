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
            return {
                ...boardStore,
                todoLists: [
                    ...boardStore.todoLists,
                    todoListReducer(undefined, action, { counters })
                ]
            }
        }


        case 'REMOVE_LIST': {
            const {
                payload
            } = action;

            const {
                todoLists
            } = boardStore;

            const itemIndex = todoLists.findIndex(({ id }) => id === payload.listId);

            const newTodoLists = (itemIndex > -1 && itemIndex < todoLists.length) ? (
                [
                    ...todoLists.slice(0, itemIndex),
                    ...todoLists.slice(itemIndex + 1)
                ]
            ) : (
                [...todoLists]
            );

            return {
                ...boardStore,
                todoLists: newTodoLists
            }
        }


        default: {
            return boardStore;
        }
    }
};


export default boardReducer;
