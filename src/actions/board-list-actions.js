const addNewBoard = (payload) => {
    return {
        type: 'ADD_NEW_BOARD',
        payload
    };
};


const removeBoard = (boardId) => {
    return {
        type: 'REMOVE_BOARD',
        payload: boardId
    };
};


export {
    addNewBoard,
    removeBoard
};
