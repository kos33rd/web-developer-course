import {TYPES} from "./action-types";
import axios from "axios";

export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = (dispatch) => {

    dispatch({type: TYPES.LOAD_NEWS_STARTED});

    axios.get('https://meduza.io/api/v3/search?chrono=news&locale=ru&page=0&per_page=24')
        .then((response) => {

            // Dispatching an action only when request complete
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: response.data
            })
        })
        .catch((e) => {
            dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
        });
};
