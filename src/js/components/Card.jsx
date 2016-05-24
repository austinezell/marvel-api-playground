import React from "react";
import {get} from "jquery";

class Card extends React.Component {
  render(){
    const char = this.props.char;
    // const br = <br/>
    let content = char.name.split("(").map((word, i)=> {
      return(
        <span className={i===0 ? "main-title": "subtitle"} key={i}>
          {word.includes(")") ? word.slice(0, word.length -1): word }
          <br/>
        </span>
      )
    })
    return (
      <div className="card" style={{backgroundImage: `url(${char.thumbnail.path}.${char.thumbnail.extension})`}}>
        <h2 className="name">
          {content}
        </h2>
      </div>
    )
  }
}

export default Card;
