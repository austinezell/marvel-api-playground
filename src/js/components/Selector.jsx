import React from "react";
import Option from "./Option.jsx";

class Selector extends React.Component{

  constructor(props){
    super(props);
  }

  newSelect() {
    // console.log(this.refs.mySelect.value, this.refs.nameValue.value);
    
  }

  render(){
    let options = [];
    for(let i=1;i <= 8; i++){
      options.push(<Option key={i} value={i}/>)
    }
    return (
      <div className="select-container">
        <input placeholder="Search by Name" ref="nameValue"/>
        <label>Results per Page</label>
        <select ref="mySelect">
          {options}
        </select>
        <button onClick={this.newSelect.bind(this)} className="button">Get Selection</button>
      </div>
    )
  }
}


export default Selector;
