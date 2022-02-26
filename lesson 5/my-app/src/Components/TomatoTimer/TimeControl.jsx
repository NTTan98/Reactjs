import React, { Component } from "react";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import "./TimeControl.scss";

class TimeControl extends Component {
  increase = () => {
    this.props.handleTimeChange(this.props.type, "increase");
  };
  decrease = () => {
    this.props.handleTimeChange(this.props.type, "decrease");
  };
  render() {
    return (
      <div className="container">
        <h3>{this.props.type}</h3>
        <div className="Icon">
          <ArrowUpwardIcon
            color="success"
            fontSize="medium"
            onClick={this.increase}
          ></ArrowUpwardIcon>
          <span>{this.props.amount}</span>
          <ArrowDownwardIcon
            color="success"
            fontSize="medium"
            onClick={this.decrease}
          ></ArrowDownwardIcon>
        </div>
      </div>
    );
  }
}

export default TimeControl;
