import React from "react"
import {Article} from "./article"
import axios from "axios"
import Button from "@material-ui/core/Button/Button"
import {loadNews, selectArticle} from "../data/action-creators";

import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField/TextField";

class News extends React.Component {

    onClick = () => {
        this.props.loadNews();
    };

    state = {
        page: 0,
        articlesPerPage: 24
    };

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        });
    };

    render() {
        return (
            <React.Fragment>
                <h2 />
                <Button onClick={this.onClick} variant="contained" color="primary">
                    Загрузить новости
                </Button>
                <br/>
                <TextField
                    label="Страница"
                    value={this.state.page}
                    onChange={this.handleChange('page')}
                    margin="normal"
                />
                <TextField
                    label="Новостей на странице"
                    value={this.state.articlesPerPage}
                    onChange={this.handleChange('articlesPerPage')}
                    margin="normal"
                />
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
    selectedArticle: state.article,
    news: state.news,
    newsIsLoading: state.newsIsLoading,
    newsLoadingFailed: state.newsLoadingFailed
});

const mapDispatchToProps = (dispatch) => ({
    selectArticle: (articleText) => dispatch(selectArticle(articleText)),
    loadNews: () => loadNews(dispatch)
});

const ConnectedNews = connect(mapStateToProps, mapDispatchToProps)(News);

export default ConnectedNews;
