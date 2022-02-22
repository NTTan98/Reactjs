import React from "react";
import "./App.css";
import Calc from "./Components/Calc/Calc.jsx";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Calculator</h1>
        <Calc />
      </div>
    );
  }
}

export default App;
