import React from "react";
import NavBtn from "./NavBtn.jsx";
import ReactCSSTransitionGroup  from "react-addons-css-transition-group";

class NavContainer extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      page: 1,
      min: true,
      backwards: false,
      buttons: []
    };
    this.getPages.bind(this);
    this.getPages();
  }
  nextPage(){
    this.setState({
      page: ++this.state.page,
      min: false,
      backwards: false
    })
    this.getPages();
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
      min: this.state.page === 1 ? true : false,
      backwards: true
    })
    if(this.state.page === 1) this.state.min = true;
    this.getPages();
  }
  render(){
    return (
      <div className="nav-container">
        <button disabled={this.state.min} onClick={this.prevPage.bind(this)} className="right"></button>
        <div className="expand-preventer">
          <ReactCSSTransitionGroup className={`${this.state.backwards ? "backwards" : "forwards"} shift-container`} transitionName="shift" transitionEnterTimeout={300} transitionLeaveTimeout={300}>
            {this.state.buttons}
          </ReactCSSTransitionGroup>
        </div>
        <button className="left" onClick={this.nextPage.bind(this)}></button>
      </div>
    )
  }
}

export default NavContainer;
