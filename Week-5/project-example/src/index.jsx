import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {store} from "./data/store";

import { Provider } from "react-redux";
import {Layout} from "./layout";

const App = () => (
    <Provider store={store} >
      <Router>
        <Layout/>
      </Router>
    </Provider>
);

ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
