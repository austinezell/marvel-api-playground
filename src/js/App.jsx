"use strict";
import React from "react";
import {render} from "react-dom";
import {Provider} from "react-redux"
import Selector from "./components/Selector.jsx";
import NavContainer from "./components/NavContainer.jsx";
import { connect } from 'react-redux';
import CardContainer from "./components/CardContainer.jsx";
import {fetchCharacters} from "./actions/index"


class App extends React.Component {
  constructor(props){
    super(props);
  }
  componentDidMount(){
    const {dispatch} = this.props;
    dispatch(fetchCharacters());
  }
  getNewSelection(){

  }
  render() {
    return (
      <div className="container">
        <Selector/>
        <CardContainer characters={this.props.characters}/>
        <NavContainer/>
      </div>
    )
  }
}

import config from "./store/store.js"
const store = config();

function mapStateToProps(state){
  return state;
}

App = connect(mapStateToProps)(App)

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('react-node')
)
