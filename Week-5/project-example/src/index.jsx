import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar';

import {News} from "./news/news"
import {About} from "./about/about"
import {store} from "./data/store";

import {Provider} from "react-redux";
import ConnectedNews from "./news/news";
import {Layout} from "./layout";

const App = () => (
    <Provider store={store}>
            <Router>
                <Route path="/" component={Layout} />
            </Router>
    </Provider>
)

const handleClick = (data) => {
    console.log(data)
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
