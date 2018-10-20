import React from "react"
import Button from "@material-ui/core/Button/Button"
import {loadNews, selectArticle} from "../data/action-creators";

import {connect} from "react-redux";
import { UprgadedSearchBar } from './search-bar'

const News = (props) => (
    <React.Fragment>
        <h3>{props.selectedArticle}</h3>
        <UprgadedSearchBar />
        <Button onClick={props.loadNews} variant="contained" color="primary">
            Загрузить новости
        </Button>
        {props.isLoading && <div>Подождите, идет загрузка</div>}
        {props.isFailed && <div>Ой-ой :(</div>}
        <ul>
            {props.news.map((doc) => (
                <li key={doc.title}>
                    <p onClick={() => props.selectArticle(doc.title)}>{doc.title}</p>
                </li>
            ))}
        </ul>
    </React.Fragment>
);

const mapStateToProps = (state) => ({
    selectedArticle: state.app.article,
    news: state.app.news,
    isLoading: state.app.newsIsLoading,
    isFailed: state.app.newsLoadFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadNews: () => loadNews(dispatch)
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;
