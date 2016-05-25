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
    let options = [10,25,50,100].map(num=>{
      return <Option key={num} value={num}/>
    })
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
