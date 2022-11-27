import {combineReducers, legacy_createStore as createStore, applyMiddleware} from 'redux'; 
import profileReducer from './profileReducer.js';
import chatsReducer from './chatsReducer.js';
import thunk from 'redux-thunk';
import { compose } from 'redux';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import newsReducer from './newsReducer.js';
import registerReducer from './registerReducer.js';
import hardSet from 'redux-persist/es/stateReconciler/hardSet';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let RootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer,
    newsPage: newsReducer,
    register: registerReducer,
});

const persistConfig = {
    key: 'root',
    storage,
    stateReconclier:hardSet
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const store = createStore(RootReducer, 
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)

window.store = store;

export default store;