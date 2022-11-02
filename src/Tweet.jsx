import React from "react";
import Comment from "./Comment";

class Tweet extends React.Component {
  state = {
    comment: "",
    comments: [],
  };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.comment) {
      let newComments = this.state.comments,
        newComment = {
          text: this.state.comment,
          time: new Date(),
        };
      newComments.push(newComment);
      this.setState({ comments: newComments });
      this.setState({ comment: "" });
    }
  };

  render() {
    return (
      <div className="eachTweet">
        <div className="inputTitle">
          {this.props.tweet || "Unable to retrieve this tweet"}
        </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="comment"
            placeholder="Add Comment"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <button type="submit" className="postButton">
            Post
          </button>
        </form>
        {this.state.comments.map((comment, i) => {
          return <Comment commentData={comment} key={i} />;
        })}
      </div>
    );
  }
}

export default Tweet;
