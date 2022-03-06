import React from "react";
import "./TomatoStyle.scss";
import _ from "lodash";
import "antd/dist/antd.css";
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  RedoOutlined,
} from "@ant-design/icons";
import TimeControl from "./TimeControl";

class TomatoApp extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "Session",
      isRunning: false,
      currentSessionTime: 5 * 60,
      currentBreakTime: 5 * 60,
      totalSessionTime: 5 * 60,
      totalBreakTime: 5 * 60,
    };
    this.Interval = null;
  }

  reset = () => {
    this.stopClock();
    this.setState({
      type: "Session",
      isRunning: false,
      currentSessionTime: 5 * 60,
      currentBreakTime: 5 * 60,
      totalSessionTime: 5 * 60,
      totalBreakTime: 5 * 60,
    });
  };

  renderDisplayTime = () => {
    const time =
      this.state.type === "Session"
        ? this.state.currentSessionTime
        : this.state.currentBreakTime;
    const minutes = _.padStart(Math.floor(time / 60), 2, 0);
    const seconds = _.padStart(Math.floor(time % 60), 2, 0);
    return `${minutes} : ${seconds}`;
  };
  /**
   *
   * @param {*} type
   * @param {*} typeChanges
   * ToDO check total...<0
   */
  handleTimeControlClick = (type, typeChange) => {
    const {
      totalSessionTime,
      totalBreakTime,
      currentSessionTime,
      currentBreakTime,
    } = this.state;
    const time =
      type === "Session"
        ? typeChange === "increase"
          ? this.setState({
              totalSessionTime: totalSessionTime + 60,
              currentSessionTime: currentSessionTime + 60,
            })
          : this.setState({
              totalSessionTime: totalSessionTime - 60,
              currentSessionTime: currentSessionTime - 60,
            })
        : typeChange === "increase"
        ? this.setState({
            totalBreakTime: totalBreakTime + 60,
            currentBreakTime: currentBreakTime + 60,
          })
        : this.setState({
            totalBreakTime: totalBreakTime - 60,
            currentBreakTime: currentBreakTime - 60,
          });
    return time;
  };

  startClock = () => {
    this.Interval = setInterval(() => {
      const {
        type,
        currentBreakTime,
        currentSessionTime,
        totalBreakTime,
        totalSessionTime,
      } = this.state;
      let nextBreakTime =
        type === "Break" ? currentBreakTime - 1 : currentBreakTime;
      let nextSessionTime =
        type === "Session" ? currentSessionTime - 1 : currentSessionTime;
      let nextType = type;
      if (nextBreakTime === 0 && type === "Break") {
        nextType = "Session";
        nextBreakTime = totalBreakTime;
      }
      if (nextSessionTime === 0 && type === "Session") {
        nextType = "Break";
        nextSessionTime = totalSessionTime;
      }
      this.setState({
        isRunning: true,
        type: nextType,
        currentBreakTime: nextBreakTime,
        currentSessionTime: nextSessionTime,
      });
    }, 1000);
  };
  stopClock = () => {
    const { isRunning } = this.state;
    if (isRunning) {
      clearInterval(this.Interval);
      return this.setState({ isRunning: false });
    }
  };
  render() {
    return (
      <div>
        <div className="Container__Timer">
          <h1>Tomato Timer</h1>
          <div className="Control__Set">
            <TimeControl
              type="Break"
              amount={this.state.totalBreakTime / 60}
              handleTimeChange={this.handleTimeControlClick}
            />
            <TimeControl
              type="Session"
              amount={this.state.totalSessionTime / 60}
              handleTimeChange={this.handleTimeControlClick}
            />
          </div>
          <div className="Display">
            <span className="Display__Text">{this.state.type}</span>
            <div className="Counter">
              <span>{this.renderDisplayTime()}</span>
            </div>
          </div>
          <div className="Control__Btn">
            <PlayCircleOutlined
              onClick={this.startClock}
              style={{ fontSize: "25px", color: "#fff" }}
            />
            <PauseCircleOutlined
              onClick={this.stopClock}
              style={{ fontSize: "25px", color: "#fff" }}
            />
            <RedoOutlined
              onClick={this.reset}
              style={{ fontSize: "25px", color: "#fff" }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TomatoApp;
