import {TYPES} from "./action-types";
import axios from "axios";

export const selectArticle = (article) => {
    return {
        type: TYPES.SELECT_ARTICLE,
        article
    }
};

export const loadNews = () => (dispatch, getState) => {
    dispatch({type: TYPES.LOAD_NEWS_STARTED});

    const formData = getState().form.search.values;
    console.log(formData);
    const { page, articlesPerPage } = formData;

    axios.get(`https://meduza.io/api/v3/search?chrono=news&locale=ru&page=${page}&per_page=${articlesPerPage}`)
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
