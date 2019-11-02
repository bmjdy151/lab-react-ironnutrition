import React, { Component } from "react";

export default class FoodBox extends Component {

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
    this.setState({ [name]: value});
  };
  
  onClickTodaysFood= (food) => {
    const{name,image,calories} = food;
    this.props.showItem(food,this.state.quantity);
  };


render(){
  const{name,image,calories,quantity} = this.props.food;
  return(
    <div className="box">
      <article className="media">
        <div className="media-left">
          <figure className="image is-64x64">
            <img src={image} alt={image} />
            {/* <img src={"https://i.imgur.com/eTmWoAN.png"} /> */}
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p>
              <strong>{name}</strong> <br />
              <small>{calories} cal</small>
            </p>
          </div>
        </div>
        <div className="media-right">
          <div className="field has-addons">
            <div className="control">
              <input
                name="quantity"
                className="input"
                type="number" 
                defaultValue={quantity}
                onChange={e => {
                  this.onChangeHandler(e);
                }}
              />
            </div>
            <div className="control">
              <button id="addFood" onClick={ () => { this.onClickTodaysFood(this.props.food) }}  className="button is-info">
                +
              </button>
            </div>
          </div>
        </div>
      </article>
    </div>

    );
  }
}



  


