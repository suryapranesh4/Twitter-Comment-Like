import React from "react";
import LikeButton from "./LikeButton";
import Timer from "./Timer";

class Comment extends React.Component {
  state = {};

  handleChange = (event) => {};

  render() {
    return (
      <div className="eachComment">
        <p className="commentText">{this.props.commentData.text}</p>
        <div className="timeAndLike">
          <Timer time={this.props.commentData.time} />
          <LikeButton />
        </div>
      </div>
    );
  }
}

export default Comment;
