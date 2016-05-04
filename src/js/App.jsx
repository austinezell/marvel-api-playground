"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Selector from "./components/Selector.jsx";
import NavContainer from "./components/NavContainer.jsx";

// import {get} from "jquery";
//
// get("/api/")
// .done(data=>{
//   console.log(data);
// })

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <Selector/>
        <NavContainer/>
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('react-node'))
