import React from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

class Comment extends React.Component {
  state = {};

  handleChange = (event) => {};

  render() {
    return (
      <div className="eachComment">
        <Timer time={this.props.commentData.time} />
        <div style={{ marginRight: "72px", fontWeight: "600" }}>
          {this.props.commentData.text}
        </div>
        <LikeButton />
      </div>
    );
  }
}

export default Comment;
