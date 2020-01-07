const addNewCard = (payload) => {
    const {
        boardId,
        listId,

        name,
        description,
        state
    } = payload;
    
    return {
        type: 'ADD_NEW_CARD',
        payload: {
            boardId,
            listId,

            name,
            description,
            state,
            date: new Date().getTime()
        }
    };
};


const removeCard = (payload) => {
    const {
        boardId,
        listId,
        cardId
    } = payload;
    return {
        type: 'REMOVE_CARD',
        payload: {
            boardId,
            listId,
            cardId
        }
    };
};


export {
    addNewCard,
    removeCard
}
