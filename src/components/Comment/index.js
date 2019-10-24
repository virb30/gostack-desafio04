import React from 'react';

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

export default Comment;