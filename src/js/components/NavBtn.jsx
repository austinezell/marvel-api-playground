import React from "react";


class NavBtn extends React.Component {
  render(){
    return (
      <button onClick={this.pageChange.bind(this)} className="pagination">{this.props.num}</button>
    )
  }
}

export default NavBtn;
