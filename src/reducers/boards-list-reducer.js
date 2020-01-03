import boardReducer from './board-reducer';

const initialBoardsListStore = {
    boards: [],
    lastBoardId: -1
};


const boardsListReducer = (boardsListStore = initialBoardsListStore, action) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            const newBoardId = boardsListStore.lastBoardId + 1;
            const {
                type,
                payload
            } = action;
            const newAction = {
                type,
                payload: {
                    ...payload,
                    id: newBoardId
                }
            };
            return {
                ...boardsListStore,
                lastBoardId: newBoardId,
                boards: [
                    ...boardsListStore.boards,
                    boardReducer(undefined, newAction)
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



