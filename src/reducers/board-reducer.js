const initialBoardStore = {
    id: null,
    name: null,
    cardList: []
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

        default: {
            return boardStore;
        }
    }
};


export default boardReducer;
