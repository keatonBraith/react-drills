import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./Components/Image";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image url={"https://assets.pokemon.com/assets/cms2/img/misc/countries/au/country_detail_pokemon.png"}/>
      </div>
    );
  }
}

export default App;
