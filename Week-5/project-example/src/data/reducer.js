import {TYPES} from "./action-types";

const initState = {
    news: []
};

export const reducer =(prevState = initState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_NEWS:
            return {
                ...newState,
                news: action.data,
                newsIsLoading: false
            };

        case TYPES.LOAD_NEWS_STARTED:
            return {...newState,
                newsIsLoading: true,
                newsLoadFailed: false
            };

        case TYPES.LOAD_NEWS_FAILED:
            return {
                ...newState,
                newsLoadFailed: true,
                newsIsLoading: false
            };
    }

    return newState
};
