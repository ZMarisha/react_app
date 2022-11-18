import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'; 
import profileReducer from './profileReducer.js';
import chatsReducer from './chatsReducer.js';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import newsReducer from './newsReducer.js';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let RootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    newsPage: newsReducer,
});

const persistConfig = {
    key: 'root',
    storage,
};
const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(persistedReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)

window.store = store;

export default store;