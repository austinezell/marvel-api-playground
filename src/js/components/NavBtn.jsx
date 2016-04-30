import React from "react";


class NavBtn extends React.Component {
  render(){
    return (
      <button className="pagination">{this.props.num}</button>
    )
  }
}

export default NavBtn;
