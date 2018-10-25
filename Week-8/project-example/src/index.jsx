import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Provider} from "react-redux";

import {store} from "./data/store";
import {Layout} from "./layout";

const App = () => (
    <Provider store={store}>
            <Router>
                <Route path="/" component={Layout} />
            </Router>
    </Provider>
);

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
