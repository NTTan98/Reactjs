import React from "react";
import "../Calc.modules.css";
import ButtonComponent from "../Button";

class Calc extends React.Component {
  state = {
    counter: 0,
    calculatorValue: "",
    totalValue: "",
  };

  insertNumber = (newNum) => {
    this.setState({
      calculatorValue: this.state.calculatorValue + newNum,
    });
  };

  totalMath = (e) => {
    this.setState({
      // eslint-disable-next-line no-eval
      totalValue: eval(this.state.calculatorValue),
      calculatorValue: "",
    });
  };

  deleteMath = (e) => {
    this.setState({
      calculatorValue: "",
      totalValue: "",
    });
  };

  digitals = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  render() {
    return (
      <div className="Calc">
        <div className="display">
          <span>({this.state.totalValue})</span>
          {this.state.calculatorValue || "0"}
        </div>
        <div className="operators">
          <ButtonComponent onClick={this.insertNumber} label={"/"} key={"/"} />
          <ButtonComponent onClick={this.insertNumber} label={"*"} key={"*"} />
          <ButtonComponent onClick={this.insertNumber} label={"-"} key={"-"} />
          <ButtonComponent onClick={this.insertNumber} label={"+"} key={"+"} />
          <ButtonComponent
            onClick={this.deleteMath}
            label={"DEL"}
            key={"DEL"}
          />
        </div>
        <div className="bottom">
          {this.digitals.map((number) => (
            <ButtonComponent
              onClick={this.insertNumber}
              label={number}
              key={number}
            />
          ))}
          <ButtonComponent onClick={this.insertNumber} label={"0"} key={"0"} />
          <ButtonComponent onClick={this.insertNumber} label={"."} key={"."} />
          <ButtonComponent onClick={this.totalMath} label={"="} key={"="} />
        </div>
      </div>
    );
  }
}

export default Calc;
