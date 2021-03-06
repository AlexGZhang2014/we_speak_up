import React, { Component } from 'react';
import Comment from './Comment'

class Comments extends Component {
  render() {
    const comments = this.props.comments.filter(comment => comment.post.id === this.props.post.id).map(comment => <Comment
      comment={comment}
      deleteComment={this.props.deleteComment}
      toggleEditStatus={this.props.toggleEditStatus}
      editCommentId={this.props.editCommentId}
      displayEditForm={this.props.displayEditForm}
      />)
    return (
      <div>
        <h4>Comments: </h4>
        {comments}
      </div>
    )
  }
}

export default Comments
