import {TYPES} from "./action-types";


export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = () => {
    return {
        type: TYPES.LOAD_NEWS
    }
};
