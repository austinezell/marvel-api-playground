import React from "react";
import {get} from "jquery";

class Card extends React.Component {
  render(){
    return (
      <div className="card">
        <h2 className="name">
          {this.props.char.name}
        </h2>
      </div>
    )
  }
}

export default Card;
