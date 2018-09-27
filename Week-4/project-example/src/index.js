import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import {News} from "./news/news"
import {About} from "./about/about"

const App = () => (
  <Router>
    <div>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/news">News</Link></li>
      </ul>

      <hr/>

      <Route path="/about" component={About}/>
      <Route exact path="/news" component={News}/>
    </div>
  </Router>
)


ReactDOM.render(
  <App/>,
  document.getElementById('app')
);
