
import { createStore } from 'redux'

const reducer =(prevState, action) => {
    console.log('Got action: ', action);
    const newState = {...prevState};
    switch (action.type) {
        case 'SELECT_ARTICLE':
            return {...store, article: action.article}
    }

    return newState
};

export const store = createStore(reducer);
