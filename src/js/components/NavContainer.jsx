import React from "react";
import NavBtn from "./NavBtn.jsx";

class NavContainer extends React.Component {
  render(){
    let buttons = [];
    for(let i=1; i<=10;i++){
      buttons.push(<NavBtn key={i} num={i}/>)
    }
    return (
      <div className="nav-container">
        {buttons}
      </div>
    )
  }
}

export default NavContainer;
