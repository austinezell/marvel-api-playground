"use strict";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"
import Selector from "./components/Selector.jsx";
import NavContainer from "./components/NavContainer.jsx";
import {get} from "jquery";
import CardContainer from "./components/CardContainer.jsx";

// import {get} from "jquery";
//
// get("/api/")
// .done(data=>{
//   console.log(data);
// })

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      characters: []
    }
    get("/api/test")
    .then(res=>this.setState({
      characters: res.data.results
    }))
  }

  render() {
    return (
      <div className="container">
        <Selector/>
        <CardContainer characters={this.state.characters}/>
        <NavContainer/>
      </div>
    )
  }
}

render(
  <Provider>
    <App/>
  </Provider>,
  document.getElementById('react-node')
)
