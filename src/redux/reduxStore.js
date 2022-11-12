import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import profileReducer from './profileReducer.js';



let reducers = combineReducers({
    profileReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;