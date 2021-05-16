import React, { useState } from 'react'
import PropTypes from 'prop-types'
import './commentform.css'
import './commentlist.css'

export const CommentForm = ({ post }) => {
  const [comment, updateComment] = useState('')
  const [author, updateAuthor] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    post({ author, content: comment })
    updateComment('')
  }

  return (
    <form className="comments-void__form" onSubmit={ handleSubmit }>
      <fieldset>
        <input name="author" className="comments-void__form-name" placeholder="Your name" onChange={ e => updateAuthor(e.target.value) } value={ author } />
        <textarea name="comment" className="comments-void__form-comment" placeholder="Your comment here..." onChange={ e => updateComment(e.target.value) } value={ comment }></textarea>
      </fieldset>
      <button>Send</button>
    </form>
  )
}
CommentForm.propTypes = {
  post: PropTypes.func.isRequired
}

const Comment = ({ author, comment }) => (
  <li className="comments-void__list-item"><span>{ author }</span> { comment }</li>
)
Comment.propTypes = {
  author: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}

export const CommentsList = ({ comments }) => (
  <ul className="comments-void__list">
    {comments.map((comment, index) =>
      <Comment key={ index } author={ comment.author } comment={ comment.content } />
    )}
  </ul>
)
CommentsList.propTypes = {
  comments: PropTypes.array.isRequired
}
