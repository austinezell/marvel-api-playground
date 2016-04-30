"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Selector from "./components/Selector.jsx"

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Selector/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-node'))
