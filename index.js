import React, { Component}  from 'react'

import {CommentForm, CommentsList} from './components'

class CommentIntoTheVoid extends Component {
  constructor(props) {
    super(props)

    let comments = localStorage.getItem('comments') ?
      JSON.parse(localStorage.getItem('comments')) :
      []

    this.state = {comments: comments}

    this.postComment = this.postComment.bind(this)
  }

  postComment(newComment) {
    let comments = this.state.comments
    comments.push(newComment)
    this.setState({comments: comments})
    localStorage.setItem('comments', JSON.stringify(comments))
  }

  render() {
    return (
      <div className="comments-void">
        <CommentForm post={this.postComment} />
        <CommentsList comments={this.state.comments} />
      </div>
    )
  }
}

export default CommentIntoTheVoid