import React from 'react';

import Comment from '../Comment'

import './style.css'


function Post({ post }) {
  return (
    <div id="post">
      <div className="author">
        <div id="avatar"></div>
        <div className="info">
          <strong>{post.author.name}</strong>
          <span>{post.date}</span>
        </div>
      </div>
      <div className="content">
        {post.content}
      </div>
      <div className="comments">
        {post.comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default Post;