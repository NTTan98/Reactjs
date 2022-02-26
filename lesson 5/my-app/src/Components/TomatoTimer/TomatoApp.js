import React from "react";
import "./TomatoStyle.scss";
import _ from "lodash";
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
        <div className="Container">
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
            <button onClick={this.startClock} className="Btn__Play">
              <i className="bx bx-play"></i>
            </button>
            <button onClick={this.stopClock} className="Btn__Pause">
              <i className="bx bx-pause"></i>
            </button>
            <button onClick={this.reset} className="Btn__Reset">
              <i className="bx bx-reset"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TomatoApp;
