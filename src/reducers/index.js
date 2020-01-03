import appStateReducer from './app-state-reducer';
import boardsListReducer from './boards-list-reducer';


const initStore = {};

const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            appState: appStateReducer(store.appState, action),
            boardsList: boardsListReducer(store.boardsList, action)
        };
    }
}


export default reducer;
