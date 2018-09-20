import React from "react";
import ReactDOM from "react-dom";


const MyFirstComponent = () => {
  return (
    <div>
      <h1>Hello from React!</h1>
      <span>I'm just common HTML</span>
    </div>
  )
};

ReactDOM.render(<MyFirstComponent/>, document.getElementById('app'));
