const initialBoardsStore = {
    boards: []
};


const boardsStoreReducer = (boardsStore = initialBoardsStore, action) => {
    switch(action.type) {
    
        default: { 
            const { payload = {} } = action;
            const { boardIndex } = payload;
            if (boardIndex !== undefined && boardsStore[boardIndex] !== undefined) {
                //TODO: Make produce boards array
                const newBoards = [...boardsStore.boards]
                return {
                    ...boardsStore,
                    boards: newBoards
                };
            } else {
                return { 
                    ...boardsStore
                };
            }
        }
    }   
};


export default boardsStoreReducer;



