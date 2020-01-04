import appStateReducer from './app-state-reducer';
import countersReducer from './counters-reducer';
import boardsListReducer from './boards-list-reducer';


const initStore = {};

const reducer = (store = initStore, action) => {
    switch (action.type) {

        default: return {
            ...store,
            appState: appStateReducer(store.appState, action),
            boardsList: boardsListReducer(store.boardsList, action, {counters: store.counters}),
            counters: countersReducer(store.counters, action)
        };
    }
}


export default reducer;
