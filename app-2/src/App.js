import React, { Component } from 'react';

import './App.css';

class App extends Component {
    constructor(){
      super();

      this.state = {
        foods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }

  handle

  render(){
    let foodsToDisplay = this.state.foods.map((el, ind) => {
      return <h2 key={ind}>{el}</h2>
    })
  return (
    <div className="App">
      {foodsToDisplay}
    </div>
  );
}
}

export default App;
