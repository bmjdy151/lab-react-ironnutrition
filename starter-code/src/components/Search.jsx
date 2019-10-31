import React, { Component } from "react";

export default class Search extends Component {

handleChange = (e)  => { //function on this component
  this.props.filterList(e.target.value); //trigger function on App.js
  return;
}

render(){
  return(
    <div>
      <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
    </div>
  );
  }
}