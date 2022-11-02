import React from "react";

class LikeButton extends React.Component {
  state = {
    likes: 0,
  };

  handleChange = (event) => {};

  render() {
    return (
      <div className="likeContainer">
        <button onClick={() => this.setState({ likes: this.state.likes + 1 })}>
          Like
        </button>
        <div className="countText">{this.state.likes} likes</div>
      </div>
    );
  }
}

export default LikeButton;
