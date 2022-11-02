import React from "react";
import Moment from "react-moment";

class Timer extends React.Component {
  render() {
    return (
      <div style={{ marginRight: "24px" }}>
        <Moment date={this.props.time} format="hh:mm:ss" />
      </div>
    );
  }
}

export default Timer;
