import React from "react"
import Button from "@material-ui/core/Button/Button"
import {loadNews, selectArticle} from "../data/action-creators";

import {connect} from "react-redux";
import Search from "./search";

class News extends React.Component {

    onClick = () => {
        this.props.loadNews();
    };

    render() {
        return (
            <React.Fragment>
                <h2 />
                <Button onClick={this.onClick} variant="contained" color="primary">
                    Загрузить новости
                </Button>
                <br/>
                <Search />
                {this.props.newsIsLoading && <div>Подождите, идет загрузка</div>}
                {this.props.newsLoadingFailed && <div>Ой-ой :(</div>}
                <ul>
                    {this.props.news.map((doc) => (
                        <li key={doc.title}>
                            <p onClick={() => this.props.selectArticle(doc.title)}>{doc.title}</p>
                        </li>
                    ))}
                </ul>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    selectedArticle: state.app.article,
    news: state.app.news,
    newsIsLoading: state.app.newsIsLoading,
    newsLoadingFailed: state.app.newsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadNews: () => dispatch(loadNews())
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;
