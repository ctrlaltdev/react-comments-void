import React, { Component}  from 'react'
import './commentform.css'
import './commentlist.css'

export class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: '',
      author: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault()
    this.props.post({author: this.state.author, content: this.state.comment})
    this.setState({comment: ''})
  }

  render() {
    return (
      <form className="comments-void__form" onSubmit={this.handleSubmit}>
        <fieldset>
          <input name="author" className="comments-void__form-name" placeholder="Your name" onChange={this.handleChange} value={this.state.author} />
          <textarea name="comment" className="comments-void__form-comment" placeholder="Your comment here..." onChange={this.handleChange} value={this.state.comment}></textarea>
        </fieldset>
        <button>Send</button>
      </form>
    )
  }
}

class Comment extends Component {
  render() {
    return <li className="comments-void__list-item"><span>{this.props.author}</span> {this.props.comment}</li>
  }
}

export class CommentsList extends Component {
  render() {
    return (
      <ul className="comments-void__list">
        {this.props.comments.map((comment, index) =>
          <Comment key={index} author={comment.author} comment={comment.content} />
        )}
      </ul>
    )
  }
}
