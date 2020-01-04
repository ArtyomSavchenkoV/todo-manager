const initialAppStateStore = {
    isDeveloping: process.env.NODE_ENV === 'development',
    modalWindow: null
};


const appStateReducer = (appStateStore = initialAppStateStore, action) => {
    switch (action.type) {
        case 'SET_MODAL_WINDOW': {
            const {
                component,
                onClickSpaceArea
            } = action.payload;

            return {
                ...appStateStore,
                modalWindow: {
                    component,
                    onClickSpaceArea
                }
            };
        }


        case 'REMOVE_MODAL_WINDOW': {
            return {
                ...appStateStore,
                modalWindow: null
            };
        }

        
        default: {
            return {
                ...appStateStore
            };
        }
    }
};


export default appStateReducer;
