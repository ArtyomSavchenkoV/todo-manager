const setModalWindow = (payload) => {
    const {
        component,
        onClickSpaceArea
    } = payload;
    return {
        type: 'SET_MODAL_WINDOW', 
        payload: {
            component,
            onClickSpaceArea
        }   
    }
};


const removeModalWindow = () => {
    return {
        type: 'REMOVE_MODAL_WINDOW'   
    }
};


export {
    setModalWindow,
    removeModalWindow
}
