import boardReducer from './board-reducer';

const initialBoardsListStore = {
    boards: []
};


const boardsListReducer = (boardsListStore = initialBoardsListStore, action) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            return {
                ...boardsListStore,
                boards: [
                    ...boardsListStore.boards,
                    boardReducer(undefined, action)
                ]
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



