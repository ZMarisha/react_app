import {combineReducers, legacy_createStore as createStore} from 'redux'; 
import profileReducer from './profileReducer.js';
import chatsReducer from './chatsReducer.js'



let reducers = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;