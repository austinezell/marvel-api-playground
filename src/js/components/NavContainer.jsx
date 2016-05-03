import React from "react";
import NavBtn from "./NavBtn.jsx";

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      min: true,
      buttons: []
    };
    this.getPages.bind(this);
  }
  nextPage(){
    this.setState({
      page: ++this.state.page,
      min: false
    })
    this.getPages()
  }
  getPages(){
    let buttons = [];
    for(let i= 1+ ((this.state.page -1) *10); i<=this.state.page*10;i++){
      buttons.push(<NavBtn key={i} num={i}/>)
    }
    this.state.buttons = buttons;
  }
  prevPage(){
    this.setState({
      page: --this.state.page,
      min: this.state.page === 1 ? true : false
    })
    if(this.state.page === 1) this.state.min = true;
    this.getPages();
  }
  render(){
    this.getPages();
    return (
      <div className="nav-container">
        <button disabled={this.state.min} onClick={this.prevPage.bind(this)} className="right"></button>
        {this.state.buttons}
        <button className="left" onClick={this.nextPage.bind(this)}></button>
      </div>
    )
  }
}

export default NavContainer;
