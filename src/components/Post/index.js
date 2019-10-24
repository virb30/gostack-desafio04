import React from 'react';
import PropTypes from 'prop-types';

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

Post.propTypes = {
  post: PropTypes.shape({
    date: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      content: PropTypes.string,
      author: PropTypes.shape({
        name: PropTypes.string.isRequired
      })
    })),
    author: PropTypes.shape({
      name: PropTypes.string.isRequired
    })
  })
}


export default Post;