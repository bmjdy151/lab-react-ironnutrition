import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import foods from './foods.json'

class App extends Component {
  constructor(){
    super();
    this.state = { 
        foods: foods.slice(0,8),
        filtered: []
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

  render() {
    console.log("state on App: ",this.state.foods);
    return (
      <div className="App">
        <Search foods={this.state.foods} filterList={this.filterList}/>     
        {this.state.foods.map( (food,i) =>(
          <FoodBox key={i} food={food}  index={i} />
        ))} 
      </div>
    );
  }
}

export default App;
