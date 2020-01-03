import appStateReducer from './app-state-reducer';
import boardsStoreReducer from './boards-store-reducer';


const initStore = {};

const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            appState: appStateReducer(store.appState, action),
            boardsStore: boardsStoreReducer(store.boardsStore, action)
        };
    }
}


export default reducer;
