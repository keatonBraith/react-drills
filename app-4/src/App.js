import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Alert from "./Components/Alert";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Alert />
      </div>
    );
  }
}

export default App;
