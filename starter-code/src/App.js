import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import AddFood from "./components/AddFood";
import foods from './foods.json'

class App extends Component {
  constructor(){
    super();
    this.state = { 
        foods: foods.slice(0,8),
        toggleState: false
      };
    }
  filterList = searchQuery => {
    let currentList = [];
    let newList = [];
    if (searchQuery !== "") {
    currentList = this.state.foods;
    newList = currentList.filter(food => {
      const lc = food.name.toLowerCase();
      const filter = searchQuery.toLowerCase();
      return lc.includes(filter);
      });
    } else {
    newList = foods.slice(0,8);
    }
    // Set the filtered state based on what our rules added to newList
    this.setState({
    foods: newList
    });
  }

  addFood = newFood => {
    this.setState({ foods: this.state.foods.concat(newFood) });
  }

  toggleItem = () => {
    console.log("app-before-State",this.state.toggleState);
    this.setState({ toggleState: !this.state.toggleState});
    console.log("app-after-State",this.state.toggleState);
  };

  render() {
    console.log("state on App: ",this.state.foods);
    return (
      <div className="App">
        <Search foods={this.state.foods} filterList={this.filterList}/>     
        {this.state.foods.map( (food,i) =>(
          <FoodBox key={i} food={food}  index={i} />
        ))} 
        <button onClick={this.toggleItem}>Add New Item</button>
        {this.state.toggleState && (
          <AddFood toggleState={this.state.toggleState} toggleItem={this.toggleItem} addFood={this.addFood} />
        )}
      </div>
    );
  }
}

export default App;
