import React from "react";
import "./Calc.modules.css";
import ButtonComponent from "./Button";

class Calc extends React.Component {
  state = {
    counter: 0,
    calculatorValue: "",
    totalValue: "",
  };
  digitals = ["7", "8", "9", "4", "5", "6", "1", "2", "3"];
  operators = ["/", "*", "-", "+"];
  insertNumber = (newNum) => {
    this.setState({
      calculatorValue: this.state.calculatorValue + newNum,
    });
  };

  insertOperator = (operator) => {
    const realCalculatorValue = this.state.calculatorValue + operator;
    if (this.state.calculatorValue) {
      this.setState({
        calculatorValue: realCalculatorValue,
      });
    }
  };

  totalMath = (e) => {
    this.setState({
      // eslint-disable-next-line no-eval
      totalValue: eval(this.state.calculatorValue),
      calculatorValue: "",
    });
  };

  deleteMath = (e) => {
    const deleteNumber = this.state.calculatorValue;
    this.setState({
      calculatorValue: deleteNumber.slice(0, -1),
    });
  };
  resetMath = () => {
    this.setState({
      calculatorValue: "",
      totalValue: "",
    });
  };

  render() {
    return (
      <div className="Calc">
        <div className="display">
          <span>({this.state.totalValue})</span>
          {this.state.calculatorValue || "0"}
        </div>
        <div className="operators">
          {this.operators.map((number) => (
            <ButtonComponent
              onClick={this.insertOperator}
              label={number}
              key={number}
            />
          ))}
          <ButtonComponent
            onClick={this.deleteMath}
            label={"DEL"}
            key={"DEL"}
          />
          <ButtonComponent onClick={this.resetMath} label={"AC"} key={"AC"} />
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
