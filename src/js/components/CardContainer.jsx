import React from "react";
import Card from "./Card.jsx";
import {get} from "jquery";
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class CardContainer extends React.Component {
  getCharacters(){
    let content = [];
    const characters = this.props.characters
    for (let i = 0; i < characters.length; i++){
      content.push(
        <Card char={characters[i]} key={i}/>
      )
    }
    return content;
  }
  render(){
    let content = this.getCharacters()
    return (
      <div className="card-container">
        <ReactCSSTransitionGroup className="fade-container" transitionName="fade" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
          {content}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

export default CardContainer;
