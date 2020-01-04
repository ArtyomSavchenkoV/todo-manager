import boardReducer from './board-reducer';

const initialBoardsListStore = {
    boards: []
};


const boardsListReducer = (boardsListStore = initialBoardsListStore, action, { counters }) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            return {
                ...boardsListStore,
                boards: [
                    ...boardsListStore.boards,
                    boardReducer(undefined, action, { counters })
                ]
            }
        }


        case 'REMOVE_BOARD': {
            const {
                payload
            } = action;

            const {
                boards
            } = boardsListStore;

            const itemIndex = boards.findIndex(({ id }) => id === payload);

            const newBoards = (itemIndex > -1 && itemIndex < boards.length) ? (
                [
                    ...boards.slice(0, itemIndex),
                    ...boards.slice(itemIndex + 1)
                ]
            ) : (
                [...boards]
            );

            return {
                ...boardsListStore,
                boards: newBoards
            }
        }

    
        default: { 
            const { payload = {} } = action;
            const { boardIndex } = payload;
            if (boardIndex !== undefined && boardsListStore[boardIndex] !== undefined) {
                //TODO: Make produce boards array
                const newBoards = [...boardsListStore.boards]
                return {
                    ...boardsListStore,
                    boards: newBoards
                };
            } else {
                return boardsListStore;
            }
        }
    }   
};


export default boardsListReducer;



