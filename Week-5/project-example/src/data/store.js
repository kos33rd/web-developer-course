
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as appReducer } from "./reducer";
import { reducer as formReducer } from 'redux-form'

const reducer = combineReducers({
  app: appReducer,
  form: formReducer
})

export const store = createStore(reducer, composeWithDevTools());
