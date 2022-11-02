import React from "react";
import moment from "moment";

class Timer extends React.Component {
  render() {
    let time = this.props.time,
      date = moment(time).date(),
      month = moment(time).month(),
      year = moment(time).year(),
      commentTime = moment(time).format("LT");

    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    return (
      <div className="commentTime">
        {commentTime} &#183; {monthNames[month]} {date}, {year}
      </div>
    );
  }
}

export default Timer;
