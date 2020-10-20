import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";

import { authReducer } from '../reducers/authReducer';
import { notesReducers } from '../reducers/notesReducers';
import { uiReducer } from '../reducers/uiReducer';

// Es para admitir la configuracion del midellware y la configuracio de redux en las herramientas de 
// desarrollo
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const reducers = combineReducers({
    auth: authReducer,
    ui: uiReducer,
    notes: notesReducers
});


//createStore solo recibe un reducer, si tenemos muchos hay que
//combinarlos con el el combineReducers
export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);