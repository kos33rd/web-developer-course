import React from "react";
import ReactDOM from "react-dom";

const MyFirstComponent = function (props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <span>I'm just common HTML</span>
    </div>
  )
};

ReactDOM.render(
  <MyFirstComponent title="Hello from React!"/>,
  document.getElementById('app')
);