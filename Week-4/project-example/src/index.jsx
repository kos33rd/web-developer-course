import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {News} from "./news/news"
import {About} from "./about/about"
import {store} from "./store";

import { Provider } from "react-redux";
import ConnectedNews from "./news/news";

const App = () => (
    <Provider store={store} >
      <Router>
        <div>
          <ul>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>

          <hr/>

          <Route path="/about" component={About}/>
          <Route exact path="/news" component={ConnectedNews}/>
        </div>
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
