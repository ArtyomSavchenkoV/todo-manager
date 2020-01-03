const initialBoardStore = {
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
                name: payload.name
            }
        }

        default: {
            return boardStore;
        }
    }
};


export default boardReducer;
