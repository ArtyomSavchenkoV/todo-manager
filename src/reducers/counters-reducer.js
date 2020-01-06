const initialCountersStore = {
    boardId: 0,
    listId: 0,
    cardId: 0
};


const countersReducer = (countersStore = initialCountersStore, action) => {
    switch(action.type) {
        case 'ADD_NEW_BOARD': {
            return {
                ...countersStore,
                boardId: countersStore.boardId + 1
            }
        }


        case 'ADD_NEW_LIST': {
            return {
                ...countersStore,
                listId: countersStore.listId + 1
            }
        }


        case 'ADD_NEW_CARD': {
            return {
                ...countersStore,
                cardId: countersStore.cardId + 1
            }
        }


        default: {
            return countersStore;
        }
    }
};


export default countersReducer;
