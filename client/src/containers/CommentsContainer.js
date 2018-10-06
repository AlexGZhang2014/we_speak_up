import React, { Component } from 'react';
import Comments from '../components/Comments'

class CommentsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
      author: '',
      comments: []
    }
  }

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      ...this.state,
      comments: this.state.comments.concat({
        content: this.state.content,
        author: this.state.author
      })
    })
  }

  render() {
    return (
      <div className="posts">
        <form onSubmit={this.handleSubmit}>
          <textarea
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            placeholder="Leave a comment">
          </textarea>
          <br></br>
          <input
            type="text"
            name="author"
            value={this.state.author}
            onChange={this.handleChange}
            placeholder="Your username">
          </input>
          <br></br>
          <input type="submit"></input>
        </form>
        <Comments comments={this.state.comments} />
      </div>
    )
  }

}

export default CommentsContainer
