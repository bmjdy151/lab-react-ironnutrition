import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import FoodBox from "./components/FoodBox";
import Search from "./components/Search";
import AddFood from "./components/AddFood";
import foods from './foods.json'
let pricelist=[];
let todaysItemList=[{name:"",quantity:0,unitCal:0,totalCal:0}];

class App extends Component {
  constructor(){
    super();
    this.state = { 
        foods: foods.slice(0,8),
        toggleState: false,
        totalSum: 0
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
    this.setState({ toggleState: !this.state.toggleState});
  };

  showItem = (food,quantity) =>{
    let newList = todaysItemList.filter(foodel =>{
      return foodel.name.includes(food.name);
    })
    let keyword = food.name;
    debugger;
    if(newList.length !== 0){
      console.log("duplicate!")
      let updateTarget = document.getElementById(keyword);
      let newQuantity = newList[0].quantity + quantity;
      debugger;
      var reformattedArray = newList.map(ele => ({ 
        name:ele.name, 
        quantity: newQuantity, 
        unitCal:ele.unitCal,
        totalCal:ele.unitCal * (ele.quantity+quantity) 
      }));
      debugger;
      console.log("reformattedArray",reformattedArray);
      updateTarget.innerHTML = "newvalue";
    }
    else{
      let todaysList = document.getElementById("todaysList");
      let li = document.createElement('li');
      li.setAttribute("id", keyword);
      debugger;
      let unitSum = food.calories*quantity;
      let foodname = document.createTextNode(quantity +" "+ food.name+" = "+unitSum+" cal");
      li.appendChild(foodname);
      todaysList.appendChild(li);
      pricelist.push(unitSum);
      this.setState({totalSum: pricelist.reduce((a,b) => a+b,0) });
      todaysItemList.push({name:food.name,unitCal:food.calories,quantity:quantity,totalCal:unitSum});
      console.log("itemList",todaysItemList);
    }
  }

  render() {
    console.log("app-after-State",this.state.toggleState);
    return (
      <div className="App">
        <Search foods={this.state.foods} filterList={this.filterList}/> 
        <div className="app-container">  
          <div>
            {this.state.foods.map( (food,i) =>(
              <FoodBox key={i} food={food}  index={i} showItem={this.showItem}/>
            ))} 
            <button onClick={this.toggleItem}>Add New Item</button>
            {this.state.toggleState && (
              <AddFood toggleState={this.state.toggleState} toggleItem={this.toggleItem} addFood={this.addFood} />
            )}
          </div>
          <div id="todaysFood-container">
            <h6 >Today's Food</h6>
            <ul id="todaysList">
            </ul>
            <p>Total: {this.state.totalSum} cal</p>
          </div>
        </div> 
      </div>
    );
  }
}

export default App;
