import React, { Component } from "react";
import "antd/dist/antd.css";
import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
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
      <div className="Container__Control">
        <h3>{this.props.type}</h3>
        <div className="Icon">
          <ArrowUpOutlined onClick={this.increase} />

          <span>{this.props.amount}</span>
          <ArrowDownOutlined onClick={this.decrease} />
        </div>
      </div>
    );
  }
}

export default TimeControl;
