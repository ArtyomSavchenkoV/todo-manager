const addNewList = (payload) => {
    const {
        boardId,
        name
    } = payload;
    return {
        type: 'ADD_NEW_LIST',
        payload: {
            boardId,
            name
        }
    };
};


const removeList = (payload) => {
    const {
        boardId,
        listId
    } = payload;
    return {
        type: 'REMOVE_LIST',
        payload: {
            boardId,
            listId
        }
    };
};


export {
    addNewList,
    removeList
};
