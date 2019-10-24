import React from 'react';
import PropTypes from 'prop-types'

import './style.css';

function Comment({ comment }) {
  return (
    <div id="comment">
      <div id="avatar"></div>
      <div id="content">
        <strong>{comment.author.name} </strong>
        <span>{comment.content}</span>
      </div>
    </div>
  )
}

Comment.propTypes = {
  comment: PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string,
    author: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  }).isRequired
}

export default Comment;