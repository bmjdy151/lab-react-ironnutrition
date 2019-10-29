import React, { Component } from "react";

export default class Search extends Component {

handleChange = (e)  => {
  this.props.filterList(e.target.value);
  return;
}

render(){
  console.log("props on Search",this.props);
  console.log("foods on Search",this.props.foods);
  const firstList = this.props.foods;
  return(
    <div>
      <input type="text" className="input" onChange={this.handleChange} placeholder="Search..." />
    </div>
  );
  }
}