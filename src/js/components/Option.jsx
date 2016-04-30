import React from "react";


class Option extends React.Component{
  render(){
    return <option value={this.props.value}>{this.props.value}</option>
  }
}

export default Option
