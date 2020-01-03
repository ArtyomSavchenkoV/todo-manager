const initialBoardStore = {
    id: null,
    name: null,
    cardList: []
};


const boardReducer = (boardStore = initialBoardStore, action) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            const {
                payload
            } = action;
            return {
                ...boardStore,
                id: payload.id,
                name: payload.name
            }
        }

        default: {
            return boardStore;
        }
    }
};


export default boardReducer;
