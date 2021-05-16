import React, { useState } from 'react'

import { CommentForm, CommentsList } from './components'

const CommentIntoTheVoid = () => {
  const [comments, updateComments] = useState(localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : [])

  const postComment = newComment => {
    updateComments([...comments, newComment])
    localStorage.setItem('comments', JSON.stringify([...comments, newComment]))
  }

  return (
    <div className="comments-void">
      <CommentForm post={ postComment } />
      <CommentsList comments={ comments } />
    </div>
  )
}

export default CommentIntoTheVoid
