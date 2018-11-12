import {TYPES} from "./action-types";

const initialState = {
    article: void 0,
    news: [],
    newsIsLoading: false,
    newsLoadingFailed: false
};

export const reducer = (prevState = initialState, action) => {
    const newState = {...prevState};
    switch (action.type) {
        case TYPES.SELECT_ARTICLE:
            return {...newState, article: action.article};

        case TYPES.LOAD_NEWS_STARTED:
            return {...newState,
                newsIsLoading: true,
                newsLoadingFailed: false
            };

        case TYPES.LOAD_NEWS:
            return {...newState,
                news: prevState.news.concat(Object.values(action.data.documents)),
                newsIsLoading: false,
                newsLoadingFailed: false,
                page: action.data.page
            };

        case TYPES.LOAD_NEWS_FAILED:
            return {...newState,
                newsIsLoading: false,
                newsLoadingFailed: true
            };
    }

    return newState
};
