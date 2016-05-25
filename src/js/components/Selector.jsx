import React from "react";

class Selector extends React.Component{
  newSelect() {
    this.props.getNewSelection(this.refs.name.value, this.refs.amount.value);
  }
  render(){
    return (
      <div className="select-container">
        <input placeholder="Search by Name" ref="name"/>
        <label>Results per Page</label>
        <select ref="amount">
          {[20,50,100].map(num=><option key={num} value={num}>{num}</option>)}
        </select>
        <button onClick={this.newSelect.bind(this)} className="button">Get Selection</button>
      </div>
    )
  }
}


export default Selector;
