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


        case 'RM_BOARD': {
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



