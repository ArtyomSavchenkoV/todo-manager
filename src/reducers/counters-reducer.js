const initialCountersStore = {
    boardId: 0
};


const countersReducer = (countersStore = initialCountersStore, action) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            return {
                ...countersStore,
                boardId: countersStore.boardId + 1
            }
        }


        default: {
            return countersStore;
        }
    }
};


export default countersReducer;
