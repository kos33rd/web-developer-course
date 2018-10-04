import {TYPES} from "./action-types";

export const reducer = (prevState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_NEWS:
            return {...newState, news: [ /* ??? ASYNC REQUEST HERE ??? */]}
    }

    return newState
};
