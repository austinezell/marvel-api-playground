import React from "react";
import Card from "./Card.jsx";
import {get} from "jquery";
let characters = [];

class CardContainer extends React.Component {
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
  getCharacters(){
    let content = [];
    const characters = this.state.characters
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
        {content}
      </div>
    )
  }
}

export default CardContainer;
