const initialAppStateStore = {
    isDeveloping: process.env.NODE_ENV === 'development'
};


const appStateReducer = (appStateStore = initialAppStateStore, action) => {
    switch (action.type) {
        
        default: {
            return {
                ...appStateStore
            }
        }
    }
};


export default appStateReducer;
