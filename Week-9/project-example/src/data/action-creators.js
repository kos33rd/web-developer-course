import {TYPES} from "./action-types";
import axios from "axios";


export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = (page = 0) => (dispatch, getState) => {
    dispatch({type: TYPES.LOAD_NEWS_STARTED});
    console.log('Loading page', page);
    axios.get(`${BACKEND_URL}/api/v3/search?chrono=shapito&locale=ru&page=${page}&per_page=24`)
        .then((response) => {

            // Dispatching an action only when request complete
            dispatch({
                type: TYPES.LOAD_NEWS,
                data: response.data,
                page
            });

            // Load next page on request completion
            if (page < 10) {
                setTimeout(() => loadNews(page + 1)(dispatch, getState), 2000)
            }

        })
        .catch((e) => {
            dispatch({type: TYPES.LOAD_NEWS_FAILED, error: e});
        });
};
