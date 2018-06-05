import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state ={
      foods:[
        "Snickers",
        "Reeses",
        "Twix",
        "Kit-Kat",
        "Symphony",
        "Wathchamacallit"
      ]
    }
  }
  render(){
    let displayFoods = this.state.foods.map((element, index) => {
      return(
        <h2 key={index}>{element}</h2>
      )
    })
    return(
      <div className="App">
        {displayFoods}
      </div>
    );
  }
}

export default App;