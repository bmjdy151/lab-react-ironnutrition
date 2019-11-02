import React, { Component } from "react";

export default class Search extends Component {

constructor() {
  super();
  this.state = {
    name: "",
    calories: 0,
    image: "",
    quantity: 0
  };
}

onChangeHandler = e => {
  const { name, value } = e.target;
  this.setState({ [name]: value });
};

submitHandler = e => {
  e.preventDefault();
  this.props.toggleItem();
  this.props.addFood(this.state);
};


render(){
  return(
    <div>
      <form onSubmit={this.submitHandler}>
        <input 
          name="name"
          type="text" 
          value={this.state.name} 
          className="input"
          onChange={e => {
            this.onChangeHandler(e);
          }}
          placeholder="food name"
          />
        <input 
          name="calories"
          type="text" 
          value={this.state.calories} 
          placeholder="calorie"
          className="input"
          onChange={e => {
            this.onChangeHandler(e);
          }}
          />
        <input 
          name="image"
          type="text" 
          value={this.state.image} 
          placeholder="image url"
          className="input"
          onChange={e => {
            this.onChangeHandler(e);
          }}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
  }
}