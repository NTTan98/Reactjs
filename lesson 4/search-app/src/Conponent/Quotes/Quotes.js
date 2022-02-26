import React from "react";

const colorArray = [
  "#16a085",
  "#27ae60",
  "#2c3e50",
  "#f39c12",
  "#e74c3c",
  "#9b59b6",
  "#FB6964",
  "#342224",
  "#472E32",
  "#BDBB99",
  "#77B1A9",
  "#73A857",
];
class Quotes extends React.Component {
  state = {
    colorIndex: "",
  };

  handleClick = (e) => {
    let randomItem =
      this.state.color[Math.floor(Math.random() * this.state.color.length)];
    console.log(randomItem);
  };
  render() {
    return (
      <div style={{ backgroundColor: "#73A857" }}>
        <h1 style={{ color: "red" }}>
          Life isn’t about getting and having, it’s about giving and being.
        </h1>
        <h3 style={{ color: "red" }}>Kevin Kruse</h3>
        <button onClick={this.handleClick}>change</button>
      </div>
    );
  }
}

export default Quotes;
