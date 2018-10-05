import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension';

import {reducer as formReducer} from 'redux-form'
import {reducer as appReducer} from "./reducer";

const reducer = combineReducers({
    app: appReducer,
    form: formReducer
});

export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));
