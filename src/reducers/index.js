import appStateReducer from './app-state-reducer';


const initStore = {};

const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            appState: appStateReducer(store.appState, action)
        };
    }
}


export default reducer;
