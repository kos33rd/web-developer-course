import {TYPES} from "./action-types";
import axios from "axios";


export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = (dispatch) => {
    dispatch({
        type: TYPES.LOAD_NEWS_STARTED
    });
    axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
        .then((response) => {
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: Object.values(response.data.documents)
            })
        })
        .catch((e) => {
            dispatch({
                type: TYPES.LOAD_NEWS_FAILED
            });
        });
};
